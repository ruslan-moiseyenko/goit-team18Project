(() => {
    const openMenuBtnRef = document.querySelector("[data-open-menu-button]");
    const closeMenuBtnRef = document.querySelector("[data-close-menu-button]");
    const buyButtonRef = document.querySelector("[data-buy-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");
    const mobileMenuItemsRef = document.querySelectorAll("[data-mobile-nav]");

    openMenuBtnRef.addEventListener("click", () => {
        openMenuBtnRef.classList.add("is-open");
        buyButtonRef.classList.add("is-open");
        mobileMenuRef.classList.add("is-open");
    });
    
    closeMenuBtnRef.addEventListener("click", () => {
        openMenuBtnRef.classList.remove("is-open");
        buyButtonRef.classList.remove("is-open");
        mobileMenuRef.classList.remove("is-open");
    });

    mobileMenuItemsRef.forEach(function (item) {
        item.addEventListener("click", () => {
            openMenuBtnRef.classList.remove("is-open");
            buyButtonRef.classList.remove("is-open");
            mobileMenuRef.classList.remove("is-open");
        });
    });
})();