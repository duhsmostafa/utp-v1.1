document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    const formData = new FormData(this); // Collect form data

    fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
    })
    .then(response => {
        if (response.ok) {
            document.getElementById('success-message').style.display = 'block'; // Show success message
            setTimeout(() => {
                document.getElementById('success-message').style.display = 'none'; // Hide after 3 seconds
            }, 3000);
            this.reset(); // Reset the form fields
        } else {
            alert('There was a problem with your submission. Please try again.');
        }
    })
    .catch(error => {
        alert('There was an error. Please try again later.');
    });
});







document.getElementById('subscription-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    const formData = new FormData(this); // Collect form data

    fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
    })
    .then(response => {
        if (response.ok) {
            // Display the success message
            const responseMessage = document.getElementById('response-message');
            responseMessage.textContent = 'Thanks for your subscription!';
            responseMessage.style.display = 'block'; // Show success message
            setTimeout(() => {
                responseMessage.style.display = 'none'; // Hide after 3 seconds
            }, 3000);
            this.reset(); // Reset the form fields
        } else {
            alert('There was a problem with your submission. Please try again.');
        }
    })
    .catch(error => {
        alert('There was an error. Please try again later.');
    });
});
