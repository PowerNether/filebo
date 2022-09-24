function stickyHeader () {
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 868) {
            if (window.innerWidth > 768) {
                header.classList.add('sticky');
            }
        } else {
            header.classList.remove('sticky');
        }
    }, { passive: true })
}
stickyHeader();

function openHeader () {
    const header = document.querySelector('.header');
    const toggler = document.querySelector('.header__toggler');

    toggler.addEventListener('click', function () {
        header.classList.contains('open') ? header.classList.remove('open') : header.classList.add('open');
    })
}
openHeader();

function linkScroll () {
    const header = document.querySelector('.header');
    const links = Array.from(document.querySelectorAll('.hedear__link')) || [];

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            let anchor = link.getAttribute('href').substr(1);
            let anchorBlock = document.getElementById(anchor)

            let blockTop = anchorBlock.getBoundingClientRect();
            
            window.scrollTo({
                top: blockTop.top + window.pageYOffset - 104,
                behavior: 'smooth',
            });

            header.classList.remove('open');
        });
    });
}
linkScroll();

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