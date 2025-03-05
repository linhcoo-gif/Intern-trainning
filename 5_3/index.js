// class Course {
//   constructor(){
//       this.name = 'Khoa hoc',
//       this.tags = ['react','redux','context']
//   }
//   getCourse(){
//       console.log('this ngoai', this);
//       this.tags.forEach(function(tag){
//           console.log('this trong', this); // Ham thong thường thì this là window
//           // console.log('tag', tag + this.name);
//       })
//   }
// }
// const course = new Course();
// console.log(course.getCourse())

// const d = 9 ;
// const a = function(){
//   const b = function(){
//     console.log(this)
//   }
//   console.log(this)
// }

// const c = a.bind( [ "a" , "b","c"] )
// console.log( c() )

// const e = a.call( [ "a" , "b","c"])

// console.log( e )

//==========================THEO OOP===================================

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
    this.tabWrapper.appendChild(newTab);
    let newContent = document.createElement("li");
    newContent.classList.add("tabcontent");
    newContent.classList.add(this.contentList.replace(".", ""));
    newContent.textContent = `Nội dung mới thứ ${newIndex + 1}`;
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
// tab1.initEvent();

// document.querySelector(".AddNew").addEventListener("click", function () {
//   let tabList = document.querySelector(".groupbutton");
//   let contentList = document.querySelector(".groupContent");
//   let newIndex = tabList.querySelectorAll("li").length;
//   let newTab = document.createElement("li");
//   newTab.classList.add("button");
//   newTab.classList.add("js-tab-button");
//   newTab.setAttribute("data-index", newIndex);
//   newTab.textContent = `Tab ${newIndex + 1}`;
//   tabList.appendChild(newTab);
//   let newContent = document.createElement("li");
//   newContent.classList.add("tabcontent");
//   newContent.classList.add("js-tabcontent");
//   newContent.textContent = `Nội dung mới thứ ${newIndex + 1}`;
//   contentList.appendChild(newContent);
//   tab.setContent();
// });

//KHÔNG CẦN GỌI INIT

//=========================Theo function==============================

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

// Tabs({
//   wrapper: ".js-tabs-wrapper",
//   tabButton: "js-tab-button",
//   contentList: ".js-tabcontent",
// });

// Tabs({
//   wrapper: ".js-tabs-wrapper-new",
//   tabButton: "js-tab-button-new",
//   contentList: ".js-tabcontent-new",
// });

//=================================================
// const  father = document.getElementById("father");
// const  son = document.getElementById("son");

// console.log(father)

// son.addEventListener("click", (event) => {

//   console.log("son");
//   event.stopPropagation();
// } ,true)

// father.addEventListener("click", (event) => {

//   console.log("father");
//   event.stopPropagation();
// } ,true)

// const a  = 5
// c = function(){
//   d = function(){
//     var t = 4
//   }
//   d()
//   console.log(t)
// }

// c()
