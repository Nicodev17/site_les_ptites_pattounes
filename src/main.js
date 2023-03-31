// Barre de navigation

const link = document.querySelectorAll('.part-link');
const content = document.querySelectorAll('.content');
const contentsPart = document.querySelector('.contents-part');

link.forEach((element, index) => {
    element.addEventListener('click', event => {

        link.forEach(ele => {
            ele.classList.remove('active');
        });
        link[index].classList.add('active');

        content.forEach(el => {
            el.classList.remove('active');
            el.style.display = 'none';
        });
        content[index].classList.add('active');
        content[index].style.display = 'flex';
    });
});

// Gallerie photo

addingImagesBeforeAfter();
function addingImagesBeforeAfter() {

    for (let i = 1; i <= 8; i++) {
        const newArticle = document.createElement("article");
        newArticle.classList.add("photo-listing");
        // const newTitle = document.createElement("a");
        // newTitle.innerHTML = "Berger";
        // newTitle.classList.add("photo-title");
        // newTitle.setAttribute("href", "#");
        // newArticle.appendChild(newTitle);
        const newDivImg = document.createElement("div");
        newArticle.appendChild(newDivImg);
        newDivImg.classList.add("photo-image");
        const newImg = document.createElement("img");
        newDivImg.appendChild(newImg);

        newImg.setAttribute("src", "media/gallery-before-after/chien-" + i + ".jpg");
        document.querySelector(".grid-container").appendChild(newArticle);

        console.log(newImg.src);
   }

}

addingImagesOther();
function addingImagesOther() {

    for (let i = 1; i <= 4; i++) {
        const newArticle = document.createElement("article");
        newArticle.classList.add("photo-listing");
        const newDivImg = document.createElement("div");
        newArticle.appendChild(newDivImg);
        newDivImg.classList.add("photo-image");
        const newImg = document.createElement("img");
        newDivImg.appendChild(newImg);

        newImg.setAttribute("src", "media/gallery-other/chien-" + i + ".jpg");
        document.querySelector(".grid-container-bis").appendChild(newArticle);

        // console.log(newImg.src);
   }

}

function scrollToTop() {
    const arrowUp = document.querySelector('#box-arrow');
    
    arrowUp.addEventListener('click', event => {
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth'
          });
    });

    let firstLink = document.querySelector('.first-link');
    arrowUp.style.display = "none";

    firstLink.addEventListener('click', event => {
        arrowUp.style.display = "none";
    });

    let otherLink = document.querySelectorAll('.other-link');

    otherLink.forEach(el => {
        el.addEventListener('click', event => {
            arrowUp.style.display = "flex";
        });
    });
}
scrollToTop();

