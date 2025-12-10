document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('voiceBtn');
    
    // Create audio instance
    const audio = new Audio('voice.mp3');

    btn.addEventListener('click', () => {
        // Reset time to start to allow rapid fire re-play
        audio.currentTime = 0;
        
        audio.play().catch(error => {
            console.error("Playback failed:", error);
            // Interactive fallback or alert could go here, but usually click is sufficient
        });

        // Add a visual 'ripple' or active effect via JS if needed,
        // but CSS :active handles the basics nicely.
        console.log('Playing voice.mp3');
    });
});
