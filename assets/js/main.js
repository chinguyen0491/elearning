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
        handleHeaderSection()
        window.addEventListener('scroll', handleHeaderSection)
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

// ========================= HANDLE ACTIVE HERO >> FOOTER ========================= //
const activeFooterHero = (() => {
    const laptopHeroFooter = document.getElementById('hero__footer-imgLaptop')
    const treeHeroFooter = document.getElementById('hero__footer-imgTree')

    const handleActiveHeroFooter = () => {
        if (window.scrollY > 300) {
            laptopHeroFooter.classList.add('active')
            treeHeroFooter.classList.add('active')
        }
    }

    const addHandleActiveHeroFooter = () => {
        handleActiveHeroFooter()
        window.addEventListener('scroll', handleActiveHeroFooter)
    }

    window.addEventListener('load', addHandleActiveHeroFooter)
})()

// ========================== HANDLE VIDEO SECTION ========================== //

const videoSection = (() => {
    const playBtn = document.querySelector('.vid__section-icon')
    const imgBG = document.querySelector('.vid__section-img')
    const iconWrap = document.querySelector('.vid__section-iconWrap')
    const vid = document.querySelector('.vid__section-video')
    const handlePlay = () => {
        iconWrap.classList.add('remove')
        imgBG.classList.add('remove')
        vid.classList.add('active')
        vid.play()
    }
    playBtn.addEventListener('click', handlePlay, true)
})()