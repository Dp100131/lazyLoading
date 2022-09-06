import {registerImage} from "./lazy";

const API = "https://randomfox.ca/images/";

const imagesContainer = document.getElementById("images-container");
const btnAddFox = document.getElementById('more-fox');

function random(min, max) {

    return Math.floor((Math.random() * (max - min + 1)) + min);
    
}

const createRandomImageNode  = () => {

    const foxId = random(1, 123);

    const container = document.createElement('div');
    container.className = "p-4";


    const img = document.createElement('img');
    img.dataset.src = `${API}${foxId}.jpg`;
    img.className = "mx-auto rounded-md bg-gray-300";
    img.width = 320;

    container.appendChild(img);

    return container;


}

function addFox() {

    const newImage = createRandomImageNode();

    imagesContainer.appendChild(newImage);
    registerImage(newImage);
    
}


btnAddFox.addEventListener('click', addFox);

