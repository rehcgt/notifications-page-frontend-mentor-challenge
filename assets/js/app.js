function MarkAllAsRead() {    
    document.querySelectorAll('.card.card-unread').forEach(card => {        
        card.classList.remove('bg-light-grayish-blue', 'card-unread');
        card.classList.add('bg-white');
    });
    document.querySelectorAll('.bull').forEach(b => {
        b.style.display = 'none';
    });
}

document.querySelector('.container').addEventListener('mouseover', function(event) {
    let card = event.target.closest('.card');
    if (card) {
        card.classList.add('card-hover');
    } else if (event.target.matches('a')) {
        event.target.classList.add('link-hover');
    }
});

document.querySelector('.container').addEventListener('mouseout', function(event) {
    let card = event.target.closest('.card');
    if (card) {
        card.classList.remove('card-hover');
    } else if (event.target.matches('a')) {
        event.target.classList.remove('link-hover');
    }
});