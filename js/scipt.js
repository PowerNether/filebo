function stickyHeader () {
    const header = document.querySelector('.header') || null;

    window.addEventListener('scroll', function () {
        if (window.scrollY > 868) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    }, { passive: true })
}
stickyHeader();

MicroModal.init();

function toggleReviews () {
    let toggler = document.querySelector('.comments__toggler');

    toggler.addEventListener('click', function () {
        let rewiesList = document.querySelector('.comments__list');
        if (rewiesList.style.maxHeight) {
            toggler.textContent = 'Show more reviews 􀆊';
            rewiesList.style.maxHeight = null;
        } else {
            toggler.textContent = 'Hide reviews 􀆊';
            rewiesList.style.maxHeight = rewiesList.scrollHeight + "px";
        }
    })
}

toggleReviews();