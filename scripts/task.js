// Алгоритмическая задача 1015: выбор формулы по условию.
function calculate() {
  const input = document.getElementById('a');
  const output = document.getElementById('result');
  const explanation = document.getElementById('formula');

  if (input.value.trim() === '') {
    output.value = 'Введите число A';
    explanation.innerText = 'Пустое поле.';
    return;
  }

  const a = Number(input.value);
  if (!Number.isFinite(a)) {
    output.value = 'Ошибка ввода';
    explanation.innerText = 'Нужно ввести вещественное число.';
    return;
  }

  let x;
  if (a < 62) {
    x = a ** 2 + 4 + 5;
    explanation.innerText = 'A < 62: использована первая формула.';
  } else {
    x = 1 / (a ** 2) + 4 * a + 5;
    explanation.innerText = 'A >= 62: использована вторая формула.';
  }
  output.value = Number.isFinite(x) ? String(Number(x.toFixed(6))) : 'Число слишком большое';
}

document.getElementById('calculate').addEventListener('click', calculate);
