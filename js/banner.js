'use strict'

window.addEventListener('DOMContentLoaded', () => {
    let tabContentWindow = document.querySelector('.container')
    let tabsContent = document.querySelectorAll('.tabscontent');
    let tabsCheck = document.querySelectorAll('.point');
    let tabCheckParent = document.querySelector('.check-points');
    let arrow = document.querySelectorAll('.arrow-back');
    let tabField = document.querySelector('.content-lenght');
    let width = window.getComputedStyle(tabContentWindow).width

    tabField.style.width = 100 * tabsContent.length + '%';
    tabField.style.display = 'flex';
    tabField.style.transition = '0.5s all';

    tabContentWindow.style.overflow = 'hidden';

    tabsContent.forEach(item => {
        item.style.width = width;
    });

    let offset = 0;
    let activeArrowIndex = 0;

    arrow[1].addEventListener('click', () => {
        if (offset == +width.slice(0, width.length - 2) * (tabsContent.length - 1)) {
            offset = 0;
            activeArrowIndex = 0;
        } else {
            offset += +width.slice(0, width.length - 2); 
            activeArrowIndex += 1; 
        }

        tabField.style.transform = `translateX(-${offset}px)`;
        setActiveArrow(activeArrowIndex);
    });

    arrow[0].addEventListener('click', () => {
        if (offset == 0) {
            offset = +width.slice(0, width.length - 2) * (tabsContent.length - 1);
            activeArrowIndex = tabField.childElementCount - 1;
        } else {
            offset -= +width.slice(0, width.length - 2);  
            activeArrowIndex -= 1;
        }

        tabField.style.transform = `translateX(-${offset}px)`;
        setActiveArrow(activeArrowIndex);
    });

    tabCheckParent.addEventListener('click', (e) => {
        let target = e.target;
        
        tabsCheck.forEach((item, i) => {
            if (target == item) {
                activeArrowIndex = i;
                setActiveArrow(activeArrowIndex);
                offset = +width.slice(0, width.length - 2) * i
            }
        });
        tabField.style.transform = `translateX(-${offset}px)`;
    });

    function setActiveArrow(i) {
        tabsCheck.forEach(item => {
            item.classList.remove("active-point");
        });
        tabsCheck[i].classList.add("active-point");
    }
});

