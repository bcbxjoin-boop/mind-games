// По нажатию заменяем текст в макете паспорта.
let english = false;
const button = document.getElementById('change');
button.addEventListener('click', function () {
  english = !english;
  document.getElementById('lastname').innerText = english ? 'Kuznetsova' : 'Кузнецова';
  document.getElementById('firstname').innerText = english ? 'Ekaterina' : 'Екатерина';
  document.getElementById('year-label').innerText = english ? 'Year of birth' : 'Год рождения';
  document.getElementById('city-label').innerText = english ? 'Place of birth' : 'Место рождения';
  document.getElementById('city').innerText = english ? 'Saint Petersburg' : 'Санкт-Петербург';
  // Цифры года рождения в обеих версиях одинаковые.
  document.getElementById('birthyear').innerText = '2007';
});
