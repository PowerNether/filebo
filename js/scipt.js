document.addEventListener("DOMContentLoaded", function () {
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
    if (!document.body.classList.contains('privacy')) linkScroll();
    
    MicroModal.init();
    
    function toggleReviews () {
        let toggler = document.querySelector('.reviews__toggler');
    
        if (!toggler) return;
    
        toggler.addEventListener('click', function () {
            let rewiesList = document.querySelector('.reviews__list');
            if (rewiesList.style.maxHeight) {
                toggler.textContent = 'Show more reviews';
                rewiesList.style.maxHeight = null;
            } else {
                toggler.textContent = 'Hide reviews';
                rewiesList.style.maxHeight = rewiesList.scrollHeight + "px";
            }
        })
    }
    toggleReviews();
    
    function toggleFAQ () {
        let toggler = document.querySelector('.faq__toggler');
    
        if (!toggler) return;
    
        toggler.addEventListener('click', function () {
            let rewiesList = document.querySelector('.faq__sublist');
            if (rewiesList.style.maxHeight) {
                toggler.textContent = 'Show more';
                rewiesList.style.maxHeight = null;
            } else {
                toggler.textContent = 'Hide';
                rewiesList.style.maxHeight = rewiesList.scrollHeight + "px";
            }
        })
    }
    toggleFAQ();
    
    function initComparisons() {
        var x, i;
    
        x = document.getElementsByClassName("img-comp-overlay");
        for (i = 0; i < x.length; i++) {
          compareImages(x[i]);
        }
    
        function compareImages(img) {
          var slider, img, clicked = 0, w, h, parent;
    
          w = img.offsetWidth;
          h = img.offsetHeight;
    
          img.style.width = (w / 2) + "px";
    
          parent = document.querySelector(".img-comp-container");
    
          slider = document.createElement("div");
          slider.setAttribute("class", "img-comp-slider");
    
          img.parentElement.insertBefore(slider, img);
    
          slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
          slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
    
          slider.addEventListener("mousedown", slideReady);
    
          window.addEventListener("mouseup", slideFinish);
    
          slider.addEventListener("touchstart", slideReady);
    
          window.addEventListener("touchend", slideFinish);
    
          function slideReady(e) {
            e.preventDefault();
    
            clicked = 1;
    
            window.addEventListener("mousemove", slideMove);
            window.addEventListener("touchmove", slideMove);
          }
          function slideFinish() {
            clicked = 0;
          }
          function slideMove(e) {
            var pos;
    
            if (clicked == 0) return false;
    
            pos = getCursorPos(e)
    
            if (pos < 0) pos = 0;
            if (pos > w) pos = w;
    
            slide(pos);
          }
          function getCursorPos(e) {
            var a, x = 0;
            e = (e.changedTouches) ? e.changedTouches[0] : e;
    
            a = img.getBoundingClientRect();
    
            x = e.pageX - a.left;
    
            x = x - window.pageXOffset;
            return x;
          }
          function slide(x) {
            img.style.width = x + "px";
            isTitleVisible(x)
            
            slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
          }
          function isTitleVisible(x) {
            let t1 = document.getElementById('compare-1');
            let t2 = document.getElementById('compare-2');
    
            if (x < t1.offsetWidth + 32) {
                t1.style.opacity = 0;
            } else {
                t1.style.opacity = 1;
            }
            if (parent.offsetWidth - x > t2.offsetWidth + 32) {
                t2.style.opacity = 1;
            } else {
                t2.style.opacity = 0;
            }
          }
        }
    }
    initComparisons();
})