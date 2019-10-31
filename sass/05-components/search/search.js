var searchButton = document.querySelector('.search-button');
var searchInput = document.getElementById('search');

searchButton.addEventListener('click', checkInput);

function checkInput(e) {
  e.preventDefault();

  if(searchInput.value === "") {
    searchInput.setAttribute('aria-invalid', true);
    searchInput.focus();
  }
}