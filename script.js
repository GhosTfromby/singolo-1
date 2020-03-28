const MENU = document.getElementById('menu')
const FILTERS = document.getElementById('filters')
const WORK_EXAMPLES = document.getElementById('workExamples')
const SLIDER_BLOCK = document.getElementById('sliderBlock')
const SLIDER = document.getElementById('slider')
const BACK = document.getElementById('back')
const NEXT = document.getElementById('next')
const PHONE_1 = document.getElementById('phone1')
const PHONE_2 = document.getElementById('phone2')
const PHONE_3 = document.getElementById('phone3')
const SUBMIT_FORM = document.getElementById('submitForm')
const SUBMIT_FORM_OK = document.getElementById('submitFormOk')
const SUBMIT_FORM_OK_CLOSE = document.getElementById('submitFormOkClose')
const MESSAGE = document.getElementById('message')
const INPUT_NAME = document.getElementById('input-name')
const INPUT_EMAIL = document.getElementById('input-email')
const INPUT_SUBJECT = document.getElementById('input-subject')
const INPUT_DETAILS = document.getElementById('input-details')
const BURGER_MENU_BUTTON = document.getElementById('burgerMenuButton')
const NAV = document.getElementById('nav')
const LOGO = document.getElementById('logo')

let SLIDER_ACTIVE_BLOCK = 1
let SLIDER_ACTIVE_BLOCK_PREW = 1
let MENU_POSITION = 0

let workExamplesElements = []
WORK_EXAMPLES.querySelectorAll('li').forEach(el =>  workExamplesElements.push(el.outerHTML))

let shuffle = (arr, position) => {
    let resultArr = []
    for(let i = 0; i<arr.length;i++){
        let j = (position+i) % arr.length
        resultArr[i] = arr[j]
    }
    return resultArr
}

MENU.addEventListener('click', (event) => {

    MENU.querySelectorAll('li > a').forEach(el => { el.classList.remove('active') });
    event.target.classList.add('active');
    MENU_POSITION = 0
    NAV.classList.remove('nav0')
    LOGO.classList.remove('logoPosition')
    BURGER_MENU_BUTTON.classList.remove('activeMenu')
})

let sliderLeft = (argument, i) => {
    argument.style.left = i + '%'
}

NEXT.onclick = () => {
    SLIDER.querySelectorAll('div > .slide').forEach(el => el.classList.remove('active'));
    SLIDER_ACTIVE_BLOCK--
    SLIDER_ACTIVE_BLOCK = (SLIDER_ACTIVE_BLOCK < 1 ? SLIDER.querySelectorAll('div > .slide').length : SLIDER_ACTIVE_BLOCK);
    SLIDER_ACTIVE_BLOCK_PREW = SLIDER_ACTIVE_BLOCK - 1
    SLIDER_ACTIVE_BLOCK_PREW = (SLIDER_ACTIVE_BLOCK_PREW < 1 ? SLIDER.querySelectorAll('div > .slide').length : SLIDER_ACTIVE_BLOCK_PREW);

    sliderLeft(SLIDER.querySelectorAll('div > .slide')[SLIDER_ACTIVE_BLOCK - 1], -100)
    sliderLeft(SLIDER.querySelectorAll('div > .slide')[SLIDER_ACTIVE_BLOCK_PREW - 1], 0)
    SLIDER.querySelectorAll('div > .slide')[SLIDER_ACTIVE_BLOCK - 1].classList.add('active');
    SLIDER.querySelectorAll('div > .slide')[SLIDER_ACTIVE_BLOCK_PREW - 1].classList.add('active');
    let i = 0
    let fanctionNew = () => {
        if (i < 101) {
            sliderLeft((SLIDER.querySelectorAll('div > .slide')[SLIDER_ACTIVE_BLOCK - 1]), (-100 + i))
            sliderLeft((SLIDER.querySelectorAll('div > .slide')[SLIDER_ACTIVE_BLOCK_PREW - 1]), i)
            i++
            setTimeout(fanctionNew, 5)
        }
    }
    fanctionNew()
}


BACK.onclick = () => {
    SLIDER.querySelectorAll('div > .slide').forEach(el => el.classList.remove('active'));
    SLIDER_ACTIVE_BLOCK++
    SLIDER_ACTIVE_BLOCK = (SLIDER_ACTIVE_BLOCK > SLIDER.querySelectorAll('div > .slide').length ? 1 : SLIDER_ACTIVE_BLOCK);
    SLIDER_ACTIVE_BLOCK_PREW = SLIDER_ACTIVE_BLOCK + 1
    SLIDER_ACTIVE_BLOCK_PREW = (SLIDER_ACTIVE_BLOCK_PREW > SLIDER.querySelectorAll('div > .slide').length ? 1 : SLIDER_ACTIVE_BLOCK_PREW);

    sliderLeft(SLIDER.querySelectorAll('div > .slide')[SLIDER_ACTIVE_BLOCK - 1], 100)
    sliderLeft(SLIDER.querySelectorAll('div > .slide')[SLIDER_ACTIVE_BLOCK_PREW - 1], 0)
    SLIDER.querySelectorAll('div > .slide')[SLIDER_ACTIVE_BLOCK - 1].classList.add('active');
    SLIDER.querySelectorAll('div > .slide')[SLIDER_ACTIVE_BLOCK_PREW - 1].classList.add('active');
    let i = 100
    let fanctionNew = () => {
        if (i > -1) {
            sliderLeft((SLIDER.querySelectorAll('div > .slide')[SLIDER_ACTIVE_BLOCK - 1]), i)
            sliderLeft((SLIDER.querySelectorAll('div > .slide')[SLIDER_ACTIVE_BLOCK_PREW - 1]), (i - 100))
            i--
            setTimeout(fanctionNew, 5)
        }
    }
    fanctionNew()

}


