fetch('menu.json')
  .then(response => response.json())
  .then(data => {
    const menuContainer = document.getElementById('menu');

    for (const categoria in data) {
      const sectionTitle = document.createElement('h2');
      sectionTitle.textContent = categoria;
      menuContainer.appendChild(sectionTitle);

      data[categoria].forEach(item => {
        const div = document.createElement('div');
        div.classList.add('menu-item');
        div.innerHTML = `
          <h3>${item.nome}</h3>
          <p>${item.descrizione}</p>
          <p><strong>${item.prezzo}</strong></p>
        `;
        menuContainer.appendChild(div);
      });
    }
  })
  .catch(error => console.error('Errore nel caricamento del menu:', error));
