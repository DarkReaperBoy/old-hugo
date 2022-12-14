function fn() {
    function a(a, b) {
        if (2 > arguments.length && (b = a, a = 0), a > b) {
            var c = b;
            b = a, a = c
        }
        return Math.floor(Math.random() * (b - a + 1)) + a
    }

    function b(a, b) {
        var c = Math.max(a, b),
            d = Math.round(Math.sqrt(c * c + c * c));
        return d / 2
    }

    function c() {
        ctx.globalCompositeOperation = "source-over", ctx.globalAlpha = .8, ctx.fillStyle = "hsla(" + hue + ", 64%, 6%, 1)", ctx.fillRect(0, 0, w, h), ctx.globalCompositeOperation = "lighter";
        for (var a = 1, b = stars.length; a < b; a++) stars[a].draw();
        window.requestAnimationFrame(c)
    }
    window.requestAnimFrame = function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (a) {
            window.setTimeout(a, 1e3 / 60)
        }
    }();
    var d = document.createElement("canvas");
    d.classList = "background", document.getElementById("canvasContainer").appendChild(d), ctx = d.getContext("2d"), w = d.width = window.innerWidth, h = d.height = window.innerHeight, hue = 217, stars = [], count = 0, maxStars = 1200;
    var e = document.createElement("canvas"),
        f = e.getContext("2d");
    document.getElementById("canvasContainer").appendChild(e), e.width = 100, e.height = 100;
    var g = e.width / 2,
        j = f.createRadialGradient(g, g, 0, g, g, g);
    j.addColorStop(.025, "#fff"), j.addColorStop(.1, "hsl(" + hue + ", 61%, 33%)"), j.addColorStop(.25, "hsl(" + hue + ", 64%, 6%)"), j.addColorStop(1, "transparent"), f.fillStyle = j, f.beginPath(), f.arc(g, g, g, 0, 2 * Math.PI), f.fill();
    var k = function () {
        this.orbitRadius = a(b(w, h)), this.radius = a(60, this.orbitRadius) / 12, this.orbitX = w / 2, this.orbitY = h / 2, this.timePassed = a(0, maxStars), this.speed = a(this.orbitRadius) / 9e5, this.alpha = a(2, 10) / 10, count++, stars[count] = this
    };
    k.prototype.draw = function () {
        var b = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
            c = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
            d = a(10);
        1 === d && 0 < this.alpha ? this.alpha -= .05 : 2 === d && 1 > this.alpha && (this.alpha += .05), ctx.globalAlpha = this.alpha, ctx.drawImage(e, b - this.radius / 2, c - this.radius / 2, this.radius, this.radius), this.timePassed += this.speed
    };
    for (var l = 0; l < maxStars; l++) new k;
    c()
}
fn();