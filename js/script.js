 document.getElementById('suggestionForm').addEventListener('submit', function(event) {
        // 1. Prevent the page from refreshing on form submit
        event.preventDefault(); 
        
        // 2. Grab the value from the input field
        const inputField = document.getElementById('tutorialInput');
        const suggestionText = inputField.value.trim();
        
        // 3. Process the data (Send to an API, log to console, etc.)
        console.log('User Suggestion:', suggestionText);
        
        // 4. Show success feedback to the user
        const feedback = document.getElementById('formFeedback');
        feedback.classList.remove('d-none');
        
        // 5. Clear the form input
        inputField.value = '';
        
        // Optional: Hide the feedback alert after 4 seconds
        setTimeout(() => {
            feedback.classList.add('d-none');
        }, 4000);
    });