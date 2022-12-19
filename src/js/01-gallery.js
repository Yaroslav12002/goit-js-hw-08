// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// console.log(galleryItems);

const gallery = document.querySelector('.js-gallery');
const galleryImageMarkup = createGalleryImagesMarkup(galleryItems);

gallery.innerHTML = galleryImageMarkup;

const lightboxGallery = new SimpleLightbox('.js-gallery a', {
  captionSelector: 'img',
  captionsData: 'alt',
  captionDelay: 250,
});

function createGalleryImagesMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`;
    })
    .join('');
}
