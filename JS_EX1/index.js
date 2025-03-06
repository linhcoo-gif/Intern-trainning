
//Theo OOP


class Tabs {
  constructor(wrapper, tabButton, contentList, groupContent, addButton) {
    this.wrapper = wrapper;
    this.tabButton = tabButton;
    this.contentList = contentList;
    this.groupContent = groupContent;
    this.setContent();
    this.handleClickTab = this.handleClickTab;
    this.addButton = document.querySelector("." + addButton);
    this.initEvent();
  }
  setContent() {
    console.log(this);
    this.tabWrapper = document.querySelector(this.wrapper);
    this.tabButtonList = this.tabWrapper.querySelectorAll("." + this.tabButton);
    this.contentListTabs = document.querySelectorAll(this.contentList);
  }
  initEvent() {
    this.tabWrapper.addEventListener("click", this.handleClickTab);
    if (this.addButton) {
      this.addButton.addEventListener("click", () => this.addNewTab());
    }
  }
  resetToUnactive() {
    this.tabButtonList &&
      this.tabButtonList.forEach(function (el) {
        el.classList.remove("active");
      });
    this.contentListTabs &&
      this.contentListTabs.forEach(function (el) {
        el.classList.remove("active");
      });
  }

  activeTheClass(index) {
    console.log(this.tabButtonList);
    this.tabButtonList && this.tabButtonList[index].classList.add("active");
    this.contentListTabs && this.contentListTabs[index].classList.add("active");
  }

  activeTabDefault(index) {
    this.resetToUnactive();
    index ? this.activeTheClass(index) : this.activeTheClass(0);
  }

  handleClickTab = (event) => {
    console.log(this);
    console.log(this.tabButton);
    const clicked = event.target;
    if (clicked.classList.contains(this.tabButton)) {
      const elem = clicked.dataset.index;
      this.resetToUnactive();
      this.activeTheClass(elem);
    }
  };
  addNewTab() {
    let contentList = document.querySelector("." + this.groupContent);
    let newIndex = this.tabWrapper.querySelectorAll("li").length;
    let newTab = document.createElement("li");
    newTab.classList.add("button");
    newTab.classList.add(this.tabButton);
    newTab.setAttribute("data-index", newIndex);
    newTab.textContent = `Tab ${newIndex + 1}`;
    this.tabWrapper.insertAdjacentElement("beforeend", newTab);
    let newContent = document.createElement("li");
    newContent.classList.add("tabcontent");
    newContent.classList.add(this.contentList.replace(".", ""));
    let pTag = document.createElement("p");
    pTag.textContent=`Nội dung mới thứ ${newIndex + 1}`;
    newContent.insertAdjacentElement("beforeend",pTag );
    contentList.appendChild(newContent);
    this.setContent();
  }
}
const tab = new Tabs(
  ".js-tabs-wrapper",
  "js-tab-button",
  ".js-tabcontent",
  "groupContent",
  "AddNew"
);
tab.activeTabDefault(3);
const tab1 = new Tabs(
  ".js-tabs-wrapper-new",
  "js-tab-button-new",
  ".js-tabcontent-new",
  "groupContent-new",
  "AddNew-new"
);
tab1.initEvent();


// Theo function

// const Tabs = ({ wrapper, tabButton, contentList }) => {
//   const tabWrapper = document.querySelector(wrapper);
//   const tabButtonList = tabWrapper.querySelectorAll(" ." + tabButton);
//   const contentListTabs = document.querySelectorAll(contentList);

//   console.log(contentListTabs);
//   const handleClickTab = (event) => {
//     const clicked = event.target;
//     if (clicked.classList.contains(tabButton)) {
//       const elem = clicked.dataset.index;
//       tabButtonList.forEach(function (el) {
//         el.classList.remove("active");
//       });

//       contentListTabs &&
//         contentListTabs.forEach(function (el) {
//           el.classList.remove("active");
//         });

//       tabButtonList && tabButtonList[elem].classList.add("active");
//       contentListTabs && contentListTabs[elem].classList.add("active");
//     }
//   };

//   //Event Click handler
//   tabWrapper && tabWrapper.addEventListener("click", handleClickTab);
// };
