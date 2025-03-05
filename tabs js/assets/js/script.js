const tabButtons = document.querySelector(".tab-buttons");

if (tabButtons) {
    tabButtons.addEventListener("click", (e) => {
        if (
            e.target.classList.contains("tab-btn") &&
            !e.target.classList.contains("disabled")
        ) {
            console.log(e.target);
            const tabButtons = document.querySelectorAll(".tab-btn");
            tabButtons.forEach((item) => item.classList.remove("active"));

            const tabPanes = document.querySelectorAll(".tab-pane");
            tabPanes.forEach((item) => item.classList.remove("active"));

            e.target.classList.add("active");
            const tabId = e.target.getAttribute("data-tab");
            const tabPane = document.getElementById(tabId);
            tabPane.classList.add("active");
        }
    });
}
