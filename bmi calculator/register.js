document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let gender = document.getElementById('gender').value;

    // Example: Perform validation before submitting
    if (name && age && gender) {
        // Simulate API request to register user
        alert(`User ${name} registered successfully!`);
        this.reset();
    } else {
        alert('Please fill out all fields.');
    }
});
