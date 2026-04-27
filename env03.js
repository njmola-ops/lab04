let environmentTitle = "Peaceful Galaxy";

let environmentElements = ["aliens", "astroids", "planets", "sun"];

let mainEntity = {
  name: "aliens",
  type: "extraterrestrial lifeforms",
  mood: ["faint","strong","unstable","clear","blinking","abnormal","changing","dangerous","strange"],
  isMoving: true
};

let lifeCount = 0;

$("#lifebutton").click(function () {
  lifeCount++;
  $(this).html(`Scanned for life ${lifeCount} times`);

  let lifeforms = lifeCount + 2;
  let index = lifeCount % mainEntity.mood.length;
  let currentMood = mainEntity.mood[index];

  $("#output").html(`
    <p class="scan-text1">${lifeforms} lifeforms have been identified.</p>
    <p class="scan-text1">The signal is ${currentMood}.</p>
  `);
});

$("#playBtn").click(function () {
  let audio = $("#sound")[0];

  if (audio.paused) {
    audio.play();
    $(this).text("Pause Sound");
  } else {
    audio.pause();
    $(this).text("Play Sound");
  }
});
let duoEntity = {
  name: "astroids",
  type: "extraterrestrial rock",
  mood: ["low","moderate","high","moderate"],
  isMoving: true
};

let rockCount = 0;

$("#rockbutton").click(function () {
  rockCount++;
  $(this).html(`Scanned for astroids ${rockCount} times`);

  let astroids = rockCount + 3;
  let index = rockCount % duoEntity.mood.length;
  let currentMood = duoEntity.mood[index];

  $("#output").html(`
    <p class="scan-text2">${astroids} astroids have been identified.</p>
    <p class="scan-text2">Collision risk is ${currentMood}.</p>
  `);
});