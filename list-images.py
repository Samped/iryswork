#!/usr/bin/env python3
"""
Simple HTTP endpoint to list images in public/arts folder
This can be used by the frontend to auto-discover images
"""
import os
import json
from http.server import HTTPServer, BaseHTTPRequestHandler
from pathlib import Path
from urllib.parse import urlparse, parse_qs

class ImageListHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/api/images' or self.path == '/api/images.json':
            arts_folder = Path('public/arts')
            image_extensions = {'.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'}
            
            images = []
            if arts_folder.exists():
                for file in arts_folder.iterdir():
                    if file.is_file() and file.suffix.lower() in image_extensions:
                        if file.name not in ['artworks.json', 'README.md']:
                            images.append({
                                'filename': file.name,
                                'path': f'public/arts/{file.name}',
                                'name': file.stem.replace('_', ' ').replace('-', ' ').title()
                            })
            
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(images).encode())
        else:
            self.send_response(404)
            self.end_headers()

def run_server(port=8001):
    server = HTTPServer(('localhost', port), ImageListHandler)
    print(f'📡 Image listing API running on http://localhost:{port}/api/images')
    server.serve_forever()

if __name__ == '__main__':
    run_server()


