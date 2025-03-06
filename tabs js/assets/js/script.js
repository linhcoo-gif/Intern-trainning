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
        this.nameClassItemTab = tabItems;
        this.nameClassContentTab = tabContents;

        // closure
        this.init();
    }

    init() {
        this.tabContainer.addEventListener("click", (e) => {
            const clickedTab = e.target;

            if (clickedTab.classList.contains(this.nameClassItemTab)) {
                const tabIndex = Array.from(this.tabItems).indexOf(clickedTab);
                this.activateTab(tabIndex);
            }
        });

        this.activateTab(0); // Mặc định active tab đầu tiên
    }

    activateTab(index) {
        // Xóa class active
        this.tabItems.forEach((item) => item.classList.remove("active"));
        this.tabContents.forEach((item) => item.classList.remove("active"));

        // Thêm class active vào tab được chọn
        this.tabItems[index].classList.add("active");
        this.tabContents[index].classList.add("active");
    }

    activeTabDefault(index) {
        this.activateTab(index);
    }

    addTag(tabName, Content) {
        // Tao ra tabName moi
        const newButton = document.createElement("button");
        newButton.classList.add(this.nameClassItemTab);
        newButton.textContent = tabName;

        // Tao ra content voi tab moi
        const newContent = document.createElement("div");
        newContent.classList.add(this.nameClassContentTab);
        newContent.innerHTML = Content;

        // them vao dom
        this.tabContainer.appendChild(newButton);
        document
            .querySelector(`.${this.nameClassContentTab}`)
            .parentElement.appendChild(newContent);

        this.reloadTabs();
    }
    // reload lai khi them tab
    reloadTabs() {
        this.tabItems = document.querySelectorAll(`.${this.nameClassItemTab}`);
        this.tabContents = document.querySelectorAll(
            `.${this.nameClassContentTab}`
        );
    }
}

const newTab = new Tabs({
    tabContainer: "tab-buttons",
    tabItems: "tab-btn",
    tabContents: "tab-pane",
});

const buttonAdd1 = document.querySelector(".btn-add-1");
const buttonAdd2 = document.querySelector(".btn-add-2");
let count1 = 0;
let count2 = 0;

if (buttonAdd1) {
    buttonAdd1.addEventListener("click", (e) => {
        const tmp = count1++;
        newTab.addTag(
            `${tmp}`,
            `
            <h1>Nội dung ${tmp}</h1>
            `
        );
    });
}

const newTab1 = new Tabs({
    tabContainer: "tabs-1",
    tabItems: "tab-1",
    tabContents: "tab-content-1",
});

if (buttonAdd2) {
    buttonAdd2.addEventListener("click", (e) => {
        const tmp = count2++;
        newTab1.addTag(tmp, `Nội dung ${tmp}`);
    });
}
