(() => {
    const openMenuBtnRef = document.querySelector("[open-menu-button]");
    const closeMenuBtnRef = document.querySelector("[close-menu-button]");
    const buyButtonRef = document.querySelector("[buy-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");

    openMenuBtnRef.addEventListener("click", () => {
        openMenuBtnRef.classList.add("is-open");
        buyButtonRef.classList.add("is-open");
        mobileMenuRef.classList.add("is-open");
        document.body.classList.add("is-open");
    });
    
    closeMenuBtnRef.addEventListener("click", () => {
        openMenuBtnRef.classList.remove("is-open");
        buyButtonRef.classList.remove("is-open");
        mobileMenuRef.classList.remove("is-open");
        document.body.classList.remove("is-open");
    });
    
})();