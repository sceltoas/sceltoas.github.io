const PARTICIPATED = -1,
  NOT_PARTICIPATED = -2;

var participants = [
  {
    name: 'Ole Tommy',
    results: [PARTICIPATED, PARTICIPATED, PARTICIPATED, PARTICIPATED]
  },
  {
    name: 'Ivar',
    results: [PARTICIPATED, PARTICIPATED, PARTICIPATED, NOT_PARTICIPATED]
  },
  {
    name: 'Jan Erik',
    results: [PARTICIPATED, PARTICIPATED, PARTICIPATED, NOT_PARTICIPATED]
  },
  {
    name: 'Herman',
    results: [NOT_PARTICIPATED, PARTICIPATED, PARTICIPATED, NOT_PARTICIPATED]
  },
  { name: 'Ole-André', results: [PARTICIPATED, PARTICIPATED, PARTICIPATED, 1] },
  {
    name: 'Tor Eric',
    results: [PARTICIPATED, PARTICIPATED, PARTICIPATED, PARTICIPATED]
  },
  { name: 'Håken', results: [PARTICIPATED, PARTICIPATED, PARTICIPATED, 1] },
  { name: 'Gustav', results: [PARTICIPATED, PARTICIPATED, PARTICIPATED, 1] },
  {
    name: 'Erlend',
    results: [NOT_PARTICIPATED, PARTICIPATED, PARTICIPATED, NOT_PARTICIPATED]
  },
  {
    name: 'Marius',
    results: [PARTICIPATED, PARTICIPATED, PARTICIPATED, PARTICIPATED]
  },
  {
    name: 'Erik',
    results: [PARTICIPATED, NOT_PARTICIPATED, PARTICIPATED, NOT_PARTICIPATED]
  },
  {
    name: 'Richard',
    results: [NOT_PARTICIPATED, 3, PARTICIPATED, PARTICIPATED]
  },
  {
    name: 'Lars Fredrik',
    results: [PARTICIPATED, NOT_PARTICIPATED, PARTICIPATED, NOT_PARTICIPATED]
  },
  { name: 'Fredrik B', results: [4, PARTICIPATED, 1, 1] },
  {
    name: 'Fredrik S',
    results: [NOT_PARTICIPATED, 4, PARTICIPATED, NOT_PARTICIPATED]
  },
  { name: 'Vetle', results: [PARTICIPATED, 2, 3, NOT_PARTICIPATED] },
  { name: 'Ken', results: [NOT_PARTICIPATED, PARTICIPATED, PARTICIPATED, 1] },
  { name: 'Seán', results: [2, PARTICIPATED, PARTICIPATED, NOT_PARTICIPATED] },
  { name: 'Lars Olav', results: [1, PARTICIPATED, PARTICIPATED, PARTICIPATED] },
  {
    name: 'Terje',
    results: [NOT_PARTICIPATED, PARTICIPATED, PARTICIPATED, NOT_PARTICIPATED]
  },
  { name: 'Jan Tore', results: [3, PARTICIPATED, 4, PARTICIPATED] },
  {
    name: 'Jarle',
    results: [PARTICIPATED, PARTICIPATED, PARTICIPATED, PARTICIPATED]
  },
  {
    name: 'Ann Katrin',
    results: [NOT_PARTICIPATED, 1, PARTICIPATED, PARTICIPATED]
  },
  {
    name: 'Kristoffer',
    results: [NOT_PARTICIPATED, NOT_PARTICIPATED, 2, PARTICIPATED]
  }
];

var participantsTemplate = _.template(
  '<% _.forEach(participants, function(p,i) { %><tr><td><%= i+1 %></td><td><%- p.name %></td><td>[<%- p.resultList %>]</td><td><%- p.countingScore %></td><td style="opacity: .5"><%- p.score %></td></tr><% }); %>'
);

var rounds = [
  { head: 'Lynsjakk', points: [500, 400, 300, 200], participationScore: 100 },
  { head: 'Darts', points: [500, 400, 300, 200], participationScore: 100 },
  { head: 'Poker', points: [500, 400, 300, 200], participationScore: 100 },
  { head: 'Seiling', points: [300, 0, 0, 0], participationScore: 100 }
];

$(document).ready(function() {
  renderScores();
});

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
  var scoreValuesList =
    participant.scoreValues.length >= 4
      ? participant.scoreValues.sort(compareNumbers).slice(2)
      : participant.scoreValues;

  _.each(scoreValuesList, function(result, i) {
    totalScore += result;
  });

  participant.countingScore = totalScore;
}

function renderScores() {
  var scoredAndSortedParticipants = _.chain(participants)
    .each(calcScore)
    .each(calcScoreDeductTwoWorst)
    .orderBy('countingScore', 'desc')
    .value();

  $('#results-table').html(
    participantsTemplate({ participants: scoredAndSortedParticipants })
  );
}

function compareNumbers(a, b) {
  return a - b;
}
