const params = new URLSearchParams(window.location.search);
    const title = params.get('title') || 'Без названия';
    const price = params.get('price') || '0';
    const img = params.get('img') || '';

    // Заполняем поля
    // document.getElementById('flower-title').textContent = title; 
    // document.getElementById('flower-price').textContent = price;
    // document.getElementById('flower-img').src = img;

    // Обработка добавления в корзину
    document.getElementById('add-to-cart').addEventListener('click', () => {
      const qty = document.getElementById('quantity').value;
      alert(`Добавлено в корзину: ${qty} × ${title} (${price} сом каждая)`);
      // здесь можно добавить логику для сохранения в localStorage или на сервер
    });