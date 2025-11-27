/*let temp = prompt("Enter a temperature in Celsius :");
    let Fahrenheit =  temp * 9/5 + 32;
   console.log(Fahrenheit);
    let rainyDay = false;
     if (rainyDay == true && Fahrenheit > 77) {
      console.log("It's hot and rainy - stay inside!");
    }
    else if (Fahrenheit < 32) {
      console.log("It's freezing!");
    }
    else if (Fahrenheit  <= 77){
      console.log("Nice weather!");
    }
    
    else if (Fahrenheit  > 77) {
      console.log("It's hot!");
    } */
   function calculateGrade() {
    let math = Number(prompt("Enter your Math marks:"));
    let english = Number(prompt("Enter your English marks:"));
    let science = Number(prompt("Enter your Science marks:"));
    let average = (math + english + science) / 3;
    let total = average >= 80 ? "Excellent!" : "Needs Improvement!";
    let grade;
    if (average >= 90) {
        grade = "A";
    } else if (average >= 80) {
        grade = "B";
    } else if (average >= 70) {
        grade = "C";
    } else if (average >= 60) {
        grade = "D";
    } else {
        grade = "Fail!";
    }
    document.getElementById("gradeResult").innerHTML = `
    <p><b>Your Average is:</b> ${average}</p> 
    <P><b>Your Performance:</b> ${total}</P>
    <p><b>Your Grade is:</b> ${grade}</p>

    `;
}

calculateGrade();