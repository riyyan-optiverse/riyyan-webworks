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
   let english =Number(prompt("Enter your English marks:"));
   let science =Number(prompt("Enter your Science marks:"));
   let average = (math + english + science) / 3;
   console.log("Your average is:", average);
   let total = average >= 80 ? "Excellent" : "Needs Improvement";
   console.log(total);
   let grade;
   if (average >= 90){
    console.log("Your grade is A");
   }
   else if(average >= 80){
    console.log("Your grade is B");
   }
    else if(average >= 70){
    console.log("Your grade is C");
   }
    else if(average >= 60){
    console.log("Your grade is D");
   }
   else{
    console.log("Fail");
   }
   }
   calculateGrade();