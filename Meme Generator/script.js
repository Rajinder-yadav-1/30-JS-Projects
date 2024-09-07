var btn = document.querySelector(".meme-btn")
var memeImg = document.querySelector(".img")
var memeTxt = document.querySelector(".meme-txt")

const memeData = (url, title) => {
  memeImg.setAttribute("src", url)
  memeTxt.innerHTML = title
}

const memeGenerator = () => {
  fetch("https://meme-api.com/gimme/2")
    .then(response => response.json())
    .then(data => {
      memeData(data.memes[0].url, data.memes[0].title)
    })
}

btn.addEventListener("click", () => {
  memeGenerator()
})



// Get all the emojis
const emojis = document.querySelectorAll(".emoji");

const randomizeEmojis = () => {
    emojis.forEach(emoji => {
        const randomTop = Math.random() * window.innerHeight;  // Random top position
        const randomLeft = Math.random() * window.innerWidth;  // Random left position
        const randomSize = Math.random() * 5 + 1;  // Random size between 1x and 6x

        // Random z-index (some behind, some in front)
        const zIndex = Math.random() > 0.5 ? 'below' : 'outside';
        emoji.classList.add(zIndex);

        // Random position for half-out of the viewport
        if (Math.random() > 0.7) {
            emoji.classList.add('half-out');
        }

        // Apply random size and position
        emoji.style.top = `${randomTop}px`;
        emoji.style.left = `${randomLeft}px`;
        emoji.style.fontSize = `${randomSize}em`;
    });
};

// Run the randomization on page load
window.onload = randomizeEmojis;
