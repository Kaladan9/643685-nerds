var items = document.querySelectorAll('.product-cards-item');
var activeElement = null;

function eventHandler(evt) {
  var linkWrapper = evt.target.querySelector('.product-cards-item .coast-info');

  if (evt.target.classList.contains('product-cards-item')) {
    if (activeElement) activeElement.classList.remove('coast-info-active');

    linkWrapper.classList.add('coast-info-active');
    activeElement = linkWrapper;
  }
}

window.addEventListener("keyup", eventHandler, false);
