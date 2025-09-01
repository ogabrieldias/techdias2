document.querySelectorAll('.card-seta').forEach(seta => {
    seta.addEventListener('click', function() {
        const cardInfo = this.parentElement;
        cardInfo.classList.toggle('open');
    });
});

















let elemScroll = document.querySelector(".scroll");
let elemContainer = elemScroll.querySelector(".scroll__container");
let elemFilhos = Array.from(elemContainer.children);

elemFilhos.forEach((item) => {
  let elemDuplicado = item.cloneNode(true);
  elemDuplicado.setAttribute("aria-hidden", true);
  elemContainer.appendChild(elemDuplicado);
});