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
    





}