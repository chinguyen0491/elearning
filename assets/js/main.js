// ==================== HANDLE HEADER SECTION ==================== //
const headerSection = document.querySelector('.header__section')

window.onscroll = () => {
    if(window.scrollY > 120) {
        headerSection.classList.add('active')
    } else {
        headerSection.classList.remove('active')
    }
}