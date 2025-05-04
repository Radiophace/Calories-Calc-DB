const button = document.getElementById("submit-btn"); //Доступ к самой кнопке

function buttonClick() {
  const productName = document.getElementById("product-name").value;
  const calories = parseInt(document.getElementById("calories").value);
  // Шаг 1: получаем текущие продукты из localStorage
  let products = JSON.parse(localStorage.getItem("products")) || [];

  const existingProduct = products.find(
    (p) => p.name.toLowerCase() === productName.toLowerCase()
  );
  if (existingProduct) {
    // Продукт найден — обновляем его калории
    existingProduct.calories = calories;
    console.log(`Обновлены калории продукта ${productName}`);
  } else {
    const newProduct = {
      name: productName,
      calories: calories,
    };
    products.push(newProduct);
    console.log("Продукт сохранён:", newProduct);
  }

  // Шаг 2: добавляем новый продукт

  // Шаг 3: сохраняем обратно
  localStorage.setItem("products", JSON.stringify(products));
  // Выводим в консоль для проверки

  console.log("Button clicked");
}

const clearButton = document.getElementById("clear-btn");
//small function to clear local storage
function localClear() {
  localStorage.clear();
}

button.addEventListener("click", buttonClick);

clearButton.addEventListener("click", localClear);
