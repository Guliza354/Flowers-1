function filterCategory(category) {
  const cards = document.querySelectorAll('.product-card');
  const items = document.querySelectorAll('#categoryList li');
  items.forEach(item => item.classList.remove('active'));
  


  const clicked = [...items].find(item => item.textContent.includes(category.charAt(0).toUpperCase() + category.slice(1)) || category === 'all');
  if (clicked) clicked.classList.add('active');

  cards.forEach(card => {
    if (category === 'all') {
      card.style.display = 'block';
    } else {
      const cat = card.dataset.category;
      card.style.display = cat.includes(category) ? 'block' : 'none';
    }
  });
}



const moreBtn = document.querySelector('.more button');
const productGrid = document.getElementById('productGrid');

moreBtn.addEventListener('click', () => {

  const newProducts = `
    <div class="product-card" data-category="роз" data-color="красные" data-for="маме" data-reason="8 марта">
  <img src="https://sarflowers.ru/UserFiles/Image/Bukety_iz_cvetov/img307_82841.jpg">
  <div class="stars">★★★★★</div>
  <p class="title">101 красная роза</p>
  <p class="skidka">2800 сом</p>
  <p class="price">2280 сом</p>
  <button>Заказать</button>
  <a class="fast-order" href="/Flowers-1/pages/Oformit/oformit.html">Быстрый заказ</a>
</div>

<div class="product-card" data-category="пионы" data-color="розовые" data-for="сестре" data-reason="день рождения">
  <img src="https://cdn.flor2u.ru/images/uploads/conversion/be3/be3daf3c18e823c38aff9ec96c4c7297/be3daf3c18e823c38aff9ec96c4c7297-flor.detail.gallery.jpg">
  <div class="stars">★★★★★</div>
  <p class="title">25 розовых пионовидных роз</p>
  <p class="skidka">2800 сом</p>
  <p class="price">1680 сом</p>
  <button>Заказать</button>
  <a class="fast-order" href="/Flowers-1/pages/Oformit/oformit.html">Быстрый заказ</a>
</div>

<div class="product-card" data-category="альстромерии" data-color="белые" data-for="маме" data-reason="без повода">
  <img src="https://lh5.googleusercontent.com/bnYXhnFef-6A3xlMTOV7QQWmhEGwixR_XXxXImC0fYcQ7yRNn6dNpoWqKburkqjHqz5B-ojj_IQ4Gr-8zodaVv_kQ4ESUrW-qLV__1VmvQPV4JIEs8JxazzwnSSTifcDuwwuQxaHYIBvzhjX0Di7M4k">
  <div class="stars">★★★★★</div>
  <p class="title">Влюблённость</p>
  <p class="skidka">2800 сом</p>
  <p class="price">1270 сом</p>
  <button>Заказать</button>
  <a class="fast-order" href="/Flowers-1/pages/Oformit/oformit.html">Быстрый заказ</a>
</div>

<div class="product-card" data-category="орхидей" data-color="белые" data-for="папе" data-reason="день рождения">
  <img src="https://lh5.googleusercontent.com/bnYXhnFef-6A3xlMTOV7QQWmhEGwixR_XXxXImC0fYcQ7yRNn6dNpoWqKburkqjHqz5B-ojj_IQ4Gr-8zodaVv_kQ4ESUrW-qLV__1VmvQPV4JIEs8JxazzwnSSTifcDuwwuQxaHYIBvzhjX0Di7M4k">
  <div class="stars">★★★★★</div>
  <p class="title">Мечтательница</p>
  <p class="price">2280 сом</p>
  <button>Заказать</button>
  <a class="fast-order" href="/Flowers-1/pages/Oformit/oformit.html">Быстрый заказ</a>
</div>

<div class="product-card" data-category="лилии" data-color="белые" data-for="маме" data-reason="8 марта">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-y4gV2G7DxzCsLg4tZwRqBVsi2vj6iV5b2Q&s">
  <div class="stars">★★★★★</div>
  <p class="title">Корзина солнечного настроения</p>
  <p class="price">1680 сом</p>
  <button>Заказать</button>
  <a class="fast-order" href="/Flowers-1/pages/Oformit/oformit.html">Быстрый заказ</a>
</div>

<div class="product-card" data-category="орхидей" data-color="красные" data-for="сестре" data-reason="без повода">
  <img src="https://sarapul.ultraflowers.ru/wp-content/uploads/2024/06/buket-lyubovnaya-istoriya.jpg">
  <div class="stars">★★★★★</div>
  <p class="title">Цветочная клумба</p>
  <p class="price">1270 сом</p>
  <button>Заказать</button>
  <a class="fast-order" href="/Flowers-1/pages/Oformit/oformit.html">Быстрый заказ</a>
</div>

<div class="product-card" data-category="альстромерии" data-color="розовые" data-for="маме" data-reason="день рождения">
  <img src="https://cvety-deshevo.ru/wa-data/public/shop/products/13/06/613/images/1253/1253.750.jpg">
  <div class="stars">★★★★★</div>
  <p class="title">101 красная роза</p>
  <p class="skidka">2800 сом</p>
  <p class="price">2280 сом</p>
  <button>Заказать</button>
  <a class="fast-order" href="/Flowers-1/pages/Oformit/oformit.html">Быстрый заказ</a>
</div>

<div class="product-card" data-category="пионы" data-color="белые" data-for="папе" data-reason="без повода">
  <img src="https://www.annetflowers.com.ua/image/cache/catalog/buket-iz-7-pionov-zhozefina-800x800.png">
  <div class="stars">★★★★★</div>
  <p class="title">25 розовых пионовидных роз</p>
  <p class="price">1680 сом</p>
  <button>Заказать</button>
  <a class="fast-order" href="/Flowers-1/pages/Oformit/oformit.html">Быстрый заказ</a>
</div>

<div class="product-card" data-category="ризуля" data-color="красные" data-for="сестре" data-reason="8 марта">
  <img src="https://www.annetflowers.com.ua/image/cache/catalog/buket-iz-7-pionov-zhozefina-800x800.png">
  <div class="stars">★★★★★</div>
  <p class="title">Влюблённость</p>
  <p class="skidka">2800 сом</p>
  <p class="price">1270 грн</p>
  <button>Заказать</button>
  <a class="fast-order" href="/Flowers-1/pages/Oformit/oformit.html">Быстрый заказ</a>
</div>

<div class="product-card" data-category="роз" data-color="белые" data-for="маме" data-reason="8 марта">
  <img src="https://foni.papik.pro/uploads/posts/2024-09/foni-papik-pro-6kjt-p-kartinki-buket-pionov-na-prozrachnom-fone-3.png">
  <div class="stars">★★★★★</div>
  <p class="title">Мечтательница</p>
  <p class="price">2280 сом</p>
  <button>Заказать</button>
  <a class="fast-order" href="/Flowers-1/pages/Oformit/oformit.html">Быстрый заказ</a>
</div>

<div class="product-card" data-category="лилии" data-color="розовые" data-for="сестре" data-reason="без повода">
  <img src="https://my-present.ru/img/gigant/flowers/MP0099.png">
  <div class="stars">★★★★★</div>
  <p class="title">Корзина солнечного настроения</p>
  <p class="price">1680 сом</p>
  <button>Заказать</button>
  <a class="fast-order" href="/Flowers-1/pages/Oformit/oformit.html">Быстрый заказ</a>
</div>

<div class="product-card" data-category="альстромерии" data-color="белые" data-for="маме" data-reason="8 марта">
  <img src="https://foni.papik.pro/uploads/posts/2024-09/foni-papik-pro-6mja-p-kartinki-buket-pionov-na-prozrachnom-fone-13.png">
  <div class="stars">★★★★★</div>
  <p class="title">Цветочная клумба</p>
  <p class="price">1270 сом</p>
  <button>Заказать</button>
  <a class="fast-order" href="/Flowers-1/pages/Oformit/oformit.html">Быстрый заказ</a>
</div>


  `;

  productGrid.insertAdjacentHTML('beforeend', newProducts);
  moreBtn.style.display = 'none';

});






