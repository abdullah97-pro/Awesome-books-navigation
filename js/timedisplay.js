function getTime() {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  };

  const currentDate = new Date();

  const currentTime = currentDate.toLocaleTimeString('en-US', options);
  return currentTime;
}
function updateTimeDisplay() {
  const timeDisplay = document.getElementById('timeDisplay');
  timeDisplay.textContent = getTime();
}

updateTimeDisplay();

setInterval(updateTimeDisplay, 1000);
