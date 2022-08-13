import { galleryItems } from './gallery-items.js';
// import SimpleLightbox from "simplelightbox";
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryList(galleryItems);


galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup)

function createGalleryList(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
            <div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </div>
            `;
        })
    .join('');
}

galleryContainer.addEventListener('click', openPhotoFullDisplay);

function openPhotoFullDisplay(evt) {
    evt.preventDefault()
    if (evt.target.classList.contains('gallery__lmage')) {
        return; 
    }
        const imageActive = evt.target;
        const hrefElement = imageActive.dataset.source;
        
        const instance = basicLightbox.create(`
        <img src="${hrefElement}" width="800" height="600">`)
    
    instance.show();
    
    document.addEventListener("keydown", (evt) => {
        if (evt.key !== "Escape") {
        return;
    }
        instance.close();
});
    
}









