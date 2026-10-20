
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");

  themeToggle.textContent = isDark
    ? "☀️ Mode clair"
    : "🌙 Mode sombre";

  themeToggle.setAttribute("aria-pressed", String(isDark));
});


