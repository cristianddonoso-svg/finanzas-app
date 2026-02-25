// app.js

// Function to make API calls
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Example function to get financial data
async function getFinancialData() {
    const apiUrl = 'https://api.example.com/financial-data'; // Replace with actual API endpoint
    const data = await fetchData(apiUrl);
    console.log(data);
}

// Initialize application
function init() {
    getFinancialData();
}

// Run the application
document.addEventListener('DOMContentLoaded', init);