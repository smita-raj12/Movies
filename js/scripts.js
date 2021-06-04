$(document).ready(function() {
  $("#formmovie").submit(function(event) {
    $("#formmovie").hide();
    const nameInput = $("#name").val();
    const ageInput = $("#age").val();
    console.log("test")
    //console.log($("input:radio[name=operator]:checked").val())
    const operator = $("input:radio[name=operator]:checked").val();
      if (operator === "Kids") {
        $("#kid").show()
      }else if (operator === "Horror") {
        $("#horror").show()
      }else if (operator === "Family") {
        $("#family").show()
      }else if (operator === "International") {
        $("#international").show()
      }
      event.preventDefault();
  });
});