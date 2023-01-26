function createImageCarousel(images) 
    var carousel = document.createElement('div');
    carousel.classList.add('header-img-container');
    var currentIndex = 0;
    var currentImage = document.createElement('img');
    currentImage.src = images[currentIndex];
    currentImage.classList.add('header-img');
    carousel.appendChild(currentImage);
    var nextButton = document.createElement('button');
    nextButton.innerHTML = '>';
    nextButton.classList.add('next-button');
    var prevButton = document.createElement('button');
    prevButton.innerHTML = '<';
    prevButton.classList.add('previous-button');
    carousel.appendChild(prevButton);
    carousel.appendChild(nextButton);
    var slideInterval = setInterval(function(){
        currentIndex++;
        if(currentIndex >= images.length){
            currentIndex = 0;
        }
        currentImage.fadeOut(1000, function(){
            currentImage.src = images[currentIndex];
            currentImage.fadeIn(1000);
        });
    },3000);
    nextButton.addEventListener('click', function() {
        clearInterval(slideInterval);
        currentIndex++;
        if(currentIndex >= images.length){
            currentIndex = 0;
        }
        currentImage.classList.add("fade-out");
        setTimeout(() => {
            currentImage.src = images[currentIndex];
            currentImage.classList.remove("fade-out");
        }, 500);
    });
