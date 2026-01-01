	Task 1:	

    const classA = ["An", "Binh", "Chi"];
    const classB = classA;
    classB[0] = "An Updated";
    console.log(classA);
// Output: ["An Updated", "Binh", "Chi"]
    That is because classA and classB share the same memory address (both have the value 0x01). When the first element of classB is changed to "An Updated", classA is also updated accordingly.
    

    Task 2:	

    The addition results in "102" because the + operator is used for both numeric addition and string concatenation. If one of the operands is a string, it coerces the non-string operand into a string and then performs string concatenation, which leads to the result "102" as shown. If both operands are numbers, it performs normal numeric addition.

    For the -, *, and / operators, JavaScript prioritizes coercing the operands into numbers. If the values cannot be coerced into numbers, the result will be NaN. Therefore, Result 2 is 8, and the last line of Result 4 produces NaN. NaN stands for Not a Number, which occurs because "Hello" cannot be converted into a number.


    Task 3:

// age = 9, mathScore = 10, isVIP = false → Result must be false

    const age = 9;
    const mathScore = 10;
    let isVIP = false;
    let canEnter = (age >= 10 && mathScore > 7) || isVIP;
    console.log(canEnter);

// age = 9, mathScore = 10, isVIP = true → Result must be true

    const age = 9;
    const mathScore = 10;
    let isVIP = true;
    let canEnter = (age >= 10 && mathScore > 7) || isVIP;
    console.log(canEnter);

// Logic Question: Is !(age < 10) mathematically the same as age >= 10?

    YES, they are completely equivalent


    Task 4:	

// PREDICT THE RESULT
    laptop.brand      // "Apple"
    laptop.spec.ram   // "16GB"

// Question: Before running the code, predict the values of laptop.brand and laptop.spec.ram. Explain why the changes made to myLaptop and mySpec affected the original laptop object.		
    laptop and myLaptop both point to the same memory address in RAM, so any changes made to myLaptop will also affect laptop. The same applies to mySpec.																			