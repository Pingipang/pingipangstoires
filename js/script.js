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