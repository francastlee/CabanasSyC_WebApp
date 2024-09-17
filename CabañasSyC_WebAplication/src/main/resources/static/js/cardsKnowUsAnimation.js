document.addEventListener('DOMContentLoaded', function() {
    let observer = new IntersectionObserver(checkCardsVisibility, {
        threshold: [0.6] 
    });

    const cards = Array.from(document.getElementsByClassName('cardKnowUsAnimation'));
    cards.forEach(card => observer.observe(card));
});

function checkCardsVisibility(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const cardIndex = Array.from(entry.target.parentNode.children).indexOf(entry.target);
            entry.target.classList.add('active'); 

            if (cardIndex === 0) {
                entry.target.classList.add('fade-in-top-card1');
            } else if (cardIndex === 1) {
                entry.target.classList.add('fade-in-top-card2');
            } else if (cardIndex === 2) {
                entry.target.classList.add('fade-in-top-card3');
            }
        }
    });
}
