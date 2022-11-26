import {sendData} from './sendData.js';
import '../scss/test.scss';
let form = document.querySelector(".post-form");
let data =new FormData(form)
let button = document.querySelector(".post-form__order");
form.addEventListener("submit", e => {
    e.preventDefault();
    sendData('https://jsonplaceholder.typicode.com/posts',data);
})

button.insertAdjacentHTML('beforeend',`<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
<span class="sr-only">Загрузка...</span>`)



