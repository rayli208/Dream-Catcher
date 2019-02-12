$(document).ready(function () {
  //GET VOICE RECOGNITION WORKING
  var isRecording = false;

  document.getElementById("microphone").addEventListener('click', function () {
    if (isRecording === false) {
      isRecording = true;
      var element = document.getElementById("microphone");
      element.classList.add("fa-stop");
      element.classList.remove("fa-microphone");
      recognition.addEventListener('end', recognition.start);
      recognition.start();
    } else {
      isRecording = false;
      var element = document.getElementById("microphone");
      element.classList.add("fa-microphone");
      element.classList.remove("fa-stop");
      recognition.removeEventListener('end', recognition.start);
      recognition.stop();
    }
  });

  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.interimResults = true;
  recognition.lang = 'en-US';

  let p = document.createElement('p');
  const content = document.querySelector('#dream-text');
  content.appendChild(p);
  recognition.addEventListener('result', e => {
    let transcript = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('');
    transcript += '.';
    p.textContent = transcript;
    if (e.results[0].isFinal) {
      p = document.createElement('p');
      content.appendChild(p);
    }
  });

  //GET FIRST 3 POSTS TO LOAD IN ON HOMEPAGE
  $.get("/api/Dreams/", function (data) {
    if (data.length !== 0) {
      var latest_dreams = document.getElementById("latest-dreams");
      for (var i = data.length-1; i > (data.length-4); i--) {
        var body = JSON.parse(data[i].body);
        var mini_card = `
          <div class="card mt-2 mb-2 shadow">
            <div class="card-header skyblue text-white">
              ${data[i].title}
            </div>
            <div class="card-body">
              ${body}
            </div>
            <div class="card-footer skyblue text-white">
              Created at: ${data[i].createdAt}
            </div>
          </div>`;

          latest_dreams.innerHTML =  latest_dreams.innerHTML += mini_card;
      }
    }
  });
});