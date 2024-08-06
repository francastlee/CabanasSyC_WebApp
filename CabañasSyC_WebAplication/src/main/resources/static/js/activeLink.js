document.addEventListener('DOMContentLoaded', () => {
    const activeLinks = document.querySelectorAll('.navLink');
    const windowPath = window.location.pathname;

    activeLinks.forEach((activeLink) => {
        const href = activeLink.getAttribute('href');

        // Asegúrate de que el enlace tiene un href válido
        if (href) {
            const navLinkPath = new URL(href, window.location.origin).pathname;

            if (windowPath === navLinkPath || (windowPath === '/' && navLinkPath === '/index')) {
                activeLink.classList.add('page-selected');
            }
        }
    });
});
