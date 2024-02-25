class DrawingApp {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    isDrawing: boolean;
    
    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d')!;
        this.isDrawing = false;
        
        this.init();
    }

    init() {
        this.canvas.addEventListener('mousedown', this.startDrawing.bind(this));
        this.canvas.addEventListener('mousemove', this.draw.bind(this));
        this.canvas.addEventListener('mouseup', this.stopDrawing.bind(this));
        this.canvas.addEventListener('mouseout', this.stopDrawing.bind(this));
    }

    startDrawing(event: MouseEvent) {
        this.isDrawing = true;
        this.context.beginPath(); // Begin a new path
        this.draw(event);
    }

    stopDrawing() {
        this.isDrawing = false;
    }

    draw(event: MouseEvent) {
        if (!this.isDrawing) return;

        const x = event.offsetX;
        const y = event.offsetY;

        this.context.lineWidth = 5;
        this.context.lineCap = 'round';
        this.context.strokeStyle = '#000';

        this.context.lineTo(x, y);
        this.context.stroke();
        this.context.beginPath();
        this.context.moveTo(x, y);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    new DrawingApp(canvas);
});