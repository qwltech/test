x = [];

function Terrain() {
    var n = 8;
    var frequencies = [];
    var amplitudes = [];
    var phases = [];
    times = [];

    /* Definition
     * **********
     * frequency: 0 = 0, 1 => the sample rate
     * amplitudes: 0 = 0, 1 = 1
     * phases: 0 = 0, 1 => 2 pi
     */

    for (var i = 0; i < n * n; i++) {
        frequencies.push(Math.random());
        amplitudes.push(Math.random());
        phases.push(Math.random());
    }

    // fi = frequency index
    for (var fi = 0; fi < n * n; fi++) {
        var a = amplitudes[fi];
        var p = 2 * Math.PI * phases[fi];

        // ti = time index
        for (var ti = 0; ti < n * n; ti++) {
            var c = Math.cos(fi * t + p)
            times[ti] += a * Math.cos(fi * t + p);
        }
    }

    var description = "";

    for (var i = 0; i < n * n; i++) {
        var amp = amplitudes[i];
        var freq = frequencies[i];
        var phase = phases[i];
        description += amp.toPrecision(2)
            + " cos("
            + freq.toPrecision(2)
            + " t) exp(2pi "
            + phase.toPrecision(2)
            + " i)"
            + "\n";
    }

    console.log(description);
    console.log(times);
}

//var t = new Terrain();

var T = 32;
for (var t = 0; t < T; t++)
    console.log(Math.cos(3 * 2 * Math.PI * t / T));

for (var t = 0; t < T; t++) {
    var f = 27;
    var a = Math.cos(2 * Math.PI * f * t / T) * T/2 + T/2;
    var h = (a * 20).toPrecision(2);
    var d = a.toPrecision(3);
    var e = $('<div class="cell" style="height: ' + h + 'px">' + d + '</div>');
    $('.container').append(e);
}
