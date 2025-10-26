// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {

    // --- Task 0: First Script ---

    // 1. Use console.log() to print name and group
    console.log("Name: Serik Alikhan");
    console.log("Group: SE-2421");

    // 2. Script for "alert" message (using Bootstrap's Modal)
    const helloButton = document.getElementById('helloButton');

    const bootstrapModal = new bootstrap.Modal(document.getElementById('customModal'));

    helloButton.addEventListener('click', () => {
        bootstrapModal.show();
    });

    // --- Task 1: Variables & Operators ---
    console.log("--- Task 1: Variables & Operators ---");

    // 1. Declare variables of different data types
    let myString = "This is a string";
    let myNumber = 42;
    let myBoolean = true;

    console.log("String variable:", myString, "(Type:", typeof myString, ")");
    console.log("Number variable:", myNumber, "(Type:", typeof myNumber, ")");
    console.log("Boolean variable:", myBoolean, "(Type:", typeof myBoolean, ")");

    // 2. Perform arithmetic operations
    let a = 20;
    let b = 5;
    console.log("Arithmetic Operations (a=20, b=5):");
    console.log("Addition (a + b):", a + b);
    console.log("Subtraction (a - b):", a - b);
    console.log("Multiplication (a * b):", a * b);
    console.log("Division (a / b):", a / b);
    console.log("Modulus (a % b):", a % b);

    // 3. Concatenate strings
    let firstName = "JavaScript";
    let lastName = "Developer";
    let fullName = firstName + " " + lastName;
    console.log("String Concatenation:", fullName);


    // --- Task 2: Changing Content ---
    console.log("--- Task 2: Attaching Listener ---");
    const changeTextBtn = document.getElementById('changeTextBtn');
    const textToChange = document.getElementById('textToChange');

    changeTextBtn.addEventListener('click', () => {
        textToChange.textContent = "The paragraph text has been successfully changed! Well done!";
        // Используем классы Bootstrap
        textToChange.classList.add('text-success', 'fw-bold');
    });


    // --- Task 3: Changing Styles ---
    console.log("--- Task 3: Attaching Listener ---");
    const changeStyleBtn = document.getElementById('changeStyleBtn');
    const styleTarget = document.getElementById('styleTarget');

    changeStyleBtn.addEventListener('click', () => {
        // Toggle classes to change styles using Bootstrap classes
        
        // Оригинальные классы из HTML
        styleTarget.classList.toggle('bg-secondary-subtle');
        styleTarget.classList.toggle('border-secondary-subtle');
        styleTarget.classList.toggle('text-dark');

        // Новые классы для добавления
        styleTarget.classList.toggle('bg-purple'); // Кастомный класс
        styleTarget.classList.toggle('border-purple-dark'); // Кастомный класс
        styleTarget.classList.toggle('text-white');
        styleTarget.classList.toggle('shadow-lg'); // Этот класс есть и в Bootstrap

        // Update text content based on new style
        if (styleTarget.classList.contains('bg-purple')) {
            styleTarget.textContent = "My style has changed!";
        } else {
            styleTarget.textContent = "I am the element to be styled!";
        }
    });

});