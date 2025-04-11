document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.filter');
  const checkboxes = form.querySelectorAll('input[type="checkbox"]');
  const items = document.querySelectorAll('.item-card');

  const getSelectedBrands = () => {
    return Array.from(checkboxes)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.name.toLowerCase());
  };

  const getCardBrand = (card) => {
    const brandEl = card.querySelector('.catalog-item-title');
    if (!brandEl) return '';
    return brandEl.textContent
      .replace(/[«»]/g, '')
      .toLowerCase()
      .replace(/\s+/g, '-')
      .trim();
  };

  const filterItems = () => {
    const selectedBrands = getSelectedBrands();

    items.forEach(card => {
      const brand = getCardBrand(card);
      if (selectedBrands.includes(brand)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  };

  form.addEventListener('change', filterItems);
  filterItems(); // первичная фильтрация при загрузке
});