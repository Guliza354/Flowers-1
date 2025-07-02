document.getElementById('orderBtn').addEventListener('click', () => {
  const successMessage = document.getElementById('success-message');
  successMessage.style.display = 'block';
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
});



 document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const title = params.get("title");
    const price = params.get("price");
    const img = params.get("img");

    if (title && price && img) {
      const orderSummary = document.querySelector(".order-summary");
      const list = orderSummary.querySelector("ul");

      // Очищаем список заказов
      list.innerHTML = "";

      // Добавляем товар
      const li = document.createElement("li");
      li.textContent = `${title} — 1 шт — ${price} грн`;
      list.appendChild(li);

      // Добавляем изображение товара
      const image = document.createElement("img");
      image.src = img;
      image.alt = title;
      orderSummary.prepend(image);

      // Удаляем старые суммы
      orderSummary.querySelectorAll("p, hr, h3:nth-of-type(2)").forEach(el => el.remove());

      // Обновляем суммы
      const summa = parseInt(price);
      const dostavka = 100;
      const foto = 15;
      const total = summa + dostavka + foto;

      orderSummary.innerHTML += `
        <p><strong>Сумма заказа:</strong> ${summa} грн</p>
        <p><strong>Доставка:</strong> ${dostavka} грн</p>
        <p><strong>Фотоотчет:</strong> ${foto} грн</p>
        <hr>
        <h3>Всего: ${total} грн</h3>
      `;

     

      // Добавляем слушатель на кнопку
      setTimeout(() => {
        document.getElementById('orderBtn').addEventListener('click', () => {
          const successMessage = document.getElementById('success-message');
          successMessage.style.display = 'block';
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
          });
        });
      }, 100);
    }
  });