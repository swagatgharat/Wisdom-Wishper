// Event listener to run code when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('quote-form');
    const submitButton = form.querySelector('button[type="submit"]');
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');

    // Event listener for form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // Retrieve and trim input values
        const quoteText = document.getElementById('quote-text').value.trim();
        const authorName = document.getElementById('author-name').value.trim();
        const category = document.getElementById('category-select').value;

        // Clear previous messages
        errorMessage.textContent = '';
        successMessage.textContent = '';

        // Validate input fields
        if (!quoteText || !authorName || !category) {
            errorMessage.textContent = 'Please fill out all fields.';
            return;
        }

        // Retrieve existing user quotes from localStorage
        let quotes = JSON.parse(localStorage.getItem('userQuotes')) || {};

        // Add the new quote to the appropriate category
        if (!quotes[category]) {
            quotes[category] = [];
        }
        quotes[category].push(`${quoteText} – ${authorName}`);
        localStorage.setItem('userQuotes', JSON.stringify(quotes));

        // Provide feedback for successful submission
        submitButton.textContent = 'Submitted';
        submitButton.disabled = true;
        successMessage.textContent = 'Quote submitted successfully!';

        // Reset the form and feedback messages after a delay
        setTimeout(() => {
            form.reset();
            submitButton.textContent = 'Submit Quote';
            submitButton.disabled = false;
            successMessage.textContent = '';
        }, 1000);
    });
});
