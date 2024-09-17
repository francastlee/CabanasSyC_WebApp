document.addEventListener('DOMContentLoaded', function() {
    let observer = new IntersectionObserver(checkCardVisibility, {
        threshold: [0.7] 
    });
    const cards = Array.from(document.getElementsByClassName('cardAnimation'));
    cards.forEach(card => observer.observe(card));

    let buttonObserver = new IntersectionObserver(checkButtonVisibility, {
        threshold: [0.8] 
    });
    const button = document.getElementById('bookNow');
    buttonObserver.observe(button);
});

function checkCardVisibility(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const cardIndex = Array.from(entry.target.parentNode.children).indexOf(entry.target);
            if (cardIndex === 0) {
                entry.target.classList.add('slide-in-left'); 
            } else if (cardIndex === 1) {
                entry.target.classList.add('slide-in-right');
            }
        } else {
            console.log('Card is not visible');
        }
    });
}

function checkButtonVisibility(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-top');
        } else {
            console.log('Button is not visible');
        }
    });
}

