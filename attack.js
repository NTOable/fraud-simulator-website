let bombInterval;

function startBomb() {
  bombInterval = setInterval(createPopup, 500);
}

function createPopup() {
  const popup = document.createElement("div");
  popup.className = "popup";

  popup.style.top = Math.random() * window.innerHeight + "px";
  popup.style.left = Math.random() * window.innerWidth + "px";

  popup.innerHTML = `
    <div class="popup-header">⚠ Security Alert</div>
    <img src="https://picsum.photos/220/160?random=${Math.random()}">
    <button class="close-btn">Close</button>
  `;

  popup.querySelector(".close-btn").onclick = () => popup.remove();
  document.body.appendChild(popup);
}