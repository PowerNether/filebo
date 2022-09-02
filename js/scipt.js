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