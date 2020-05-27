'use strict'

window.addEventListener('DOMContentLoaded', () => {
    let index = 1;

    let tabContent = $('.tabcontent');
    let tabCheck = $('.button-check');
    let buttonPoint = $('div.button-block');

    showTab(index);

    function showTab(i) {
        if (i > tabContent.length) {
            index = 1
        }
        if (i < 1) {
            index = tabContent.length;
        }

        tabContent.each((i, item) => {
            $(item).addClass('hide');
            $(item).removeClass('show-block');
        });

        tabCheck.each((i, item)=> {
            $(item).removeClass('active-button-check');
        });

        $(tabContent[index - 1]).addClass('show-block');
        $(tabContent[index - 1]).removeClass('hide');
        $(tabCheck[index - 1]).addClass('active-button-check')
    };


    function plusTabs() {
        showTab(index += 1)
    };

    $(buttonPoint[0]).on ('click', () => {
        plusTabs(-1)
    });

    $(buttonPoint[1]).on ('click', () => {
        plusTabs(1)
    });
});