document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('main');
    const ctx = canvas.getContext('2d');

    let drawing = false;
    let erasing = false;
    let brushSize = 5;
    let brushColor = '#000';

    function draw(e) {
        if (!drawing) return;

        ctx.lineWidth = brushSize;
        ctx.lineCap = 'round';
        ctx.strokeStyle = erasing ? '#fff' : brushColor;

        ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    }

    function changeBrushColor(color) {
        brushColor = color;
        erasing = false;
    }

    function toggleEraser() {
        erasing = !erasing;
   
