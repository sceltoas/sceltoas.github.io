const PARTICIPATED = -1,
    NOT_PARTICIPATED = -2;

var participants = [
    {name: 'Ole Tommy', results: [PARTICIPATED, 6, PARTICIPATED, PARTICIPATED, PARTICIPATED]},
    {name: 'Ivar', results: [PARTICIPATED, NOT_PARTICIPATED, NOT_PARTICIPATED, NOT_PARTICIPATED, 1]},
    {name: 'Jan Erik', results: [PARTICIPATED, 7, PARTICIPATED, NOT_PARTICIPATED, PARTICIPATED]},
    {name: 'Herman', results: [PARTICIPATED, 6, PARTICIPATED, 3, PARTICIPATED]},
    {name: 'Ole-André', results: [4, 6, PARTICIPATED, PARTICIPATED, NOT_PARTICIPATED]},
    {name: 'Tor Eric', results: [PARTICIPATED, 6, PARTICIPATED, 1, PARTICIPATED]},
    {name: 'Håken', results: [PARTICIPATED, 4, PARTICIPATED, PARTICIPATED, 4]},
    {name: 'Gustav', results: [NOT_PARTICIPATED, 2, PARTICIPATED, PARTICIPATED, PARTICIPATED]},
    {name: 'Erlend', results: [1, 7, 1, PARTICIPATED, NOT_PARTICIPATED]},
    {name: 'Marius', results: [PARTICIPATED, 7, PARTICIPATED, 2, PARTICIPATED]},
    {name: 'Erik', results: [NOT_PARTICIPATED, 3, PARTICIPATED, 4, PARTICIPATED]},
    {name: 'Richard', results: [PARTICIPATED, 3, 1, PARTICIPATED, PARTICIPATED]},
    {name: 'Lars Fredrik', results: [NOT_PARTICIPATED, 6, PARTICIPATED, PARTICIPATED, NOT_PARTICIPATED]},
    {name: 'Fredrik B', results: [PARTICIPATED, 4, 1, NOT_PARTICIPATED, NOT_PARTICIPATED]},
    {name: 'Fredrik S', results: [PARTICIPATED, 4, PARTICIPATED, PARTICIPATED, 3]},
    {name: 'Bjarte', results: [PARTICIPATED, 7, PARTICIPATED, PARTICIPATED, 2]},
    {name: 'Vetle', results: [PARTICIPATED, 1, PARTICIPATED, PARTICIPATED, PARTICIPATED]},
    {name: 'Ken', results: [3, 5, 1, PARTICIPATED, PARTICIPATED]},
    {name: 'Sean', results: [2, NOT_PARTICIPATED, NOT_PARTICIPATED, PARTICIPATED, PARTICIPATED]}
];

var participantsTemplate = _.template(
    '<% _.forEach(participants, function(p,i) { %><tr><td><%= i+1 %></td><td><%- p.name %></td><td>[<%- p.resultList %>]</td><td><%- p.score %></td></tr><% }); %>'
);

var rounds = [
    {head: "PingPong", points: [500, 400, 300, 200], participationScore: 100},
    {head: "BONUSRUNDE: Vinsmaking", points: [150, 120, 100, 80, 50, 30, 0], participationScore: 0},
    {head: "Kokkekamp", points: [300], participationScore: 100},
    {head: "HatTrick", points: [500, 400, 300, 200], participationScore: 100},
    {head: "Hafjell Poker", points: [250, 200, 150, 100], participationScore: 0},
    {head: "Fekting", points: [550, 450, 350, 250], participationScore: 100},
    {head: "Quiz", points: [450, 350, 250], participationScore: 100},
    {head: "SCIPT", points: [250, 200, 150, 100], participationScore: 50}
];


$(document).ready(function() {
    renderScores();
});

function calcScore(participant) {
    // participation = -1, non-participation = -2

    var totalScore = 0;
    var scores = [];
    _.each(participant.results, function(result, i) {
        var event = rounds[i];
        var numberOfScoredPlaces = event.points.length;

        if(result === PARTICIPATED || result > numberOfScoredPlaces) {
            totalScore += event.participationScore;
            scores.push('D');
        } else if (result === NOT_PARTICIPATED) {
            totalScore += 0;
            scores.push('F');
        } else {
            totalScore += event.points[result-1];
            scores.push(result);
        }
    });

    participant.resultList = scores.join(', ');
    participant.score = totalScore;
}

function renderScores() {
    var scoredAndSortedParticipants = _.chain(participants)
        .each(calcScore)
        .orderBy('score', 'desc')
        .value();

    $('#results-table').html(participantsTemplate({participants: scoredAndSortedParticipants}));
}