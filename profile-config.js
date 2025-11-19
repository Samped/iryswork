// Profile Configuration
// Edit this file with your personal information

const PROFILE_CONFIG = {
    name: "phos",
    bio: "A creative developer and viber for the culture on irys network Passionate about digital art, game development, and decentralized technologies.",
    imageUrl: "public/arts/pfp.jpg", // URL to your profile picture (can be from Irys, IPFS, or any image URL)
    xUsername: "eddy_phos", // Your X (Twitter) username without @ (e.g., "yourusername")
    discordUsername: "Sam_ottah", // Your Discord username (e.g., "yourusername" or "yourusername#1234")
    githubUsername: "samped", // Your GitHub username without @ (e.g., "yourusername")
    walletAddress: "" // Optional: Your Irys wallet address to auto-load portfolio
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PROFILE_CONFIG;
}
