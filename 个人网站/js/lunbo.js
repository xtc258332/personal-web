var carouselContainer = document.getElementById('carousel-container');
    var prevButton = document.getElementById('prev-button');
    var nextButton = document.getElementById('next-button');
    var images = carouselContainer.querySelectorAll('img');
    var currentIndex = 0;
    var interval = 3000;

    prevButton.addEventListener('click', function () {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }
        moveImages();
    });

    nextButton.addEventListener('click', function () {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        moveImages();
    });

    setInterval(function () {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        moveImages();
    }, interval);

    function moveImages() {
        images.forEach(function (img, index) {
            if (index === currentIndex) {
                img.style.left = '0';
            } else {
                img.style.left = '100%';
            }
        });
    }
