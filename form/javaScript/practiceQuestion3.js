function convertTemp() {
  let ansVal = document.getElementById("tempInput").value;
  let choice = document.getElementById("Dropdown_card").value;
 
 if (ansVal === "") {
  document.getElementById("result").innerHTML =
  "<p><b>Please Enter a Temperature!</b></p>"
  return;
 }
 if (choice === "") {
  document.getElementById("result").innerHTML =
  "<p><b>Please Select a Mode!</b></p>"
  return;
 }

  ansVal = Number(ansVal); 
  let convertedTemp;
  let celsiusVal;

  switch(choice) {
   case "cToF":
    convertedTemp = (ansVal * 9/5) + 32;
    celsiusVal = ansVal;
    break;

    case "fToC":
      convertedTemp = (ansVal - 32) * 5/9;
      celsiusVal = ansVal;
      break;

    case "cToK":
      convertedTemp = ansVal + 273.15;
      celsiusVal = ansVal;
       break;

    case "kToC":
      convertedTemp = ansVal - 273.15;
      celsiusVal = ansVal;
      break;
  }
  let mood = "";
  if (celsiusVal < 10) {
    mood = "Cold";
  }
  else if (celsiusVal >= 10 && celsiusVal <25) {
    mood = "Warm";
  }
  else if (celsiusVal >= 25 && celsiusVal < 35) {
    mood = "Hot";
  }
  else {
    mood = "Extreme Heat";
  }
 let hydrationCard = celsiusVal > 30 ? "Stay Hydrated!" : "Weather looks good!";

  document.getElementById("result").innerHTML = `
  <p><b>Converted Temperature:</b> ${convertedTemp}</p>
  <p><b>Mood:</b> ${mood}</p> 
  <P> ${hydrationCard}</P>
  
  `;
}