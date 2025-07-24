// Directory Page JavaScript
// WDD 231 - Chamber of Commerce Project

// DOM elements
const membersContainer = document.getElementById('membersContainer');
const gridViewBtn = document.getElementById('gridView');
const listViewBtn = document.getElementById('listView');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

// Global variables
let membersData = [];
let currentView = 'grid';

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadMembers();
    setupEventListeners();
    updateFooterInfo();
});

// Load members data from JSON file
async function loadMembers() {
    try {
        const response = await fetch('data/members.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        membersData = await response.json();
        displayMembers();
    } catch (error) {
        console.error('Error loading members data:', error);
        // Fallback to sample data if JSON file is not available
        membersData = getSampleData();
        displayMembers();
    }
}

// Sample data fallback
function getSampleData() {
    return [
        {
            name: "Tech Solutions Lima",
            address: "Av. Arequipa 1234, Miraflores, Lima",
            phone: "+51 1 234-5678",
            website: "https://techsolutions.pe",
            image: "TechSolutions CR S.jpeg",
            membershipLevel: 3,
            description: "Leading technology solutions provider in Peru",
            category: "Technology"
        },
        {
            name: "Lima Restaurant Group",
            address: "Jr. de la Unión 567, Centro de Lima",
            phone: "+51 1 345-6789",
            website: "https://limarestaurants.pe",
            image: "mayta.jpg",
            membershipLevel: 2,
            description: "Premium dining experiences across Lima",
            category: "Food & Beverage"
        },
        {
            name: "Construcciones Andinas",
            address: "Av. Javier Prado 890, San Isidro, Lima",
            phone: "+51 1 456-7890",
            website: "https://construccionesandinas.pe",
            image: "construcciones.jpg",
            membershipLevel: 3,
            description: "Construction and infrastructure development",
            category: "Construction"
        },
        {
            name: "Lima Financial Services",
            address: "Av. Larco 432, Miraflores, Lima",
            phone: "+51 1 567-8901",
            website: "https://limafinancial.pe",
            image: "financial.jpg",
            membershipLevel: 1,
            description: "Comprehensive financial advisory services",
            category: "Financial Services"
        },
        {
            name: "Textiles Peruanos",
            address: "Av. Argentina 123, Callao, Lima",
            phone: "+51 1 678-9012",
            website: "https://textilesperuanos.pe",
            image: "textiles.jpg",
            membershipLevel: 2,
            description: "Traditional and modern textile manufacturing",
            category: "Manufacturing"
        },
        {
            name: "Lima Marketing Agency",
            address: "Av. El Sol 789, San Borja, Lima",
            phone: "+51 1 789-0123",
            website: "https://limamarketing.pe",
            image: "marketing.jpg",
            membershipLevel: 1,
            description: "Digital marketing and brand development",
            category: "Marketing & Advertising"
        },
        {
            name: "Healthcare Plus Lima",
            address: "Av. Grau 456, Barranco, Lima",
            phone: "+51 1 890-1234",
            website: "https://healthcareplus.pe",
            image: "healthcare.jpg",
            membershipLevel: 3,
            description: "Advanced healthcare and medical services",
            category: "Healthcare"
        },
        {
            name: "Lima Logistics",
            address: "Av. Colonial 321, Pueblo Libre, Lima",
            phone: "+51 1 901-2345",
            website: "https://limalogistics.pe",
            image: "logistics.jpg",
            membershipLevel: 1,
            description: "Supply chain and logistics solutions",
            category: "Logistics & Transportation"
        }
    ];
}

// Display members in the selected view
function displayMembers() {
    if (!membersData || membersData.length === 0) {
        membersContainer.innerHTML = '<p>No members data available.</p>';
        return;
    }

    membersContainer.innerHTML = '';
    membersContainer.className = currentView === 'grid' ? 'members-grid' : 'members-list';
    
    membersData.forEach(member => {
        const memberCard = createMemberCard(member);
        membersContainer.appendChild(memberCard);
    });
}

// Create individual member card
function createMemberCard(member) {
    const card = document.createElement('div');
    card.className = `member-card ${currentView === 'list' ? 'list-view' : ''}`;
    
    const membershipLevelText = {
        1: 'Member',
        2: 'Silver',
        3: 'Gold'
    };
    
    const membershipClass = {
        1: 'member',
        2: 'silver', 
        3: 'gold'
    };
    
    // Create member image or placeholder
    const imageElement = createMemberImage(member);
    
    card.innerHTML = `
        <div class="membership-badge ${membershipClass[member.membershipLevel]}">
            ${membershipLevelText[member.membershipLevel]}
        </div>
        ${imageElement}
        <div class="member-info">
            <h3>${sanitizeHTML(member.name)}</h3>
            <p><strong>📍</strong> ${sanitizeHTML(member.address)}</p>
            <p><strong>📞</strong> ${sanitizeHTML(member.phone)}</p>
            <p>${sanitizeHTML(member.description)}</p>
            ${member.category ? `<p><strong>Category:</strong> ${sanitizeHTML(member.category)}</p>` : ''}
            <a href="${sanitizeURL(member.website)}" class="member-website" target="_blank" rel="noopener noreferrer">
                Visit Website
            </a>
        </div>
    `;
    
    return card;
}

// Create member image element
function createMemberImage(member) {
    const firstLetter = member.name.charAt(0).toUpperCase();
    const backgroundColor = getRandomColor(member.name);
    
    return `<div class="member-image" style="background-color: ${backgroundColor}; color: white; font-weight: bold; display: flex; align-items: center; justify-content: center;">
        ${firstLetter}
    </div>`;
}

// Get consistent color based on member name
function getRandomColor(name) {
    const colors = [
        '#2c5282', '#3182ce', '#2d3748', '#38a169', 
        '#d69e2e', '#e53e3e', '#805ad5', '#319795'
    ];
    
    // Generate consistent color based on name
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    return colors[Math.abs(hash) % colors.length];
}

// Setup event listeners
function setupEventListeners() {
    // View toggle buttons
    gridViewBtn.addEventListener('click', () => switchView('grid'));
    listViewBtn.addEventListener('click', () => switchView('list'));
    
    // Mobile navigation toggle
    navToggle.addEventListener('click', toggleMobileNav);
    
    // Close mobile nav when clicking on a link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
        });
    });
    
    // Close mobile nav when clicking outside
    document.addEventListener('click', (event) => {
        if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove('show');
        }
    });
}

