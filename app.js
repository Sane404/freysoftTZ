let paginator_1 = document.querySelectorAll('.paginator_recruitment');
paginator_1.forEach(item => item.addEventListener('click', switchCard_1));
let recruitment_slider = document.querySelector('.recruitment__stages');
function switchCard_1(e) {
    let amount = e.target.dataset.translate;
    console.log(amount);
    recruitment_slider.style.transform = `translateX(-${amount}%)`;
}
///////////
let paginator_2 = document.querySelectorAll('.paginator_candidate');
paginator_2.forEach(item => item.addEventListener('click', switchCard_2));
let candidate_slider = document.querySelector('.candidate-perks__wrap');
function switchCard_2(e) {
    let amount = e.target.dataset.translate;
    console.log(amount);
    candidate_slider.style.transform = `translateX(-${amount}%)`;
}
let burger = document.querySelector('.header-wrap__burger_icon')
let list = document.querySelector('.header_links')
burger.addEventListener('click', showList);
function showList() {
    list.classList.toggle('visible');
}