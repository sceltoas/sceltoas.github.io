import _ from 'lodash';

const PARTICIPATED = -1,
    NOT_PARTICIPATED = -2;

const participants = [
    {
        name: 'Ole Tommy',
        results: [PARTICIPATED, PARTICIPATED, PARTICIPATED],
    },
    {
        name: 'Jørgen',
        results: [PARTICIPATED, PARTICIPATED, PARTICIPATED],
    },
    {
        name: 'Ivar',
        results: [NOT_PARTICIPATED, NOT_PARTICIPATED, PARTICIPATED],
    },
    {
        name: 'Jan Erik',
        results: [PARTICIPATED, PARTICIPATED, PARTICIPATED],
    },
    {
        name: 'Herman',
        results: [4, PARTICIPATED, NOT_PARTICIPATED],
    },
    {
        name: 'Ole-André',
        results: [PARTICIPATED, PARTICIPATED, PARTICIPATED],
    },
    {
        name: 'Tor Eric',
        results: [3, PARTICIPATED, 3],
    },
    {
        name: 'Håken',
        results: [NOT_PARTICIPATED, PARTICIPATED, PARTICIPATED],
    },
    {
        name: 'Gustav',
        results: [NOT_PARTICIPATED, 2, PARTICIPATED],
    },
    {
        name: 'Erlend',
        results: [PARTICIPATED, PARTICIPATED, PARTICIPATED],
    },
    {
        name: 'Marius',
        results: [PARTICIPATED, 4, NOT_PARTICIPATED],
    },
    {
        name: 'Erik',
        results: [NOT_PARTICIPATED, NOT_PARTICIPATED, PARTICIPATED],
    },
    {
        name: 'Richard',
        results: [PARTICIPATED, 1, PARTICIPATED],
    },
    {
        name: 'Lars Fredrik',
        results: [NOT_PARTICIPATED, NOT_PARTICIPATED, 1],
    },
    {
        name: 'Fredrik B',
        results: [PARTICIPATED, 3, PARTICIPATED],
    },
    {
        name: 'Fredrik S',
        results: [2, PARTICIPATED, PARTICIPATED],
    },
    {
        name: 'Vetle',
        results: [NOT_PARTICIPATED, NOT_PARTICIPATED, PARTICIPATED],
    },
    {
        name: 'Ken',
        results: [1, PARTICIPATED, PARTICIPATED],
    },
    {
        name: 'Seán',
        results: [PARTICIPATED, PARTICIPATED, PARTICIPATED],
    },
    {
        name: 'Lars Olav',
        results: [NOT_PARTICIPATED, PARTICIPATED, 3],
    },
    {
        name: 'Terje',
        results: [PARTICIPATED, PARTICIPATED, NOT_PARTICIPATED],
    },
    {
        name: 'Jan Tore',
        results: [PARTICIPATED, PARTICIPATED, PARTICIPATED],
    },
    {
        name: 'Jarle',
        results: [PARTICIPATED, NOT_PARTICIPATED, PARTICIPATED],
    },
    {
        name: 'Ann Katrin',
        results: [PARTICIPATED, NOT_PARTICIPATED, 2],
    },
    {
        name: 'Bård',
        results: [NOT_PARTICIPATED, NOT_PARTICIPATED, PARTICIPATED],
    },
    {
        name: 'Håkon',
        results: [NOT_PARTICIPATED, PARTICIPATED, PARTICIPATED],
    },
    {
        name: 'Ismar',
        results: [NOT_PARTICIPATED, NOT_PARTICIPATED, PARTICIPATED],
    },
    {
        name: 'Andreas',
        results: [NOT_PARTICIPATED, PARTICIPATED, PARTICIPATED],
    },
    {
        name: 'Hallvard',
        results: [PARTICIPATED, PARTICIPATED, PARTICIPATED],
    },
    {
        name: 'Fredrik Sk',
        results: [NOT_PARTICIPATED, NOT_PARTICIPATED, PARTICIPATED],
    },
];

const rounds = [
    {
        head: 'Bowling',
        points: [500, 400, 300, 200],
        participationScore: 100,
    },
    {
        head: 'Online poker',
        points: [500, 400, 300, 200],
        participationScore: 100,
    },
    {
        head: 'Stein, saks og papir',
        points: [500, 400, 250, 250],
        participationScore: 100,
    },
];

function calcScore(participant) {
    // participation = -1, non-participation = -2
    let totalScore = 0;
    let scores = [];
    let scoreValues = [];
    _.each(participant.results, function (result, i) {
        let event = rounds[i];
        let numberOfScoredPlaces = event.points.length;

        if (result === PARTICIPATED || result > numberOfScoredPlaces) {
            totalScore += event.participationScore;
            scoreValues.push(event.participationScore);
            scores.push('D (' + event.participationScore + ')');
        } else if (result === NOT_PARTICIPATED) {
            totalScore += 0;
            scoreValues.push(0);
            scores.push('F (0)');
        } else {
            totalScore += event.points[result - 1];
            scoreValues.push(event.points[result - 1]);
            scores.push(result + ' (' + event.points[result - 1] + ')');
        }
    });

    participant.resultList = scores.join(', ');
    participant.score = totalScore;
    participant.scoreValues = scoreValues;
}

function calcCountingScore(participant) {
    // participation = -1, non-participation = -2
    let totalScore = 0;
    _.each(participant.scoreValues.slice(0).sort(compareNumbers), function (
        result,
        i
    ) {
        totalScore += result;
    });

    participant.countingScore = totalScore;
}

export function getScores() {
    return _.chain(participants)
        .each(calcScore)
        .each(calcCountingScore)
        .orderBy('countingScore', 'desc')
        .value();
}

function compareNumbers(a, b) {
    return a - b;
}
