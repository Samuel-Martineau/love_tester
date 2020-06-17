window.addEventListener('load', () => {
  const preloader = document.querySelector('#preloader');
  const bg = document.querySelector('#page-bg');
  const app = document.querySelector('#app');
  setTimeout(() => {
    preloader.classList.add('preloader-finish');
    app.classList.remove('hidden');
    bg.style.zIndex = '-999';
  }, 500);
});
