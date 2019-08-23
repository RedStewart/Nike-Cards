window.addEventListener('mousemove', e => {
  let centerScreenX = window.innerWidth / 2;
  if (e.x > centerScreenX) {
    console.log('Mouse on right');
  } else {
    console.log('Mouse on left');
  }

  //  Try just moving the image to the left/right when on corresponding side - THEN add difference + ratios

  //  Add/minus e.x from the center to find how far from the center the mouse is
});