// Switch between grid and list views
function switchView(viewType) {
    currentView = viewType;
    
    // Update button states
    if (viewType === 'grid') {
        gridViewBtn.classList.add('active');
        listViewBtn.classList.remove('active');
    } else {
        listViewBtn.classList.add('active');
        gridViewBtn.classList.remove('active');
    }
    
    // Re-display members with new view
    displayMembers();
    
    // Save preference to localStorage (if available)
    try {
        localStorage.setItem('preferredView', viewType);
    } catch (e) {
        // localStorage not available, ignore
    }
}

// Toggle mobile navigation
function toggleMobileNav() {
    navMenu.classList.toggle('show');
}

// Update footer information
function updateFooterInfo() {
    const currentYear = new Date().getFullYear();
    const lastModified = new Date(document.lastModified);
    
    const currentYearElement = document.getElementById('currentYear');
    const lastModifiedElement = document.getElementById('lastModified');
    
    if (currentYearElement) {
        currentYearElement.textContent = currentYear;
    }
    
    if (lastModifiedElement) {
        const formattedDate = formatDate(lastModified);
        lastModifiedElement.textContent = formattedDate;
    }
}

// Format date for display
function formatDate(date) {
    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    
    return date.toLocaleDateString('en-US', options);
}

// Sanitize HTML to prevent XSS
function sanitizeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// Sanitize URL
function sanitizeURL(url) {
    try {
        const urlObj = new URL(url);
        return urlObj.href;
    } catch (e) {
        return '#';
    }
}

// Load saved view preference
function loadViewPreference() {
    try {
        const savedView = localStorage.getItem('preferredView');
        if (savedView && (savedView === 'grid' || savedView === 'list')) {
            switchView(savedView);
        }
    } catch (e) {
        // localStorage not available, use default
    }
}

// Error handling for fetch failures
function handleFetchError(error) {
    console.error('Fetch error:', error);
    membersContainer.innerHTML = `
        <div class="error-message" style="text-align: center; padding: 2rem; color: #e53e3e;">
            <p>Unable to load member data. Please try again later.</p>
            <button onclick="loadMembers()" style="margin-top: 1rem; padding: 0.5rem 1rem; background-color: var(--primary-color); color: white; border: none; border-radius: 4px; cursor: pointer;">
                Retry
            </button>
        </div>
    `;
}

// Initialize page with saved preferences
window.addEventListener('load', () => {
    loadViewPreference();
});

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        loadMembers,
        displayMembers,
        createMemberCard,
        switchView,
        sanitizeHTML,
        sanitizeURL
    };
}