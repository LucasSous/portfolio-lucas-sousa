const getElement = (...queries) => document.querySelector(...queries);

const activeModalClass = 'modal-show';

// Modal Bookstory
const buttonModalBookstory = getElement('.open-modal-bookstory');
const buttonCloseModalBookstory = getElement('.close-modal-bookstory');
const containerBookstory = getElement('.bookstory');
const modalBookstory = getElement('.modal-bookstory');

// Modal Bookstory Mobile
const buttonModalBookstoryMobile = getElement('.open-modal-bookstory-mobile');
const buttonCloseModalBookstoryMobile = getElement('.close-modal-bookstory-mobile');
const containerBookstoryMobile = getElement('.bookstory-mobile');
const modalBookstoryMobile = getElement('.modal-bookstory-mobile');

// Modal Pokedex
const buttonModalPokedex = getElement('.open-modal-pokedex');
const buttonCloseModalPokedex = getElement('.close-modal-pokedex');
const containerPokedex = getElement('.pokedex');
const modalPokedex = getElement('.modal-pokedex');

const openModal = (param) => {
  param.classList.add(activeModalClass);
};

const closeModal = (param) => {
  param.classList.remove(activeModalClass);
};

// Modal Bookstory
buttonModalBookstory.addEventListener('click', () => {
  openModal(containerBookstory);
});

containerBookstory.addEventListener('click', (e) => {
  if (modalBookstory.contains(e.target)) return;
  closeModal(containerBookstory);
});

buttonCloseModalBookstory.addEventListener('click', () => {
  closeModal(containerBookstory);
});

// Modal Bookstory Mobile
buttonModalBookstoryMobile.addEventListener('click', () => {
  openModal(containerBookstoryMobile);
});

containerBookstoryMobile.addEventListener('click', (e) => {
  if (modalBookstoryMobile.contains(e.target)) return;
  closeModal(containerBookstoryMobile);
});

buttonCloseModalBookstoryMobile.addEventListener('click', () => {
  closeModal(containerBookstoryMobile);
});

// Modal Pokedex
buttonModalPokedex.addEventListener('click', () => {
  openModal(containerPokedex);
});

containerPokedex.addEventListener('click', (e) => {
  if (modalPokedex.contains(e.target)) return;
  closeModal(containerPokedex);
});

buttonCloseModalPokedex.addEventListener('click', () => {
  closeModal(containerPokedex);
});
