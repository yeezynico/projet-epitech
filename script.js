function changeImage(carouselId,  imageSrc) {
    const carousel = document.getElementById(carouselId);
    const activeItem = carousel.querySelector('.carousel-item.active img');
    activeItem.src = imageSrc;
}