document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    let drawing = false;
    let erasing = false;
    let brushSize = 5;
    let brushColor = '#000' ;

    function startDrawing (e) {
        drawing = true;
        draw(e);
    }

    function stopDrawing() {
        drawing = false;
        ctx
    }

    function draw(e) {
        if (!drawing) return;

        ctx.lineWidth = brushSize;
        ctx.lineCap = 'round';
        ctx.strokeStyle = erasing ? '#fff' : brushColor;

        ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);

        function toggleEraser() {
            erasing = !erasing;
        }

        function cleanCanvas() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }

        document.getElementById('brushSize').addEventListener('input', (e) => brushSize = e.target.value);

    }
    





}