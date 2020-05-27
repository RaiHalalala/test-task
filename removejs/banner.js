'use strict'

window.addEventListener('DOMContentLoaded', () => {
    let tabContentWindow = document.querySelector('.container')
    let tabContent = document.querySelectorAll('.tabcontent');
    let tabCheck = document.querySelectorAll('.point');
    let tabCheckParent = document.querySelector('.check-points');
    let pointer = document.querySelectorAll('.button-back');
    let tabField = document.querySelector('.content-lenght');
    let width = window.getComputedStyle(tabContentWindow).width

    tabField.style.width = 100 * tabContent.length + '%';
    tabField.style.display = 'flex';
    tabField.style.transition = '0.5s all';

    tabContentWindow.style.overflow = 'hidden';

    tabContent.forEach(item => {
        item.style.width = width;
    });

    let offset = 0;
    let activePointerIndex = 0;

    pointer[1].addEventListener('click', () => {
        if (offset == +width.slice(0, width.length - 2) * (tabContent.length - 1)) {
            offset = 0;
            activePointerIndex = 0;
        } else {
            offset += +width.slice(0, width.length - 2); 
            activePointerIndex += 1; 
        }

        tabField.style.transform = `translateX(-${offset}px)`;
        setActivePointer(activePointerIndex);
    });

    pointer[0].addEventListener('click', () => {
        if (offset == 0) {
            offset = +width.slice(0, width.length - 2) * (tabContent.length - 1);
            activePointerIndex = tabField.childElementCount - 1;
        } else {
            offset -= +width.slice(0, width.length - 2);  
            activePointerIndex -= 1;
        }

        tabField.style.transform = `translateX(-${offset}px)`;
        setActivePointer(activePointerIndex);
    });

    tabCheckParent.addEventListener('click', (e) => {
        let target = e.target;
        
        tabCheck.forEach((item, i) => {
            if (target == item) {
                activePointerIndex = i;
                setActivePointer(activePointerIndex);
                offset = +width.slice(0, width.length - 2) * i
            }
        });
        tabField.style.transform = `translateX(-${offset}px)`;
    });

    function setActivePointer(i) {
        tabCheck.forEach(item => {
            item.classList.remove("active-point");
        });
        tabCheck[i].classList.add("active-point");
    }
});

