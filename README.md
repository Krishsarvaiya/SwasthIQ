# SwasthIQ — Official Public Beta Website

This repository contains the official public beta website for **SwasthIQ**, an intelligent healthcare management application currently in Android beta testing.

The website communicates the core app value proposition, showcases real application screens, guides visitors to download the Android Beta APK, and collects user feedback directly into a Google Sheet via Google Apps Script.

---

## 📦 Project Separation

The SwasthIQ ecosystem consists of two completely independent, decoupled repositories:

1. **SwasthIQ (Main Flutter Application)**:
   - **Local Path**: `E:\Krish\My_Learnings\Projects\SwasthIQ\SwasthIQ`
   - **GitHub Repository**: [`Krishsarvaiya/SwasthIQ`](https://github.com/Krishsarvaiya/SwasthIQ)
   - **Purpose**: Cross-platform Flutter healthcare mobile/web app (Patient portal, Doctor portal, Admin portal, Medical Vault, OCR/AI analysis).
   - **Releases**: Hosts the official Android APK builds via GitHub Releases (`SwasthIQ.apk`).

2. **SwasthIQ-Website (Public Marketing & Beta Portal)**:
   - **Local Path**: `E:\Krish\My_Learnings\Projects\SwasthIQ\SwasthIQ-Website`
   - **GitHub Repository**: [`Krishsarvaiya/SwasthIQ-Website`](https://github.com/Krishsarvaiya/SwasthIQ-Website)
   - **Purpose**: Public-facing React/Vite/Tailwind product landing page, interactive real app showcase, and beta tester feedback intake.
   - **Deployment**: Deployed independently as a static web application on Vercel.
   - **APK Integration**: The website contains **zero** APK binaries; all download buttons link directly to the latest release asset hosted on the main app's GitHub Releases (`https://github.com/Krishsarvaiya/SwasthIQ/releases/latest/download/SwasthIQ.apk`).

---

## 🚀 Tech Stack

- **Framework**: React 18 + Vite + TypeScript
- **Styling**: Tailwind CSS v3 with SwasthIQ Brand Design Tokens
- **Icons**: Phosphor Icons (`@phosphor-icons/react`)
- **Deployment**: Vercel-ready (Static Site Generation / SPA)

---

## 🎨 Brand Design Tokens

| Token | Hex Value | Role |
| :--- | :--- | :--- |
| **App Background** | `#F6F9F8` | Primary surface background |
| **Card Background** | `#FFFFFF` | Elevated cards and containers |
| **Primary Text** | `#092A4A` | Headings, labels, and primary body text |
| **SwasthIQ Teal** | `#0FAE9B` | Primary action color and brand accent |
| **Secondary Medical Blue** | `#3B82A0` | Secondary medical indicators and highlights |
| **AI Insight Background** | `#E7F7F3` | Soft backdrop for biomarker insights and badges |
| **Border** | `#DCEAE7` | Card borders and dividers |

---

## 📲 Android Beta APK Download

The website uses **GitHub Releases** to deliver the latest Android Beta APK.

### How It Works

All "Download Android Beta" buttons on the website point to a single URL:

```
https://github.com/Krishsarvaiya/SwasthIQ/releases/latest/download/SwasthIQ.apk
```

This URL uses GitHub's **latest-release redirect mechanism**:
- GitHub automatically redirects to the newest published release.
- The APK download starts immediately in the user's browser.
- **No website update is needed** when a new release is published.

### ⚠️ Important Requirement for Automatic Downloads

For this mechanism to work correctly:

1. **Every new GitHub Release** must contain the APK uploaded with the **same filename**: `SwasthIQ.apk`
2. The repository must be **public** (or the release must be accessible without authentication).
3. Do NOT change the APK filename between releases.

**Example release workflow:**
```bash
# Build the release APK
flutter build apk --release

# Rename to consistent filename
copy build\app\outputs\flutter-apk\app-release.apk SwasthIQ.apk

# Create a new GitHub Release and upload SwasthIQ.apk as the release asset
```

When the next release is published with the same `SwasthIQ.apk` filename, the website will automatically download the newest version.

### Configuring the Download URL

The download URL is configurable through the `VITE_ANDROID_BETA_URL` environment variable:

```env
VITE_ANDROID_BETA_URL=https://github.com/Krishsarvaiya/SwasthIQ/releases/latest/download/SwasthIQ.apk
```

---

## 🛠️ Local Development

### Prerequisites

- Node.js 18+ or 20+
- npm 9+

### Setup Steps

1. Clone the repository and navigate to the project directory:
   ```bash
   cd SwasthIQ-Website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

4. Start the local development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

---

## ⚙️ Environment Variables

The website requires two environment variables:

| Variable | Description | Example |
| :--- | :--- | :--- |
| `VITE_FEEDBACK_ENDPOINT` | Google Apps Script Web App URL for collecting feedback | `https://script.google.com/macros/s/AKfycby_.../exec` |
| `VITE_ANDROID_BETA_URL` | Direct download URL for the latest Android Beta APK | `https://github.com/Krishsarvaiya/SwasthIQ/releases/latest/download/SwasthIQ.apk` |

---

## 📝 How Feedback Submission Works

1. Users open the **Feedback** modal by clicking the Feedback button in the navbar, CTA section, or footer.
2. The user fills out:
   - What did you try? (Multi-select)
   - What type of feedback? (Single-select)
   - Description (Required)
   - Android device model (Required)
   - Email (Optional, for follow-ups)
3. The frontend validates required inputs and posts a JSON payload to `VITE_FEEDBACK_ENDPOINT`:
   ```json
   {
     "feature": "Upload & Add Records, AI Health Analysis",
     "feedbackType": "Suggestion",
     "description": "The blood test extraction was very fast.",
     "device": "Samsung S23",
     "email": "tester@example.com"
   }
   ```
4. The Google Apps Script Web App receives the JSON payload and appends a row into the **SwasthIQ Beta Feedback** Google Sheet with a timestamp.

### Feedback States

- **Loading**: Shows "Submitting..." with a spinner. Submit button is disabled to prevent double submission.
- **Success**: Shows a confirmation with "Thank you! 💚 — Your feedback helps us make SwasthIQ better." and a "Done" button.
- **Error**: Shows "We couldn't submit your feedback. Please check your connection and try again." with a "Try Again" button. Form data is preserved.

---

## 🏗️ Production Build

To compile the production build:
```bash
npm run build
```
This performs TypeScript type checking (`tsc`) and outputs the optimized static website into the `dist/` directory.

To preview the production build locally:
```bash
npm run preview
```

---

## 🌐 Deploying to Vercel

1. Push this repository to GitHub.
2. In the [Vercel Dashboard](https://vercel.com):
   - Click **Add New Project** → Import this GitHub repository.
   - Framework Preset: **Vite**
   - Root Directory: `./` (or `SwasthIQ-Website` if part of a monorepo)
3. Add Environment Variables in Vercel:
   - `VITE_FEEDBACK_ENDPOINT`
   - `VITE_ANDROID_BETA_URL`
4. Click **Deploy**. Vercel will automatically build and publish the website.
