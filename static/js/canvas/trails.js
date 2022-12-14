window.requestAnimFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (b) {
        window.setTimeout(b, 1E3 / 60)
    }
}(), document.onselectstart = function () {
    return !1
};
var c = document.createElement("canvas");
c.id = "myCanvas", c.className = "background", document.getElementById("canvasContainer").appendChild(c);
var ctx = c.getContext("2d"),
    dpr = window.devicePixelRatio,
    cw = window.innerWidth - 500,
    ch = window.innerHeight - 300;
c.width = cw * dpr, c.height = ch * dpr, ctx.scale(dpr, dpr);
var rand = function (a, b) {
    return ~~(Math.random() * (b - a + 1) + a)
};
ctx.lineCap = "round";
var radius, orbs = [],
    orbCount = 30;

function createOrb(a, b) {
    var c = cw / 2 - a,
        d = ch / 2 - b,
        e = Math.sqrt(c * c + d * d),
        f = Math.atan2(d, c);
    orbs.push({
        x: a,
        y: b,
        lastX: a,
        lastY: b,
        hue: 0,
        colorAngle: 0,
        angle: f + Math.PI / 2,
        size: rand(1, 3) / 2,
        centerX: cw / 2,
        centerY: ch / 2,
        radius: e,
        speed: rand(1, 5) / 1e3 * (e / 750) + .005,
        alpha: 1 - Math.abs(e) / cw,
        draw: function () {
            ctx.strokeStyle = "hsla(" + this.colorAngle + ",100%,50%,1)", ctx.lineWidth = this.size, ctx.beginPath(), ctx.moveTo(this.lastX, this.lastY), ctx.lineTo(this.x, this.y), ctx.stroke()
        },
        update: function () {
            var a = this.x,
                b = this.y;
            this.lastX = this.x, this.lastY = this.y;
            var c = cw / 2,
                d = ch / 2,
                e = a,
                f = b,
                g = -((d - f) / (c - e)),
                h = Math.atan(g),
                i = Math.floor(h * (180 / Math.PI));
            e < c && f < d && (i += 180), e < c && f > d && (i += 180), e > c && f > d && (i += 360), f < d && "-Infinity" == g && (i = 90), f > d && "Infinity" == g && (i = 270), e < c && "0" == g && (i = 180), isNaN(i) && (i = 0), this.colorAngle = i, this.x = this.centerX + Math.sin(-1 * this.angle) * this.radius, this.y = this.centerY + Math.cos(-1 * this.angle) * this.radius, this.angle += this.speed
        }
    })
}

function orbGo(a) {
    var b = a.pageX - c.offsetLeft,
        d = a.pageY - c.offsetTop;
    createOrb(b, d)
}

function clear() {
    orbs = []
}
for (var count = 1e3; count--;) createOrb(cw / 2, ch / 2 + 2 * count);
var loop = function () {
    window.requestAnimFrame(loop), ctx.fillStyle = "rgba(0,0,0,.1)", ctx.fillRect(0, 0, cw, ch);
    for (var a = orbs.length; a--;)
        for (var b = orbs[a], c = 3; c--;) b.update(), b.draw(ctx)
};
loop();