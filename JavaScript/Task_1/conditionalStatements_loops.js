//Excercise 1
       // Declare temperature (example value, can be changed)
       let temperature = 20;

       // Check temperature with if-else
       if (temperature < 0) {
           console.log("It's freezing!");
       } else if (temperature >= 0 && temperature <= 15) {
           console.log("It's cold.");
       } else if (temperature >= 16 && temperature <= 25) {
           console.log("It's mild.");
       } else {
           console.log("It's warm.");
       } 



       // using swirch statments
      

           // Categorize temperature into a range identifier
           let range;
           if (temperature < 0) {
               range = "freezing";
           } else if (temperature <= 15) {
               range = "cold";
           } else if (temperature <= 25) {
               range = "mild";
           } else {
               range = "warm";
           }

           // Use switch to print message
           switch (range) {
               case "freezing":
                   console.log("It's freezing!");
                   break;
               case "cold":
                   console.log("It's cold.");
                   break;
               case "mild":
                   console.log("It's mild.");
                   break;
               case "warm":
                   console.log("It's warm.");
                   break;
           }


           //EXcercise 2
           // Declare number (example value)
            
               let num = 6;

               // Check divisibility with if-else
               if (num % 2 === 0 && num % 3 === 0) {
                   console.log("Divisible by both.");
               } else if (num % 2 === 0) {
                   console.log("Divisible by 2.");
               } else if (num % 3 === 0) {
                   console.log("Divisible by 3.");
               } else {
                   console.log("Not divisible by 2 or 3.");
               }

           // using switch statements
           let n = 6;

               // Determine divisibility state
               let divState = "";
               if (n % 2 === 0 && n % 3 === 0) {
                   divState = "both";
               } else if (n % 2 === 0) {
                   divState = "two";
               } else if (n % 3 === 0) {
                   divState = "three";
               } else {
                   divState = "none";
               }

               // Use switch to print message
               switch (divState) {
                   case "both":
                       console.log("Divisible by both.");
                       break;
                   case "two":
                       console.log("Divisible by 2.");
                       break;
                   case "three":
                       console.log("Divisible by 3.");
                       break;
                   case "none":
                       console.log("Not divisible by 2 or 3.");
                       break;
               }

           // Excercise 3
           for (let i = 1; i <= 10; i++) {
                   console.log(i);
               }


           // Prin even numbers
           for (let i = 2; i <= 20; i += 2) {
                   console.log(i);
               }

           //Sum of all numbrs
           export{};
           let Sum = 0;
               for (let i = 1; i <= 100; i++) {
                   sum += i;
               }
               console.log("Sum: " + sum);


           //Elemtn of array
           const numbers = [1, 2, 3, 4, 5];
               for (let i = 0; i < numbers.length; i++) {
                   console.log(numbers[i]);
               }


       //Excercise 4
       // pritn 1-10
       export{};
       let y = 1;
           while (y <= 10) {
               console.log(y);
               y++;
           }

       // print even num
       let x= 2;
           while (x <= 20) {
               console.log(x);
               x += 2;
           }

       //sum of num
       let s = 0;
           let j = 1;
           while (j <= 100) {
               s += j;
               j++;
           }
           console.log("Sum: " + sum);

       //multiples
       let k = 5;
           while (k < 50) {
               console.log(k);
               k += 5;
           }

       

       // Excersise 5
       // 1 -10
       let h = 1;
           do {
               console.log(h);
               h++;
           } while (h <= 10);

       
       //sum of num 1-100
       let sum = 0;
           let i = 1;
           do {
               sum += i;
               i++;
           } while (i <= 100);
           console.log("Sum: " + sum);
       
       //prompt user
       let number;
           do {
               number = 15; 
               console.log("You entered: " + number);
               if (number <= 10) {
                   console.log("Please enter a number greater than 10.");
               }
           } while (number <= 10);
           console.log("Valid number: " + number);

       // guess 
       const correctNumber = 7; // Random number for demo
           let guess;
           let attempts = 0;
           do {
               guess = 7; 
               attempts++;
               console.log("You guessed: " + guess);
               if (guess < correctNumber) {
                   console.log("Too low!");
               } else if (guess > correctNumber) {
                   console.log("Too high!");
               }
           } while (guess !== correctNumber);
           console.log("Correct! It took " + attempts + " attempts.");


