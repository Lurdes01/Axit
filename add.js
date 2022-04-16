const tabsBtn = document.querySelectorAll(".btn--tabs");
const tabsTexts = document.querySelectorAll(".tabs__text");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains("active") ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove("active");
            })
            tabsTexts.forEach(function(item) {
                item.classList.remove("active");
            })
    
            currentBtn.classList.add("active");
            currentTab.classList.add("active");
        }

    });
}

document.querySelector(".btn--tabs").click();

$(function() {

    /*Fixed Header*/

    let header = $("#header");
    let headerH = header.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    checkScroll(scrollPos, headerH);

    $(window).on("scroll resize", function() {
        headerH = header.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, headerH);
    });

    function checkScroll(scrollPos, headerH) {
        if( scrollPos > headerH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /*Smooth Scroll*/

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
    
        let elementId = $(this).data("scroll");
        let elementOffset = $(elementId).offset().top;
    
        nav.removeClass("show");
    
        $("html, body").animate({
            scrollTop:  elementOffset - 100
        }, 700);
    });

    /*Nav Toggle*/

    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });

});