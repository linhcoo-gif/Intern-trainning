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

// class Tabs {
//   constructor(wrapper, tabButton, contentList, groupContent, addButton) {
//     this.wrapper = wrapper;
//     this.tabButton = tabButton;
//     this.contentList = contentList;
//     this.groupContent = groupContent;
//     this.setContent();
//     this.handleClickTab = this.handleClickTab;
//     this.addButton = document.querySelector("." + addButton);
//     this.initEvent();
//   }
//   setContent() {
//     console.log(this);
//     this.tabWrapper = document.querySelector(this.wrapper);
//     this.tabButtonList = this.tabWrapper.querySelectorAll("." + this.tabButton);
//     this.contentListTabs = document.querySelectorAll(this.contentList);
//   }
//   initEvent() {
//     this.tabWrapper.addEventListener("click", this.handleClickTab);
//     if (this.addButton) {
//       this.addButton.addEventListener("click", () => this.addNewTab());
//     }
//   }
//   resetToUnactive() {
//     this.tabButtonList &&
//       this.tabButtonList.forEach(function (el) {
//         el.classList.remove("active");
//       });
//     this.contentListTabs &&
//       this.contentListTabs.forEach(function (el) {
//         el.classList.remove("active");
//       });
//   }

//   activeTheClass(index) {
//     console.log(this.tabButtonList);
//     this.tabButtonList && this.tabButtonList[index].classList.add("active");
//     this.contentListTabs && this.contentListTabs[index].classList.add("active");
//   }

//   activeTabDefault(index) {
//     this.resetToUnactive();
//     index ? this.activeTheClass(index) : this.activeTheClass(0);
//   }

//   handleClickTab = (event) => {
//     console.log(this);
//     console.log(this.tabButton);
//     const clicked = event.target;
//     if (clicked.classList.contains(this.tabButton)) {
//       const elem = clicked.dataset.index;
//       this.resetToUnactive();
//       this.activeTheClass(elem);
//     }
//   };
//   addNewTab() {
//     let contentList = document.querySelector("." + this.groupContent);
//     let newIndex = this.tabWrapper.querySelectorAll("li").length;
//     let newTab = document.createElement("li");
//     newTab.classList.add("button");
//     newTab.classList.add(this.tabButton);
//     newTab.setAttribute("data-index", newIndex);
//     newTab.textContent = `Tab ${newIndex + 1}`;
//     this.tabWrapper.insertAdjacentElement("beforeend", newTab);
//     let newContent = document.createElement("li");
//     newContent.classList.add("tabcontent");
//     newContent.classList.add(this.contentList.replace(".", ""));
//     let pTag = document.createElement("p");
//     pTag.textContent=`Nội dung mới thứ ${newIndex + 1}`;
//     newContent.insertAdjacentElement("beforeend",pTag );
//     contentList.appendChild(newContent);
//     this.setContent();
//   }
// }
// const tab = new Tabs(
//   ".js-tabs-wrapper",
//   "js-tab-button",
//   ".js-tabcontent",
//   "groupContent",
//   "AddNew"
// );
// tab.activeTabDefault(3);
// const tab1 = new Tabs(
//   ".js-tabs-wrapper-new",
//   "js-tab-button-new",
//   ".js-tabcontent-new",
//   "groupContent-new",
//   "AddNew-new"
// );
// tab1.initEvent();



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

// function createTabs(wrapper, tabButton, contentList, groupContent, addButton) {
//   const tabWrapper = document.querySelector(wrapper);
//   const addBtn = document.querySelector("." + addButton);
//   let tabButtonList = tabWrapper.querySelectorAll("." + tabButton);
//   let contentListTabs = document.querySelectorAll(contentList);

//   function setContent() {
//     tabButtonList = tabWrapper.querySelectorAll("." + tabButton);
//     contentListTabs = document.querySelectorAll(contentList);
//   }

//   function resetToUnactive() {
//     tabButtonList.forEach(el => el.classList.remove("active"));
//     contentListTabs.forEach(el => el.classList.remove("active"));
//   }
//   function activeTheClass(index) {
//     tabButtonList[index]?.classList.add("active");
//     contentListTabs[index]?.classList.add("active");
//   }

