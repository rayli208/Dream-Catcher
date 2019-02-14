$(document).ready(function() {

  $.ajax({
    url: "/api/user/userdata",
    type: "GET"
  }).then(userData => {
    let {id, first_name} = userData
    $("#user-name").text(first_name);

    getUserDreams(id);
  })
  .catch(err => console.log(err));


  const getUserDreams = (id) => {
 
    $.ajax({
      url: `/api/dreams/${id}`,
      type: "GET",
      success: function (data) {
        console.log(data);
  
        var userid = [];
        var quality_sleep = [];
        var length_sleep = [];
        var i = data.length;
  
        if (data.length < 3) {
          $("#noData-text").show();
          $("#myChart").hide();
        } else {
          $("#noData-text").hide();
          for (var i = data.length - 1; i > (data.length - 4); i--) {
            var stamp = moment(data[i].createdAt).format("MM/DD");
            userid.push(stamp);
            quality_sleep.push(data[i].quality_sleep);
            length_sleep.push(data[i].length_sleep);
          }
        }
        var chartdata = {
          labels: userid,
          datasets: [{
              label: "Quality of Sleep",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(193, 41, 46, 0.75)",
              borderColor: "rgba(59, 89, 152, 1)",
              pointHoverBackgroundColor: "rgba(59, 89, 152, 1)",
              pointHoverBorderColor: "rgba(59, 89, 152, 1)",
              data: quality_sleep
            },
            {
              label: "Hours of Sleep",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(15, 52, 89, 0.75)",
              borderColor: "rgba(29, 202, 255, 1)",
              pointHoverBackgroundColor: "rgba(29, 202, 255, 1)",
              pointHoverBorderColor: "rgba(29, 202, 255, 1)",
              data: length_sleep
            }
          ]
        };
  
        var ctx = $("#myChart");
  
        var LineGraph = new Chart(ctx, {
          type: 'bar',
          data: chartdata
        });
      },
      error: function (data) {
  
      }
    });
  }
})