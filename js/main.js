$(document).ready(function() {


    // Smooth scroll down

    $('#see-more').on('click', function() {
        const about = $('#services-wrapper').position().top //Get the  position

        $('html, body').animate({
            scrollTop: about
        }, 900);
    });

    //On click show slider

    $('.nav-icon').on('click', function() {
        $(this).hide();
        $('.nav-slider').css("width", "100vw");
        return false
    });

    //On click hide slider
    $('.btn-close').on('click', function() {
        $('.nav-icon').show();
        $('.nav-slider').css("width", "0vw");
        return false
    });
    // Navigation bar Dropdown
    const navDropbtn = document.getElementById('nav-bar-dropbtn');
    const navDropdown = document.getElementById('nav-bar-dropdown');

    navDropdown.style.display = 'none'

    navDropbtn.addEventListener('click', function() {
        if (navDropdown.style.display === 'none') {
            navDropdown.style.display = 'block'

        } else {
            navDropdown.style.display = 'none'
        };
    })


    // Slide Dropdown 
    const dropbtn = document.getElementById('dropbtn');
    const dropdown = document.getElementById('myDropdown');

    dropdown.style.display = 'none'

    dropbtn.addEventListener('click', function() {
        if (dropdown.style.display === 'none') {
            dropdown.style.display = 'block'

        } else {
            dropdown.style.display = 'none'
        };
    })

    window.onclick = function(e) {
        if (!e.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName('dropdown-content');
            var i;
            for (i = 0; i < dropdowns, length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show')
                }
            }
        }
    }

    // FAQ Section
    $('.answer').hide()
    $('.question').click(function() {
        var $answer = $(this).next('.answer')
        if ($answer.is(':hidden')) {
            $answer.slideDown()
        } else {
            $answer.fadeOut()
        }
    })

    // Form validation
    const form = document.getElementsByTagName('form')[0];

    const email = document.getElementById('email');
    const emailError = document.querySelector('body > div > form > div.email-error');

    const tel = document.getElementById('tel')
    const telError = document.querySelector('body > div > form > div.tel-error')

    const fname = document.getElementById('fname')
    const lname = document.getElementById('lname')
    const nameError = document.querySelector('body > div > form > div.name-error')

    fname.addEventListener('input', function(e) {
        if (fname.validity.valid) {
            nameError.textContent = '';
            nameError.className = 'name error'
        } else {
            showNameError()
        }
    })

    lname.addEventListener('input', function(e) {
        if (lname.validity.valid) {
            nameError.textContent = '';
            nameError.className = 'name-error'
        } else {
            showNameError()
        }
    })

    email.addEventListener('input', function(e) {
        if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.value)) {
            emailError.textContent = '';
            emailError.className = 'email-error'
        } else {
            showEmailError()
        }
    })

    tel.addEventListener('input', function(e) {
        if (tel.validity.valid) {
            telError.textContent = '';
            telError.clasName = 'tel-error';
        } else {
            showTelError()
        }
    })

    form.addEventListener('submit', function(e) {
        // e.preventDefault()
        if (!fname.validity.valid) {
            e.preventDefault()
            showNameError()
        } else if (!lname.validity.valid) {
            e.preventDefault()
            showNameError()
        } else if (!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.value))) {
            e.preventDefault()
            showEmailError()
        } else if (!tel.validity.valid) {
            e.preventDefault()
            showTelError()
        } else {
            return true
        }
    })

    function showEmailError() {
        if (email.validity.valueMissing) {
            emailError.textContent = 'You need to enter an e-mail address'
        } else if (email.validity.typeMismatch) {
            emailError.textContent = 'Entered value needs to be in the form user@domain.com'
        } else if (email.validity.tooShort) {
            emailError.textContent = `Email should be atleast ${email.minLength} characters; you entered ${email.value.length}.`
        }

        emailError.className = 'error active'
    }

    function showTelError() {
        if (tel.validity.valueMissing) {
            telError.textContent = 'You need to enter a phone number'
        } else if (tel.validity.typeMismatch) {
            telError.textContent = 'Entered value needs to be digits'
        } else if (tel.validity.tooShort) {
            telError.textContent = `Phone number should be atleast ${tel.minLength} characters; you entered ${tel.value.length}.`
        }

        telError.className = 'error active'
    }

    function showNameError() {
        if (fname.validity.valueMissing || lname.validity.valueMissing) {
            nameError.textContent = 'Field is required'
        }

        nameError.className = 'error active'
    }

});