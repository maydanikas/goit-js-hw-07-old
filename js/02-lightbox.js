import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const refs = {
  galleryEl: document.querySelector(".gallery"),
};
////////////////////markup///////////////////
function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(
      (galleryItem) =>
        `
    <li class="gallery__item">
   <a class="gallery__link" href="${galleryItem.original}">
      <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
   </a>
</li>
`
    )
    .join("");
}
////////////////////////////////////////////

////////////////////RENDERING//////////////
refs.galleryEl.insertAdjacentHTML(
  "afterbegin",
  createGalleryMarkup(galleryItems)
);

refs.galleryEl.addEventListener("click", onUserClick);

function onUserClick(evt) {
  evt.preventDefault();
  refs.galleryEl.removeEventListener("click", onUserClick);
  return new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
}

///////
// Необхідно трохи змінити розмітку картки галереї, використовуй цей шаблон.

// <li class="gallery__item">
//    <a class="gallery__link" href="large-image.jpg">
//       <img class="gallery__image" src="small-image.jpg" alt="Image description" />
//    </a>
// </li>

//     Виконуй це завдання у файлах 02 - lightbox.html і 02 - lightbox.js.Розбий його
// на декілька підзавдань:

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону
// елемента галереї.Використовуй готовий код з першого завдання.
// Підключення скрипту і стилів бібліотеки, використовуючи CDN сервіс cdnjs.Необхідно
// додати посилання на два файли: simple - lightbox.min.js і simple - lightbox.min.css.
// Ініціалізація бібліотеки після створення і додання елементів галереї у ul.gallery.
// Для цього ознайомся з документацією SimpleLightbox - насамперед секції «Usage» і «Markup».
// Подивися в документації секцію «Options» і додай відображення підписів до зображень
// з атрибута alt.Нехай підпис буде знизу і з'являється через 250 мілісекунд після
// відкриття зображення.
