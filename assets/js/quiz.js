const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// =========================== TIMER =========================== 
const timer = $('.quest__timer-param')
let second = 59
let minute = 59

const handleTimer = setInterval(() => {
    second--
    if (second < 0) {
        second = 0
        minute--
    }
    if (minute < 0) {
        minute = 0
    }
    const txtHTML = `${minute > 9 ? minute : '0' + minute}:${second > 9 ? second : '0' + second}`
    timer.innerText = txtHTML
}, 1000)

// ======================= RENDER QUEST CONTENT =======================
const questValue = [
    {
        id: 0,
        quest: 'Câu 1: Which is the Smallest Country in the World?',
        answer: [
            {
                answerContent: 'Thanh Hóa',
                actived: false
            },
            {
                answerContent: 'Nghệ An',
                actived: false
            },
            {
                answerContent: 'Hà Nội',
                actived: false
            },
            {
                answerContent: 'Quảng Bình',
                actived: false
            }
        ],
        completed: false
    }, {
        id: 1,
        quest: 'Câu 2: Which is the Smallest Country in the World?',
        answer: [
            {
                answerContent: 'Thanh Hóa',
                actived: false
            },
            {
                answerContent: 'Nghệ An',
                actived: false
            },
            {
                answerContent: 'Hà Nội',
                actived: false
            },
            {
                answerContent: 'Quảng Bình',
                actived: false
            }
        ],
        completed: false
    }, {
        id: 2,
        quest: 'Câu 3: Which is the Smallest Country in the World?',
        answer: [
            {
                answerContent: 'Thanh Hóa',
                actived: false
            },
            {
                answerContent: 'Nghệ An',
                actived: false
            },
            {
                answerContent: 'Hà Nội',
                actived: false
            },
            {
                answerContent: 'Quảng Bình',
                actived: false
            }
        ],
        completed: false
    }, {
        id: 3,
        quest: 'Câu 4: Which is the Smallest Country in the World?',
        answer: [
            {
                answerContent: 'Thanh Hóa',
                actived: false
            },
            {
                answerContent: 'Nghệ An',
                actived: false
            },
            {
                answerContent: 'Hà Nội',
                actived: false
            },
            {
                answerContent: 'Quảng Bình',
                actived: false
            }
        ],
        completed: false
    }, {
        id: 4,
        quest: 'Câu 5: Which is the Smallest Country in the World?',
        answer: [
            {
                answerContent: 'Thanh Hóa',
                actived: false
            },
            {
                answerContent: 'Nghệ An',
                actived: false
            },
            {
                answerContent: 'Hà Nội',
                actived: false
            },
            {
                answerContent: 'Quảng Bình',
                actived: false
            }
        ],
        completed: false
    }, {
        id: 5,
        quest: 'Câu 6: Which is the Smallest Country in the World?',
        answer: [
            {
                answerContent: 'Thanh Hóa',
                actived: false
            },
            {
                answerContent: 'Nghệ An',
                actived: false
            },
            {
                answerContent: 'Hà Nội',
                actived: false
            },
            {
                answerContent: 'Quảng Bình',
                actived: false
            }
        ],
        completed: false
    },
]
const questContent = $('.quest__content')
const answerContent = $$('.answer__item-content')
const answerList = $$('.answer__item')
const numberCurrent = $('.quest__current')
const numberAll = $('.quest__all')
let idQuest = 0

const renderQuestContent = () => {
    const currentQuest = questValue.find(quest => quest.id === idQuest)
    questContent.innerText = currentQuest.quest
    for (let j = 0; j <= currentQuest.answer.length - 1; j++) {
        answerContent[j].innerText = currentQuest.answer[j].answerContent
        answerContent[j].closest('.answer__item').dataset.quest = idQuest
    }
    const currentActiveAnswer = currentQuest.answer.find(answer => answer.actived)
    answerList.forEach(answerItem => {
        const answerContent = answerItem.querySelector('.answer__item-content')
        if (currentActiveAnswer && answerContent.innerText === currentActiveAnswer['answerContent']) {
            answerItem.classList.add('active')
        } else {
            answerItem.classList.remove('active')
        }
    })
    numberCurrent.innerText = idQuest + 1
    numberAll.innerText = questValue.length
}

renderQuestContent()

// ======================= HANDLE NEXT & PREV =======================
const nextQuestBtn = $('#quest__btn-next')
const prevQuestBtn = $('#quest__btn-prev')

const handleNextQuest = () => {
    idQuest++
    if (idQuest > questValue.length - 1) {
        idQuest = questValue.length - 1
    }
    renderQuestContent()
}
const handlePrevQuest = () => {
    idQuest--
    if (idQuest < 0) {
        idQuest = 0
    }
    renderQuestContent()
}

nextQuestBtn.onclick = handleNextQuest
prevQuestBtn.onclick = handlePrevQuest

// =========================== SELECT ANSWER ===========================
const questProcess = $('.quest__process')
const questProcessInner = $('.quest__process-inner')
const questProcessParam = $('.quest__process-param')

Array.from(answerList).forEach(answer => {
    answer.onclick = e => {
        const answerItem = e.target.closest('.answer__item')
        const currenQuestIndex = answerItem.dataset.quest
        questValue[currenQuestIndex].completed = true
        const questActived = questValue.filter(quest => quest.completed)
        const processPercent = Math.floor(questActived.length / questValue.length * 100)
        questProcessInner.style.width = `${processPercent}%`
        questProcessParam.innerText = `${processPercent}%`
        const currentAnswer = e.target.querySelector('.answer__item-content') || e.target
        questValue[currenQuestIndex].answer.forEach(answerItem => {
            if (answerItem.answerContent === currentAnswer.innerText) {
                answerItem.actived = true
            } else {
                answerItem.actived = false
            }
        })
        renderQuestContent()
    }
})