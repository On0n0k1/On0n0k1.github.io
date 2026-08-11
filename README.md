# On0n0k1.github.io

Static hosting root for [On0n0k1.github.io](https://On0n0k1.github.io). This repo holds no build tooling of its own — each site is built in its own repository and its output is committed here as a plain static directory.

## Structure

```
sites/
  index.html       # landing page served at the domain root
  <project-a>/      # static build output committed from another repo
  <project-b>/
  ...
serve.js            # local preview server (no dependencies)
```

Each directory under `sites/` is self-contained static output (HTML/CSS/JS/assets) copied in from the project's own repository after it builds there. Nothing in this repo compiles or bundles anything.

The root (`sites/index.html` and its assets) is populated from [On0n0k1/portifolio](https://github.com/On0n0k1/portifolio) — that repo's build output is committed directly into `sites/`, so it's what's served at `https://On0n0k1.github.io/`.

## Local preview

```
node serve.js        # serves ./sites at http://localhost:8080
node serve.js 3000    # custom port
```

Directory requests fall back to that directory's `index.html`, so each project under `sites/` is reachable at `http://localhost:<port>/<project>/`.