//   function activeTabDefault(index = 0) {
//     resetToUnactive();
//     activeTheClass(index);
//   }

//   function handleClickTab(event) {
//     const clicked = event.target;
//     if (clicked.classList.contains(tabButton)) {
//       const index = clicked.dataset.index;
//       resetToUnactive();
//       activeTheClass(index);
//     }
//   }

//   function addNewTab() {
//     const contentContainer = document.querySelector("." + groupContent);
//     const newIndex = tabWrapper.querySelectorAll("li").length;

//     const newTab = document.createElement("li");
//     newTab.classList.add("button", tabButton);
//     newTab.setAttribute("data-index", newIndex);
//     newTab.textContent = `Tab ${newIndex + 1}`;
//     tabWrapper.insertAdjacentElement("afterbegin", newTab);

//     const newContent = document.createElement("li");
//     newContent.classList.add("tabcontent", contentList.replace(".", ""));
//     const pTag = document.createElement("p");
//     pTag.textContent = `Nội dung mới thứ ${newIndex + 1}`;
//     newContent.appendChild(pTag);
//     contentContainer.appendChild(newContent);

//     setContent();
//   }

//   // Event listeners
//   tabWrapper.addEventListener("click", handleClickTab);
//   addBtn?.addEventListener("click", addNewTab);

//   return { activeTabDefault };
// }

// const tab = createTabs(".js-tabs-wrapper", "js-tab-button", ".js-tabcontent", "groupContent", "AddNew");
// tab.activeTabDefault(3);

// const tab1 = createTabs(".js-tabs-wrapper-new", "js-tab-button-new", ".js-tabcontent-new", "groupContent-new", "AddNew-new");

const course = [
  { id: 1, name: "js", price: 200 },
  { id: 2, name: "React", price: 500 },
  { id: 3, name: "PHP", price: 600 },
  { id: 4, name: "Nodejs", price: 100 },
];

//=========================================FIND===============================
// Array.prototype.findCustom = function (callback) {
//   for (let elem of this) {
//     const isTrue = callback(elem);
//     if (isTrue) return elem;
//   }
//   return undefined;
// };

// let b = course.findCustom(function (elem) {
//   return elem.name == "js";
// });

// console.log(b);

//===========================================MAP====================

// Array.prototype.mapCustom = function (callback) {
//   const result = [];
//   let i = 0;
//   for (let elem of this) {
//     result.push(callback(elem, i));
//     i++;
//   }
//   return result;
// };

// console.log(course);
// let res=course.mapCustom(function (elem,index) {
//   const temp = {...elem}
//   temp.index = index;
//   temp.name = elem.name+" course"
//   // return {
//   //   id: elem.id,
//   //   name: elem.name+" course",
//   //   price: elem.price,
//   //   index : index
//   // }
//   return temp;
// });
// console.log(res);

//=====================================Filter=============================

// Array.prototype.filterCustom = function (callback) {
//   res = []
//   for (let elem of this) {
//     const isTrue = callback(elem);
//     if (isTrue) res.push (elem);
//   }
//   return res;
// };

// let b = course.filterCustom(function (elem) {
//   return elem.price >= 200;
// });

// console.log(b);

//====================================Remove===========================

// Array.prototype.removeCustom = function (callback) {
//   let k = -1;
//   for (let index in this) {
//     const isTrue = callback(this[index]);
//     if (isTrue) {
//       k = index;
//       break;
//     }
//   }
//   console.log(k);
//   if (k != -1) {
//     for (let i = Number(k); i < this.length - 1; i++) {
//       this[i] = this[i+1];
//     }
//   }
//   this.length = this.length - 1;
// };

// let b = course.removeCustom(function (elem) {
//   return elem.id == 4;
// });

// console.log(course);


//================================SUM=======================================
Array.prototype.reduceCustom = function (callback ,init) {
  for (let i = 0; i < this.length; i++) {
    init = callback( init , this[i] );
  }
  return init;
}
let b = course.reduceCustom(function (sum , elem  ) {
  return sum + elem.price;
},[]);

console.log(b);



//================================SUM=======================================
