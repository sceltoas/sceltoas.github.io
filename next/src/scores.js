import _ from 'lodash';

const PARTICIPATED = -1,
    NOT_PARTICIPATED = -2;

var participants = [
    {
        name: 'Ole Tommy',
        results: [
            PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
        ],
    },
    {
        name: 'Jørgen',
        results: [
            NOT_PARTICIPATED,
            NOT_PARTICIPATED,
            NOT_PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
        ],
    },
    {
        name: 'Ivar',
        results: [
            PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
            NOT_PARTICIPATED,
            PARTICIPATED,
        ],
    },
    {
        name: 'Jan Erik',
        results: [
            PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
            NOT_PARTICIPATED,
            PARTICIPATED,
        ],
    },
    {
        name: 'Herman',
        results: [
            NOT_PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
            NOT_PARTICIPATED,
            PARTICIPATED,
        ],
    },
    {
        name: 'Ole-André',
        results: [
            PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
            1,
            NOT_PARTICIPATED,
        ],
    },
    {
        name: 'Tor Eric',
        results: [PARTICIPATED, PARTICIPATED, PARTICIPATED, PARTICIPATED, 1],
    },
    {
        name: 'Håken',
        results: [PARTICIPATED, PARTICIPATED, PARTICIPATED, 1, PARTICIPATED],
    },
    {
        name: 'Gustav',
        results: [PARTICIPATED, PARTICIPATED, PARTICIPATED, 1, PARTICIPATED],
    },
    {
        name: 'Erlend',
        results: [
            NOT_PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
            NOT_PARTICIPATED,
            1,
        ],
    },
    {
        name: 'Marius',
        results: [PARTICIPATED, PARTICIPATED, PARTICIPATED, PARTICIPATED, 1],
    },
    {
        name: 'Erik',
        results: [
            PARTICIPATED,
            NOT_PARTICIPATED,
            PARTICIPATED,
            NOT_PARTICIPATED,
            PARTICIPATED,
        ],
    },
    {
        name: 'Richard',
        results: [
            NOT_PARTICIPATED,
            3,
            PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
        ],
    },
    {
        name: 'Lars Fredrik',
        results: [
            PARTICIPATED,
            NOT_PARTICIPATED,
            PARTICIPATED,
            NOT_PARTICIPATED,
            NOT_PARTICIPATED,
        ],
    },
    {
        name: 'Fredrik B',
        results: [4, PARTICIPATED, 1, 1, PARTICIPATED],
    },
    {
        name: 'Fredrik S',
        results: [
            NOT_PARTICIPATED,
            4,
            PARTICIPATED,
            NOT_PARTICIPATED,
            PARTICIPATED,
        ],
    },
    {
        name: 'Vetle',
        results: [PARTICIPATED, 2, 3, NOT_PARTICIPATED, PARTICIPATED],
    },
    {
        name: 'Ken',
        results: [NOT_PARTICIPATED, PARTICIPATED, PARTICIPATED, 1, 1],
    },
    {
        name: 'Seán',
        results: [
            2,
            PARTICIPATED,
            PARTICIPATED,
            NOT_PARTICIPATED,
            PARTICIPATED,
        ],
    },
    {
        name: 'Lars Olav',
        results: [1, PARTICIPATED, PARTICIPATED, PARTICIPATED, PARTICIPATED],
    },
    {
        name: 'Terje',
        results: [
            NOT_PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
            NOT_PARTICIPATED,
            NOT_PARTICIPATED,
        ],
    },
    {
        name: 'Jan Tore',
        results: [3, PARTICIPATED, 4, PARTICIPATED, 1],
    },
    {
        name: 'Jarle',
        results: [
            PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
        ],
    },
    {
        name: 'Ann Katrin',
        results: [
            NOT_PARTICIPATED,
            1,
            PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
        ],
    },
    {
        name: 'Kristoffer',
        results: [
            NOT_PARTICIPATED,
            NOT_PARTICIPATED,
            2,
            PARTICIPATED,
            NOT_PARTICIPATED,
        ],
    },
    {
        name: 'Bård',
        results: [
            NOT_PARTICIPATED,
            NOT_PARTICIPATED,
            NOT_PARTICIPATED,
            NOT_PARTICIPATED,
            NOT_PARTICIPATED,
        ],
    },
    {
        name: 'Håkon',
        results: [
            NOT_PARTICIPATED,
            NOT_PARTICIPATED,
            NOT_PARTICIPATED,
            NOT_PARTICIPATED,
            NOT_PARTICIPATED,
        ],
    },
    {
        name: 'Ismar',
        results: [
            NOT_PARTICIPATED,
            NOT_PARTICIPATED,
            NOT_PARTICIPATED,
            NOT_PARTICIPATED,
            PARTICIPATED,
        ],
    },
    {
        name: 'Andreas',
        results: [
            NOT_PARTICIPATED,
            NOT_PARTICIPATED,
            NOT_PARTICIPATED,
            NOT_PARTICIPATED,
            PARTICIPATED,
        ],
    },
    {
        name: 'Hallvard',
        results: [
            NOT_PARTICIPATED,
            NOT_PARTICIPATED,
            NOT_PARTICIPATED,
            NOT_PARTICIPATED,
            PARTICIPATED,
        ],
    },
];

var rounds = [
    {
        head: 'Lynsjakk',
        points: [500, 400, 300, 200],
        participationScore: 100,
    },
    {
        head: 'Darts',
        points: [500, 400, 300, 200],
        participationScore: 100,
    },
    {
        head: 'Poker',
        points: [500, 400, 300, 200],
        participationScore: 100,
    },
    {
        head: 'Seiling',
        points: [300, 0, 0, 0],
        participationScore: 100,
    },
    {
        head: 'CS:Go',
        points: [300, 0, 0, 0],
        participationScore: 100,
    },
];

function calcScore(participant) {
    // participation = -1, non-participation = -2

    var totalScore = 0;
    var scores = [];
    var scoreValues = [];
    _.each(participant.results, function(result, i) {
        var event = rounds[i];
        var numberOfScoredPlaces = event.points.length;

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

function calcScoreDeductTwoWorst(participant) {
    // participation = -1, non-participation = -2

    var totalScore = 0;
    _.each(
        participant.scoreValues
            .slice(0)
            .sort(compareNumbers)
            .slice(2),
        function(result, i) {
            totalScore += result;
        }
    );

    participant.countingScore = totalScore;
}

/* function renderScores() {
    var scoredAndSortedParticipants = _.chain(participants)
        .each(calcScore)
        .each(calcScoreDeductTwoWorst)
        .orderBy('countingScore', 'desc')
        .value();

    $('#results-table').html(participantsTemplate({participants: scoredAndSortedParticipants}));
} */
export function getScores() {
    return _.chain(participants)
        .each(calcScore)
        .each(calcScoreDeductTwoWorst)
        .orderBy('countingScore', 'desc')
        .value();
}

function compareNumbers(a, b) {
    return a - b;
}
