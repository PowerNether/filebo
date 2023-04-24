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
    
    MicroModal.init();
    
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
})

jQuery.event.special.touchstart = {
    setup: function( _, ns, handle ) {
        this.addEventListener("touchstart", handle, { passive: false });
    }
};
jQuery.event.special.touchmove = {
    setup: function( _, ns, handle ) {
        this.addEventListener("touchmove", handle, { passive: false });
    }
};
jQuery.event.special.wheel = {
    setup: function( _, ns, handle ){
        this.addEventListener("wheel", handle, { passive: true });
    }
};
jQuery.event.special.mousewheel = {
    setup: function( _, ns, handle ){
        this.addEventListener("mousewheel", handle, { passive: true });
    }
};
isMobile = {
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

jQuery(document).ready(function($){
    var dragging = false,
        scrolling = false,
        resizing = false;
    //cache jQuery objects
    var imageComparisonContainers = $('.cd-image-container');
    //check if the .cd-image-container is in the viewport 
    //if yes, animate it
    checkPosition(imageComparisonContainers);
    $(window).on('scroll', function(){
        if( !scrolling) {
            scrolling =  true;
            ( !window.requestAnimationFrame )
                ? setTimeout(function(){checkPosition(imageComparisonContainers);}, 100)
                : requestAnimationFrame(function(){checkPosition(imageComparisonContainers);});
        }
    });
    
    //make the .cd-handle element draggable and modify .cd-resize-img width according to its position
    imageComparisonContainers.each(function(){
        var actual = $(this);
        drags(actual.find('.cd-handle'), actual.find('.cd-resize-img'), actual, actual.find('.cd-image-label[data-type="original"]'), actual.find('.cd-image-label[data-type="modified"]'));
    });

    //upadate images label visibility
    $(window).on('resize', function(){
        if( !resizing) {
            resizing =  true;
            ( !window.requestAnimationFrame )
                ? setTimeout(function(){checkLabel(imageComparisonContainers);}, 100)
                : requestAnimationFrame(function(){checkLabel(imageComparisonContainers);});
        }
    });

    function checkPosition(container) {
        container.each(function(){
            var actualContainer = $(this);
            if( $(window).scrollTop() + $(window).height()*0.5 > actualContainer.offset().top) {
                actualContainer.addClass('is-visible');
            }
        });

        scrolling = false;
    }

    function checkLabel(container) {
        container.each(function(){
            var actual = $(this);
            updateLabel(actual.find('.cd-image-label[data-type="modified"]'), actual.find('.cd-resize-img'), 'left');
            updateLabel(actual.find('.cd-image-label[data-type="original"]'), actual.find('.cd-resize-img'), 'right');
        });

        resizing = false;
    }

    //draggable funtionality - credits to http://css-tricks.com/snippets/jquery/draggable-without-jquery-ui/
    function drags(dragElement, resizeElement, container, labelContainer, labelResizeElement) {
        dragElement.on("mousedown vmousedown", function(e) {
            if (isMobile.any()) {
                $('body').css('overflow-y', 'hidden');
            }
            dragElement.addClass('draggable');
            resizeElement.addClass('resizable');

            var dragWidth = dragElement.outerWidth(),
                xPosition = dragElement.offset().left + dragWidth - e.pageX,
                containerOffset = container.offset().left,
                containerWidth = container.outerWidth(),
                minLeft = containerOffset + 10,
                maxLeft = containerOffset + containerWidth - dragWidth - 10;
            
            dragElement.parents().on("mousemove vmousemove", function(e) {
                if( !dragging) {
                    dragging =  true;
                    ( !window.requestAnimationFrame )
                        ? setTimeout(function(){animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement);}, 100)
                        : requestAnimationFrame(function(){animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement);});
                }
            }).on("mouseup vmouseup", function(e){
                dragElement.removeClass('draggable');
                resizeElement.removeClass('resizable');
            });
            e.preventDefault();
        }).on("mouseup vmouseup", function(e) {
            dragElement.removeClass('draggable');
            resizeElement.removeClass('resizable');
            if (isMobile.any()) {
                $('body').css('overflow-y', 'unset');
            }
        });
    }

    function animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement) {
        var leftValue = e.pageX + xPosition - dragWidth;   
        //constrain the draggable element to move inside his container
        if(leftValue < minLeft ) {
            leftValue = minLeft;
        } else if ( leftValue > maxLeft) {
            leftValue = maxLeft;
        }

        var widthValue = (leftValue + dragWidth/2 - containerOffset)*100/containerWidth+'%';
        
        $('.draggable').css('left', widthValue).on("mouseup vmouseup", function() {
            $(this).removeClass('draggable');
            resizeElement.removeClass('resizable');
        });

        $('.resizable').css('width', widthValue); 

        updateLabel(labelResizeElement, resizeElement, 'left');
        updateLabel(labelContainer, resizeElement, 'right');
        dragging =  false;
    }

    function updateLabel(label, resizeElement, position) {
        if(position == 'left') {
            ( label.offset().left + label.outerWidth() < resizeElement.offset().left + resizeElement.outerWidth() ) ? label.removeClass('is-hidden') : label.addClass('is-hidden') ;
        } else {
            ( label.offset().left > resizeElement.offset().left + resizeElement.outerWidth() ) ? label.removeClass('is-hidden') : label.addClass('is-hidden') ;
        }
    }
});