import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

function createGallaryMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<li>
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`
    )
    .join("");
}

const galleryImg = createGallaryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryImg);
galleryContainer.addEventListener("click", onImgClick);

function onImgClick(evt) {
  blockStandartAction(evt);
}
// блокирует стандартные функц.браузера(не открывает картинку по ссылке)
function blockStandartAction(evt) {
  evt.preventDefault();
}

const galleryEl = new SimpleLightbox("ul.gallery a", {
  captionsData: "alt",
  captionsDelay: 250,
});
