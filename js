window.addEventListener("DOMContentLoaded", функция (четная) {

    console.log("DOM полностью загружен и проанализирован");

    пусть b = document.getElementById("щелчок");

    b.addEventListener("нажмите", вычислите);

});

функция вычислить() {
  пусть firstProduct = Номер(document.getElementById('Первый продукт').значение);
  пусть firstLot = Номер(document.getElementById('Первый лот').значение);
  пусть secondProduct = Номер(document.getElementById("Второй продукт").значение);
  пусть secondLot = Номер(document.getElementById("Второй лот").значение);

  пусть re = новое регулярноевыражение(/^[0-9]+$/i);
  если (
    !(
      повторныйтест(первый продукт) &&
      повторныйтест(первый лот) &&
      повторныйтест(второй продукт) &&
      повторныйтест(второй лот)
    )
  ) {
    alert('Нужно писать число!');
  } иначе , если (firstProduct == ") {
    alert('вы не указали цену 1 товару');
  } иначе , если (firstLot == ") {
    alert('вы не указали кол-во 1 товара');
  } иначе , если (второй продукт == ") {
    alert('вы не указали цену 2 товару');
  } иначе , если (второй лот == ") {
    alert('вы не указали кол-во 2 товара');
  } еще {
     постоянная стоимость = первый продукт* Первый лот + второй продукт * Второй лот;
    document.getElementById("стоимость").innerHTML =
      'Стоимость равна: ' + cost + ' Руб.';
  }
}
