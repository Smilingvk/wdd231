       // Sample JSON data (in a real implementation, this would be loaded from data/attractions.json)
       const attractionsData = [
        {
            "name": "Santa Catalina Monastery",
            "address": "301 Santa Catalina Street, Arequipa Historic Center",
            "description": "A stunning 16th-century convent that showcases colonial architecture and offers a glimpse into religious life of centuries past. This city within a city features colorful walls, peaceful courtyards, and fascinating history.",
            "image": "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop"
        },
        {
            "name": "Colca Canyon",
            "address": "Colca Valley, 160km north of Arequipa",
            "description": "One of the world's deepest canyons and home to the magnificent Andean condor. This natural wonder offers breathtaking landscapes, traditional villages, and incredible hiking opportunities.",
            "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop"
        },
        {
            "name": "Misti Volcano",
            "address": "El Misti Natural Reserve, 17km northeast of Arequipa",
            "description": "The iconic volcanic cone that dominates Arequipa's skyline. At 5,822 meters, this dormant stratovolcano offers challenging climbs and spectacular views of the White City below.",
            "image": "https://images.unsplash.com/photo-1464822759844-d150ad6a0db2?w=300&h=200&fit=crop"
        },
        {
            "name": "Plaza de Armas",
            "address": "Historic Center of Arequipa",
            "description": "The heart of Arequipa, surrounded by beautiful colonial buildings made of white volcanic stone. The plaza features the impressive Cathedral and offers a perfect place to experience local culture.",
            "image": "https://images.unsplash.com/photo-1555400495-6e7672e5e792?w=300&h=200&fit=crop"
        },
        {
            "name": "Yanahuara District",
            "address": "Yanahuara, Arequipa Metropolitan Area",
            "description": "A charming colonial district famous for its scenic viewpoint offering panoramic views of Misti volcano and the city. The area features traditional architecture and peaceful streets.",
            "image": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=200&fit=crop"
        },
        {
            "name": "San Camilo Market",
            "address": "548 San Camilo Street, Cercado de Arequipa",
            "description": "A vibrant traditional market where locals shop for fresh produce, textiles, and regional specialties. Experience authentic Arequipa culture and taste local delicacies like rocoto relleno.",
            "image": "https://images.unsplash.com/photo-1555709865-f8b38c7b6ac6?w=300&h=200&fit=crop"
        },
        {
            "name": "La Compañía de Jesús Church",
            "address": "100 General Morán Street, Historic Center",
            "description": "A magnificent baroque church featuring intricate stone carvings and beautiful altars. This Jesuit church represents one of the finest examples of colonial religious architecture in Peru.",
            "image": "https://images.unsplash.com/photo-1520637836862-4d197d17c55a?w=300&h=200&fit=crop"
        },
        {
            "name": "Mundo Alpaca",
            "address": "Huacachina s/n, Sachaca District, Arequipa",
            "description": "An educational farm and textile center showcasing South American camelids including alpacas, llamas, and vicuñas. Learn about traditional textile production and shop for high-quality alpaca products.",
            "image": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=200&fit=crop"
        }
    ];

    // Visitor tracking functionality
    function handleVisitorMessage() {
        const now = Date.now();
        const lastVisit = localStorage.getItem('lastVisit');
        const messageElement = document.getElementById('visitor-message');
        
        if (!lastVisit) {
            // First visit
            messageElement.innerHTML = '<p>Welcome! Let us know if you have any questions.</p>';
        } else {
            const daysDifference = Math.floor((now - parseInt(lastVisit)) / (1000 * 60 * 60 * 24));
            
            if (daysDifference < 1) {
                messageElement.innerHTML = '<p>Back so soon! Awesome!</p>';
            } else if (daysDifference === 1) {
                messageElement.innerHTML = '<p>You last visited 1 day ago.</p>';
            } else {
                messageElement.innerHTML = `<p>You last visited ${daysDifference} days ago.</p>`;
            }
        }
        
        // Store current visit
        localStorage.setItem('lastVisit', now.toString());
    }

    // Create discover cards
    function createDiscoverCards() {
        const contentElement = document.getElementById('discover-content');
        const gridContainer = document.createElement('div');
        gridContainer.className = 'discover-grid';

        attractionsData.forEach((attraction, index) => {
            const card = document.createElement('div');
            card.className = `discover-card card${index + 1}`;
            
            card.innerHTML = `
                <h2>${attraction.name}</h2>
                <figure>
                    <img src="${attraction.image}" alt="${attraction.name}" loading="lazy">
                </figure>
                <address>${attraction.address}</address>
                <p>${attraction.description}</p>
                <button onclick="learnMore('${attraction.name}')">Learn More</button>
            `;
            
            gridContainer.appendChild(card);
        });

        contentElement.innerHTML = '';
        contentElement.appendChild(gridContainer);
    }

    // Learn more button functionality
    function learnMore(placeName) {
        alert(`You clicked to learn more about ${placeName}! In a real implementation, this would link to a detailed page or open a modal with more information.`);
    }

    // Initialize page
    document.addEventListener('DOMContentLoaded', function() {
        handleVisitorMessage();
        createDiscoverCards();
    });

    // Add some interactivity for demonstration
    document.addEventListener('click', function(e) {
        if (e.target.matches('.discover-card img')) {
            // Add a simple click effect for mobile since hover doesn't work well
            e.target.style.transform = 'scale(0.95)';
            setTimeout(() => {
                e.target.style.transform = '';
            }, 150);
        }
    });