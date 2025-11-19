#!/usr/bin/env python3
"""
Auto-generate artworks.json by scanning the public/arts folder for images
"""
import os
import json
from pathlib import Path
from datetime import datetime

def generate_artworks_json():
    arts_folder = Path('public/arts')
    artworks = []
    
    # Supported image extensions
    image_extensions = {'.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'}
    
    # Get all image files
    image_files = []
    if arts_folder.exists():
        for file in arts_folder.iterdir():
            if file.is_file() and file.suffix.lower() in image_extensions:
                # Skip artworks.json itself
                if file.name != 'artworks.json' and file.name != 'README.md':
                    image_files.append(file)
    
    # Sort by modification time (newest first)
    image_files.sort(key=lambda x: x.stat().st_mtime, reverse=True)
    
    # Generate artwork entries
    for idx, image_file in enumerate(image_files, 1):
        # Get file modification date
        mod_time = datetime.fromtimestamp(image_file.stat().st_mtime)
        
        artwork = {
            "id": f"art-{idx}",
            "title": image_file.stem.replace('_', ' ').replace('-', ' ').title(),
            "description": f"A beautiful piece of artwork: {image_file.stem}",
            "image": image_file.name,
            "date": mod_time.strftime("%Y-%m-%d")
        }
        artworks.append(artwork)
    
    # Write to artworks.json
    output_file = arts_folder / 'artworks.json'
    with open(output_file, 'w') as f:
        json.dump(artworks, f, indent=4)
    
    print(f"✅ Generated artworks.json with {len(artworks)} artworks")
    return len(artworks)

if __name__ == '__main__':
    generate_artworks_json()

