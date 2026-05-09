# Zimo Project Hub

Static MkDocs Material status dashboard for Zimo.

This site is published from `zimo-subsea/status-dashboard`, separate from existing Zimo product documentation.

## Local setup

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
mkdocs serve
```

Open `http://127.0.0.1:8000`.

## Publish model

`main` contains the MkDocs source.

On every push to `main`, `.github/workflows/build-gh-pages.yml` builds the site and publishes the static output to the `gh-pages` branch.

GitHub Pages should be configured as:

- Source: `Deploy from a branch`
- Branch: `gh-pages`
- Folder: `/ (root)`

Expected site URL after Pages is enabled:

`https://zimo-subsea.github.io/status-dashboard/`
