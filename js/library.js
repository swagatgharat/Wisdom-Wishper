// Event listener to run code when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const libraryList = document.getElementById('library-list');
    const userQuotes = JSON.parse(localStorage.getItem('userQuotes')) || {};

    /**
     * Render all user-submitted quotes categorized by their categories.
     */
    function renderQuotes() {
        libraryList.innerHTML = ''; // Clear the list before rendering
        
        if (Object.keys(userQuotes).length === 0) {
            libraryList.innerHTML = "<p>No quotes submitted yet.</p>";
            return;
        }

        for (const [category, quotes] of Object.entries(userQuotes)) {
            // Create a section for each category
            const categorySection = document.createElement('div');
            categorySection.classList.add('category-section');

            // Add category title
            const categoryTitle = document.createElement('h2');
            categoryTitle.textContent = category;
            categorySection.appendChild(categoryTitle);

            // Add quotes under the category
            quotes.forEach(quote => {
                const quoteDiv = document.createElement('div');
                quoteDiv.classList.add('favorite-quote');
                
                const quoteText = document.createElement('span');
                quoteText.textContent = quote;

                const removeButton = document.createElement('button');
                removeButton.textContent = '❌'; 
                removeButton.classList.add('remove-button');
                removeButton.onclick = () => removeQuote(category, quote); 
                
                quoteDiv.appendChild(quoteText);
                quoteDiv.appendChild(removeButton);
                categorySection.appendChild(quoteDiv);
            });

            libraryList.appendChild(categorySection);
        }
    }

    /**
     * Remove a quote from a specified category and update localStorage.
     * @param {string} category - The category from which to remove the quote.
     * @param {string} quoteToRemove - The quote to remove.
     */
    function removeQuote(category, quoteToRemove) {
        // Remove the quote from the userQuotes object
        userQuotes[category] = userQuotes[category].filter(quote => quote !== quoteToRemove);

        // If a category becomes empty, delete it from the userQuotes object
        if (userQuotes[category].length === 0) {
            delete userQuotes[category];
        }

        // Save the updated userQuotes object to localStorage
        localStorage.setItem('userQuotes', JSON.stringify(userQuotes));

        // Re-render the quotes
        renderQuotes();
    }

    // Initial render of quotes
    renderQuotes();
});
