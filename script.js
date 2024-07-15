
// Function added to update numbers from 0 to specified max for each div
function updateNumbers() {
    let counters = document.querySelectorAll('.no');
    let maxValues = [199, 1591, 283, 75]; 

    counters.forEach((counter, index) => {
        let max = maxValues[index];
        let interval = 60; 
        let step = Math.ceil(max / (300 / interval)); 

        let currentCount = 0;
        let intervalId = setInterval(() => {
            currentCount += step;
            if (currentCount >= max) {
                clearInterval(intervalId);
                currentCount = max;
            }
            counter.textContent = currentCount;
        }, interval);
    });
}

// added animation to function
updateNumbers();


// scroll img
function scrollToIndex(index) {
    const imgContainers = document.querySelectorAll('.img-container');
    if (index >= 0 && index < imgContainers.length) {
        imgContainers[index+1].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        setActiveDot(index);
    }
}

function setActiveDot(index) {
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}


function changeImage(imagePath) {
    document.getElementById('mainImage').src = imagePath;
}