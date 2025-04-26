// Clock.js
const circle = [new Circle('minutes', '#ff0000'), new Circle('seconds', '#f37e21')];

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Clock Border
    BorderClock(document.getElementById('clock').value);

    // Circles
    circle[0].draw(document.getElementById('outside').value);
    circle[1].draw(document.getElementById('inside').value);

    // Text Clock
    TextClock();

    // Loop
    window.requestAnimationFrame(update);
}

// Ensure canvas size adjusts dynamically on body load and window resize
document.body.onload = () => {
    setCanvasSize(); // Ensure canvas is resized for responsiveness
    update();        // Start the clock animation
};
