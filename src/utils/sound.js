// Simple utility to play UI interaction sounds safely
import clickAudioSrc from '../assets/audio/click.mp3'; // Place a short, quiet click mp3 in assets/audio/

export const playClickSound = () => {
  try {
    const audio = new Audio(clickAudioSrc);
    audio.volume = 0.15; // Keep it subtle and quiet
    audio.play().catch(() => {
      // Ignore browser autoplay block errors if user hasn't interacted yet
    });
  } catch (e) {
    // Fallback silently if audio fails
  }
};
