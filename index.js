//Audio

const audio = new Audio("./alarm.mp3");

// For Minutes:
for (let i = 0; i <= 60; i++) {
  mins.innerHTML = mins.innerHTML + `<option value="${i}" id="">${i}</option> `;
}

// For secs:
for (let i = 0; i <= 60; i++) {
  secs.innerHTML = secs.innerHTML + `<option value="${i}" id="">${i}</option> `;
}

// For hours:
for (let i = 0; i < 24; i++) {
  hours.innerHTML =
    hours.innerHTML + `<option value="${i}" id="">${i}</option> `;
}

//Timer:
let timer = new Date();
let year = timer.getFullYear();
let month = timer.getMonth() + 1;
let date = timer.getDate();

//Audio
function bell() {
  audio.play();
  setTimeout(() => {
    location.reload()
  }, 10000);
}

const para = document.getElementById("para");
const setAlarm = document.getElementById("btn");
const img = document.getElementById("imgbox");
setAlarm.addEventListener("click", () => {
  alarmDate = new Date(
    `${year}-${month}-${date} ${hours.value}:${mins.value}:${secs.value}`
  );

  timeforAlarm = new Date();

  alarmTime = alarmDate - timeforAlarm;
  console.log(alarmTime);
  alert(`Apka anokha Alarm darz kiya ja chuka hai jo ${alarmTime/1000} secs mei cheekhega.`)

  if (alarmTime >= 0) {
    setTimeout(() => {
      bell();
      img.src = "./img/waking.png";
      para.innerHTML = "Arey Harry bhai sone do mat jagao!";
    }, alarmTime);
  }
});

//Clear Alarm
const clearAlarm = document.getElementById("clearAlarm");

clearAlarm.addEventListener("click", () => {
  audio.pause();
  alert("Alarm Cleared");
  img.src = "./img/clock.png";
});
