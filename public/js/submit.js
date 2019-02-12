document.getElementById("submit").addEventListener("click", function () {

  var newDream = {
    title: $("#dream-title").val(),
    body: JSON.stringify($("#dream-text").html()),
    quality_sleep: $("#qualitySlept").val(),
    length_sleep: $("#totalSlept").val()
  }

  submitDream(newDream);
})


function submitDream(Dream) {
  $.ajax({
    method: "POST",
    url: "/api/Dreams",
    data: Dream
  })
    .then(function() {
      window.location.href = "/";
    });
}