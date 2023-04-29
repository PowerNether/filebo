document.addEventListener("DOMContentLoaded", function () {
    // Utilites
    let isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    function offset(el) {
        box = el.getBoundingClientRect();
        docElem = document.documentElement;
        return {
            top: box.top + window.pageYOffset - docElem.clientTop,
            left: box.left + window.pageXOffset - docElem.clientLeft
        };
    }

    // Header
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
        const getapp = document.querySelector('.header__getapp');
        if (getapp) links.push(getapp);
    
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
    
    // Modal Window
    MicroModal.init({
        disableScroll: true,
        onShow: modal => {
            let video = modal.querySelector('video');
            if (video) video.play();
        },
        onClose: modal => {
            let video = modal.querySelector('video');
            if (video) video.pause();
        },
    });
    
    // Accardions
    function toggleReviews () {
        let toggler = document.querySelector('.reviews__toggler');
    
        if (!toggler) return;
    
        toggler.addEventListener('click', function () {
            let rewiesList = document.querySelector('.reviews__list');
            if (rewiesList.style.maxHeight) {
                toggler.classList.remove('active');
                toggler.textContent = 'Show more reviews';
                rewiesList.style.maxHeight = null;
            } else {
                toggler.classList.add('active');
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
                toggler.classList.remove('active');
                toggler.textContent = 'Show more';
                rewiesList.style.maxHeight = null;
            } else {
                toggler.classList.add('active');
                toggler.textContent = 'Hide';
                rewiesList.style.maxHeight = rewiesList.scrollHeight + "px";
            }
        })
    }
    toggleFAQ();

    // Player
    function customPlayer () {
        let players = document.querySelectorAll('.videos__preview');

        players.forEach(player => {
            player.addEventListener('click', function () {
                if (player.paused || player.ended) {
                    player.play();
                } else {
                    player.pause();
                }
            })

            function togglePlayButton () {
                let parent = player.parentNode;
                let button = parent.querySelector('.videos__play');
    
                if (button) {
                    button.classList.toggle('hidden');
                }
            }
        
            player.addEventListener('play', togglePlayButton);
            player.addEventListener('pause', togglePlayButton);
        })
    }
    customPlayer();

    // Image Compare
    function imageCompare () {
        if (!document.body.classList.contains('index')) return;
    
        let isDragging = false;
        let isScrolling = false;
        let isResizing = false;
    
        let imageCompareContainers = document.querySelectorAll('.cd-image-container');
    
        imageCompareContainers.forEach(container => {
            let handle = container.querySelector('.cd-handle');
            let resizeImage = container.querySelector('.cd-resize-img');
            let labelOriginal = container.querySelector('.cd-image-label[data-type="original"]')
            let labelModified = container.querySelector('.cd-image-label[data-type="modified"]')
    
            if (!handle && !resizeImage && !labelOriginal && !labelModified) return;
    
            drags(handle, resizeImage, container, labelOriginal, labelModified)
        })
    
        checkPosition(imageCompareContainers);
    
        window.addEventListener(
            'scroll',
            function () {
                if (!isScrolling) {
                    isScrolling = true;
    
                    requestAnimationFrame(() => { checkPosition(imageCompareContainers) });
                }
            }, 
            { passive: true }
        );
        window.addEventListener(
            'resize',
            function () {
                if (!isResizing) {
                    isResizing = true;

                    requestAnimationFrame(() => { checkLabel(imageCompareContainers) });
                }
            },
            { passive: true }
        );
    
        function checkPosition (containers) {
            containers.forEach(container => {
                if (window.scrollY + window.innerHeight * 0.5 > offset(container).top) {
                    container.classList.add('is-visible');
                }
            })
    
            isScrolling = false;
        }
        
        function checkLabel (containers) {
            containers.forEach(container => {
                let labelOriginal = container.querySelector('.cd-image-label[data-type="original"]');
                let labelModified = container.querySelector('.cd-image-label[data-type="modified"]');
                let resizeImage = container.querySelector('.cd-resize-img');
    
                if (!labelOriginal && !labelModified && !resizeImage) return;
    
                updateLabel(labelModified, resizeImage, 'left');
                updateLabel(labelOriginal, resizeImage, 'right');
            })
    
            isResizing = false;
        }
    
        function drags (handle, resizeImage, container, labelOriginal, labelModified) {
            let handleWidth = handle.offsetWidth;
            let handlePosition = offset(handle).left + handleWidth - event.pageX;
            let containerPosition = offset(container).left;
            let containerWidth = container.offsetWidth;
            let minLeft = containerPosition + 10;
            let maxLeft = containerPosition + containerWidth - handleWidth - 10;
    
            
            function handleMouseDown () {
                event.preventDefault();

                if (isMobile.any()) document.body.style.overflowY = 'hidden';

                handleWidth = handle.offsetWidth;
                handlePosition = offset(handle).left + handleWidth - event.pageX;
                containerPosition = offset(container).left;
                containerWidth = container.offsetWidth;
                minLeft = containerPosition + 10;
                maxLeft = containerPosition + containerWidth - handleWidth - 10;

                handle.classList.add('draggable');
                resizeImage.classList.add('resizable');

                isDragging = true;
            }

            handle.addEventListener('mousedown', handleMouseDown)
            handle.addEventListener('touchstart', handleMouseDown)
            
            function handleMouseUp () {
                if (isMobile.any()) document.body.style.overflowY = 'unset';

                handle.classList.remove('draggable');
                resizeImage.classList.remove('resizable');

                isDragging = false;
            }

            handle.addEventListener('mouseup', handleMouseUp);
            handle.addEventListener('touchend', handleMouseUp);
    
            function handleMouseMove (event) {
                if (isDragging) {
                    animateDraggedHandle(event, handle, handlePosition, handleWidth, minLeft, maxLeft,containerPosition, containerWidth, resizeImage, labelOriginal, labelModified);
                }
            }

            handle.parentNode.addEventListener('mousemove', handleMouseMove, { passive: true })
            handle.parentNode.addEventListener('touchmove', handleMouseMove, { passive: true })
            
            function documentMouseUp () {
                handle.classList.remove('draggable');
                resizeImage.classList.remove('resizable');

                isDragging = false;
            }

            document.body.parentNode.addEventListener('mouseup', documentMouseUp, { passive: true });
            document.body.parentNode.addEventListener('touchend', documentMouseUp, { passive: true });
        }
        
        function updateLabel (label, resizeImage, position) {
            if (position == 'left') {
                if (offset(label).left + label.offsetWidth < offset(resizeImage).left + resizeImage.offsetWidth) {
                    label.classList.remove('is-hidden');
                } else {
                    label.classList.add('is-hidden');
                }
            } else {
                if (offset(label).left > offset(resizeImage).left + resizeImage.offsetWidth) {
                    label.classList.remove('is-hidden');
                } else  {
                    label.classList.add('is-hidden');
                }
            }
        }
    
        function animateDraggedHandle (event, handle, handlePosition, handleWidth, minLeft, maxLeft, containerPosition, containerWidth, resizeImage, labelOriginal, labelModified) {
            let left = event.pageX + handlePosition - handleWidth;
            
            if (left < minLeft ) {
                left = minLeft;
            } else if ( left > maxLeft) {
                left = maxLeft;
            }

            let width = (left + handleWidth / 2 - containerPosition) * 100 / containerWidth + '%';

            handle.style.left = width;
            resizeImage.style.width = width;
    
            updateLabel(labelModified, resizeImage, 'left');
            updateLabel(labelOriginal, resizeImage, 'right');
        }
    }
    imageCompare();
})