// Generate image path  
const imagePaths = Array.from((new Array(4)), (_, i) => `crypto-pic${i}.png`);

// Contanier and image elements 
const container = document.createElement('DIV');
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

