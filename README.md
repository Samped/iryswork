# Irys Creative Portfolio

A beautiful, sleek portfolio showcase for your creative works stored on the Irys network. Display your digital art, games, and applications with style.

## Features

- 🎨 **Profile Section** - Showcase your name, social links, and bio
- 🖼️ **Arts & Designs Gallery** - Beautiful grid layout for your digital artworks
- 🎮 **Games Showcase** - Display your interactive game projects
- 🚀 **Featured App** - Highlight your current application in development
- 📝 **Write-ups** - Add descriptions and stories to each project
- 🌐 **Responsive Design** - Looks great on all devices
- ✨ **Smooth Animations** - Modern, polished user experience
- 🔄 **Auto-Discovery** - Automatically finds and displays images from public/arts folder

## Quick Start

1. **Configure Your Profile**
   - Edit `profile-config.js` with your information:
     - Name
     - Bio/Write-up
     - Profile picture URL
     - X (Twitter) username
     - Discord username
     - GitHub username

2. **Add Your Artworks**
   - Simply place your image files in `public/arts/` folder
   - Supported formats: `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`, `.svg`
   - The app will automatically discover and display them!

3. **Start the Server**
   ```bash
   python3 -m http.server 8000
   ```

4. **Open in Browser**
   - Navigate to `http://localhost:8000`
   - Your profile and artworks will load automatically

## Adding Artworks

### Method 1: Auto-Discovery (Easiest)
Just place your image files in `public/arts/` folder with any name. The app will automatically find and display them!

### Method 2: Manual JSON (For Custom Titles/Descriptions)
1. Place images in `public/arts/` folder
2. Edit `public/arts/artworks.json`:
```json
[
    {
        "id": "art-1",
        "title": "My Amazing Artwork",
        "description": "A detailed description of your artwork.",
        "image": "my-artwork.jpg",
        "date": "2024-01-15"
    }
]
```

### Method 3: Auto-Generate JSON
Run the generator script to automatically create artworks.json:
```bash
python3 generate-artworks.py
```

## Profile Configuration

Edit `profile-config.js` to customize your profile:

```javascript
const PROFILE_CONFIG = {
    name: "Your Name",
    bio: "Your bio or write-up here...",
    imageUrl: "https://example.com/your-profile-pic.jpg",
    xUsername: "yourusername",
    discordUsername: "yourusername",
    githubUsername: "yourusername",
    walletAddress: "" // Optional: Your Irys wallet address
};
```

## Organizing Your Irys Contributions

The portfolio automatically categorizes your contributions based on tags:

### For Apps
Add tags to your Irys transaction:
- `type=app` or `type=application`
- `title=Your App Name`
- `description=Your app description`

### For Arts/Designs
Add tags:
- `type=art` or `type=design`
- `title=Artwork Title`
- `description=Your artwork description`

### For Games
Add tags:
- `type=game`
- `title=Game Name`
- `description=Your game description`

## Files

- `index.html` - Main HTML structure
- `styles.css` - Beautiful styling and animations
- `app.js` - Portfolio logic and Irys integration
- `profile-config.js` - Your profile configuration (edit this!)
- `public/arts/` - Folder for your artwork images
- `generate-artworks.py` - Script to auto-generate artworks.json

## Browser Compatibility

Works in all modern browsers that support:
- ES6 modules
- Fetch API
- CSS Grid and Flexbox
- CSS Custom Properties

## Customization

The portfolio uses a modern white and blue theme. You can customize colors in `index.html` by modifying the CSS variables in the `:root` selector.