document.addEventListener('DOMContentLoaded', () => {
  const filterFor = document.getElementById('filterFor');
  const filterColor = document.getElementById('filterColor');
  const filterReason = document.getElementById('filterReason');
  const sortOption = document.getElementById('sortOption');

  const productGrid = document.getElementById('productGrid');
  const allCards = Array.from(productGrid.querySelectorAll('.product-card'));

  [filterFor, filterColor, filterReason, sortOption].forEach(select => {
    select.addEventListener('change', applyFiltersAndSort);
  });

  function applyFiltersAndSort() {
    const selectedFor = filterFor.value;
    const selectedColor = filterColor.value;
    const selectedReason = filterReason.value;
    const sort = sortOption.value;

    let filteredCards = allCards.filter(card => {
      const cardFor = card.dataset.for || '';
      const cardColor = card.dataset.color || '';
      const cardReason = card.dataset.reason || '';

      return (
        (!selectedFor || cardFor === selectedFor) &&
        (!selectedColor || cardColor === selectedColor) &&
        (!selectedReason || cardReason === selectedReason)
      );
    });

  
    filteredCards.sort((a, b) => {
      const priceA = parseInt(a.querySelector('.price')?.textContent || '0');
      const priceB = parseInt(b.querySelector('.price')?.textContent || '0');

      if (sort === 'дорогие') return priceB - priceA;
      if (sort === 'новые') return Math.random() - 0.5;
      return 0; 
    });


    allCards.forEach(card => {
      card.style.display = 'none';
    });

   
    filteredCards.forEach(card => {
      card.style.display = 'block';
    });
  }
});



// --- Обработка выбора валюты ---
document.querySelectorAll('.header-left select')[0].addEventListener('change', function () {
  alert('Вы выбрали валюту: ' + this.value);
});

// --- Обработка выбора языка ---
document.querySelectorAll('.header-left select')[1].addEventListener('change', function () {
  alert('Вы выбрали язык: ' + this.value);
});

// --- Обработка перехода на "Контакты" ---
document.querySelectorAll('.header-right div')[2].addEventListener('click', function () {
  window.location.href = '/Flowers-1/pages/Contacts/contacts.html'; // Поменяй на реальный путь
});

// --- Поиск по товарам ---
document.querySelector('.input input').addEventListener('input', function () {
  const query = this.value.toLowerCase();
  const products = document.querySelectorAll('.product-card');

  products.forEach(product => {
    const title = product.querySelector('.title').textContent.toLowerCase();
    if (title.includes(query)) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
});
