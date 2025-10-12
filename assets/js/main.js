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
document.body.classList.add(`lang-${savedLanguage}`);
if (savedLanguage === 'tr') {
    trBtn.classList.add('active');
} else {
    enBtn.classList.add('active');
}

// Set initial title
const title = document.querySelector('title');
if (title) {
    title.textContent = title.getAttribute(`data-${savedLanguage}`);
}

setLanguage(savedLanguage);

function setLanguage(lang) {
    // Update HTML lang attribute
    htmlElement.setAttribute('lang', lang);
    
    // Update button states
    trBtn.classList.toggle('active', lang === 'tr');
    enBtn.classList.toggle('active', lang === 'en');
    
    // ONLY update elements that actually need translation
    // Bio
    const bio = document.querySelector('.bio');
    if (bio && bio.hasAttribute('data-tr') && bio.hasAttribute('data-en')) {
        bio.textContent = bio.getAttribute(`data-${lang}`);
    }
    
    // Description
    const description = document.querySelector('.description');
    if (description && description.hasAttribute('data-tr') && description.hasAttribute('data-en')) {
        description.textContent = description.getAttribute(`data-${lang}`);
    }
    
    // Email span - use more specific selector
    const emailLink = document.querySelector('a[href^="mailto:"]');
    if (emailLink) {
        const emailSpan = emailLink.querySelector('span[data-tr]');
        if (emailSpan) {
            emailSpan.textContent = emailSpan.getAttribute(`data-${lang}`);
        }
    }
    
    // Footer
    const footerSpan = document.querySelector('.footer span');
    if (footerSpan && footerSpan.hasAttribute('data-tr') && footerSpan.hasAttribute('data-en')) {
        footerSpan.textContent = footerSpan.getAttribute(`data-${lang}`);
    }
    
    // Title
    const title = document.querySelector('title');
    if (title && title.hasAttribute('data-tr') && title.hasAttribute('data-en')) {
        title.textContent = title.getAttribute(`data-${lang}`);
    }
    
    // Meta tags
    const metaTags = document.querySelectorAll('meta[data-tr][data-en]');
    metaTags.forEach(meta => {
        const text = meta.getAttribute(`data-${lang}`);
        if (text) {
            meta.setAttribute('content', text);
        }
    });
    
    // Save language preference
    localStorage.setItem('language', lang);
}

// Add event listeners for language buttons
trBtn.addEventListener('click', () => {
    document.body.classList.remove('lang-en');
    document.body.classList.add('lang-tr');
    trBtn.classList.add('active');
    enBtn.classList.remove('active');
    
    // Update title
    const title = document.querySelector('title');
    if (title) {
        title.textContent = title.getAttribute('data-tr');
    }
    
    localStorage.setItem('language', 'tr');
});

enBtn.addEventListener('click', () => {
    document.body.classList.remove('lang-tr');
    document.body.classList.add('lang-en');
    enBtn.classList.add('active');
    trBtn.classList.remove('active');
    
    // Update title
    const title = document.querySelector('title');
    if (title) {
        title.textContent = title.getAttribute('data-en');
    }
    
    localStorage.setItem('language', 'en');
});
