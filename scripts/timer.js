// Set the date we're counting down to
let countDownDate = new Date("Jun 30, 2024 12:00:00").getTime();

// Update the countdown every 1 second
let countdownfunction = setInterval(function() {
  // Get today's date and time
  let now = new Date().getTime();
  
  // Find the distance between now and the countdown date
  let distance = countDownDate - now;
  
  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Display the result in the respective elements
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  
  // If the countdown is over, write some text 
  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("countdown").innerHTML = "NEW COMIC SHOULD BE UP IN 15-20 MINUTES.";
  }
}, 1000);
