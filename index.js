// Generate image path  
const cryptoPath = Array.from((new Array(4)), (_, i) => `crypto-pic${i}.png`);

createCarousel("#firstCarousel", cryptoPath);

// Contanier and image elements 
function createCarousel(target, imagePaths) {
    const container = document.createElement('DIV');
    container.classList.add("my_carousel");
    const imageContainer = document.createElement('OL');

    imagePaths.forEach((path) => {
        const li = document.createElement('LI');
        const image = document.createElement('IMG');
        image.src = path;
        li.appendChild(image);
        imageContainer.appendChild(li);
    });
    container.appendChild(imageContainer);

    try {
        document.querySelector(target).appendChild(container);
    } catch (e) {
        console.error(`Unable to find target element: ${target}`)
    }

    // Function for next and prev buttons
    const navButton = (label, listener) => {
        const button = document.createElement('BUTTON');
        button.textContent = label;
        button.addEventListener('click', listener);
        container.appendChild(button);
    };

    //Function for active class
    const isActive = (current, next) => {
        current.classList.remove('active');
        next.classList.add('active');
    };

    //Button elements 
    navButton("Prev", () => {
        const current = document.querySelector('.active');
        const next = current.previousElementSibling ? current.previousElementSibling : document.querySelector('li:last-child');
        isActive(current, next);
    });
    navButton("Next", () => {
        const current = document.querySelector('.active');
        const next = current.nextElementSibling ? current.nextElementSibling : document.querySelector('li');
        isActive(current, next);
    });

    //Setup
    document.querySelector('li').classList.add('active');

}