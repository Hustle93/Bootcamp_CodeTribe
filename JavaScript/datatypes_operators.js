// Excercise 2

            // Task 1 & 2: Comparing two numbers (x and y)
            // Declare variables x and y with values 8 and 12
            let x = 8;
            let y = 12;

            // Use comparison operators and store results in boolean variables
            let isGreater = x > y;        // Check if x is greater than y
            let isLessOrEqual = x <= y;   // Check if x is less than or equal to y
            let isEqual = x === y;        // Check if x is equal to y
            let isNotEqual = x !== y;     // Check if x is not equal to y

            // Print the results
            console.log("Is x greater than y? " + isGreater);        // false
            console.log("Is x less than or equal to y? " + isLessOrEqual); // true
            console.log("Is x equal to y? " + isEqual);              // false
            console.log("Is x not equal to y? " + isNotEqual);       // true

            // Task 3: Logical operations with boolean variables
            // Declare variables a and b with values true and false
            let a = true;
            let b = false;

            // Perform logical operations
            let andResult = a && b;    // a AND b
            let orResult = a || b;     // a OR b
            let notResult = !a;        // NOT a

            // Print the results
            console.log("a AND b: " + andResult);  // false
            console.log("a OR b: " + orResult);    // true
            console.log("NOT a: " + notResult);    // false

            // Task 4: Assignment operators with variable p
            // Declare variable p with value 10
            let p = 10;

            // Use assignment operators and modify p with a number (I’ll use 5 for consistency)
            p += 5;    // p = p + 5
            console.log("p after += 5: " + p);  // 15

            p -= 3;    // p = p - 3
            console.log("p after -= 3: " + p);  // 12

            p *= 2;    // p = p * 2
            console.log("p after *= 2: " + p);  // 24

            p /= 4;    // p = p / 4
            console.log("p after /= 4: " + p);  // 6

            p %= 5;    // p = p % 5
            console.log("p after %= 5: " + p);  // 1