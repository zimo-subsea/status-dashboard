# Zimo Project Hub

Static MkDocs Material status dashboard for Zimo.

This site is meant to be published with GitHub Pages from `zimo-subsea/status-dashboard`, separate from existing Zimo product documentation.

## Local setup

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
mkdocs serve
```

Open `http://127.0.0.1:8000`.

## Publish

Push this folder to `zimo-subsea/status-dashboard`, then enable GitHub Pages with GitHub Actions as the publishing source.
