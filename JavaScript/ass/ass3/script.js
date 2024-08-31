
const reactElement = document.getElementById('REACT');
const vueElement = document.getElementById('VUE');
const angularElement = document.getElementById('ANGULAR');
const sbodysElements = document.querySelectorAll('.sbodys');

sbodysElements[0].style.display = 'block';

reactElement.addEventListener('click', function() {
    sbodysElements.forEach((element, index) => {
        if (index === 0) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
});

vueElement.addEventListener('click', function() {
    sbodysElements.forEach((element, index) => {
        if (index === 1) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
});

angularElement.addEventListener('click', function() {
    sbodysElements.forEach((element, index) => {
        if (index === 2) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
});
