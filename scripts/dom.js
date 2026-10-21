// Считываем фамилию, имя и год рождения из HTML-элементов.
function readPassport() {
  const surname = document.getElementById('lastname').innerText;
  const name = document.getElementById('firstname').innerText;
  const year = document.getElementById('birthyear').innerText;
  document.getElementById('dom-result').innerText =
    'Фамилия: ' + surname + ', имя: ' + name + ', год рождения: ' + year;
}
document.getElementById('read-dom').addEventListener('click', readPassport);
