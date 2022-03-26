const checkScreenDevice = (calback) => {
    if (window.innerWidth < 768) {
        calback()
    }
}

const handleResponsive = () => {
    // CUSTOM VARIABLE
    const $ = document.querySelector.bind(document)
    const $$ = document.querySelectorAll.bind(document)
    const handleHeader = (() => {

        const handleHeaderMobile = (() => {
            const headerMobile = $('.header__nav')
            const btnShowMenuMobile = $('.show__nav--main')

            btnShowMenuMobile.onclick = e => {
                headerMobile.classList.toggle('active')
            }
        })()
    })()
    const handleMain = (() => {
        const showBtn = $('.main__courses-category .category__menu-item #show')
        const categoryMenu = $('.category__menu')
        showBtn.onclick = e => {
            categoryMenu.classList.toggle('active')
        }
    })()
}

checkScreenDevice(handleResponsive)