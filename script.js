const heartsContainer = document.querySelector('.hearts-container');

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    // Randomize colors
    const colors = ['#ff7980', '#ff4d6d', '#ff165d', '#ff5e78'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Random size and rotation
    const size = Math.random() * 1.5 + 0.5; // Scale between 0.5 and 2
    const rotation = Math.random() * 360; // Rotate randomly

    // Add SVG heart
    heart.innerHTML = `
        <svg viewBox="0 0 32 29.6" width="100%" height="100%">
            <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
            c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z" fill="${randomColor}"/>
        </svg>
    `;

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 10 + 's';
    heart.style.opacity = Math.random();
    heart.style.transform = `scale(${size}) rotate(${rotation}deg)`;
    heart.style.animation = `float ${Math.random() * 5 + 5}s linear infinite, pulse 2s infinite alternate`;

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 500);

// Set the target date and time (e.g., December 31, 2024, 23:59:59)
const targetDate = new Date('December 05,2023 10:30:00').getTime();

function updateCountdown() {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the time difference in milliseconds
    const timeDifference = now -targetDate ;

    // Check if the target date has passed
    // if (timeDifference <= 0) {
    //     document.querySelector('.timer').innerHTML = '<h2>Event has started!</h2>';
    //     return;
    // }

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    // const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Update the HTML elements with the calculated values
    document.getElementById('dayst').textContent = String(days).padStart(2, '0');
    document.getElementById('hourst').textContent = String(hours).padStart(2, '0');
    document.getElementById('mint').textContent = String(minutes).padStart(2, '0');
    // document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial call to display the countdown immediately
updateCountdown();
let wrapper = document.getElementById('wrapper')
let glass = document.getElementById('glass')
let cancle=document.getElementById('cancle')
let back=document.getElementById('back')
let next=document.getElementById('next')
let l1=document.getElementById('l1')
document.querySelector('#wrapper').onclick = () =>{    
    glass.classList.add('glass');
    wrapper.classList.add('yes');
    cancle.style.display = "block";

    wrapper.classList.remove('not');

    
    console.log("hello");
}
document.querySelector('#cancle').onclick=()=>{
    wrapper.classList.toggle('yes');
    wrapper.classList.toggle('not');
    glass.classList.toggle('glass');
    cancle.style.display = "none";
    back.style.display = "none";
    next.style.display = "none";
    l1.classList.remove('view')
}
document.querySelector('#l1').onclick=()=>{
    l1.classList.add('view');
    back.style.display = "block";
    next.style.display = "block";


}
document.querySelector('#next').onclick=()=>{
    let selectedItem = document.querySelector('.view');
    let nextElement = selectedItem.nextElementSibling;
    selectedItem.classList.remove('view')
    nextElement.classList.add('view')
}

const backgroundContainer = document.querySelector('.background-effects');

// Function to create soft glowing particles
function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.top = Math.random() * 100 + 'vh';
    particle.style.animationDuration = Math.random() * 3 + 2 + 's';
    backgroundContainer.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 3000);
}

// Function to create floating faint hearts
function createFaintHeart() {
    const faintHeart = document.createElement('div');
    faintHeart.classList.add('faint-heart');

    faintHeart.innerHTML = `
        <svg viewBox="0 0 32 29.6" width="100%" height="100%">
            <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
            c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z" fill="rgba(255, 120, 130, 0.5)"/>
        </svg>
    `;

    faintHeart.style.left = Math.random() * 100 + 'vw';
    faintHeart.style.animationDuration = Math.random() * 10 + 5 + 's';
    backgroundContainer.appendChild(faintHeart);

    setTimeout(() => {
        faintHeart.remove();
    }, 10000);
}

// Function to create sparkles
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = Math.random() * 100 + 'vw';
    sparkle.style.top = Math.random() * 100 + 'vh';
    sparkle.style.animationDuration = Math.random() * 2 + 1 + 's';
    backgroundContainer.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 2000);
}

// Function to create wavy lines
function createWaves() {
    const wave = document.createElement('div');
    wave.classList.add('waves');
    backgroundContainer.appendChild(wave);
}

// Generate effects
setInterval(createParticle, 500);  // Particles every 500ms
setInterval(createFaintHeart, 1500); // Faint hearts every 1.5s
setInterval(createSparkle, 800);  // Sparkles every 800ms
createWaves();  // Create wavy lines once
