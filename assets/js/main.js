// ==================== HANDLE HEADER SECTION ==================== //
const headerSection = (() => {
    const headerSection = document.querySelector('.header__section')

    const handleHeaderSection = () => {
        const st = window.scrollY
        if (st > 120) {
            headerSection.classList.add('active')
        } else {
            headerSection.classList.remove('active')
        }
    }

    const addHandleHeaderSection = () => {
        if (window.innerWidth > 768) {
            handleHeaderSection()
            window.addEventListener('scroll', handleHeaderSection)
        } else {
            headerSection.classList.add('active')
            window.removeEventListener('scroll', handleHeaderSection)
        }
    }

    window.addEventListener('load', addHandleHeaderSection)
})()

// ==================== HANDLE BUTTON TO TOP ==================== //
const buttonTopTop = (() => {
    const btnToTop = document.querySelector('.btn__toTop')
    const handleButtonTop = () => {
        const st = window.scrollY
        if (st > 200) {
            btnToTop.classList.add('active')
        } else {
            btnToTop.classList.remove('active')
        }
    }

    const addHandleButtonTop = () => {
        window.addEventListener('scroll', handleButtonTop)
    }

    window.addEventListener('load', addHandleButtonTop)
})()

// ================= ANIMATION IMAGE HERO ================= //
const animationImgHero = (() => {
    const imgHeros = document.getElementsByClassName('hero__img')
    const heroContent = document.querySelector('.hero__content')
    const heroTagImg1 = document.querySelector('.hero__img1-tag')

    const handleAnimationImageHero = () => {
        Array.from(imgHeros).forEach(imgHero => {
            imgHero.classList.add('active')
        })
        Array.from(heroContent.children).forEach(chil => {
            chil.classList.add('active')
        })
        heroTagImg1.classList.add('active')
    }

    window.addEventListener('load', handleAnimationImageHero)
})()

// ========================== HANDLE VIDEO SECTION ==========================

// function myFunction(e) {
//     var elems = document.querySelectorAll(".answer__list-item");
//     [].forEach.call(elems, function(el) {
//       el.classList.remove("active");
//     });
//     e.target.className = "active";
//   }

const answers = document.querySelectorAll('.answer__list-item')

Array.from(answers).forEach(answer => {
    answer.onclick = (e) => {
        console.log('click')
        if (document.querySelector('.answer__list-item.active')) {
            document.querySelector('.answer__list-item.active').classList.remove('active')
        }
        e.target.closest('.answer__list-item').classList.add('active')
    }
})