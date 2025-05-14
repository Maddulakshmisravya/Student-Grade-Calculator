const calculate = () => {
    let sub1 = document.querySelector("#chemistry").value;
    let sub2 = document.querySelector("#maths").value;
    let sub3 = document.querySelector("#phy").value;
    let grade = "";

    // Check if any field is empty or contains non-numeric input
    if (sub1 === "" || sub2 === "" || sub3 === "") {
        document.querySelector("#showdata").innerHTML = "Please enter all the fields";
        return;
    }

    // Convert inputs to numbers and check if any value is NaN
    sub1 = parseFloat(sub1);
    sub2 = parseFloat(sub2);
    sub3 = parseFloat(sub3);

    if (isNaN(sub1) || isNaN(sub2) || isNaN(sub3)) {
        document.querySelector("#showdata").innerHTML = "Please enter valid numbers for all subjects.";
        return;
    }

    let total = sub1 + sub2 + sub3;
    let percent = (total / 300) * 100;  // Adjusted for three subjects

    if (percent >= 80) {
        grade = "A";
    } else if (percent >= 60) {
        grade = "B";
    } else if (percent >= 40) {
        grade = "C";
    } else {
        grade = "F";
    }

    if (percent >= 39.5) {
        document.querySelector("#showdata").innerHTML =
            `Out of 300 your total is ${total}<br>Percentage is ${percent.toFixed(2)}%.<br>Your grade is ${grade}. You are Pass.`;
    } else {
        document.querySelector("#showdata").innerHTML =
            `Out of 300 your total is ${total}<br>Percentage is ${percent.toFixed(2)}%.<br>Your grade is ${grade}. You are Fail.`;
    }
};
