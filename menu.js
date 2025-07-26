fetch('menu.json')
  .then(response => response.json())
  .then(data => {
    const menuContainer = document.getElementById('menu');

    for (const categoria in data) {
      const section = document.createElement('div');
      section.classList.add('menu-section');

      const sectionTitle = document.createElement('h2');
      sectionTitle.textContent = categoria;
      section.appendChild(sectionTitle);

      data[categoria].forEach(item => {
        const div = document.createElement('div');
        div.classList.add('menu-item');

        const imgHTML = item.img ? `<img src="${item.img}" alt="${item.nome}" class="menu-item-img">` : '';

        div.innerHTML = `
          ${imgHTML}
          <h3>${item.nome}</h3>
          <p>${item.descrizione}</p>
          <p><strong>${item.prezzo}</strong></p>
        `;
        section.appendChild(div);
      });

      menuContainer.appendChild(section);
    }
  })
  .catch(error => console.error('Errore nel caricamento del menu:', error));
