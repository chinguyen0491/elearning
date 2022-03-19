// ==================== HANDLE HEADER SECTION ==================== //
const btnTest = document.querySelector('.header__buyNow-link')
const header = document.querySelector('.header__section')

btnTest.onclick = () => {
    header.classList.toggle('active')
}