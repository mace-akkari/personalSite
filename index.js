// Generate image path  
const crypto = Array.from((new Array(10)), (_, i) => `./projectImgs/crypto/crypto-pic${i}.png`);
const reactCrypto = Array.from((new Array(8)), (_, i) => `./projectImgs/reactCrypto/react-crypto${i}.png`);
const maceFitness = Array.from((new Array(16)), (_, i) => `./projectImgs/maceFitness/maceFitness-pic${i}.png`);
const repoVx2 = Array.from((new Array(6)), (_, i) => `./projectImgs/repoV2/vue2-pic${i}.png`);
const repoVx3 = Array.from((new Array(6)), (_, i) => `./projectImgs/repoV3/vue3-pic${i}.png`);
const sampleCv = Array.from((new Array(7)), (_, i) => `./projectImgs/sampleCv/sampleCv-pic${i}.png`);

createCarousel("#firstCarousel", crypto);
createCarousel("#secondCarousel", reactCrypto);
createCarousel("#thirdCarousel", maceFitness);
createCarousel("#fourthCarousel", repoVx2);
createCarousel("#fifthCarousel", repoVx3);
createCarousel("#sixthCarousel", sampleCv);

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
        const current = container.querySelector('.active');
        const next = current.previousElementSibling ? current.previousElementSibling : container.querySelector('li:last-child');
        isActive(current, next);
    });
    navButton("Next", () => {
        const current = container.querySelector('.active');
        const next = current.nextElementSibling ? current.nextElementSibling : container.querySelector('li');
        isActive(current, next);
    });

    //Setup
    container.querySelector('li').classList.add('active');

}