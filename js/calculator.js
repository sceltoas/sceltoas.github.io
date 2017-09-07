function debounce(cb, delay) {
    var id = null;

    return function debounced(args) {
        if (id) {
            clearTimeout(id);
            id = null;
        }
        id = setTimeout(function() {
            cb.apply(cb, args);
            id = null;
        }, delay);
    }
}

$(document).ready(function() {
    $('#input-moneysperhour, #input-hourspermonth').on("keyup cut copy paste mouseup", debounce(function() {
        var hours = Number($('#input-hourspermonth').html().replace(/,/g, '.').replace(/[\s<br>]/g, ''));
        var moneys = Number($('#input-moneysperhour').html().replace(/,/g, '.').replace(/[\s<br>]/g, ''));

        if (isNaN(hours) || isNaN(moneys)) {
            return updateResult(0, 0, 0, 0, 0);
        }
        var nettoLonnMnd = Math.round(0.6 * hours * moneys);
        var nettoLonnAr = nettoLonnMnd * 11;
        var bruttoInntjeningMnd = Math.round(hours * moneys);
        var bruttoLonnMnd = Math.round((0.6 * hours * moneys) / 1.12);
        var feriepengerMnd = Math.round(((0.6 * hours * moneys) / 1.12) * 0.12);

        return updateResult(nettoLonnMnd, nettoLonnAr, bruttoInntjeningMnd, bruttoLonnMnd, feriepengerMnd);
    }, 1));
});

function updateResult(nettoLonnMnd, nettoLonnAr, bruttoInntjeningMnd, bruttoLonnMnd, feriepengerMnd) {
    $('#nettoLonnMnd').html('kr. ' + formatMoneys(nettoLonnMnd));
    $('#nettoLonnAr').html('kr. ' + formatMoneys(nettoLonnAr));
    $('#bruttoInntjeningMnd').html('kr. ' + formatMoneys(bruttoInntjeningMnd));
    $('#bruttoLonnMnd').html('kr. ' + formatMoneys(bruttoLonnMnd));
    $('#feriepengerMnd').html('kr. ' + formatMoneys(feriepengerMnd));
}

function formatMoneys(n) {
    // https://stackoverflow.com/a/14428340/957731
    return ('' + n).replace(/./g, function(c, i, a) {
        return i && c !== "." && ((a.length - i) % 3 === 0) ? '&nbsp;' + c : c;
    })
}
