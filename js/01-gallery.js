import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryItemsContainer = document.querySelector(".gallery");

function createGallaryMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    )
    .join("");
}
const galleryImg = createGallaryMarkup(galleryItems);
galleryItemsContainer.insertAdjacentHTML("beforeend", galleryImg);
galleryItemsContainer.addEventListener("click", onImgClick);

function onImgClick(evt) {
  blockStandartAction(evt);
  // если не IMG возвр return
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  // В ином случае открывае библиотеку basicLightbox
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);
  instance.show();

  galleryItemsContainer.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });
}
// блокирует стандартные функц.браузера(не открывает картинку по ссылке)
function blockStandartAction(evt) {
  evt.preventDefault();
}
