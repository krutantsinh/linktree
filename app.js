import { links } from './links.js';

// Select the container where links will be displayed
const linksContainer = document.getElementById('links');

// Function to create and append link elements to the container
function displayLinks() {
    links.forEach(linkData => {
        // Create a div for each link
        const linkDiv = document.createElement('div');
        linkDiv.classList.add('link');

        // Create an anchor element for the link
        const anchor = document.createElement('a');
        anchor.href = linkData.link;
        anchor.target = '_blank';

        // Create an image element for the icon
        const img = document.createElement('img');
        img.src = linkData.image;
        img.alt = linkData.name;
        img.classList.add('linkIcon');

        // Create a span for the link name
        const nameSpan = document.createElement('span');
        nameSpan.textContent = linkData.name;

        // Append the image and name to the anchor
        anchor.appendChild(img);
        anchor.appendChild(nameSpan);

        // Append the anchor to the link div
        linkDiv.appendChild(anchor);

        // Append the link div to the container
        linksContainer.appendChild(linkDiv);
    });
}

// Call the function to display links on page load
displayLinks();
