<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Irys Portfolio</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --bg-primary: #0a0b1e;
            --bg-secondary: #131632;
            --bg-card: #1a1f3a;
            --text-primary: #ffffff;
            --text-secondary: #9ca3af;
            --accent: #8b5cf6;
            --accent-secondary: #ec4899;
            --accent-hover: #a78bfa;
            --border-color: rgba(139, 92, 246, 0.1);
            --glow: rgba(139, 92, 246, 0.3);
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
            background: linear-gradient(135deg, #0a0b1e 0%, #1a1f3a 50%, #0f1020 100%);
            background-attachment: fixed;
            color: var(--text-primary);
            line-height: 1.6;
            position: relative;
            overflow-x: hidden;
        }

        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
                radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.08) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.08) 0%, transparent 50%);
            pointer-events: none;
            z-index: 0;
        }

        .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 32px;
            position: relative;
            z-index: 1;
        }

        header {
            padding: 80px 0 60px;
            border-bottom: 1px solid var(--border-color);
            backdrop-filter: blur(10px);
            position: relative;
        }

        h1 {
            font-size: 3.5rem;
            font-weight: 800;
            margin-bottom: 16px;
            background: linear-gradient(135deg, #ffffff 0%, var(--accent) 50%, var(--accent-secondary) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            letter-spacing: -0.02em;
            text-shadow: 0 0 40px var(--glow);
        }

        .subtitle {
            color: var(--text-secondary);
            font-size: 1.25rem;
        }

        .profile-header {
            display: flex;
            align-items: center;
            gap: 40px;
            margin-bottom: 40px;
            padding: 40px;
            background: linear-gradient(135deg, var(--bg-card) 0%, rgba(26, 31, 58, 0.6) 100%);
            border-radius: 24px;
            border: 1px solid var(--border-color);
            backdrop-filter: blur(20px);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px var(--glow);
            position: relative;
            overflow: hidden;
        }

        .profile-header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, transparent, var(--accent), var(--accent-secondary), transparent);
        }

        .profile-image-container {
            position: relative;
            width: 160px;
            height: 160px;
            flex-shrink: 0;
        }

        .profile-image-container::before {
            content: '';
            position: absolute;
            inset: -4px;
            background: linear-gradient(135deg, var(--accent), var(--accent-secondary));
            border-radius: 50%;
            animation: rotate 8s linear infinite;
            z-index: -1;
        }

        @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .profile-image {
            width: 160px;
            height: 160px;
            border-radius: 50%;
            object-fit: cover;
            border: 4px solid var(--bg-card);
            background: linear-gradient(135deg, var(--accent), var(--accent-secondary));
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 4rem;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
        }

        .profile-info {
            flex: 1;
        }

        .profile-name {
            font-size: 2.25rem;
            font-weight: 700;
            margin-bottom: 12px;
            background: linear-gradient(135deg, #ffffff, var(--accent-hover));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            letter-spacing: -0.01em;
        }

        .profile-bio {
            color: var(--text-secondary);
            font-size: 1.125rem;
            line-height: 1.8;
            margin-bottom: 24px;
        }

        .social-links {
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
        }

        .social-link {
            display: none;
            align-items: center;
            gap: 8px;
            padding: 10px 20px;
            background: rgba(139, 92, 246, 0.1);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            color: var(--text-primary);
            text-decoration: none;
            font-size: 0.95rem;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .social-link:hover {
            background: rgba(139, 92, 246, 0.2);
            border-color: var(--accent);
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(139, 92, 246, 0.3);
        }

        section {
            padding: 80px 0;
            position: relative;
        }

        h2 {
            font-size: 2.75rem;
            font-weight: 700;
            margin-bottom: 48px;
            text-align: center;
            background: linear-gradient(135deg, #ffffff, var(--accent-hover));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            letter-spacing: -0.01em;
            position: relative;
        }

        h2::after {
            content: '';
            position: absolute;
            bottom: -16px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background: linear-gradient(90deg, var(--accent), var(--accent-secondary));
            border-radius: 2px;
        }

        .app-card {
            background: linear-gradient(135deg, var(--bg-card) 0%, rgba(26, 31, 58, 0.6) 100%);
            border-radius: 24px;
            overflow: hidden;
            border: 1px solid var(--border-color);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(139, 92, 246, 0.1);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            backdrop-filter: blur(20px);
            position: relative;
        }

        .app-card::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(236, 72, 153, 0.05));
            opacity: 0;
            transition: opacity 0.4s;
        }

        .app-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6), 0 0 60px rgba(139, 92, 246, 0.3);
            border-color: var(--accent);
        }

        .app-card:hover::before {
            opacity: 1;
        }

        .app-image {
            height: 400px;
            background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1));
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
        }

        .app-image::after {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, transparent 0%, var(--bg-card) 100%);
            pointer-events: none;
        }

        .app-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .app-info {
            padding: 40px;
            position: relative;
            z-index: 1;
        }

        .app-info h3 {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 20px;
            color: var(--text-primary);
            letter-spacing: -0.01em;
        }

        .app-description {
            color: var(--text-secondary);
            line-height: 1.8;
            margin-bottom: 28px;
            font-size: 1.05rem;
        }

        .app-tags {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
            margin-bottom: 28px;
        }

        .app-tag {
            padding: 8px 18px;
            background: rgba(139, 92, 246, 0.15);
            border: 1px solid rgba(139, 92, 246, 0.3);
            border-radius: 20px;
            font-size: 0.85rem;
            color: var(--accent-hover);
            font-weight: 500;
        }

        .app-links {
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
        }

        .app-link {
            padding: 12px 28px;
            background: linear-gradient(135deg, var(--accent), var(--accent-secondary));
            color: white;
            text-decoration: none;
            border-radius: 12px;
            font-weight: 600;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 4px 15px rgba(139, 92, 246, 0.4);
            position: relative;
            overflow: hidden;
        }

        .app-link::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, var(--accent-hover), #ec4899);
            opacity: 0;
            transition: opacity 0.3s;
        }

        .app-link:hover::before {
            opacity: 1;
        }

        .app-link:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(139, 92, 246, 0.6);
        }

        .arts-grid, .games-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 32px;
        }

        .art-card, .game-card {
            background: linear-gradient(135deg, var(--bg-card) 0%, rgba(26, 31, 58, 0.6) 100%);
            border-radius: 20px;
            overflow: hidden;
            border: 1px solid var(--border-color);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            cursor: pointer;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
            backdrop-filter: blur(20px);
            position: relative;
        }

        .art-card::before, .game-card::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(236, 72, 153, 0.05));
            opacity: 0;
            transition: opacity 0.4s;
            pointer-events: none;
        }

        .art-card:hover, .game-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(139, 92, 246, 0.2);
            border-color: var(--accent);
        }

        .art-card:hover::before, .game-card:hover::before {
            opacity: 1;
        }

        .art-image, .game-preview {
            height: 280px;
            background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1));
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
        }

        .art-image::after, .game-preview::after {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, transparent 0%, var(--bg-card) 100%);
            opacity: 0.6;
            pointer-events: none;
        }

        .art-image img, .game-preview img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .art-card:hover .art-image img,
        .game-card:hover .game-preview img {
            transform: scale(1.08);
        }

        .art-overlay {
            position: absolute;
            inset: 0;
            background: rgba(10, 11, 30, 0.85);
            backdrop-filter: blur(8px);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s;
        }

        .art-card:hover .art-overlay {
            opacity: 1;
        }

        .art-info, .game-info {
            padding: 28px;
            position: relative;
            z-index: 1;
        }

        .art-title, .game-title {
            font-size: 1.4rem;
            font-weight: 700;
            margin-bottom: 12px;
            color: var(--text-primary);
            letter-spacing: -0.01em;
        }

        .art-description, .game-description {
            color: var(--text-secondary);
            font-size: 0.95rem;
            line-height: 1.7;
            margin-bottom: 16px;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .art-date, .game-date {
            font-size: 0.85rem;
            color: var(--accent-hover);
            font-weight: 500;
        }

        .game-meta {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid var(--border-color);
        }

        .game-link {
            color: var(--accent-hover);
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            gap: 4px;
        }

        .game-link:hover {
            color: var(--accent-secondary);
            transform: translateX(4px);
        }

        .modal {
            display: none;
            position: fixed;
            inset: 0;
            background: rgba(10, 11, 30, 0.95);
            backdrop-filter: blur(20px);
            z-index: 1000;
            align-items: center;
            justify-content: center;
            padding: 20px;
            animation: fadeIn 0.3s ease-out;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        .modal.active {
            display: flex;
        }

        .modal-content {
            background: linear-gradient(135deg, var(--bg-card) 0%, rgba(26, 31, 58, 0.95) 100%);
            border-radius: 24px;
            max-width: 900px;
            width: 100%;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
            border: 1px solid var(--border-color);
            box-shadow: 0 40px 100px rgba(0, 0, 0, 0.8), 0 0 60px rgba(139, 92, 246, 0.3);
            animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes slideUp {
            from {
                transform: translateY(40px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }

        .modal-close {
            position: absolute;
            top: 24px;
            right: 24px;
            background: rgba(139, 92, 246, 0.2);
            border: 1px solid var(--border-color);
            color: white;
            width: 44px;
            height: 44px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-size: 1.5rem;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            backdrop-filter: blur(10px);
        }

        .modal-close:hover {
            background: rgba(236, 72, 153, 0.3);
            border-color: var(--accent-secondary);
            transform: rotate(90deg);
        }

        .modal-body {
            padding: 48px;
        }

        .modal-body img {
            width: 100%;
            border-radius: 16px;
            margin-bottom: 32px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }

        .loading-overlay {
            display: none;
            position: fixed;
            inset: 0;
            background: rgba(10, 11, 30, 0.98);
            backdrop-filter: blur(20px);
            z-index: 2000;
            align-items: center;
            justify-content: center;
        }

        .loading-overlay.active {
            display: flex;
        }

        .spinner {
            width: 60px;
            height: 60px;
            border: 4px solid rgba(139, 92, 246, 0.2);
            border-top-color: var(--accent);
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            to {
                transform: rotate(360deg);
            }
        }

        .fade-in {
            animation: fadeInUp 0.6s ease-out;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .app-placeholder, .art-placeholder, .game-placeholder {
            text-align: center;
            padding: 80px 40px;
            background: linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(236, 72, 153, 0.05));
            border-radius: 20px;
            border: 2px dashed var(--border-color);
            backdrop-filter: blur(10px);
        }

        .app-icon, .placeholder-icon {
            font-size: 5rem;
            margin-bottom: 24px;
            opacity: 0.4;
            display: inline-block;
            animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-20px);
            }
        }

        .app-placeholder p, .art-placeholder p, .game-placeholder p {
            color: var(--text-secondary);
            font-size: 1.05rem;
            max-width: 500px;
            margin: 0 auto;
            line-height: 1.7;
        }

        footer {
            text-align: center;
            padding: 60px 0;
            border-top: 1px solid var(--border-color);
            color: var(--text-secondary);
            font-size: 0.95rem;
            margin-top: 80px;
        }

        footer a {
            color: var(--accent-hover);
            text-decoration: none;
            transition: color 0.3s;
        }

        footer a:hover {
            color: var(--accent-secondary);
        }

        @media (max-width: 768px) {
            h1 {
                font-size: 2.5rem;
            }

            h2 {
                font-size: 2rem;
            }

            .profile-header {
                flex-direction: column;
                text-align: center;
                padding: 32px 24px;
            }

            .profile-image-container,
            .profile-image {
                width: 120px;
                height: 120px;
            }

            .social-links {
                justify-content: center;
            }

            .arts-grid, .games-grid {
                grid-template-columns: 1fr;
                gap: 24px;
            }

            .app-info, .modal-body {
                padding: 28px;
            }

            section {
                padding: 60px 0;
            }
        }
    </style>
</head>
<body>
    <div class="loading-overlay" id="loadingOverlay">
        <div class="spinner"></div>
    </div>

    <div class="container">
        <header>
            <h1>Irys Portfolio</h1>
            <p class="subtitle">Showcasing Creative Work on the Permanent Web</p>
        </header>

        <div class="profile-header">
            <div class="profile-image-container">
                <img id="profileImage" class="profile-image" src="" alt="Profile" onerror="this.style.display='none'; this.parentElement.innerHTML='<div class=\'profile-image\'>👤</div>';">
            </div>
            <div class="profile-info">
                <h2 class="profile-name" id="profileName">Your Name</h2>
                <p class="profile-bio" id="profileBio">A creative developer building on the Irys network</p>
                <div class="social-links">
                    <a href="#" class="social-link" id="xLink">
                        <span>𝕏</span>
                        <span id="xUsername">@username</span>
                    </a>
                    <a href="#" class="social-link" id="discordLink">
                        <span>💬</span>
                        <span id="discordUsername">@username</span>
                    </a>
                    <a href="#" class="social-link" id="githubLink">
                        <span>⚡</span>
                        <span id="githubUsername">@username</span>
                    </a>
                </div>
            </div>
        </div>

        <section id="appSection">
            <h2>Featured App</h2>
            <div id="appShowcase"></div>
        </section>

        <section id="artsSection">
            <h2>Arts & Designs</h2>
            <div class="arts-grid" id="artsGrid"></div>
        </section>

        <section id="gamesSection">
            <h2>Games</h2>
            <div class="games-grid" id="gamesGrid"></div>
        </section>

        <footer>
            <p>Built with ❤️ using <a href="https://irys.xyz" target="_blank">Irys</a></p>
        </footer>
    </div>

    <div class="modal" id="modal">
        <div class="modal-content">
            <button class="modal-close" id="modalClose">×</button>
            <div class="modal-body" id="modalBody"></div>
        </div>
    </div>

    <script>
        // Profile configuration - edit this!
        const PROFILE_CONFIG = {
            walletAddress: '', // Leave empty to show demo data
            name: 'Your Name',
            bio: 'A creative developer building on the Irys network. Passionate about blockchain technology and decentralized applications.',
            imageUrl: null,
            xUsername: null,
            discordUsername: null,
            githubUsername: null
        };
    </script>
    <script>
        // Beautiful Irys Portfolio Display
        class IrysPortfolio {
            constructor() {
                this.walletAddress = '';
                this.contributions = [];
                this.categorized = null;
                this.init();
            }

            init() {
                document.getElementById('modalClose').addEventListener('click', () => {
                    this.closeModal();
                });

                document.getElementById('modal').addEventListener('click', (e) => {
                    if (e.target.id === 'modal') {
                        this.closeModal();
                    }
                });

                this.autoLoadPortfolio();
            }

            autoLoadPortfolio() {
                if (typeof PROFILE_CONFIG !== 'undefined' && PROFILE_CONFIG.walletAddress) {
                    this.walletAddress = PROFILE_CONFIG.walletAddress;
                    this.loadPortfolio();
                } else {
                    this.loadDemoProfile();
                    this.showDemoData();
                }
            }

            async loadPortfolio() {
                if (!this.walletAddress) {
                    this.loadDemoProfile();
                    this.showDemoData();
                    return;
                }

                const loadingOverlay = document.getElementById('loadingOverlay');
                loadingOverlay.classList.add('active');

                try {
                    this.contributions = await this.fetchContributionsByWallet(this.walletAddress);
                    await this.loadProfile();
                    const categorized = this.categorizeContributions(this.contributions);
                    this.categorized = categorized;
                    this.displayApp(categorized.app);
                    this.displayArts(categorized.arts);
                    this.displayGames(categorized.games);
                } catch (error) {
                    console.error('Error loading portfolio:', error);
                    this.loadDemoProfile();
                    this.showDemoData();
                } finally {
                    loadingOverlay.classList.remove('active');
                }
            }

            async loadProfile() {
                const profileTx = this.contributions.find(tx => {
                    const tags = tx.tags || [];
                    return tags.some(t => t.name?.toLowerCase() === 'profile' || t.name?.toLowerCase() === 'type' && t.value?.toLowerCase() === 'profile');
                });

                if (profileTx) {
                    const profileData = await this.fetchProfileData(profileTx.id);
                    this.displayProfile(profileData);
                } else {
                    const profileInfo = this.extractProfileFromTags(this.contributions);
                    if (profileInfo) {
                        this.displayProfile(profileInfo);
                    } else {
                        this.loadDemoProfile();
                    }
                }
            }

            async fetchProfileData(txId) {
                try {
                    const response = await fetch(`https://arweave.net/${txId}`);
                    if (response.ok) {
                        const data = await response.json();
                        return data;
                    }
                } catch (error) {
                    console.warn('Could not fetch profile data:', error);
                }
                return null;
            }

            extractProfileFromTags(contributions) {
                for (const contrib of contributions) {
                    const tags = contrib.tags || [];
                    const profileInfo = {};
                    
                    tags.forEach(tag => {
                        const name = tag.name?.toLowerCase();
                        const value = tag.value;
                        
                        if (name === 'name' || name === 'profile-name') profileInfo.name = value;
                        if (name === 'bio' || name === 'description' || name === 'write-up') profileInfo.bio = value;
                        if (name === 'profile-image' || name === 'avatar') profileInfo.imageUrl = value;
                        if (name === 'x' || name === 'twitter' || name === 'x-username') profileInfo.xUsername = value;
                        if (name === 'discord' || name === 'discord-username') profileInfo.discordUsername = value;
                        if (name === 'github' || name === 'github-username') profileInfo.githubUsername = value;
                    });
                    
                    if (Object.keys(profileInfo).length > 0) {
                        return profileInfo;
                    }
                }
                return null;
            }

            displayProfile(profile) {
                if (!profile) return;

                if (profile.imageUrl) {
                    document.getElementById('profileImage').src = profile.imageUrl;
                }

                if (profile.name) {
                    document.getElementById('profileName').textContent = profile.name;
                }

                if (profile.xUsername) {
                    const xLink = document.getElementById('xLink');
                    const xUsername = document.getElementById('xUsername');
                    xLink.href = `https://x.com/${profile.xUsername.replace('@', '')}`;
                    xUsername.textContent = profile.xUsername.startsWith('@') ? profile.xUsername : `@${profile.xUsername}`;
                    xLink.style.display = 'flex';
                }

                if (profile.discordUsername) {
                    const discordLink = document.getElementById('discordLink');
                    const discordUsername = document.getElementById('discordUsername');
                    discordLink.href = `https://discord.com/users/${profile.discordUsername}`;
                    discordUsername.textContent = profile.discordUsername.startsWith('@') ? profile.discordUsername : `@${profile.discordUsername}`;
                    discordLink.style.display = 'flex';
                }

                if (profile.githubUsername) {
                    const githubLink = document.getElementById('githubLink');
                    const githubUsername = document.getElementById('githubUsername');
                    githubLink.href = `https://github.com/${profile.githubUsername.replace('@', '')}`;
                    githubUsername.textContent = profile.githubUsername.startsWith('@') ? profile.githubUsername : `@${profile.githubUsername}`;
                    githubLink.style.display = 'flex';
                }

                if (profile.bio) {
                    document.getElementById('profileBio').textContent = profile.bio;
                }
            }

            loadDemoProfile() {
                if (typeof PROFILE_CONFIG !== 'undefined') {
                    const profile = {
                        name: PROFILE_CONFIG.name || 'Your Name',
                        bio: PROFILE_CONFIG.bio || 'A creative developer building on the Irys network',
                        imageUrl: PROFILE_CONFIG.imageUrl || null,
                        xUsername: PROFILE_CONFIG.xUsername || null,
                        discordUsername: PROFILE_CONFIG.discordUsername || null,
                        githubUsername: PROFILE_CONFIG.githubUsername || null
                    };
                    this.displayProfile(profile);
                    return;
                }

                const profile = {
                    name: 'Your Name',
                    bio: 'Edit the PROFILE_CONFIG in the HTML to customize your portfolio',
                    imageUrl: null
                };
                this.displayProfile(profile);
            }

            categorizeContributions(contributions) {
                const categorized = {
                    app: null,
                    arts: [],
                    games: []
                };

                contributions.forEach(contrib => {
                    const tags = contrib.tags || [];
                    const contentType = this.getContentType(tags, contrib);
                    const imageUrl = this.getImageUrl(contrib);
                    const description = this.getDescription(tags);

                    const item = {
                        id: contrib.id,
                        title: this.getTitle(tags) || 'Untitled',
                        description: description,
                        imageUrl: imageUrl,
                        date: new Date(contrib.timestamp || Date.now()),
                        tags: tags,
                        transactionId: contrib.id
                    };

                    if (contentType === 'app' && !categorized.app) {
                        categorized.app = item;
                    } else if (contentType === 'art' || contentType === 'design') {
                        categorized.arts.push(item);
                    } else if (contentType === 'game') {
                        categorized.games.push(item);
                    } else {
                        categorized.arts.push(item);
                    }
                });

                return categorized;
            }

            getContentType(tags, contrib) {
                const typeTag = tags.find(t => 
                    t.name?.toLowerCase() === 'content-type' || 
                    t.name?.toLowerCase() === 'type' ||
                    t.name?.toLowerCase() === 'category'
                );
                
                if (typeTag) {
                    const value = typeTag.value?.toLowerCase();
                    if (value.includes('app') || value.includes('application')) return 'app';
                    if (value.includes('game')) return 'game';
                    if (value.includes('art') || value.includes('design')) return 'art';
                }

                const appTag = tags.find(t => t.name?.toLowerCase().includes('app'));
                const gameTag = tags.find(t => t.name?.toLowerCase().includes('game'));
                const artTag = tags.find(t => t.name?.toLowerCase().includes('art') || t.name?.toLowerCase().includes('design'));

                if (appTag) return 'app';
                if (gameTag) return 'game';
                if (artTag) return 'art';

                const size = contrib.data?.size || 0;
                if (size > 10 * 1024 * 1024) return 'app';
                if (size > 1 * 1024 * 1024) return 'game';
                
                return 'art';
            }

            getImageUrl(contrib) {
                if (contrib.id) {
                    return `https://arweave.net/${contrib.id}`;
                }
                return null;
            }

            getTitle(tags) {
                const titleTag = tags.find(t => 
                    t.name?.toLowerCase() === 'title' || 
                    t.name?.toLowerCase() === 'name'
                );
                return titleTag?.value || null;
            }

            getDescription(tags) {
                const descTag = tags.find(t => 
                    t.name?.toLowerCase() === 'description' || 
                    t.name?.toLowerCase() === 'desc' ||
                    t.name?.toLowerCase() === 'write-up'
                );
                return descTag?.value || 'A creative work stored on the Irys network.';
            }

            displayApp(app) {
                const showcase = document.getElementById('appShowcase');
                
                if (!app) {
                    showcase.innerHTML = `
                        <div class="app-placeholder">
                            <div class="app-icon">🚀</div>
                            <p>No app project found. Upload your app with tags: type=app</p>
                        </div>
                    `;
                    return;
                }

                const formattedDate = app.date.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });

                showcase.innerHTML = `
                    <div class="app-card fade-in">
                        <div class="app-image">
                            ${app.imageUrl ? 
                                `<img src="${app.imageUrl}" alt="${app.title}" onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=\\'display:flex;align-items:center;justify-content:center;height:100%;font-size:4rem;opacity:0.3\\'>🚀</div>';">` :
                                '<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:4rem;opacity:0.3">🚀</div>'
                            }
                        </div>
                        <div class="app-info">
                            <h3>${app.title}</h3>
                            <p class="app-description">${app.description}</p>
                            <div class="app-tags">
                                <span class="app-tag">In Development</span>
                                <span class="app-tag">Irys Network</span>
                            </div>
                            <div class="app-links">
                                <a href="https://arweave.net/${app.transactionId}" target="_blank" class="app-link">View on Arweave</a>
                                <a href="https://viewblock.io/arweave/tx/${app.transactionId}" target="_blank" class="app-link">View Details</a>
                            </div>
                        </div>
                    </div>
                `;
            }

            displayArts(arts) {
                const grid = document.getElementById('artsGrid');
                
                if (arts.length === 0) {
                    grid.innerHTML = `
                        <div class="art-placeholder">
                            <div class="placeholder-icon">🎨</div>
                            <p>No arts or designs found. Upload your work with tags: type=art or type=design</p>
                        </div>
                    `;
                    return;
                }

                grid.innerHTML = arts.map(art => {
                    const formattedDate = art.date.toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short'
                    });

                    return `
                        <div class="art-card fade-in" onclick="window.portfolio.openArtModal('${art.id}')">
                            <div class="art-image">
                                ${art.imageUrl ? 
                                    `<img src="${art.imageUrl}" alt="${art.title}" onerror="this.parentElement.style.background='var(--bg-secondary)'; this.style.display='none';">` :
                                    '<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:3rem;opacity:0.3">🎨</div>'
                                }
                                <div class="art-overlay">
                                    <p style="color:white;font-size:0.875rem;">Click to view full size</p>
                                </div>
                            </div>
                            <div class="art-info">
                                <h3 class="art-title">${art.title}</h3>
                                <p class="art-description">${art.description}</p>
                                <span class="art-date">${formattedDate}</span>
                            </div>
                        </div>
                    `;
                }).join('');
            }

            displayGames(games) {
                const grid = document.getElementById('gamesGrid');
                
                if (games.length === 0) {
                    grid.innerHTML = `
                        <div class="game-placeholder">
                            <div class="placeholder-icon">🎮</div>
                            <p>No games found. Upload your games with tags: type=game</p>
                        </div>
                    `;
                    return;
                }

                grid.innerHTML = games.map(game => {
                    const formattedDate = game.date.toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long'
                    });

                    return `
                        <div class="game-card fade-in">
                            <div class="game-preview">
                                ${game.imageUrl ? 
                                    `<img src="${game.imageUrl}" alt="${game.title}" onerror="this.parentElement.style.background='var(--bg-secondary)'; this.style.display='none';">` :
                                    '<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:3rem;opacity:0.3">🎮</div>'
                                }
                            </div>
                            <div class="game-info">
                                <h3 class="game-title">${game.title}</h3>
                                <p class="game-description">${game.description}</p>
                                <div class="game-meta">
                                    <span class="game-date">${formattedDate}</span>
                                    <a href="https://arweave.net/${game.transactionId}" target="_blank" class="game-link">Play Game →</a>
                                </div>
                            </div>
                        </div>
                    `;
                }).join('');
            }

            openArtModal(artId) {
                const art = this.categorized?.arts?.find(a => a.id === artId);
                if (!art) return;

                const modal = document.getElementById('modal');
                const modalBody = document.getElementById('modalBody');
                
                modalBody.innerHTML = `
                    <h2 style="margin-bottom:20px;font-size:2rem;">${art.title}</h2>
                    ${art.imageUrl ? `<img src="${art.imageUrl}" alt="${art.title}">` : ''}
                    <p style="color:var(--text-secondary);line-height:1.8;margin-bottom:20px;">${art.description}</p>
                    <div style="display:flex;gap:12px;flex-wrap:wrap;">
                        <a href="https://arweave.net/${art.transactionId}" target="_blank" class="app-link">View on Arweave</a>
                        <a href="https://viewblock.io/arweave/tx/${art.transactionId}" target="_blank" class="app-link">View Details</a>
                    </div>
                `;
                
                modal.classList.add('active');
            }

            closeModal() {
                document.getElementById('modal').classList.remove('active');
            }

            async fetchContributionsByWallet(walletAddress) {
                const query = `
                    query GetTransactions($owners: [String!]) {
                        transactions(owners: $owners, first: 100, sort: HEIGHT_DESC) {
                            edges {
                                node {
                                    id
                                    owner {
                                        address
                                    }
                                    tags {
                                        name
                                        value
                                    }
                                    block {
                                        timestamp
                                    }
                                    data {
                                        size
                                    }
                                }
                            }
                        }
                    }
                `;

                const endpoints = [
                    'https://arweave.net/graphql',
                    'https://arweave-search.goldsky.com/graphql'
                ];

                for (const endpoint of endpoints) {
                    try {
                        const response = await fetch(endpoint, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                query,
                                variables: { owners: [walletAddress] }
                            })
                        });

                        if (!response.ok) continue;

                        const data = await response.json();
                        if (data.errors) continue;

                        const transactions = data.data?.transactions?.edges?.map(edge => {
                            const node = edge.node;
                            return {
                                id: node.id,
                                address: node.owner?.address || walletAddress,
                                timestamp: node.block?.timestamp * 1000 || Date.now(),
                                data: { size: parseInt(node.data?.size || 0) },
                                tags: node.tags || []
                            };
                        }) || [];

                        if (transactions.length > 0) {
                            return transactions;
                        }
                    } catch (err) {
                        console.warn(`Endpoint failed:`, err);
                        continue;
                    }
                }

                return [];
            }

            showDemoData() {
                const demoArts = [
                    {
                        id: 'demo-art-1',
                        title: 'Digital Landscape',
                        description: 'A stunning digital landscape created with modern techniques, exploring the boundaries between reality and imagination.',
                        imageUrl: null,
                        date: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
                        transactionId: 'demo-1'
                    },
                    {
                        id: 'demo-art-2',
                        title: 'Abstract Composition',
                        description: 'An abstract piece that plays with color, form, and movement.',
                        imageUrl: null,
                        date: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000),
                        transactionId: 'demo-2'
                    },
                    {
                        id: 'demo-art-3',
                        title: 'Character Design',
                        description: 'A character design project showcasing skills in character creation and world-building.',
                        imageUrl: null,
                        date: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000),
                        transactionId: 'demo-3'
                    }
                ];

                const demoGames = [
                    {
                        id: 'demo-game-1',
                        title: 'Puzzle Adventure',
                        description: 'An engaging puzzle game that combines strategy with storytelling.',
                        imageUrl: null,
                        date: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000),
                        transactionId: 'demo-game-1'
                    },
                    {
                        id: 'demo-game-2',
                        title: 'Arcade Classic Remix',
                        description: 'A modern take on classic arcade gameplay with innovative mechanics.',
                        imageUrl: null,
                        date: new Date(Date.now() - 75 * 24 * 60 * 60 * 1000),
                        transactionId: 'demo-game-2'
                    }
                ];

                const demoApp = {
                    id: 'demo-app-1',
                    title: 'Creative Collaboration Platform',
                    description: 'A revolutionary platform for artists and creators to collaborate, share work, and build communities.',
                    imageUrl: null,
                    date: new Date(),
                    transactionId: 'demo-app-1'
                };

                this.categorized = {
                    app: demoApp,
                    arts: demoArts,
                    games: demoGames
                };

                this.displayApp(demoApp);
                this.displayArts(demoArts);
                this.displayGames(demoGames);
            }
        }

        let portfolio;
        document.addEventListener('DOMContentLoaded', () => {
            portfolio = new IrysPortfolio();
            window.portfolio = portfolio;
        });
    </script>
</body>
</html>