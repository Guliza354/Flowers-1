const reviews = [
    {
      name: "Арсен С.",
      avatar: "https://randomuser.me/api/portraits/men/85.jpg",
      rating: 5,
      text: "Потрясающий сервис! Менеджер сразу связался, учёл все пожелания, доставка вовремя. Цветы свежайшие, жена в восторге!",
      date: "1 июня 2025"
    },
    {
      name: "Светлана И.",
      avatar: "https://randomuser.me/api/portraits/women/51.jpg",
      rating: 4,
      text: "Красивый букет, отличный запах! Единственное – курьер немного задержался, но мне заранее позвонили. Всё отлично!",
      date: "28 мая 2025"
    },
    {
      name: "Нурбек А.",
      avatar: "https://randomuser.me/api/portraits/men/12.jpg",
      rating: 5,
      text: "Очень доволен! Заказывал маме на день рождения — доставка точь-в-точь по времени, букет шикарный. Спасибо вам!",
      date: "25 мая 2025"
    },
    {
      name: "Жанара Т.",
      avatar: "https://randomuser.me/api/portraits/women/10.jpg",
      rating: 5,
      text: "Часто делаю здесь заказы, потому что знаю – будет красиво, аккуратно, и с душой. Очень приятно иметь дело с вами!",
      date: "20 мая 2025"
    },
    {
      name: "Айбек Р.",
      avatar: "https://randomuser.me/api/portraits/men/43.jpg",
      rating: 4,
      text: "Всё отлично. Немного переживал за оформление, но когда увидел — просто супер! Рекомендую магазин друзьям и коллегам.",
      date: "18 мая 2025"
    }
  ];

  const reviewsContainer = document.getElementById('reviews-container');

  reviews.forEach(review => {
    const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);

    const card = document.createElement('div');
    card.className = 'review-card';
    card.innerHTML = `
      <div class="review-header">
        <img src="${review.avatar}" alt="Аватар">
        <div class="review-name">${review.name}</div>
        <div class="review-rating">${stars.split('').map(s => `<span>${s}</span>`).join('')}</div>
      </div>
      <div class="review-text">${review.text}</div>
      <div class="review-date">${review.date}</div>
    `;

    reviewsContainer.appendChild(card);
  });