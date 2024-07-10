let activeColor = '';

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#bbb'; 
    } else {
        navbar.style.backgroundColor = 'aqua';
    }
});

document.querySelectorAll('nav ul li a').forEach(tab => {
    tab.addEventListener('mouseover', function() {
        const color = tab.dataset.color;
        changeBackgroundColor(color);
        changeSectionTextColor(color);
    });

    tab.addEventListener('mouseout', function() {
        if (tab.dataset.color !== activeColor) {
            resetBackgroundColor();
            resetSectionTextColor();
        }
    });

    tab.addEventListener('click', function(event) {
        event.preventDefault();
        const color = tab.dataset.color;
        activeColor = color; 
        changeBackgroundColor(color);
        changeSectionTextColor(color);
    });
});

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
    document.documentElement.style.backgroundColor = color;
}

function resetBackgroundColor() {
    document.body.style.backgroundColor = '';
    document.documentElement.style.backgroundColor = '';
}

function changeSectionTextColor(color) {
    const sectionTitle = document.querySelector('#section1 h1');
    const sectionText = document.querySelector('#section1 p');

    if (color === 'purple' || color === 'green') {
        sectionTitle.style.color = 'white';
        sectionText.style.color = 'white';
    } else {
        resetSectionTextColor();
    }
}

function resetSectionTextColor() {
    const sectionTitle = document.querySelector('#section1 h1');
    const sectionText = document.querySelector('#section1 p');
    sectionTitle.style.color = '';
    sectionText.style.color = '';
}
