'use strict'

window.addEventListener('DOMContentLoaded', () => {
    let index = 1;


    let tabContent = $('.tabcontent');
    let tabCheck = $('.button-check');
    let buttonPoint = $('div.button-block');




    function showInformProduct(product, productsParents) {
        product.removeClass('hide');
        product.addClass('show');
        product.addClass('border-orang-hide')

        productsParents.addClass('border-orang')
    };

    function hideInformProduct(product, productsParents) {
        product.addClass('hide');
        product.removeClass('show');

        productsParents.removeClass('border-orang')
    };

    $('.product').on('mouseover', function(){
        showInformProduct(($(this).children('.hide-products-inform')), $(this));

    });

    $('.product').on('mouseout', function(){
        hideInformProduct(($(this).children('.hide-products-inform')), $(this));

    });

    showTab(index)

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



    function showDropdown (dropdownHide) {
        
        dropdownHide.removeClass('hide');
        
    };

    function hideDropdown(dropdownHide) {
        
        dropdownHide.addClass('hide');
       
    };

    $('.dropdown').on('mouseover', function(){
        showDropdown($(this).children('.dropdown-hide'))
    });

    $('.dropdown').on('mouseout', function() {
        hideDropdown($(this).children('.dropdown-hide'))
    });

});