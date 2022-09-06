let totalImages = 0;
let loadedImages = 0;

function logState() {

    console.log(`⚪️ Total Imágenes: ${totalImages}`);
    console.log(`🟣 Imágenes cargadas: ${loadedImages}`);
    console.log("--------------------------------------");
    
}

const isIntersecting = (entry) => {

    return entry.isIntersecting;

}
const loadImage = (entry) => {

    const container = entry.target;
    const image = container.firstChild;
    const url = image.dataset.src;
    image.src = url;
    image.onload = () =>{

        loadedImages += 1;
        logState();

    }

    observer.unobserve(container);

}

const observer = new IntersectionObserver((entries) => {

    entries.filter(isIntersecting).forEach(loadImage);

});

export const registerImage = (images) => {

    observer.observe(images);
    totalImages += 1;
    logState();


}