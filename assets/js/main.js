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

// Language switching functionality
const trBtn = document.getElementById('trBtn');
const enBtn = document.getElementById('enBtn');
const htmlElement = document.documentElement;

// Get saved language or default to Turkish
const savedLanguage = localStorage.getItem('language') || 'tr';
setLanguage(savedLanguage);

function setLanguage(lang) {
    // Update HTML lang attribute
    htmlElement.setAttribute('lang', lang);
    
    // Update button states
    trBtn.classList.toggle('active', lang === 'tr');
    enBtn.classList.toggle('active', lang === 'en');
    
    // Update all elements with data-tr and data-en attributes
    const elementsWithLang = document.querySelectorAll('[data-tr][data-en]');
    elementsWithLang.forEach(element => {
        const text = element.getAttribute(`data-${lang}`);
        if (text) {
            if (element.tagName === 'TITLE') {
                element.textContent = text;
            } else if (element.hasAttribute('content')) {
                element.setAttribute('content', text);
            } else {
                element.textContent = text;
            }
        }
    });
    
    // Save language preference
    localStorage.setItem('language', lang);
}

// Add event listeners for language buttons
trBtn.addEventListener('click', () => setLanguage('tr'));
enBtn.addEventListener('click', () => setLanguage('en'));
