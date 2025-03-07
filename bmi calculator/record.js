document.getElementById('recordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let activity = document.getElementById('activity').value;

    // Example: Perform validation before submitting
    if (activity) {
        // Simulate API request to record activity
        alert(`Activity "${activity}" recorded successfully!`);
        this.reset();
    } else {
        alert('Please enter an activity.');
    }
});
