document.getElementById("themeToggle").addEventListener("click", () => {
  const body = document.body;
  const currentTheme = body.getAttribute("data-theme");

  if (currentTheme === "dark") {
    body.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  } else {
    body.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.body.setAttribute("data-theme", savedTheme);
});


document.addEventListener("contextmenu", (e) => e.preventDefault());

document.addEventListener("keydown", (e) => {
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

function initShareButtons() {
  const shareButtons = document.querySelectorAll("[data-platform]");
  const pageUrl = encodeURIComponent(window.location.href);
  const pageTitle = encodeURIComponent(document.title);

  shareButtons.forEach((button) => {
    const platform = button.getAttribute("data-platform");
    let url;

    switch (platform) {
      case "facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
        break;
      case "twitter":
        url = `https://twitter.com/intent/tweet?url=${pageUrl}&text=${pageTitle}`;
        break;
      case "linkedin":
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`;
        break;
    }

    button.setAttribute("href", url);
    button.setAttribute("target", "_blank");
  });
}

document.addEventListener("DOMContentLoaded", initShareButtons);
