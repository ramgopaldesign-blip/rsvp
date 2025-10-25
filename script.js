// RSVP Form Functionality
document.addEventListener('DOMContentLoaded', function() {
    const rsvpForm = document.getElementById('rsvpForm');
    const rsvpButton = document.querySelector('.send-poll-button');
    
    // Form submission handling
    if (rsvpButton) {
        rsvpButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get form data
            const firstName = document.querySelector('input[name="firstName"]');
            const lastName = document.querySelector('input[name="lastName"]');
            const phone = document.querySelector('input[name="phone"]');
            const email = document.querySelector('input[name="email"]');
            
            // Basic validation
            if (!firstName.value || !lastName.value || !phone.value || !email.value) {
                alert('Please fill in all fields');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Success
            alert('RSVP confirmed! You\'ll receive event updates via email.');
            rsvpForm.reset();
        });
    }
});

// Countdown Timer (without animations)
document.addEventListener('DOMContentLoaded', function() {
    const countdownElement = document.querySelector('.startingin4h34m_span');
    if (!countdownElement) return;
    
    // Set event time (November 13, 6:30 PM GMT+8)
    const eventTime = new Date('2024-11-13T18:30:00+08:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = eventTime - now;
        
        if (timeLeft > 0) {
            const hours = Math.floor(timeLeft / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            
            if (hours > 0) {
                countdownElement.textContent = `Starting in ${hours}h ${minutes}m`;
            } else {
                countdownElement.textContent = `Starting in ${minutes}m`;
            }
        } else {
            countdownElement.textContent = 'Event in progress';
        }
    }
    
    // Update countdown every minute
    updateCountdown();
    setInterval(updateCountdown, 60000);
});
