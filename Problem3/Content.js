// Select all anchor elements on the page
const links = document.getElementsByTagName("a");

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Set random background color
document.body.style.backgroundColor = getRandomColor();

// Loop through all anchor elements and set the href attribute to the cat Wikipedia page
for (let i = 0; i < links.length; i++) {
    links[i].href = "https://en.wikipedia.org/wiki/Cat";
}

// Array of images
let catsImages = [
    "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
    "https://e3.365dm.com/21/03/768x432/skynews-cats-missing-microchip_5315182.jpg?20210323142004",
    "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fc3836660-7846-11eb-80c3-8cc375faed89.jpg?crop=5729%2C3222%2C187%2C805&resize=1200",
    "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/07/petting_pet_cat-1296x728-header.jpg?w=1155&h=1528",
    "https://lh3.googleusercontent.com/pw/AL9nZEXYJlrVkYoKIkpx07_3F4HOiTiOheaoaiRAcwrUg3C613-jkzEubJ3k8Z9fDjG5IfVqCzorphZ00vp6mIyB79GtCsoyV69xXe9cqrA0zglgrcvYhH2UP4cDR88WTm1AmuyCxQHAWCB5JzKD7eD94dtNZA=w690-h920-no"
];

// Get a random index from catsImages array
const randomImgIndex = Math.floor(Math.random() * catsImages.length);

// Loop through all img elements and set a random image from the catsImages array
const imgs = document.getElementsByTagName("img");
for (let i = 0; i < imgs.length; i++) {
    imgs[i].src = catsImages[randomImgIndex];
}

// Do the same for h1 elements
const headers = document.getElementsByTagName("h1");
for (let i = 0; i < headers.length; i++) {
    headers[i].innerText = "Cats are awesome.";
}

// Do the same for p elements
const paragraphs = document.getElementsByTagName("p");
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].innerText = "This website is now about cats.";
}
