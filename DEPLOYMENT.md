# 🚀 Sisteminha EcoFarm - Deployment Guide

## Live Deployment

**Preview URL**: https://sisteminha-ecofarm--preview.expo.app
**Production URL**: https://sisteminha-ecofarm.expo.app (coming after setup)

Expo Project: https://expo.dev/accounts/tuppy/projects/sisteminha-ecofarm

---

## Prerequisites

- Node.js 18+ and npm/yarn installed
- Expo CLI (`npm install -g eas-cli`)
- Expo account (tuppy)
- Git configured

---

## Step 1: Install Dependencies

```bash
npm install
```

This installs all required packages from `package.json`, including:
- `expo` and `expo-router` for web deployment
- React 19.1.0 for the UI layer
- `react-native-web` for web compatibility
- All EcoFarm-specific dependencies (Gemini API, recharts, etc.)

---

## Step 2: Test Locally on Web

```bash
npx expo start --web
```

This starts a development server (usually at `http://localhost:3000`).

**What to check**:
- Dashboard page loads without errors
- Navigation routes work (if using expo-router)
- Plant ID camera and soil analysis features function
- No console errors in browser DevTools

**If you encounter React 19 + web errors**:
```bash
npx expo install --fix
```

See: https://github.com/expo/expo/issues/40769

---

## Step 3: Build for Web (Static Export)

```bash
npx expo export --platform web
```

This generates a `dist/` directory with a static site (HTML, CSS, JS).

---

## Step 4: Deploy to EAS Hosting

### First-Time Setup

1. **Login to Expo**:
   ```bash
   eas login
   ```
   Enter your tuppy credentials.

2. **Initialize EAS** (already configured in `eas.json`):
   ```bash
   npx eas init
   ```
   This links the project to `https://expo.dev/accounts/tuppy/projects/sisteminha-ecofarm`

### Deploy Preview (Test)

```bash
eas deploy --platform web
```

This creates a preview deployment at:
```
https://sisteminha-ecofarm--[hash].expo.app
```

✅ Use this URL for testing before production.

### Deploy Production

```bash
eas deploy --platform web --prod
```

This creates the production URL:
```
https://sisteminha-ecofarm.expo.app
```

---

## Configuration Files

### `app.json`
- Defines app metadata (name, slug, owner="tuppy")
- Web output set to `static` (required for EAS Hosting)

### `eas.json`
- Build and deploy settings
- Platform: `web`
- Channels: `preview` and `production`
- Distribution: `expo` (EAS Hosting)

### `package.json`
- Scripts: `npm start`, `npm run web`, `npm run build`
- Dependencies: Expo Router, React 19, React Native Web, EcoFarm packages

---

## Deployment Checklist

- [ ] Dependencies installed (`npm install`)
- [ ] Local web test passes (`npx expo start --web`)
- [ ] Export builds successfully (`npx expo export --platform web`)
- [ ] EAS CLI installed and logged in (`eas login`)
- [ ] Preview deployment tested
- [ ] Production URL accessible
- [ ] README updated with live demo URL

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| React 19 errors on web | Run `npx expo install --fix` |
| EAS login fails | Check internet, use `eas logout` then `eas login` again |
| `dist/` folder missing | Run `npx expo export --platform web` first |
| Production URL unreachable | Wait 1-2 minutes after deployment, check Expo dashboard |
| Build too large | Check for unnecessary dependencies, optimize images |

---

## Using in Competitions

1. Copy the production URL: `https://sisteminha-ecofarm.expo.app`
2. Add to your presentation slides and project documentation
3. Share as: "Live demo: https://sisteminha-ecofarm.expo.app (hosted on EAS Hosting)"

---

## References

- [Expo Documentation](https://docs.expo.dev/)
- [EAS Hosting Guide](https://docs.expo.dev/eas/hosting/get-started/)
- [Expo Router](https://expo.dev/router)
- [React Native Web](https://necolas.github.io/react-native-web/)
