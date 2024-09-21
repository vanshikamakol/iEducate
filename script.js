// Smooth scroll to the courses section
function scrollToCourses() {
    document.getElementById('courses').scrollIntoView({ behavior: 'smooth' });
}

// Modal logic for course details
function showCourseDetails(title, description) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDescription').textContent = description;
    document.getElementById('courseModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('courseModal').style.display = 'none';
}

// Close modal when clicking outside of the modal content
window.onclick = function(event) {
    const modal = document.getElementById('courseModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Handle contact form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message. We will get back to you soon.');
    // Reset form
    this.reset();
});

// Handle newsletter subscription
document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('newsletterEmail').value;
    if (email) {
        alert(`Thank you for subscribing! We'll keep you updated.`);
        document.getElementById('newsletterEmail').value = ''; // Clear input
    }
});

// Sticky header background change on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});
