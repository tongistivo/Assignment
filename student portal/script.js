


let studentName = "Alice Wahome";
let registrationNumber = "Com/01/001-2024";
let academicProgramme = "Bsc. Data Science";


console.log("Student Name: " + studentName);
console.log("Registration Number: " + registrationNumber);
console.log("Academic Programme: " + academicProgramme);




function CalculateGrade(score) {

    if (score >= 70 && score <= 100) {
        return "A";
    }

    else if (score >= 60 && score <= 69) {
        return "B";
    }

    else if (score >= 50 && score <= 59) {
        return "C";
    }

    else if (score >= 40 && score <= 49) {
        return "D";
    }

    else if (score >= 0 && score < 40) {
        return "E";
    }

    else {
        return "Invalid Score";
    }
}

// Call the function with a score of 75

let grade = CalculateGrade(75);

// Display the returned grade using alert()

alert("Your examination grade is: " + grade);


let registrationForm = document.getElementById("registrationForm");



registrationForm.addEventListener("submit", function(event) {


    event.preventDefault();



    let name = document.getElementById("fullName").value.trim();

    let regNumber = document.getElementById("regNumber").value.trim();

    let email = document.getElementById("email").value.trim();

    let programme = document.getElementById("programme").value;



    if (name === "") {
        alert("Please enter your full name.");
        return;
    }



    if (regNumber === "") {
        alert("Please enter your registration number.");
        return;
    }



    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }



    if (programme === "") {
        alert("Please select your academic programme.");
        return;
    }



    let output = document.getElementById("output");

    output.innerHTML = `
        <h2>Registration Successful!</h2>

        <p><strong>Student Name:</strong> ${name}</p>

        <p><strong>Registration Number:</strong> ${regNumber}</p>

        <p><strong>Email Address:</strong> ${email}</p>

        <p><strong>Academic Programme:</strong> ${programme}</p>

        <h3>Congratulations!</h3>

        <p>Your registration has been submitted successfully.</p>
    `;



    console.log("Registration submitted successfully!");


    registrationForm.reset();

});
