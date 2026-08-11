#!/usr/bin/env node
// Zero-dependency static file server for previewing ./sites locally.
// Usage: node serve.js [port]

import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const ROOT = join(import.meta.dirname, 'sites');
const PORT = Number(process.argv[2]) || 8080;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.glb': 'model/gltf-binary',
  '.pdf': 'application/pdf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

const server = createServer(async (req, res) => {
  try {
    const requestPath = normalize(decodeURIComponent(req.url.split('?')[0]));
    let filePath = join(ROOT, requestPath);

    if (!filePath.startsWith(ROOT)) {
      res.writeHead(403);
      res.end('Forbidden');
      return;
    }

    let fileStat = await stat(filePath).catch(() => null);
    if (fileStat?.isDirectory()) {
      filePath = join(filePath, 'index.html');
      fileStat = await stat(filePath).catch(() => null);
    }

    if (!fileStat) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }

    const body = await readFile(filePath);
    res.writeHead(200, {
      'Content-Type': MIME_TYPES[extname(filePath)] ?? 'application/octet-stream',
    });
    res.end(body);
  } catch (err) {
    res.writeHead(500);
    res.end('Internal server error');
    console.error(err);
  }
});

server.listen(PORT, () => {
  console.log(`Serving ./sites at http://localhost:${PORT}`);
});
