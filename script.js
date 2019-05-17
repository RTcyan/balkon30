let imageBlock = document.querySelector('.about-image'),
    line = imageBlock.querySelector('.line'),
    image = imageBlock.querySelector('.balkon')
    burgerButton = {
      item: document.querySelector('.header-burger_button'),
      active: false
    },
    nav = {
      item: document.querySelector('.header-nav'),
      active: false
    };

burgerButton.item.addEventListener('click',() => {
  if (burgerButton.active){
    burgerButton.item.classList.remove('active');
    nav.item.classList.remove('active');
    burgerButton.active = false;
    nav.active = false;
  } else{
    burgerButton.item.classList.add('active');
    nav.item.classList.add('active');
    burgerButton.active = true;
    nav.active = true;
  }
});

imageBlock.addEventListener('mousemove',function(event){
  // console.log(event.offsetY);
  image.style.height = event.offsetY+'px';
  console.log(imageBlock.scrollHeight*0.72);
  if (event.offsetY<imageBlock.scrollHeight*0.82){
    line.style.display = 'block'
    line.style.top = event.offsetY+'px';
  }
});
