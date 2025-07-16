const input = document.querySelector('#todo-input');
const button = document.querySelector('#add-btn');
const list = document.querySelector('#todo-list');

button.addEventListener('click', () => {
  const text = input.value.trim();
  if (text === '') return;

  const li = document.createElement('li');
  li.textContent = text;

  li.addEventListener('click', () => {
    li.classList.add('removed');
    setTimeout(() => li.remove(), 500); 
  });

  list.appendChild(li);
  input.value = '';
});
