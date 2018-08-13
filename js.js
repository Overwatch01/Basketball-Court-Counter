var TeamA = 0;
var TeamB = 0; 
var distance;

var timer = new Date().getTime();
var x = setInterval(function() {
  var now = new Date().getTime();

  distance = timer-now;

  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / (1000));

  document.getElementById("timeOut").value  = hours + "h " + minutes + "m " + seconds + "s ";

  if(distance < 0){
    clearInterval(x);
    document.getElementById("timeOut").value = "Game OVER!!!"
  }
}, 1000);


//Add Three Point to Team A
function addThreePointToTeamA(){
      TeamA += 3;
      var result =  document.getElementById("scoreA");
      result.value = this.TeamA;
}

//Add Two Point to Team A
function addTwoPointToTeamA(){
  TeamA += 2;
  var result =  document.getElementById("scoreA");
  result.value = this.TeamA;
}

//Add One Point to Team A
function addOnePointToTeamA(){
  TeamA += 1;
var result =  document.getElementById("scoreA");
result.value = this.TeamA;
}

//Add Three Point to Team B
function addThreePointToTeamB(){
  TeamB += 3;
var result =  document.getElementById("scoreB");
result.value = this.TeamB;
}

//Add Two Point to Team B
function addTwoPointToTeamB(){
TeamB += 2;
var result =  document.getElementById("scoreB");
result.value = this.TeamB;
}

//Add One Point to Team B
function addOnePointToTeamB(){
TeamB += 1;
var result =  document.getElementById("scoreB");
result.value = this.TeamB;
}

//Reset Both Scores
function resetScores(){
  TeamA = 0;
  TeamB = 0;

  var teamAResult =  document.getElementById("scoreA");
  var teamBResult =  document.getElementById("scoreB");

  teamAResult.value = this.TeamB;
  teamBResult.value = this.TeamB;
}