function readMore() {
    let hiddenSlider = document.getElementById("hidden-slider");
    let showMore = document.getElementById("show-more");
    
    if(hiddenSlider.style.display === "flex") {
        hiddenSlider.style.display = "none";
        showMore.innerHTML = "Показать всё";
        showMore.style.backgroundImage = "url(../images/labelicon.svg)";
    } else {
        hiddenSlider.style.display = "flex";
        showMore.innerHTML = "Скрыть";
        showMore.style.backgroundImage = "url(../images/labeliconreverse.svg)";
    }
}


