// =========================================================
// 1. CLICK SOUND EFFECT (JINGLE BELLS)
// =========================================================

// IMPORTANT: Replace the placeholder URL below with a direct public link 
// to an actual .mp3 sound file (e.g., a simple jingle or click sound).
const JINGLE_SOUND_URL = 'YOUR_PUBLIC_JINGLE_BELL_SOUND_URL.mp3'; 

// Function to play the sound
function playJingle() {
    try {
        const jingle = new Audio(JINGLE_SOUND_URL);
        jingle.volume = 0.5; // Set volume to 50%
        jingle.play().catch(e => {
            // Catches errors like "Autoplay was prevented" on some browsers
            console.log("Sound play prevented or failed:", e.message);
        });
    } catch (error) {
        console.error("Error creating Audio object:", error);
    }
}

// Get all link buttons using their class
const linkButtons = document.querySelectorAll('.link-button');

// Add click listener to each link button
linkButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Play the sound immediately upon click
        playJingle();
    });
});


// =========================================================
// 2. INTERACTIVE SNOWFALL (WIND EFFECT)
// =========================================================

const body = document.body;

// Listen for mouse movement across the page
body.addEventListener('mousemove', (e) => {
    // 1. Normalize mouse position to range from -1 (left) to +1 (right)
    const windEffectNormalized = (e.clientX / window.innerWidth) * 2 - 1; 
    
    // 2. Map the normalized value to a pixel range (e.g., -20px to +20px)
    //    This simulates the wind pushing the snow.
    const snowDrift = windEffectNormalized * 20; 

    // 3. Update the CSS Variable in style.css to control the snowfall animation
    document.documentElement.style.setProperty('--snow-drift-x', `${snowDrift}px`);
});
