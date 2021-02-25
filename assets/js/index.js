"use strict";
// i hope this is right?? but images took too much room and it was cluttered
import { images } from "./gallery";

const gallery = document.querySelector(".gallery");
let output = '',

images.forEach(function (image) {
  output += `<figure class="gallery-item>
  <img src="./images/${images.path}.jpg alt="${images.description}" width="${images.width}"/>`
});

document.querySelector('.gallery').innerHTML = output;
/*

this was my code from the regular html
i gotta SOMEHOW turn my js into this ????
              <figure class="gallery-item">
                <img src="./Assets/Images/happy-gallery.jpg" alt="Happy dog" />
                <figcaption>Livin my best life</figcaption>
              </figure>
        LMFAO fml idk wat do
*/
