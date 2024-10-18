$(document).ready(function () {
  // Redirect to the corresponding day page when a button is clicked
  $(".day-button").click(function () {
    const link = $(this).data("link");
    window.location.href = link;
  });
});
