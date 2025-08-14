        // --- DATA ---
        const recipeDatabase = [
            { id: 1, title: "Classic Margherita Pizza", description: "A timeless Italian classic...", image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&h=300", cookTime: 25, difficulty: "Medium", cuisine: "italian", diet: "vegetarian", servings: 4, ingredients: ["1 pizza dough", "1/2 cup tomato sauce", "8 oz fresh mozzarella", "1/4 cup fresh basil leaves", "2 tbsp olive oil"], instructions: "Preheat oven to 475°F...", tags: ["Italian", "Pizza", "Vegetarian", "Classic"] },
            { id: 2, title: "Chicken Pad Thai", description: "Authentic Thai stir-fried noodles...", image: "https://images.unsplash.com/photo-1559314809-0f31657def5e?w=400&h=300", cookTime: 20, difficulty: "Medium", cuisine: "asian", diet: "", servings: 3, ingredients: ["8 oz rice noodles", "1 lb chicken breast", "3 eggs", "2 cups bean sprouts"], instructions: "Soak noodles in warm water...", tags: ["Thai", "Asian", "Noodles", "Chicken"] },
            { id: 3, title: "Vegan Buddha Bowl", description: "A nutritious and colorful bowl...", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300", cookTime: 35, difficulty: "Easy", cuisine: "american", diet: "vegan", servings: 2, ingredients: ["1 cup quinoa", "1 sweet potato", "1 cup broccoli", "1/2 cup chickpeas"], instructions: "Cook quinoa according to package...", tags: ["Vegan", "Healthy", "Buddha Bowl", "Quinoa"] },
            { id: 4, title: "Beef Tacos al Pastor", description: "Mexican-style tacos with marinated beef...", image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&h=300", cookTime: 30, difficulty: "Medium", cuisine: "mexican", diet: "", servings: 4, ingredients: ["2 lbs beef shoulder", "8 corn tortillas", "1 cup diced pineapple", "1/2 cup white onion"], instructions: "Marinate beef with spices for 2 hours...", tags: ["Mexican", "Tacos", "Beef", "Street Food"] },
            { id: 5, title: "Mediterranean Quinoa Salad", description: "Fresh and healthy salad...", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300", cookTime: 15, difficulty: "Easy", cuisine: "mediterranean", diet: "vegetarian", servings: 4, ingredients: ["1.5 cups cooked quinoa", "1 cucumber", "2 tomatoes", "1/2 cup feta cheese"], instructions: "Combine all vegetables and quinoa...", tags: ["Mediterranean", "Salad", "Quinoa", "Vegetarian"] },
            { id: 6, title: "Chocolate Chip Cookies", description: "Classic homemade chocolate chip cookies...", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300", cookTime: 12, difficulty: "Easy", cuisine: "american", diet: "vegetarian", servings: 24, ingredients: ["2.25 cups flour", "1 tsp baking soda", "1 cup butter", "3/4 cup sugar"], instructions: "Preheat oven to 375°F...", tags: ["Dessert", "Cookies", "American", "Baking"] },
            { id: 7, title: "Spaghetti Carbonara", description: "Traditional Italian pasta dish...", image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300", cookTime: 20, difficulty: "Medium", cuisine: "italian", diet: "", servings: 4, ingredients: ["1 lb spaghetti", "6 oz pancetta", "4 large eggs", "1 cup Pecorino cheese"], instructions: "Cook pasta al dente...", tags: ["Italian", "Pasta", "Traditional", "Pancetta"] },
            { id: 8, title: "Thai Green Curry", description: "Aromatic and spicy Thai curry...", image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&h=300", cookTime: 25, difficulty: "Medium", cuisine: "asian", diet: "vegan", servings: 4, ingredients: ["2 tbsp green curry paste", "1 can coconut milk", "1 eggplant", "1 bell pepper"], instructions: "Heat curry paste in pan...", tags: ["Thai", "Curry", "Vegan", "Spicy", "Asian"] },
            { id: 9, title: "Classic American Cheeseburger", description: "The all-American classic...", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300", cookTime: 15, difficulty: "Easy", cuisine: "american", diet: "", servings: 4, ingredients: ["1.5 lbs ground beef", "4 hamburger buns", "4 slices cheddar", "Lettuce"], instructions: "Form beef into 4 patties...", tags: ["American", "Burger", "Beef", "Grill"] },
            { id: 10, title: "Gluten-Free Lemon Drizzle Cake", description: "A zesty and moist gluten-free cake...", image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=400&h=300", cookTime: 45, difficulty: "Medium", cuisine: "american", diet: "gluten-free", servings: 8, ingredients: ["1.5 cups gluten-free flour", "1 cup sugar", "1/2 cup butter", "2 eggs"], instructions: "Preheat oven to 350°F...", tags: ["Dessert", "Cake", "Gluten-Free", "Lemon"] },
            { id: 11, title: "Spicy Mexican Street Corn (Elote)", description: "Grilled corn on the cob...", image: "https://images.unsplash.com/photo-1598136496997-2a4411131144?w=400&h=300", cookTime: 15, difficulty: "Easy", cuisine: "mexican", diet: "vegetarian", servings: 4, ingredients: ["4 ears of corn", "1/2 cup mayonnaise", "1/2 cup cotija cheese", "Chili powder"], instructions: "Grill corn until lightly charred...", tags: ["Mexican", "Vegetarian", "Street Food", "Spicy"] },
            { id: 12, title: "Creamy Tomato Risotto", description: "A comforting and elegant Italian risotto...", image: "https://images.unsplash.com/photo-1595908129742-878194454734?w=400&h=300", cookTime: 35, difficulty: "Medium", cuisine: "italian", diet: "vegetarian", servings: 4, ingredients: ["1.5 cups Arborio rice", "1/2 cup sun-dried tomatoes", "1 shallot", "4 cups vegetable broth"], instructions: "Sauté shallot in olive oil...", tags: ["Italian", "Risotto", "Vegetarian", "Comfort Food"] },
            { id: 13, title: "Japanese Chicken Katsu Curry", description: "Crispy fried chicken cutlet...", image: "https://images.unsplash.com/photo-1582283307328-531afe303494?w=400&h=300", cookTime: 40, difficulty: "Medium", cuisine: "asian", diet: "", servings: 3, ingredients: ["2 chicken cutlets", "1 cup panko", "1 package curry roux", "1 potato"], instructions: "Coat chicken in flour, egg, and panko...", tags: ["Japanese", "Curry", "Chicken", "Asian"] },
            { id: 14, title: "Avocado Toast with Poached Egg", description: "A simple yet satisfying breakfast...", image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=400&h=300", cookTime: 10, difficulty: "Easy", cuisine: "american", diet: "vegetarian", servings: 1, ingredients: ["1 slice sourdough", "1/2 avocado", "1 egg", "Red pepper flakes"], instructions: "Toast bread. Mash avocado...", tags: ["Breakfast", "American", "Vegetarian", "Healthy"] },
            { id: 15, title: "Hearty Lentil Soup", description: "A warm and filling vegan soup...", image: "https://images.unsplash.com/photo-1598214886233-d492a140f7AF?w=400&h=300", cookTime: 50, difficulty: "Easy", cuisine: "american", diet: "vegan", servings: 6, ingredients: ["1 cup lentils", "1 onion", "2 carrots", "2 celery stalks"], instructions: "In a large pot, sauté vegetables...", tags: ["Soup", "Vegan", "Lentils", "Healthy", "Winter"] }
        ];

        // --- DOM Elements ---
        const recipeGrid = document.getElementById('recipeGrid');
        const loadingIndicator = document.getElementById('loadingIndicator');
        const searchInput = document.getElementById('recipeSearch');
        const searchButton = document.querySelector('.search-button');
        const cuisineFilter = document.getElementById('cuisineFilter');
        const dietFilter = document.getElementById('dietFilter');
        const modal = document.getElementById('recipeModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalBody = document.getElementById('modalBody');
        const closeModalBtn = document.querySelector('.close');
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');

        // --- FUNCTIONS ---

        /**
         * Renders an array of recipes to the grid.
         * @param {Array} recipes - The array of recipe objects to display.
         */
        function displayRecipes(recipes) {
            loadingIndicator.classList.remove('active');
            recipeGrid.innerHTML = '';
            if (recipes.length === 0) {
                recipeGrid.innerHTML = '<p>No recipes found. Try a different search or filter.</p>';
                return;
            }
            recipes.forEach(recipe => {
                const card = document.createElement('div');
                card.className = 'recipe-card';
                card.innerHTML = `
                    <div class="recipe-image-container">
                        <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image" loading="lazy" width="400" height="300">
                    </div>
                    <div class="recipe-content">
                        <div class="recipe-content-upper">
                            <h3 class="recipe-title">${recipe.title}</h3>
                            <p class="recipe-description">${recipe.description}</p>
                            <div class="recipe-meta">
                                <span>🕒 ${recipe.cookTime} min</span>
                                <span>⭐ ${recipe.difficulty}</span>
                            </div>
                            <div class="recipe-tags">
                                ${recipe.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                            </div>
                        </div>
                        <button class="view-recipe-btn" data-id="${recipe.id}">View Recipe</button>
                    </div>
                `;
                recipeGrid.appendChild(card);
            });
        }
        
        /**
         * Filters recipes based on current search and filter values.
         */
        function applyFilters() {
            const searchTerm = searchInput.value.toLowerCase();
            const selectedCuisine = cuisineFilter.value;
            const selectedDiet = dietFilter.value;

            let filteredRecipes = recipeDatabase.filter(recipe => {
                const matchesSearch = recipe.title.toLowerCase().includes(searchTerm) || 
                                      recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm));
                const matchesCuisine = !selectedCuisine || recipe.cuisine === selectedCuisine;
                const matchesDiet = !selectedDiet || recipe.diet === selectedDiet;
                return matchesSearch && matchesCuisine && matchesDiet;
            });

            displayRecipes(filteredRecipes);
        }

        /**
         * Opens the modal with details for a specific recipe.
         * @param {number} recipeId - The ID of the recipe to display.
         */
        function openModal(recipeId) {
            const recipe = recipeDatabase.find(r => r.id === recipeId);
            if (!recipe) return;

            modalTitle.textContent = recipe.title;
            modalBody.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.title}" class="modal-recipe-image">
                <h3>Ingredients</h3>
                <ul class="ingredients-list">
                    ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
                </ul>
                <div class="instructions">
                    <h3>Instructions</h3>
                    <p>${recipe.instructions}</p>
                </div>
            `;
            modal.classList.add('active');
        }

        /**
         * Closes the recipe detail modal.
         */
        function closeModal() {
            modal.classList.remove('active');
        }

        // --- EVENT LISTENERS ---

        // Initial load
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(() => { // Simulate network delay
                displayRecipes(recipeDatabase);
            }, 500);
        });

        // Search and filter listeners
        searchButton.addEventListener('click', applyFilters);
        searchInput.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                applyFilters();
            }
        });
        cuisineFilter.addEventListener('change', applyFilters);
        dietFilter.addEventListener('change', applyFilters);

        // Modal open listener (using event delegation)
        recipeGrid.addEventListener('click', (event) => {
            if (event.target.classList.contains('view-recipe-btn')) {
                const recipeId = parseInt(event.target.dataset.id);
                openModal(recipeId);
            }
        });

        // Modal close listeners
        closeModalBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal();
            }
        });
        
        // Mobile navigation toggle
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        window.closeModal = closeModal;
