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

let SLIDER_ACTIVE_BLOCK = 1


MENU.addEventListener('click', (event) =>{
    MENU.querySelectorAll('li > a').forEach(el => {el.classList.remove('active')});
    event.target.classList.add('active');
})

NEXT.onclick = () => {
    SLIDER.querySelectorAll('div > .slide').forEach(el => el.classList.remove('active'));
    SLIDER_ACTIVE_BLOCK++
    SLIDER_ACTIVE_BLOCK = (SLIDER_ACTIVE_BLOCK > SLIDER.querySelectorAll('div > .slide').length ? 1 : SLIDER_ACTIVE_BLOCK);
    SLIDER.querySelectorAll('div > .slide')[SLIDER_ACTIVE_BLOCK-1].classList.add('active');
}

BACK.onclick = () => {
    SLIDER.querySelectorAll('div > .slide').forEach(el => el.classList.remove('active'));
    SLIDER_ACTIVE_BLOCK--
    SLIDER_ACTIVE_BLOCK = (SLIDER_ACTIVE_BLOCK < 1 ? SLIDER.querySelectorAll('div > .slide').length : SLIDER_ACTIVE_BLOCK);
    SLIDER.querySelectorAll('div > .slide')[SLIDER_ACTIVE_BLOCK-1].classList.add('active');
}


FILTERS.addEventListener('click', (event) =>{
    FILTERS.querySelectorAll('button').forEach(el => el.classList.remove('active'));
    if (event.target.textContent == "All"){
        WORK_EXAMPLES.innerHTML = `<li><img src="assets/img/portfolio_1.jpg" alt="portfolio"></li>
                                    <li><img src="assets/img/portfolio_2.jpg" alt="portfolio"></li>
                                    <li><img src="assets/img/portfolio_3.jpg" alt="portfolio"></li>
                                    <li><img src="assets/img/portfolio_4.jpg" alt="portfolio"></li>
                                    <li><img src="assets/img/portfolio_5.jpg" alt="portfolio"></li>
                                    <li><img src="assets/img/portfolio_6.jpg" alt="portfolio"></li>
                                    <li><img src="assets/img/portfolio_7.jpg" alt="portfolio"></li>
                                    <li><img src="assets/img/portfolio_8.jpg" alt="portfolio"></li>
                                    <li><img src="assets/img/portfolio_9.jpg" alt="portfolio"></li>
                                    <li><img src="assets/img/portfolio_10.jpg" alt="portfolio"></li>
                                    <li><img src="assets/img/portfolio_11.jpg" alt="portfolio"></li>
                                    <li><img src="assets/img/portfolio_12.jpg" alt="portfolio"></li>
                    `
    } else if (event.target.textContent == "Web Design"){
        WORK_EXAMPLES.innerHTML = `<li><img src="assets/img/portfolio_4.jpg" alt="portfolio"></li>
                                    <li><img src="assets/img/portfolio_5.jpg" alt="portfolio"></li>
                                    <li><img src="assets/img/portfolio_6.jpg" alt="portfolio"></li>
                                    <li><img src="assets/img/portfolio_7.jpg" alt="portfolio"></li>
                                    <li><img src="assets/img/portfolio_8.jpg" alt="portfolio"></li>
                                    <li><img src="assets/img/portfolio_9.jpg" alt="portfolio"></li>
                                    <li><img src="assets/img/portfolio_10.jpg" alt="portfolio"></li>
                                    <li><img src="assets/img/portfolio_11.jpg" alt="portfolio"></li>
                                    <li><img src="assets/img/portfolio_12.jpg" alt="portfolio"></li>
                                    <li><img src="assets/img/portfolio_1.jpg" alt="portfolio"></li>
                                    <li><img src="assets/img/portfolio_2.jpg" alt="portfolio"></li>
                                    <li><img src="assets/img/portfolio_3.jpg" alt="portfolio"></li>
                    `
    } else if (event.target.textContent == "Graphic Design"){
        WORK_EXAMPLES.innerHTML = `<li><img src="assets/img/portfolio_7.jpg" alt="portfolio"></li>
                                    <li><img src="assets/img/portfolio_8.jpg" alt="portfolio"></li>
                                    <li><img src="assets/img/portfolio_9.jpg" alt="portfolio"></li>
                                    <li><img src="assets/img/portfolio_10.jpg" alt="portfolio"></li>
                                    <li><img src="assets/img/portfolio_11.jpg" alt="portfolio"></li>
                                    <li><img src="assets/img/portfolio_12.jpg" alt="portfolio"></li>
                                    <li><img src="assets/img/portfolio_1.jpg" alt="portfolio"></li>
                                    <li><img src="assets/img/portfolio_2.jpg" alt="portfolio"></li>
                                    <li><img src="assets/img/portfolio_3.jpg" alt="portfolio"></li>
                                    <li><img src="assets/img/portfolio_4.jpg" alt="portfolio"></li>
                                    <li><img src="assets/img/portfolio_5.jpg" alt="portfolio"></li>
                                    <li><img src="assets/img/portfolio_6.jpg" alt="portfolio"></li>
                    `
    } else if (event.target.textContent == "Artwork"){
        WORK_EXAMPLES.innerHTML = `<li><img src="assets/img/portfolio_10.jpg" alt="portfolio"></li>
                                    <li><img src="assets/img/portfolio_11.jpg" alt="portfolio"></li>
                                    <li><img src="assets/img/portfolio_12.jpg" alt="portfolio"></li>
                                    <li><img src="assets/img/portfolio_1.jpg" alt="portfolio"></li>
                                    <li><img src="assets/img/portfolio_2.jpg" alt="portfolio"></li>
                                    <li><img src="assets/img/portfolio_3.jpg" alt="portfolio"></li>
                                    <li><img src="assets/img/portfolio_4.jpg" alt="portfolio"></li>
                                    <li><img src="assets/img/portfolio_5.jpg" alt="portfolio"></li>
                                    <li><img src="assets/img/portfolio_6.jpg" alt="portfolio"></li>
                                    <li><img src="assets/img/portfolio_7.jpg" alt="portfolio"></li>
                                    <li><img src="assets/img/portfolio_8.jpg" alt="portfolio"></li>
                                    <li><img src="assets/img/portfolio_9.jpg" alt="portfolio"></li>
                    `
    } 

    event.target.classList.add('active');
})

WORK_EXAMPLES.addEventListener('click', (event) =>{
    WORK_EXAMPLES.querySelectorAll('li').forEach(el => el.querySelector('img').classList.remove('active'));
    event.target.classList.add('active');
})

PHONE_1.addEventListener('click', (event) =>{
    !PHONE_1.querySelector('.phoneLeftBackground').classList[1] 
    ? PHONE_1.querySelector('.phoneLeftBackground').classList.add('displayNone') 
    : PHONE_1.querySelector('.phoneLeftBackground').classList.remove('displayNone')
})

PHONE_2.addEventListener('click', (event) =>{
    !PHONE_2.querySelector('.phoneRightBackground').classList[1] 
    ? PHONE_2.querySelector('.phoneRightBackground').classList.add('displayNone') 
    : PHONE_2.querySelector('.phoneRightBackground').classList.remove('displayNone')
})

PHONE_3.addEventListener('click', (event) =>{
    !PHONE_3.querySelector('.phoneCenter').classList[1] 
    ? PHONE_3.querySelector('.phoneCenter').classList.add('displayNone') 
    : PHONE_3.querySelector('.phoneCenter').classList.remove('displayNone')
})

SUBMIT_FORM.onclick = () => {
   
}
