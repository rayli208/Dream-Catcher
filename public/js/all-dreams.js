$(document).ready(function () {

  //Load up ALL dreams in dream journal
  $.get("/api/Dreams/", function (data) {
    if (data.length !== 0) {
      var all_dreams = document.getElementById("all-dreams");
      for (var i = data.length - 1; i+1 > (data.length - data.length); i--) {
        var body = JSON.parse(data[i].body);
        var card = `
          <div class="col-md-4 col-12">
            <div class="card shadow mb-3">
              <div class="card-header skyblue text-white">
              ${data[i].title}
              </div>
              <div class="card-body">
                 ${body}
                  <ul class="list-group list-group-flush">
                      <li class="list-group-item">Quality of sleep: <span class="skyblue-text">${data[i].quality_sleep}</span>/10</li>
                      <li class="list-group-item">Time spent sleeping: <span class="skyblue-text">${data[i].length_sleep}</span> hours</li>
                    </ul>
              </div>
              <div class="card-footer skyblue text-white">
                Created at: ${data[i].createdAt}
              </div>
            </div>
          </div>
          `;

        all_dreams.innerHTML = all_dreams.innerHTML += card;
      }
    }
  });
});