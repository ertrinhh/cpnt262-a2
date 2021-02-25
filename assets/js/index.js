"use strict";

const pictures = [
  {
    id: 1,
    title: "Banana",
    description: "Dog with a banana toy",
    width: 500,
    path: "banana-gallery",
  },
  {
    id: 2,
    title: "bear",
    description: "Dog in a bear costume",
    width: 500,
    path: "bear-gallery",
  },
  {
    id: 3,
    title: "Bow",
    description: "Dapper dog with a bowtie",
    width: 500,
    path: "bow-gallery",
  },
  {
    id: 4,
    title: "Cow",
    description: "Dog with his favorite toy cow",
    width: 500,
    path: "congee-cow",
  },
  {
    id: 5,
    title: "Happy",
    description: "A really happy dog",
    width: 500,
    path: "happy-gallery",
  },
  {
    id: 6,
    title: "scarf",
    description: "A fashionable dog with a scarf",
    width: 500,
    path: "scarf-gallery",
  },
  {
    id: 7,
    title: "Shapespeare",
    description: "Dog with a collar thing that looks like Shakespeare",
    width: 500,
    path: "shakesp-gallery",
  },
  {
    id: 8,
    title: "Shoes",
    description: "Dog wearing shoes",
    width: 500,
    path: "shoes-gallery",
  },
  {
    id: 9,
    title: "Sleeping",
    description: "Dog taking a bit of a snooze",
    width: 400,
    path: "sleeping-gallery",
  },
];

const gallery = document.querySelector(".gallery");
let output = "";

pictures.forEach(function (image) {
  output += `<figure class="gallery-item">
  <img src="./assets/images/${image.path}.jpg" alt="${image.title}"/>
  <figcaption>${image.description}</figcaption>
  </figure>`;

  gallery.innerHTML = output;
});

/*

this was my code from the regular html
i gotta SOMEHOW turn my js into this ????
              <figure class="gallery-item">
                <img src="./Assets/Images/happy-gallery.jpg" alt="Happy dog" />
                <figcaption>Livin my best life</figcaption>
              </figure>
        LMFAO fml idk wat do
*/
