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
instance.show()
console.log(evt.target)
}

const instance = basicLightbox.create(
    `<img src="https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg">`
)







