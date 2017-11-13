const PARTICIPATED = -1,
    NOT_PARTICIPATED = -2;

var participants = [
    {name: 'Ole Tommy', results: []},
    {name: 'Ivar', results: []},
    {name: 'Jan Erik', results: []},
    {name: 'Herman', results: []},
    {name: 'Ole-André', results: []},
    {name: 'Tor Eric', results: []},
    {name: 'Håken', results: []},
    {name: 'Gustav', results: []},
    {name: 'Erlend', results: []},
    {name: 'Marius', results: []},
    {name: 'Erik', results: []},
    {name: 'Rickard', results: []},
    {name: 'Bjarte', results: []},
    {name: 'Vetle', results: []},
    {name: 'Ken', results: []},
    {name: 'Sean', results: []}
];

var participantsTemplate = _.template(
    '<% _.forEach(participants, function(p,i) { %><tr><td><%= i+1 %></td><td><%- p.name %></td><td><%- p.resultList %></td><td><%- p.score %></td></tr><% }); %>'
);

var rounds = [
    {head: "PingPong", points: [500, 400, 300, 200], participationScore: 100},
    {head: "Kokkekamp", location: 'Matkurs.no', points: [500, 400, 300, 200], participationScore: 100},
    {head: "HatTrick", location: 'Brygg', points: [500, 400, 300, 200], participationScore: 100},
    {head: "Hafjell Poker", location: 'Hafjell', points: [500, 400, 300, 200], participationScore: 100},
    {head: "Fekting", location: '', points: [500, 400, 300, 200], participationScore: 100}



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