const changeImage = function() {
  const imageEl = document.querySelector('#coord-image');

  console.log(imageEl);
  console.log(imageEl.src);

  //const xCoord = Math.floor(Math.random() * 12).toString().padStart(2, '0');
  //const yCoord = Math.floor(Math.random() * 12).toString().padStart(2, '0');
  const xInputEl = document.querySelector('#x-changer');
    const yInputEl = document.querySelector('#y-changer');
    const xCoord = xInputEl.value;
    const yCoord = yInputEl.value;

  // const imageSrc = 'images/out256'+ xCoord +yCoord+'.jpg';

  const imageSrc = `images/out256_${xCoord}_${yCoord}.jpg`

  imageEl.src = imageSrc;
}

 const buttonEl = document.querySelector('#image-changer');
 buttonEl.addEventListener('click', changeImage);

// const xInputEl = document.querySelector('#x-changer');
// xInputEl.addEventListener('input', changeImage);

// const yInputEl = document.querySelector('#y-changer');
// yInputEl.addEventListener('input', changeImage);

