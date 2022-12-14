var colors = [
        [44, 145, 223],
        [110, 233, 133],
        [110, 233, 225],
        [255, 213, 0],
        [255, 0, 86],
        [213, 0, 255]
    ],
    step = 0,
    colorIndices = [0, 1, 2, 3],
    gradientSpeed = .004;

function updateGradient() {
    var a = colors[colorIndices[0]],
        b = colors[colorIndices[1]],
        c = colors[colorIndices[2]],
        d = colors[colorIndices[3]],
        e = 1 - step,
        f = Math.round(e * a[0] + step * b[0]),
        g = Math.round(e * a[1] + step * b[1]),
        h = Math.round(e * a[2] + step * b[2]),
        i = "#" + (f << 16 | g << 8 | h).toString(16),
        j = Math.round(e * c[0] + step * d[0]),
        k = Math.round(e * c[1] + step * d[1]),
        l = Math.round(e * c[2] + step * d[2]),
        m = "#" + (j << 16 | k << 8 | l).toString(16);
    document.getElementById("canvasContainer").style.background = "linear-gradient(" + i + "," + m + ") no-repeat", step += gradientSpeed, 1 <= step && (step %= 1, colorIndices[0] = colorIndices[1], colorIndices[2] = colorIndices[3], colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length, colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length)
}
setInterval(updateGradient, 10);