let divName = document.querySelector('.namee')
let divEmail = document.querySelector('.emaill')
let divTel = document.querySelector('.tell')
let names = document.querySelector('#name')
let email = document.querySelector('#email')
let tel = document.querySelector('#tel')
let btn = document.querySelector('#btn-form')
let error = document.createElement('div')
error.className = 'error'
error.style.color = 'red'
btn.disabled = true;

names.onblur = function () {

  const valOne = names.value;
  if (!(/^[А-ЯЁ][а-яё]+$/.test(valOne))) {
    this.classList.remove('valid');
    names.classList.add('invalid');
    error.innerHTML = 'Ошибка!Введите корректно ваше имя!Пример: Иван'
    divName.appendChild(error)
    names.focus();
  } else {
    this.classList.remove("error");
    this.classList.remove('invalid');
    names.classList.add('valid');
    error.innerHTML = "";
    buttonChecked()
  }
};
email.onblur = function () {
  var emailPattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  const val = email.value;
  if (!emailPattern.test(val)) {
    this.classList.remove('valid');
    email.classList.add('invalid');
    error.innerHTML = 'Ошибка!Введите корректно вашу почту!Пример: example@example.ru'
    divEmail.appendChild(error);
    email.focus();
  } else {
    this.classList.remove("error");
    this.classList.remove('invalid');
    email.classList.add('valid');
    error.innerHTML = "";
    buttonChecked()
  }
};
tel.onblur = function () {
  const val = tel.value;
  let proverkatel=/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
  if (!proverkatel.test(val)) { // не email
    this.classList.remove('valid');
    tel.classList.add('invalid');
    error.innerHTML = 'Ошибка!Введите корректно ваш телефон!Пример: 89123456789'
    divTel.appendChild(error);
    tel.focus();
  } else {
    this.classList.remove("error");
    this.classList.remove('invalid');
    tel.classList.add('valid');
    error.innerHTML = "";
    buttonChecked()
  }
};
function buttonChecked() {
  if (names.value !== "" && email.value !== "" && tel.value !== "") {
    btn.disabled = false;
  }
}
btn.addEventListener('click', function () {
  var obj = {
    name: names.value,
    email: email.value,
    tel: tel.value
  };
  console.log(JSON.stringify(obj.name));
  console.log(JSON.stringify(obj.email));
  console.log(JSON.stringify(obj.tel));
  alert("Спасибо " + names.value  + " ,Ваше сообщение принято!")

});