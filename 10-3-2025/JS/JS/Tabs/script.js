function Tabs(options){
    const tabContainer = document.querySelector('.' + options.tabContainer)
    console.log('tab', options);
    
    const tabElementButton = tabContainer.querySelectorAll('.' + options.tabItem)
    const tabContentElement = tabContainer.querySelectorAll('.' + options.tabContent)
    const length = tabElementButton.length;

    function resetActive(){
        tabElementButton.forEach(tabItem => tabItem.classList.remove('active'))
        tabContainer.querySelectorAll('.' + options.tabContent).forEach(tabContentItem => tabContentItem.classList.remove('active'))
    }
    function handleClickTab(event){
        const clicked = event.target;
        
        if(clicked.classList.contains(options.tabItem)){
            resetActive();
            clicked.classList.add('active')
            const refContent = clicked.dataset.index;
            tabContainer.querySelectorAll('.' + options.tabContent)[refContent].classList.add('active')
        }
    }
    function createIndexInit(){
        tabElementButton.forEach((element, index) => {
            element.setAttribute('data-index', index)
        })
    }
    function initEvent(){
        tabContainer.addEventListener('click', handleClickTab)
    }
    function defaultActiveTab(numberIndex){
        if(numberIndex >= length || numberIndex < 0){
            numberIndex = 0;
        }
        resetActive();
        tabElementButton[numberIndex].classList.add('active')
        tabContentElement[numberIndex].classList.add('active')
    }
    createIndexInit()
    initEvent()
    return {
        activeTabDefault: defaultActiveTab
    }
}

const tabComponent = new Tabs(
    {
       tabContainer: 'js-tab-container',
       tabItem: 'js-tab-item',
       tabContent: 'js-tab-content',
    }
)

new Tabs(
    {
       tabContainer: 'js-tab-container-2',
       tabItem: 'js-tab-item-2',
       tabContent: 'js-tab-content-2',
    }
)