// Generate image path  
const imagePaths = Array.from((new Array(4)), (_, i) => `crypto-pic${i}.png`);

// Contanier and image elements 
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
document.body.appendChild(container); 

//Button elements 
const leftButton = document.createElement('BUTTON');
leftButton.textContent = "Prev";
container.appendChild(leftButton);
const rightButton = document.createElement('BUTTON');
rightButton.textContent = "Next";
rightButton.addEventListener('click', () => {
    const current = document.querySelector('.active');
    const next = current.nextElementSibling ? current.nextElementSibling : document.querySelector('LI');
    current.classList.remove('active');
    next.classList.add('active')
});
container.appendChild(rightButton);

//Setup
document.querySelector('LI').classList.add('active');

