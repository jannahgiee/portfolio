// JavaScript to handle the modal and event listeners for each certificate button
document.querySelectorAll('.download-cv-btn, .download-cert-btn').forEach(button => {
    button.addEventListener('click', function() {
        var modal = document.getElementById('pdfModal');
        var pdfFrame = modal.querySelector('#pdfFrame');

        // Get the certificate URL based on the clicked button
        var certificateUrl;
        switch (this.dataset.certificate) {
            case 'cv':
                certificateUrl = 'images/resume.pdf';
                break;
            case 'cert1':
                certificateUrl = 'images/cert1.pdf';
                break;
            case 'cert2':
                certificateUrl = 'images/cert2.pdf';
                break;
        }
        pdfFrame.src = certificateUrl;
        modal.style.display = 'block';

        // Close the modal when the close button is clicked
        var closeModal = modal.querySelector('.close');
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
            pdfFrame.src = ''; // Clear the iframe src to stop loading the PDF
        });

        // Close the modal when the user clicks outside of it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
                pdfFrame.src = ''; // Clear the iframe src to stop loading the PDF
            }
        };
    });
});

    document.addEventListener('DOMContentLoaded', function() {
    const hireMeBtn = document.getElementById('hireMeBtn');
    const contactSection = document.getElementById('contact'); // Assuming the contact section has an id of 'contact'

    hireMeBtn.addEventListener('click', function() {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });
});



/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.classList.contains("responsive")) {
    menuBtn.classList.remove("responsive");
  } else {
    menuBtn.classList.add("responsive");
  }
}

function closeMenu() {
  var menuBtn = document.getElementById("myNavMenu");
  menuBtn.classList.remove("responsive");
}



/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText",{
  strings : ["Software Engineer","Back End Developer","C# .NET Developer"],
  loop : true,
  typeSpeed : 100, 
  backSpeed : 80,
  backDelay : 2000
})

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true     
})

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})

/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */

const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})


/* -- CERTIFICATE INFO -- */
sr.reveal('.cert-info', { interval: 200 })

/* ----- EMAIL JS CONTACT ----- */

// Initialize EmailJS with your user ID
emailjs.init("Y7K3sNW85VjRnAqGd");

// Function to display success message
  
function showSuccessMessage(message) {
    var successDiv = document.getElementById('form-success');
    successDiv.textContent = message;
    setTimeout(function() {
        successDiv.textContent = '';
    }, 3000);
}
// Function to display error message
function showErrorMessage(message) {
    var errorDiv = document.getElementById('form-error');
    var errorMessage = document.createElement('p');
    errorMessage.textContent = message;
    errorDiv.appendChild(errorMessage);
}
// Function to send email using EmailJS with validation
function sendEmail(event) {
    // Prevent the form from submitting
    event.preventDefault();
    // Clear any previous messages
    var successDiv = document.getElementById('form-success');
    var errorDiv = document.getElementById('form-error');
    successDiv.textContent = '';
    errorDiv.innerHTML = '';
    // Update send button text to "Sending"
    var sendButton = document.getElementById('send-button');
    sendButton.innerHTML = '<span>Sending...</span> <i class="uil uil-message"></i>';
    // Boolean variable to track if any field is empty
    var isEmptyField = false;
    // Array to store error messages
    var errors = [];
    // Get user inputs
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subjects').value;
    var message = document.getElementById('message').value;
    // Check if any field is empty
    if (name.trim() === '' || email.trim() === '' || subject.trim() === '' || message.trim() === '') {
        isEmptyField = true;
    }
    // If any field is empty, display "fill out all required fields" error message
    if (isEmptyField) {
        errors.push('⚠️ Unable to send the form. Please fill out all the required fields.');
    } else {
        // Check if the email is valid
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email) && email.trim() !== '') {
            errors.push('⚠️ Please enter a valid email address.');
        }
        // Check if the message contains at least 10 characters
        if (message.trim().length < 10 && message.trim() !== '') {
            errors.push('⚠️ Message must be at least 10 characters long.');
        }
    }
    // If there are errors, display them
    if (errors.length > 0) {
        errors.forEach(function(error) {
            showErrorMessage(error);
        });
        // Clear error messages after 3 seconds
        setTimeout(function() {
            errorDiv.innerHTML = '';
        }, 3000);
        // Revert send button text to "Send"
        sendButton.innerHTML = '<span>Send</span> <i class="uil uil-message"></i>';
        return; // Stop execution if there are errors
    }
    // Send email using EmailJS
    emailjs.send("service_vynie93", "template_rxptlvm", {
        name: name,
        email: email,
        subject: subject,
        message: message
    })
    .then(function(response) {
        console.log("Email sent successfully!", response);
        showSuccessMessage('✅Form sent successfully! I\'ll get back to you as soon as possible');
        // Clear form inputs after successful submission
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('subjects').value = '';
        document.getElementById('message').value = '';
        // Change send button text to "Sent" for 5 seconds
        sendButton.innerHTML = '<span>Sent</span> <i class="uil uil-message"></i>';
        setTimeout(function() {
            sendButton.innerHTML = '<span>Send</span> <i class="uil uil-message"></i>';
        }, 5000);
    }, function(error) {
        console.error("Email sending failed!", error);
        showErrorMessage(' ⚠️ Email sending failed!');
        // Revert send button text to "Send"
        sendButton.innerHTML = '<span>Send</span> <i class="uil uil-message"></i>';
    });
}

document.querySelectorAll('.view-certificate').forEach(button => {
    button.addEventListener('click', function() {
        // Get the modal
        var modal = document.getElementById("certificateModal");

        // Display the modal
        modal.style.display = "block";

        // Close the modal when the close button is clicked
        var closeBtn = document.querySelector(".close");
        closeBtn.onclick = function() {
            modal.style.display = "none";
        }

        // Close the modal when clicking outside of it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    });
});




/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive)