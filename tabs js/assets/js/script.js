// const tabButtons = document.querySelector(".tab-buttons");

// if (tabButtons) {
//     tabButtons.addEventListener("click", (e) => {
//         if (
//             e.target.classList.contains("tab-btn") &&
//             !e.target.classList.contains("disabled")
//         ) {
//             console.log(e.target);
//             const tabButtons = document.querySelectorAll(".tab-btn");
//             tabButtons.forEach((item) => item.classList.remove("active"));

//             const tabPanes = document.querySelectorAll(".tab-pane");
//             tabPanes.forEach((item) => item.classList.remove("active"));

//             e.target.classList.add("active");
//             const tabId = e.target.getAttribute("data-tab");
//             const tabPane = document.getElementById(tabId);
//             tabPane.classList.add("active");
//         }
//     });
// }

class Tabs {
    constructor({ tabContainer, tabItems, tabContents }) {
        this.tabContainer = document.querySelector(`.${tabContainer}`);
        this.tabItems = document.querySelectorAll(`.${tabItems}`);
        this.tabContents = document.querySelectorAll(`.${tabContents}`);
        this.nameClassTab = tabItems;

        // closure
        this.init();
    }

    init() {
        this.tabContainer.addEventListener("click", (e) => {
            const clickedTab = e.target;

            if (clickedTab.classList.contains(this.nameClassTab)) {
                const tabIndex = Array.from(this.tabItems).indexOf(clickedTab);
                this.activateTab(tabIndex);
            }

            return;
        });

        // nếu ko bắt được sự kiện click thì phần tử 0 mặc định active
        this.activateTab(0);
    }

    activateTab(index) {
        // Xóa  active
        this.tabItems.forEach((item) => item.classList.remove("active"));
        this.tabContents.forEach((item) => item.classList.remove("active"));

        // Kích hoạt tab và nội dung tương ứng
        this.tabItems[index].classList.add("active");
        this.tabContents[index].classList.add("active");
    }

    activeTabDefault(index) {
        this.activateTab(index);
    }
}

const newTab = new Tabs({
    tabContainer: "tab-buttons",
    tabItems: "tab-btn",
    tabContents: "tab-pane",
});

newTab.activeTabDefault(2);

const newTab1 = new Tabs({
    tabContainer: "tabs-1",
    tabItems: "tab-1",
    tabContents: "tab-content-1",
});

// newTab.activeTabDefault(2);
