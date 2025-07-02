const items = document.querySelectorAll('.accordion-item');

items.forEach(item => {
    const title = item.querySelector('.accordion-title');
    const content = item.querySelector('.accordion-content');

    title.addEventListener('click', () => {
        const isOpen = content.classList.contains('open');

        // Закрыть все открытые
        items.forEach(i => {
            i.querySelector('.accordion-content').classList.remove('open');
            i.querySelector('.accordion-title').classList.remove('active');
            i.querySelector('.icon').textContent = '▶';
        });

        if (!isOpen) {
            content.classList.add('open');
            title.classList.add('active');
            title.querySelector('.icon').textContent = '▼';
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = null;
        }
    });
});