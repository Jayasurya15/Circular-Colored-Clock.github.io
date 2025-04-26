const canvas = document.querySelector('canvas');
canvas.setAttribute('height', window.innerHeight / 1.5);
canvas.setAttribute('width', window.innerWidth / 1.5);

const ctx = canvas.getContext('2d');

function deg(degrees) {
    return (degrees * (Math.PI / 180)) - Math.PI / 2;
}

function Circle(type, color) {
    this.x = (canvas.width) / 2;
    this.y = (canvas.height) / 2;
    this.rad = () => {
        return type === 'minutes' ? (canvas.width / 3) + 15 : canvas.width / 3;
    };
    this.color = color;
    this.type = type;
    this.time = () => {
        const date = new Date();
        return type === 'minutes' ? date.getMinutes() : date.getSeconds();
    };

    this.draw = function (changeColor) {
        ctx.beginPath();
        ctx.strokeStyle = changeColor === undefined ? this.color : changeColor;
        ctx.lineWidth = 8;
        ctx.lineCap = 'round';
        ctx.arc(this.x, this.y, this.rad(), -Math.PI, deg(this.time() * 6), false);
        ctx.stroke();
        ctx.closePath();
    };
}

function getZero(number) {
    return number < 10 ? `0${number}` : number;
}

function TextClock() {
    const date = new Date();
    const sc = date.getSeconds();
    const mn = date.getMinutes();
    const hr = date.getHours();

    const text = `${getZero(hr)} : ${getZero(mn)} : ${getZero(sc)}`;

    this.x = (canvas.width / 2) - (ctx.measureText(text).width) / 2;
    this.y = canvas.height / 2;

    ctx.beginPath();
    ctx.fillStyle = '#fff';
    ctx.font = "25px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
    ctx.fillText(text, this.x, this.y);
    ctx.closePath();
}

function BorderClock(color) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 10;
    ctx.arc(canvas.width / 2, canvas.height / 2, (canvas.width / 3) + 30, 0, Math.PI * 2, false);
    ctx.stroke();
    ctx.closePath();
}

const circle = [new Circle('minutes', '#ff0000'), new Circle('seconds', '#f37e21')];

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // clock
    BorderClock(document.getElementById('clock').value);

    // circles
    circle[0].draw(document.getElementById('outside').value);
    circle[1].draw(document.getElementById('inside').value);

    // text
    TextClock();

    // loop
    window.requestAnimationFrame(update);
}

document.body.onload = update;
