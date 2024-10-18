document.getElementById('generate-btn').addEventListener('click', function () {
    let limit = parseInt(prompt("Enter a limit to generate even numbers:"));

    if (isNaN(limit)) {
        Swal.fire("Invalid Input", "Please enter a valid number!", "error");
        return;
    }

    if (limit % 2 !== 0) {
        Swal.fire("Odd Number!", `${limit} is an odd number. Please try an even number.`, "info");
        return;
    }

    let output = '';
    let i = 0;

    while (i <= limit) {
        if (i % 2 === 0) {
            output += i + ' ';
        }
        i++;
    }

    document.getElementById('output').textContent = `Even numbers from 0 to ${limit}: ${output}`;
});
