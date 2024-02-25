var DrawingApp = /** @class */ (function () {
    function DrawingApp(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.isDrawing = false;
        this.init();
    }
    DrawingApp.prototype.init = function () {
        this.canvas.addEventListener('mousedown', this.startDrawing.bind(this));
        this.canvas.addEventListener('mousemove', this.draw.bind(this));
        this.canvas.addEventListener('mouseup', this.stopDrawing.bind(this));
        this.canvas.addEventListener('mouseout', this.stopDrawing.bind(this));
    };
    DrawingApp.prototype.startDrawing = function (event) {
        this.isDrawing = true;
        this.context.beginPath(); // Begin a new path
        this.draw(event);
    };
    DrawingApp.prototype.stopDrawing = function () {
        this.isDrawing = false;
    };
    DrawingApp.prototype.draw = function (event) {
        if (!this.isDrawing)
            return;
        var x = event.offsetX;
        var y = event.offsetY;
        this.context.lineWidth = 5;
        this.context.lineCap = 'round';
        this.context.strokeStyle = '#000';
        this.context.lineTo(x, y);
        this.context.stroke();
        this.context.beginPath();
        this.context.moveTo(x, y);
    };
    return DrawingApp;
}());
window.addEventListener('DOMContentLoaded', function () {
    var canvas = document.getElementById('canvas');
    new DrawingApp(canvas);
});
