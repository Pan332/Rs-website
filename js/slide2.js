// Define the images to be used in the carousel
var images = ['50000.PNG', 'property1.jpg', 'property2.jpg', 'property3.jpg'];

// Initialize the current index of the carousel
var currentIndex = 0;

// Select the next button and add a click event listener to it
var nextButton = document.getElementById("next-button");
nextButton.addEventListener("click", function(){
    // Clear the slide interval if it exists
    clearInterval(slideInterval);
    // Increment the current index
    currentIndex++;
    // If the current index is greater than the number of images, set it back to 0
    if(currentIndex >= images.length){
        currentIndex = 0;
    }
    // Select the current image element
    var currentImage = document.getElementById("current-picture");
    // Fade out the current image and change the src attribute to the next image
    currentImage.fadeOut(1000, function(){
        currentImage.src = images[currentIndex];
        currentImage.fadeIn(1000);
    });
});

// Select the previous button and add a click event listener to it
var prevButton = document.getElementById("previous-button");
prevButton.addEventListener("click", function(){
    // Clear the slide interval if it exists
    clearInterval(slideInterval);
    // Decrement the current index
    currentIndex--;
    // If the current index is less than 0, set it to the last index of the images array
    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }
    // Select the current image element
    var currentImage = document.getElementById("current-picture");
    // Fade out the current image and change the src attribute to the previous image
    currentImage.fadeOut(1000, function(){
        currentImage.src = images[currentIndex];
        currentImage.fadeIn(1000);
    });
});