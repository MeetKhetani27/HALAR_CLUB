// Function to load and inject the header
async function loadHeader() {
    try {
        const response = await fetch('/components/header.html');
        const headerContent = await response.text();
        document.getElementById('header-placeholder').innerHTML = headerContent;
    } catch (error) {
        console.error('Error loading header:', error);
    }
}

// Load header when the document is ready
document.addEventListener('DOMContentLoaded', loadHeader);
