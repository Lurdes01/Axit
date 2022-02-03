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

