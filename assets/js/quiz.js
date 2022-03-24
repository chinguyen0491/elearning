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
        quest: 'Câu 1: Loại nào là loại đẳng cấp nhất?',
        answer: [
            {
                answerContent: 'Nhung',
                actived: false
            },
            {
                answerContent: 'Hương',
                actived: false
            },
            {
                answerContent: 'Linh',
                actived: false
            },
            {
                answerContent: 'Ngân',
                actived: false
            }
        ],
        completed: false
    }, {
        id: 1,
        quest: 'Câu 2: Bao lâu nữa thì bán được một tỷ gói mè? Trả lời',
        answer: [
            {
                answerContent: 'Một tuần',
                actived: false
            },
            {
                answerContent: 'Một tháng',
                actived: false
            },
            {
                answerContent: 'Một năm',
                actived: false
            },
            {
                answerContent: 'Một đấm',
                actived: false
            }
        ],
        completed: false
    }, {
        id: 2,
        quest: 'Câu 3: Bao lâu nữa thì được một tỷ tiền lương? Trả lời',
        answer: [
            {
                answerContent: 'Một tuần',
                actived: false
            },
            {
                answerContent: 'Một tháng',
                actived: false
            },
            {
                answerContent: 'Một năm',
                actived: false
            },
            {
                answerContent: 'Một đấm',
                actived: false
            }
        ],
        completed: false
    }, {
        id: 3,
        quest: 'Câu 4: Ai là đứa trẻ chui ra từ bụi rậm? Trả lời',
        answer: [
            {
                answerContent: 'Hoàng Long',
                actived: false
            },
            {
                answerContent: 'Quách Dũng',
                actived: false
            },
            {
                answerContent: 'Trung Anh',
                actived: false
            },
            {
                answerContent: 'Cả 3',
                actived: false
            }
        ],
        completed: false
    }, {
        id: 4,
        quest: 'Câu 5: Ai đưa đồ cho Trung Anh chơi?',
        answer: [
            {
                answerContent: 'Hoàng Long',
                actived: false
            },
            {
                answerContent: 'Quách Dũng',
                actived: false
            },
            {
                answerContent: 'Hải dớ',
                actived: false
            },
            {
                answerContent: 'Trung Anh tự lấy',
                actived: false
            }
        ],
        completed: false
    }, {
        id: 5,
        quest: 'Câu 6: Khi rảnh rỗi Linh sẽ làm gì?',
        answer: [
            {
                answerContent: 'Làm việc',
                actived: false
            },
            {
                answerContent: 'Làm giá',
                actived: false
            },
            {
                answerContent: 'Làm thinh',
                actived: false
            },
            {
                answerContent: 'Làm phiền người khác',
                actived: false
            }
        ],
        completed: false
    },
]
const questContent = $('.quest__content')
const answerContent = $$('.answer__item-content')
const answerList = $$('.answer__item')
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

// ========================== HANDLE ACTIVE QUEST LIST ==========================