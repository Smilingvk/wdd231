// Course data
const courses = [
    {
        name: "Web Frontend Development I",
        code: "WDD 130",
        credits: 3,
        description: "Learn the basics of HTML, CSS, and web design principles.",
        completed: true
    },
    {
        name: "Web Frontend Development II",
        code: "WDD 131",
        credits: 3,
        description: "Advanced styling with CSS and responsive design.",
        completed: true
    },
    {
        name: "Web Fundation",
        code: "WDD 101",
        credits: 3,
        description: "Introduction to the web development fundamentals.",
        completed: true
    },
    {
        name: "Web Fundamentals",
        code: "WDD 101",
        credits: 3,
        description: "Introduction to web development fundamentals.",
        completed: true
    },
    {
        name: "Programming with Functions",
        code: "CSE 111",
        credits: 3,
        description: "Learn to solve problems using functions and procedural programming.",
        completed: false
    },
    {
        name: "Programming with Classes",
        code: "CSE 210",
        credits: 3,
        description: "Learn to solve problems using classes and object-oriented programming.",
        completed: false
    },
    {
        name: "Data Structures",
        code: "CSE 340",
        credits: 3,
        description: "Learn to implement and use data structures and algorithms.",
        completed: false
    },
    {
        name: "Database Design and Development",
        code: "CSE 250",
        credits: 3,
        description: "Learn to design and develop databases for web applications.",
        completed: false
    },
    {
        name: "Web Development with JavaScript",
        code: "WDD 231",
        credits: 3,
        description: "Learn to build interactive web applications with JavaScript.",
        completed: false
    },
    {
        name: "Web Front-end Development",
        code: "WDD 331",
        credits: 3,
        description: "Learn to build full-stack web applications with modern frameworks.",
        completed: false
    }
];

let currentFilter = 'all';
let filteredCourses = courses;

// DOM manipulation functions
function displayCourses(coursesToDisplay) {
    const courseGrid = document.getElementById('courseGrid');
    courseGrid.innerHTML = '';
    
    coursesToDisplay.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = `course-card ${course.completed ? 'completed' : ''}`;
        
        courseCard.innerHTML = `
            <div class="course-name">${course.name}</div>
            <div class="course-code">${course.code}</div>
            <div class="course-credits">${course.credits} credits</div>
            <div class="course-description">${course.description}</div>
        `;
        
        courseGrid.appendChild(courseCard);
    });
    
    updateTotalCredits(coursesToDisplay);
}

function updateTotalCredits(coursesToDisplay) {
    const totalCredits = coursesToDisplay.reduce((sum, course) => sum + course.credits, 0);
    document.getElementById('totalCredits').textContent = totalCredits;
}

function filterCourses(filterType, buttonElement) {
    currentFilter = filterType;
    
    // Update filter button styles
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    buttonElement.classList.add('active');
    
    // Filter courses
    if (filterType === 'all') {
        filteredCourses = courses;
    } else {
        filteredCourses = courses.filter(course => course.code.includes(filterType));
    }
    
    displayCourses(filteredCourses);
}

// Navigation
function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// Dynamic date and time updates
function updateFooter() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
    
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    displayCourses(courses);
    updateFooter();
    
    // Add event listeners for hamburger menu
    const hamburger = document.getElementById('hamburger');
    hamburger.addEventListener('click', toggleMenu);
    
    // Add event listeners for filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterType = this.getAttribute('data-filter');
            filterCourses(filterType, this);
        });
    });
    
    // Add event listeners for any other interactive elements
    // For example, if you had a search button:
    // const searchButton = document.getElementById('searchButton');
    // searchButton.addEventListener('click', searchCourses);
});