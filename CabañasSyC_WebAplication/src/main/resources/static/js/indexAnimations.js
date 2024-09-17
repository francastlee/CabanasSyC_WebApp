document.addEventListener('DOMContentLoaded', function() {
    let observer = new IntersectionObserver(checkTextVisibility, {
        threshold: [0.9] 
    });
    const text = document.getElementById('roomTypes');
    observer.observe(text);
});

function checkTextVisibility(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
           entry.target.classList.add('fade-in-top');
        } else {
            console.log('text is not visible');
        }
    });
}
