document.getElementById('themeToggle').addEventListener('click', () => {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
      body.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    } else {
      body.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
  });

  const popoverTriggerList = document.querySelectorAll(
    '[data-bs-toggle="popover"]'
  );

  const popoverList = [...popoverTriggerList].map(
    (popoverTriggerListEl) => new bootstrap.Popover(popoverTriggerListEl)
  );

// tiltások
document.addEventListener("contextmenu", (e) => e.preventDefault()); // Jobb klikk tiltása

document.addEventListener("keydown", (e) => {
  // F12, Ctrl+Shift+I, Ctrl+Shift+C, Ctrl+U tiltása
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && e.key === "I") ||
    (e.ctrlKey && e.shiftKey && e.key === "C") ||
    (e.ctrlKey && e.key === "u")
  ) {
    e.preventDefault();
    alert("A fejlesztői eszközök használata tilos!");
  }
});

const checkDevTools = () => {
  const widthThreshold = window.outerWidth - window.innerWidth;
  if (widthThreshold > 160) {
    document.body.innerHTML = "<h1>Hozzáférés megtagadva!</h1>";
  }
};
setInterval(checkDevTools, 1000);
