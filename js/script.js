$(document).ready(function () {
  // Redirect to the corresponding day page when a button is clicked
  $(".day-button").click(function () {
    const link = $(this).data("link");
    window.location.href = link;
  });
  const correctPin = "1234"; // Change this to your desired PIN

  function validatePin() {
    const userPin = document.getElementById("pinInput").value;

    if (userPin === correctPin) {
      document.getElementById("itinerary").style.display = "block"; // Show the itinerary section
      document.getElementById("loginContainer").style.display = "none"; // Hide the login form
    } else {
      alert("Incorrect PIN. Please try again.");
    }
  }
});
