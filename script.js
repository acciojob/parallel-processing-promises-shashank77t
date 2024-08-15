//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");



// Sample array of image URLs (replace with your own URLs)

const images = [
    { url: "https://picsum.photos/id/237/200/300" },
    { url: "https://picsum.photos/id/238/200/300" },
    { url: "https://picsum.photos/id/239/200/300" },
  ];

// Function to download and display images
function downloadImages(imageObjects) {
    const promises = imageObjects.map(image => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = image.url;
            img.onload = () => resolve(img);
            img.onerror = () => reject(new Error(`Failed to load image's URL: ${image.url}`));
        });
    });

    return Promise.all(promises);
}

// Function to display images on the webpage
function displayImages(images) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ''; // Clear any existing content
    images.forEach(img => outputDiv.appendChild(img));
}

// Event listener for the button
document.getElementById('download-images-button').addEventListener('click', () => {
    downloadImages(images)
        .then(displayImages)
        .catch(error => {
            console.error(error);
            const outputDiv = document.getElementById('output');
            outputDiv.innerHTML = `<p style="color:red;">${error.message}</p>`;
        });
});

