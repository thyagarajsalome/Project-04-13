const hourEl = document.getElementById("hour");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
  const currentTime = new Date();
  let h = currentTime.getHours();
  let m = currentTime.getMinutes();
  let s = currentTime.getSeconds();
  let ampm = h >= 12 ? "PM" : "AM";

  h = h % 12 || 12; // Convert 24-hour time to 12-hour time format

  hourEl.innerText = h;
  minutesEl.innerText = m;
  secondsEl.innerText = s;
  ampmEl.innerText = ampm;

  setTimeout(updateClock, 1000); // Call updateClock function every second
}

updateClock(); // Start the clock
