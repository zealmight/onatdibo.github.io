// Initialize Lucide icons
lucide.createIcons();

const themeBtn = document.getElementById('themeBtn');
const body = document.body;

const theme = localStorage.getItem('theme') || 'light';
if (theme === 'dark') {
    body.classList.add('dark');
    themeBtn.textContent = '☀️';
}

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');
    themeBtn.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
