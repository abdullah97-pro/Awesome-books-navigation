function getTime() {
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  };

  const currentTime = new Date().toLocaleString('en-US', options);
  return currentTime;
}

document.getElementById('timeDisplay').textContent = getTime();