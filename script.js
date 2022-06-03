let showMoreButton = document.querySelector('.button');
let hiddenItems = document.querySelectorAll('.hidden-item');
  
showMoreButton.addEventListener('click', function(){

      if(showMoreButton.classList[1] === 'show-more'){

        showMoreButton.classList.remove('show-more');
        showMoreButton.classList.add('hide-more');
        showMoreButton.innerHTML = "Скрыть";

          for(i=0; i < hiddenItems.length; i++){
            console.log(hiddenItems[i]);
            hiddenItems[i].classList.remove('hidden-item')
            hiddenItems[i].classList.add('showed-item')
          }
      } else {

        showMoreButton.classList.remove('hide-more');
        showMoreButton.classList.add('show-more');
        showMoreButton.innerHTML = "Показать всё";

          for(i=0; i < hiddenItems.length; i++){
            console.log(hiddenItems[i]);
            hiddenItems[i].classList.remove('showed-item')
           hiddenItems[i].classList.add('hidden-item')
          }
      }
  });
