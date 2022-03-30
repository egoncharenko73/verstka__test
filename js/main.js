function rangeSlide(value) {
    document.getElementById('percent').innerHTML = value;
}

document.addEventListener('DOMContentLoaded', function() {
    var ddBtn = document.querySelector('.dropdown__button');
    var ddListWrap = document.querySelector('.dropdown__list-wrap');
    var ddForm = document.querySelector('.dropdown');
    if(ddBtn){
        ddBtn.addEventListener('click', function (e) {
            ddBtn.classList.toggle('dropdown__button_open');
            ddListWrap.classList.toggle('dropdown__list-wrap_visible');
            ddForm.classList.toggle('dropdown_open');
        })
    }

    var dropdown_list = document.querySelectorAll('.dropdown__list-item');
    var dropdown_listArray = Array.prototype.slice.call(dropdown_list);
    dropdown_listArray.forEach(function(listItem){
        listItem.addEventListener('click', function(e){
            e.stopPropagation();
            document.querySelector('.dropdown__button').innerText = this.innerText;
            document.querySelector('.dropdown__list-wrap').classList.remove('dropdown__list-wrap_visible');
            document.querySelector('.dropdown__button').classList.remove('dropdown__button_open');
            document.querySelector('.dropdown').classList.remove('dropdown_open');
        })
    })

    document.addEventListener('click',function(e){
        if (e.target !== document.querySelector('.dropdown__button')){
            document.querySelector('.dropdown__list-wrap').classList.remove('dropdown__list-wrap_visible');
            document.querySelector('.dropdown__button').classList.remove('dropdown__button_open');
            document.querySelector('.dropdown').classList.remove('dropdown_open');
        }
    })

}, false);