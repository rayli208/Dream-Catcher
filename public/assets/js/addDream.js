$(document).ready(function() {

  $("#submit").on("click", function() {
    
    const newDream = {
      title: $("#dream-title").val(),
      body: JSON.stringify($("#dream-text").html()),
      quality_sleep: $("#qualitySlept").val(),
      length_sleep: $("#totalSlept").val()
    };
    submitDream(newDream);
  });

  const submitDream = (dream) => {

    console.log(dream);

    $.ajax({
      method: "POST",
      url: "/api/dreams",
      data: dream
    })
      .then(function() {
        Swal.fire({
          type: 'success',
          title: 'Your Dream Has Been Saved!',
          showConfirmButton: false,
          timer: 1500
        })
        setTimeout(function(){
          location.reload();
        }, 1500);
      });
  }
  
});