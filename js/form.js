
let form = document.querySelector(".post-form");
let input = document.querySelector(".post-from__input");

const sendData = async (url, data) => {
     const response = await fetch(url, {
        method: "POST",
        body: data,
     });

     if(response.ok) {
        alert(`Форма успешно отправлена на сервер`);
     }  
     else throw new Error(`Ошибка!`);
}
let data =new FormData(form)
form.addEventListener("submit", e => {
    e.preventDefault();
    sendData('https://jsonplaceholder.typicode.com/posts',data);
})





