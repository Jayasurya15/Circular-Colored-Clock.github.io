const circle = [new Circle('minutes', '#ff0000'), new Circle('seconds', '#f37e21')];

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw Clock Border
    BorderClock(document.getElementById('clock').value);

    // Draw Circles
    circle[0].draw(document.getElementById('outside').value);
    circle[1].draw(document.getElementById('inside').value);

    // Draw Text Clock
    TextClock();

    // Loop
    window.requestAnimationFrame(update);
}

document.body.onload = update;
