 
 
 
 
 
 
 document.getElementById('suggestionForm').addEventListener('submit', function(event) {
     
        event.preventDefault(); 
  
        const inputField = document.getElementById('tutorialInput');
        const suggestionText = inputField.value.trim();
        
       
        console.log('User Suggestion:', suggestionText);
    
        const feedback = document.getElementById('formFeedback');
        feedback.classList.remove('d-none');
        
     
        inputField.value = '';
        
       
        setTimeout(() => {
            feedback.classList.add('d-none');
        }, 4000);
    });