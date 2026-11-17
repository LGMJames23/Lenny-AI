let penupbool = true;
let penmovebool = false;
let pendownbool = false;
const drawing = document.getElementById("user-canvas");
let ogy;
let ogx;
let contxt = drawing.getContext('2d');
drawing.addEventListener('mousedown', (e) => {
  pendownbool=true;
  ogx = e.offsetX;
  ogy = e.offsetY;
  penDown(pendownbool);
});
function penDown(p){
  drawing.addEventListener('mousemove', (e) => {
  const x = e.offsetX;
  const y = e.offsetY;
    if ( p == true){
    contxt.beginPath();
      contxt.moveTo(e.offsetX, e.offsetY);
      contxt.lineTo(e.offsetX, e.offsetY);
      contxt.stroke();
       penmovebool = true;
    }
  }
)};
drawing.addEventListener('mouseup', () =>{
penmovebool = false;
  pendownbool = false;
});
