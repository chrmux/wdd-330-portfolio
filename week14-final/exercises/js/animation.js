const addItems = document.querySelector('.add-items');
  const itemsList = document.querySelector('.plates');
  const removeItem = document.querySelector('.remove');
  const items = JSON.parse(localStorage.getItem('items')) || [];

  function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
      text,
      done: false
    };

    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
  }

  function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
      return `
        <li>
          <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
          <label for="item${i}">${plate.text}</label>
          <button type="button" class="remove" onclick="delete">Remove 🗑️</button>
          <button type="button">Edit ✎</button>
          <span class="display__time-left"></span>
          <span class="display__end-time"></span>
        </li>
      `;
    }).join('');
  }

  function toggleDone(e) {
    if (!e.target.matches('input')) return; // skip this unless it's an input
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
  }


  addItems.addEventListener('submit', addItem);
  itemsList.addEventListener('click', toggleDone);
  itemsList.removeEventListener('click', remove);

  populateList(items, itemsList);