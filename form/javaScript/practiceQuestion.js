 let temp = prompt("Enter a temperature in Celsius :");
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
    }   