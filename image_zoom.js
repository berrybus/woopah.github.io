window.onload = function() {
  const imgs = document.querySelectorAll('.gallery img');
  const fullPage = document.querySelector('#fullpage');
  const bigImg = document.querySelector('#bigimg');
  const body = document.querySelector('body');

  imgs.forEach(img => {
    img.addEventListener('click', function() {
      fullPage.style.display = 'flex';
      bigImg.setAttribute('src', img.getAttribute('src'));
      body.style.height = "100%";
      body.style.overflowY = "hidden";
      document.ontouchmove = function(event) {
        event.preventDefault();
      }
    });
  });

  bigImg.addEventListener('click', function() {
    fullPage.style.display = 'none';
    body.style.height = "";
    body.style.overflowY = "";
    document.ontouchmove = null;
  })
  fullPage.addEventListener('click', function() {
    fullPage.style.display = 'none';
    body.style.height = "";
    body.style.overflowY = "";
    document.ontouchmove = null;
  })
}
