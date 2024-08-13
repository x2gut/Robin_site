const photographyBtns = Array.from(document.querySelectorAll(".photography__btn"));
const photographyImages = document.querySelector(".photography__images");

const urls = ["photography-image1.jpeg", "photography-image2.jpeg", "photography-image3.jpeg", "photography-image4.jpeg"]

photographyBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        photographyBtns.forEach(item => item.classList.remove("active"));
        btn.classList.add("active")
        photographyImages.innerHTML = ''
        const country = btn.textContent.charAt(0).toUpperCase() + btn.textContent.slice(1).toLowerCase();

        for (url of urls) {
            const pathToImg = `imgs/src/img/${country}/${url}`;
            const countryImage = document.createElement("img");
            countryImage.className = "photography__image";
            countryImage.src = pathToImg;
            photographyImages.appendChild(countryImage);

        }
    })
})