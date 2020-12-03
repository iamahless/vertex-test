const showText = () => {
  let windowWidth = window.innerWidth;
  if (windowWidth <= 601) {
    let textContent = document.querySelector('.text-content');
    if (textContent.style.display === 'none') {
      textContent.style.display = 'block';
    } else {
      textContent.style.display = 'none';
    }
  }
};
