function randomInt(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a)
}
var canvas = document.createElement("canvas"),
    ctx = canvas.getContext("2d");
document.getElementById("canvasContainer").appendChild(canvas);
var width = window.innerWidth,
    height = window.innerHeight;
canvas.width = width, canvas.height = height;

function clearCanvas() {
    ctx.fillStyle = "#000", ctx.fillRect(0, 0, width, height)
}
clearCanvas();
for (var node, t = 0, colors = ["#4f91f9", "#a7f94f", "#f94f4f", "#f9f74f", "#8930ff", "#fc4edf", "#ff9c51"], nodeSize = 3.5, speed = 1.5, nodeAmount = 150, nodes = [], lineWidth = 1, nodePositionArray = [], drawLineThreshold = 170, i = 0; i < nodeAmount; i++) node = new Node(randomInt(0, width), randomInt(0, height), i), nodes.push(node);

function circle(a, b, c) {
    ctx.beginPath(), ctx.arc(a, b, c, 0, 2 * Math.PI), ctx.closePath()
}

function line(a, b, c, d) {
    ctx.lineWidth = lineWidth, ctx.beginPath(), ctx.moveTo(a, b), ctx.lineTo(c, d), ctx.stroke()
}

function distance(a, b, c, d) {
    var e = b - a,
        f = d - c;
    return Math.sqrt(e * e + f * f)
}

function map_range(a, b, c, d, e) {
    return d + (e - d) * (a - b) / (c - b)
}

function isEven(a) {
    return a == parseFloat(a) ? !(a % 2) : void 0
}

function hexToRgb(a) {
    var b = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
    return b ? {
        r: parseInt(b[1], 16),
        g: parseInt(b[2], 16),
        b: parseInt(b[3], 16)
    } : null
}
for (var i = 0; i < nodes.length; i++) nodes[i].move(), nodes[i].draw();

function loop() {
    clearCanvas(), drawLines();
    for (var a = 0; a < nodes.length; a++) nodes[a].move(), nodes[a].draw();
    requestAnimationFrame(loop), t++
}
loop();

function Node(a, b, c) {
    this.x = a, this.y = b, this.id = c, isEven(c) ? (this.speedX = randomInt(1, 100) / 100 + speed, this.speedY = randomInt(1, 100) / 100 + speed) : (this.speedX = randomInt(1, 100) / 100 - speed, this.speedY = randomInt(1, 100) / 100 - speed), this.size = nodeSize, this.color = colors[Math.floor(Math.random() * colors.length)], this.move = function () {
        this.y += this.speedY, this.x += this.speedX, (1 > this.y || this.y > height - 2 * nodeSize) && (this.speedY = -this.speedY), (1 > this.x || this.x > width - 2 * nodeSize) && (this.speedX = -this.speedX), nodePositionArray[this.id] = [this.x, this.y, this.color]
    }, this.draw = function () {
        ctx.fillStyle = this.color, circle(this.x, this.y, nodeSize), ctx.fill()
    }
}

function drawLines() {
    for (var a = 0; a < nodePositionArray.length - 1; a++)
        for (var b = nodePositionArray[a][0], c = nodePositionArray[a][1], d = 0; d < nodePositionArray.length - (a + 1); d++) {
            var e = nodePositionArray[d + a + 1][0],
                f = nodePositionArray[d + a + 1][1],
                g = distance(b, e, c, f);
            if (g < drawLineThreshold) {
                var h = map_range(g, 0, drawLineThreshold, 1, 0),
                    k = hexToRgb(nodePositionArray[a][2]),
                    l = "rgba(" + k.r + "," + k.g + "," + k.b + "," + h + ")";
                ctx.strokeStyle = l, line(b, c, e, f)
            }
        }
}
window.addEventListener("resize", function () {
    width = window.innerWidth, height = window.innerHeight, canvas.width = width, canvas.height = height, clearCanvas(), nodes = [];
    for (var a, b = 0; b < nodeAmount; b++) a = new Node(randomInt(0, width), randomInt(0, height), b), nodes.push(a);
    for (var b = 0; b < nodes.length; b++) nodes[b].move(), nodes[b].draw()
});