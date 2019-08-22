window.addEventListener('mousemove', e => {
  let centerScreenX = window.innerWidth / 2;
  if (e.x > centerScreenX) console.log('Mouse on right');
  else console.log('Mouse on left');
});
