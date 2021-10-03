'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');
const btnsOpenModals = document.querySelectorAll('.show-modal');

function closeModal() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnsOpenModals.forEach((btn) => {
    btn.addEventListener('click', function() {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    })
})

closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// key press events
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape" && !modal.classList.contains('hidden')) {
        closeModal();
    };
})