//consts for element IDs
const drawing = document.getElementById("user-canvas");
const contxt = drawing.getContext('2d');
const guessbtn = document.getElementById("lenny-guess-btn");
//variables for coordinates and drawing boolean
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let guess;

// drawing set-up
contxt.strokeStyle = '#000000';
contxt.lineWidth = 5;
contxt.lineCap = 'round';
contxt.lineJoin = 'round';

//drawing start
drawing.addEventListener('mousedown', (e) => {
  isDrawing = true;
  lastX = e.offsetX;
  lastY = e.offsetY;
});

//draw lines on mousemove if we are currently clicking down
drawing.addEventListener('mousemove', (e) => {
  if (!isDrawing) return;
  contxt.beginPath();
  contxt.moveTo(lastX, lastY);       // Start from last spot
  contxt.lineTo(e.offsetX, e.offsetY); // Draw to current spot
  contxt.stroke();
  // Update last coordinates
  lastX = e.offsetX;
  lastY = e.offsetY;
});

// 3. Stop drawing on mouseup or when leaving the canvas
drawing.addEventListener('mouseup', () => isDrawing = false);
drawing.addEventListener('mouseout', () => isDrawing = false);
