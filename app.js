const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav')
const toggleIcon = document.getElementById('toggle-icon')
const image1 = document.getElementById('image1')
const image2 = document.getElementById('image2')
const image3 = document.getElementById('image3')
const textBox = document.getElementById('text-box')


function darkMode() {
    nav.style.background = 'rgb(0 0 0 / 50%)';
    textBox.style.background = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.remove('fa-sun');
    toggleIcon.children[1].classList.add('fa-moon');
    image1.src = 'img/undraw_programming_re_kg9v-1_Dark.svg'
    image2.src = 'img/undraw_new_year_2022_bxec-1_Dark.svg'
    image3.src = 'img/undraw_prototyping_process_re_7a6p-1_Dark.svg'
    localStorage.setItem('theme', 'dark')
}


function lightMode() {
    nav.style.background = 'rgb(255 255 255 / 50%)';
    textBox.style.background = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.remove('fa-moon');
    toggleIcon.children[1].classList.add('fa-sun');
    image1.src = 'img/undraw_programming_re_kg9v_Light.svg'
    image2.src = 'img/undraw_new_year_2022_Light.svg'
    image3.src = 'img/undraw_prototyping_process_re_7a6p_Light.svg'
    localStorage.setItem('theme', 'light')
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        lightMode();
    }

}

toggleSwitch.addEventListener('change', switchTheme);

const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        darkMode()
    }
}