const circles = [
    new Circle('minutes', '#ff0000'),
    new Circle('seconds', '#f37e21')
];

function update() {
    // Clear the canvas before redrawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the clock border
    const clockColor = document.getElementById('clock').value;
    BorderClock(clockColor);

    // Draw circles
    const outsideColor = document.getElementById('outside').value;
    const insideColor = document.getElementById('inside').value;

    circles[0].draw(outsideColor);
    circles[1].draw(insideColor);

    // Draw clock text
    TextClock();

    // Request the next animation frame
    window.requestAnimationFrame(update);
}

// Start the update loop when the page loads
document.body.onload = update;
