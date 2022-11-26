export const sendData = async (url, data) => {
    const response = await fetch(url, {
       method: "POST",
       body: data,
    });

    if(response.ok) {
       alert(`Форма успешно отправлена на сервер`);
    }  
    else throw new Error(`Ошибка!`);
}
