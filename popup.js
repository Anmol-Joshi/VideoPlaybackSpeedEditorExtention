function setSpeed(speed) {
  chrome.runtime.sendMessage({ type: 'setSpeed', speed: speed });
}

document.getElementById('0.5x').onclick = () => setSpeed(0.5);
document.getElementById('1x').onclick = () => setSpeed(1);
document.getElementById('1.5x').onclick = () => setSpeed(1.5);
document.getElementById('2x').onclick = () => setSpeed(2);
