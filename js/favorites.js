// Event listener to run code when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const favoritesList = document.getElementById('favorites-list');
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Check if there are any favorite quotes
    if (favorites.length === 0) {
        favoritesList.innerHTML = "<p>No favorites yet.</p>";
        return;
    }

    // Create and display favorite quotes
    favorites.forEach(quote => {
        const quoteDiv = document.createElement('div');
        quoteDiv.classList.add('favorite-quote');
        
        const quoteText = document.createElement('span');
        quoteText.textContent = quote;

        const removeButton = document.createElement('button');
        removeButton.textContent = '❌'; 
        removeButton.classList.add('remove-button');
        removeButton.onclick = () => removeFavorite(quote); 
        quoteDiv.appendChild(quoteText);
        quoteDiv.appendChild(removeButton);
        favoritesList.appendChild(quoteDiv);
    });
});

/**
 * Remove a quote from the favorites list and update localStorage.
 * @param {string} quoteToRemove - The quote to remove from favorites.
 */
function removeFavorite(quoteToRemove) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites = favorites.filter(quote => quote !== quoteToRemove); 
    localStorage.setItem('favorites', JSON.stringify(favorites)); 
    location.reload(); 
}