FILTERS.addEventListener('click', (event) => {
    FILTERS.querySelectorAll('button').forEach(el => el.classList.remove('active'));
    if (event.target.textContent == "All") {
        WORK_EXAMPLES.innerHTML = workExamplesElements
    } else if (event.target.textContent == "Web Design") {
        WORK_EXAMPLES.innerHTML = shuffle(workExamplesElements , 3)
    } else if (event.target.textContent == "Graphic Design") {
        WORK_EXAMPLES.innerHTML = shuffle(workExamplesElements, 6)
    } else if (event.target.textContent == "Artwork") {
        WORK_EXAMPLES.innerHTML = shuffle(workExamplesElements, 9)
    }

    event.target.classList.add('active');
})

WORK_EXAMPLES.addEventListener('click', (event) => {
    WORK_EXAMPLES.querySelectorAll('li').forEach(el => el.querySelector('img').classList.remove('active'));
    console.log(event.target)
    event.target.classList.add('active');
})

PHONE_1.addEventListener('click', (event) => {
    !PHONE_1.querySelector('.phoneLeftBackground').classList[1]
        ? PHONE_1.querySelector('.phoneLeftBackground').classList.add('displayNone')
        : PHONE_1.querySelector('.phoneLeftBackground').classList.remove('displayNone')
})

PHONE_2.addEventListener('click', (event) => {
    !PHONE_2.querySelector('.phoneRightBackground').classList[1]
        ? PHONE_2.querySelector('.phoneRightBackground').classList.add('displayNone')
        : PHONE_2.querySelector('.phoneRightBackground').classList.remove('displayNone')
})

PHONE_3.addEventListener('click', (event) => {
    !PHONE_3.querySelector('.phoneCenter').classList[1]
        ? PHONE_3.querySelector('.phoneCenter').classList.add('displayNone')
        : PHONE_3.querySelector('.phoneCenter').classList.remove('displayNone')
})

let form = () => {
    let subject = INPUT_SUBJECT.value
    let details = INPUT_DETAILS.value
    if (INPUT_EMAIL.value && INPUT_NAME.value) {
        if (!subject) {
            subject = "Without subject"
        } else {
            subject = "Subject: " + subject
        }
        if (!details) {
            details = "Without description "
        } else {
            details = "Description: " + details
        }
        SUBMIT_FORM_OK.classList.remove('displayNone')
        MESSAGE.innerHTML = "<p>" + subject + "</p><p>" + details + "</p>"
        INPUT_SUBJECT.value = ""
        INPUT_EMAIL.value = ""
        INPUT_NAME.value = ""
        INPUT_DETAILS.value = ""
    }
}

submitFormOkClose.onclick = () => {
    SUBMIT_FORM_OK.classList.add('displayNone')
}



let onScroll = (ev) => {
    let position = window.scrollY
    let winHeight = document.documentElement.clientHeight
    let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      )

    document.querySelectorAll('main>section').forEach((el) => {
        if (position === 0){
            MENU.querySelectorAll('li > a').forEach(a => {
                a.classList.remove('active')
                if (a.innerHTML == 'HOME'){
                    a.classList.add('active')
                }
            });
        } else if (position === scrollHeight-winHeight) {
            MENU.querySelectorAll('li > a').forEach(a => {
                a.classList.remove('active')
                if (a.innerHTML == 'CONTACT'){
                    a.classList.add('active')
                }
            });
        } else if (el.offsetTop <= (position + 95) && (el.offsetTop + el.offsetHeight) > (position + 95)) {
            MENU.querySelectorAll('li > a').forEach(a => {
                a.classList.remove('active')
                if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    a.classList.add('active')
                }
            });
        }
    })
}

document.addEventListener('scroll', onScroll)

BURGER_MENU_BUTTON.addEventListener('click', (event) => {
    if (MENU_POSITION === 0){
        MENU_POSITION = 1
        NAV.classList.add('nav0')
        BURGER_MENU_BUTTON.classList.add('activeMenu')
        LOGO.classList.add('logoPosition')
    } else if (MENU_POSITION === 1){
        MENU_POSITION = 0
        NAV.classList.remove('nav0')
        BURGER_MENU_BUTTON.classList.remove('activeMenu')
        LOGO.classList.remove('logoPosition')
    }

})