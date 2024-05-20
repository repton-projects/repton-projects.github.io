function isMobile() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

document.addEventListener("DOMContentLoaded", function() {
    if (isMobile()) {
        document.querySelectorAll('.mobile-only').forEach(el => el.style.display = 'block');
        document.querySelectorAll('.desktop-only').forEach(el => el.style.display = 'none');
    } else {
        document.querySelectorAll('.mobile-only').forEach(el => el.style.display = 'none');
        document.querySelectorAll('.desktop-only').forEach(el => el.style.display = 'block');
    }
});