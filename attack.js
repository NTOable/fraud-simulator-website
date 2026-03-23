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

function triggerImpactRedirect(fraudType, explanation) {
  const screen = document.getElementById("impactScreen");
  const overlay = document.getElementById("impactOverlay");

  // SHOW RED FLASH
  screen.style.display = "block";
  screen.classList.add("impact-active");

  // show overlay after flash
  setTimeout(() => {
    if (overlay) {
      overlay.style.display = "flex";

      document.getElementById("fraudTypeTitle").textContent = `⚠ ${fraudType}`;
      document.getElementById("fraudExplanation").textContent = explanation;

      document.getElementById("stopSimulationBtn").onclick = () => {
        window.location.href = "education.html";
      };
    }
  }, 2000);
}