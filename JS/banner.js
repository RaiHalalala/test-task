'use strict'

window.addEventListener('DOMContentLoaded', () => {

    let index = 1;

    let tabContent = document.querySelectorAll('.tabcontent');
    let tabCheck = document.querySelectorAll('.button-check');
    let tabCheckParents = document.querySelector('.check-box');
    let pointer = document.querySelectorAll('.button-back');


showTab(index);

function showTab(i) {
    if (i > tabContent.length) {
        index = 1
    }
    if (i < 1) {
        index = tabContent.length;
    }

    tabContent.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show');
    });

    tabCheck.forEach(item => {
        item.classList.remove('active-button-check');
    });

    tabContent[index - 1].classList.add('show');
    tabContent[index - 1].classList.remove('hide');
    tabCheck[index - 1].classList.add('active-button-check')
};

function plusTabs() {
    showTab(index += 1)
};

pointer[0].addEventListener('click', () => {
    plusTabs(-1)
});

pointer[1].addEventListener('click', () => {
    plusTabs(1)
});


tabCheckParents.addEventListener('click', (e) => {
    let target = e.target;

    if (target && target.classList.contains('button-check')) {
        tabCheck.forEach((item, i) => {
            if (target == item) {
                showTab(i);
            };
        })
    };
});

});

