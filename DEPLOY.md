# Deploy to GitHub Pages

Your code is ready! Follow these steps to publish:

## 1. Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `payme`
3. Make it Public
4. DON'T initialize with README (we already have code)
5. Click "Create repository"

## 2. Push Your Code
Run these commands in your terminal:

```bash
git remote add origin https://github.com/ali-zargari/payme.git
git push -u origin main
```

## 3. Enable GitHub Pages
1. Go to your repo on GitHub
2. Click Settings → Pages
3. Under "Build and deployment":
   - Source: GitHub Actions
4. The workflow will run automatically

## 4. Access Your App
After ~2 minutes, your app will be live at:
```
https://ali-zargari.github.io/payme
```

## Note
The GitHub Action is already configured in `.github/workflows/deploy.yml` and will automatically deploy on every push to main.