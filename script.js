function checkNevada() {
  if (document.getElementById("Nevada").checked) {
    alert("You have chosen...wisely.");
  } else {
    alert("You have chosen...poorly.");
  }
}
function checkWash() {
  if (document.getElementById("Washington").checked) {
    alert("You have chosen...wisely.");
  } else {
    alert("You have chosen...poorly.");
  }
}
function checkRhode() {
  if (document.getElementById("Rhode Island").checked) {
    alert("You have chosen...wisely.");
  } else {
    alert("You have chosen...poorly.");
  }
}

function checkMinn() {
  if (document.getElementById("Minnesota").checked) {
    alert("You have chosen...wisely.");
  } else {
    alert("You have chosen...poorly.");
  }
}

function checkWestVirg() {
  if (document.getElementById("West Virginia").checked) {
    alert("You have chosen...wisely.");
  } else {
    alert("You have chosen...poorly.");
  }
}

//Score Addition
var score = 0;

function results() {
  if (document.getElementById("Nevada").checked) {
    TeNeIo = document.getElementById("Nevada").value;
    score = score + 20;
  } else if (document.getElementById("Texas").checked) {
    TeNeIo = document.getElementById("Texas").value;
  } else {
    TeNeIo = document.getElementById("Iowa").value;
  }

  if (document.getElementById("Washington").checked) {
    WaNYMo = document.getElementById("Washington").value;
    score = score + 20;
  } else if (document.getElementById("New York").checked) {
    WaNYMo = document.getElementById("New York").value;
  } else {
    WaNYMo = document.getElementById("Montana").value;
  }

  if (document.getElementById("Rhode Island").checked) {
    DeRIAr = document.getElementById("Rhode Island").value;
    score = score + 20;
  } else if (document.getElementById("Delaware").checked) {
    DeRIAr = document.getElementById("Delaware").value;
  } else {
    DeRIAr = document.getElementById("Arizona").value;
  }

  if (document.getElementById("Minnesota").checked) {
    WyNeMi = document.getElementById("Minnesota").value;
    score = score + 20;
  } else if (document.getElementById("Nevada2").checked) {
    WyNeMi = document.getElementById("Nevada2").value;
  } else {
    WyNeMi = document.getElementById("Wyoming").value;
  }

  if (document.getElementById("West Virginia").checked) {
    WeViTe = document.getElementById("West Virginia").value;
    score = score + 20;
  } else if (document.getElementById("Virginia").checked) {
    WeViTe = document.getElementById("Virginia").value;
  } else {
    WeViTe = document.getElementById("Tennessee").value;
  }

  var name = document.getElementById("name").value;

  if (document.getElementById("difficulty1").checked) {
    difficulty = document.getElementById("difficulty1").value;
  } else if (document.getElementById("difficulty2").checked) {
    difficulty = document.getElementById("difficulty2").value;
  } else {
    difficulty = document.getElementById("difficulty3").value;
  }

  if (document.getElementById("yes").selected) {
    recommend = document.getElementById("yes").value;
  } else if (document.getElementById("maybe").selected) {
    recommend = document.getElementById("maybe").value;
  } else {
    recommend = document.getElementById("no").value;
  }

  document.getElementById("nameResult").innerHTML = name;
  document.getElementById("teneioResult").innerHTML = TeNeIo;
  document.getElementById("wanymoResult").innerHTML = WaNYMo;
  document.getElementById("deriarResult").innerHTML = DeRIAr;
  document.getElementById("wynemiResult").innerHTML = WyNeMi;
  document.getElementById("weviteResult").innerHTML = WeViTe;
  document.getElementById("diffResult").innerHTML = difficulty;
  document.getElementById("recResult").innerHTML = recommend;
  document.getElementById("scoreResult").innerHTML = score + "%";
}

function reset() {
  document.getElementById("Texas").checked = false;
  document.getElementById("Nevada").checked = false;
  document.getElementById("Iowa").checked = false;
  document.getElementById("Washington").checked = false;
  document.getElementById("New York").checked = false;
  document.getElementById("Montana").checked = false;
  document.getElementById("Delaware").checked = false;
  document.getElementById("Rhode Island").checked = false;
  document.getElementById("Arizona").checked = false;
  document.getElementById("Wyoming").checked = false;
  document.getElementById("Nevada2").checked = false;
  document.getElementById("Minnesota").checked = false;
  document.getElementById("West Virginia").checked = false;
  document.getElementById("Virginia").checked = false;
  document.getElementById("Tennessee").checked = false;
  document.getElementById("Tennessee").checked = false;
  document.getElementById("difficulty1").checked = false;
  document.getElementById("difficulty2").checked = false;
  document.getElementById("difficulty3").checked = false;
  document.getElementById("name").value = "";
  document.getElementById("choose").selected = true;
  document.getElementById("yes").selected = false;
  document.getElementById("maybe").selected = false;
  document.getElementById("no").selected = false;
  resetDisplay();
}

function resetDisplay() {
  name = "";
  document.getElementById("nameResult").innerHTML = name;
  TeNeIo = "";
  document.getElementById("teneioResult").innerHTML = TeNeIo;
  WaNYMo = "";
  document.getElementById("wanymoResult").innerHTML = WaNYMo;
  DeRIAr = "";
  document.getElementById("deriarResult").innerHTML = DeRIAr;
  WyNeMi = "";
  document.getElementById("wynemiResult").innerHTML = WyNeMi;
  WeViTe = "";
 document.getElementById("weviteResult").innerHTML = WeViTe;
  difficulty = "";
  document.getElementById("diffResult").innerHTML = difficulty;
  recommend = "";
  document.getElementById("recResult").innerHTML = recommend;
  score = 0;
  document.getElementById("scoreResult").innerHTML = score;
}