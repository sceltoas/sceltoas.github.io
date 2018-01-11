const PARTICIPATED = -1,
    NOT_PARTICIPATED = -2;

var participants = [
    {name: 'Ole Tommy', results: [PARTICIPATED]},
    {name: 'Ivar', results: [PARTICIPATED]},
    {name: 'Jan Erik', results: [PARTICIPATED]},
    {name: 'Herman', results: [PARTICIPATED]},
    {name: 'Ole-André', results: [4]},
    {name: 'Tor Eric', results: [PARTICIPATED]},
    {name: 'Håken', results: [PARTICIPATED]},
    {name: 'Gustav', results: [NOT_PARTICIPATED]},
    {name: 'Erlend', results: [1]},
    {name: 'Marius', results: [PARTICIPATED]},
    {name: 'Erik', results: [NOT_PARTICIPATED]},
    {name: 'Richard', results: [PARTICIPATED]},
    {name: 'Lars Fredrik', results: [NOT_PARTICIPATED]},
    {name: 'Fredrik B', results: [PARTICIPATED]},
    {name: 'Fredrik S', results: [PARTICIPATED]},
    {name: 'Bjarte', results: [PARTICIPATED]},
    {name: 'Vetle', results: [PARTICIPATED]},
    {name: 'Ken', results: [3]},
    {name: 'Sean', results: [2]}
];

var participantsTemplate = _.template(
    '<% _.forEach(participants, function(p,i) { %><tr><td><%= i+1 %></td><td><%- p.name %></td><td>[<%- p.resultList %>]</td><td><%- p.score %></td></tr><% }); %>'
);

var rounds = [
    {head: "PingPong", points: [500, 400, 300, 200], participationScore: 100},
    {head: "Kokkekamp", points: [500, 300, 100], participationScore: 0},
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