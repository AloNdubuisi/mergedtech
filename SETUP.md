# Project Setup Guide

Welcome! Follow these steps to set up the landing page project locally on your PC.

## Prerequisites

Before you begin, make sure you have the following installed on your computer:

- **Node.js** (version 18.17 or later)
  - Download from: https://nodejs.org
  - Choose the LTS (Long Term Support) version
  - Verify installation by opening terminal/command prompt and running:
    ```
    node --version
    npm --version
    ```

- **Git** (optional but recommended)
  - Download from: https://git-scm.com
  - This helps you clone the project repository

- **Code Editor** (recommended: VS Code)
  - Download from: https://code.visualstudio.com

---

## Step 1: Get the Project Files

### Option A: Download as ZIP (if you received a ZIP file)
1. Extract the ZIP file to a folder on your computer
2. Navigate to the extracted folder in your terminal

### Option B: Clone from GitHub (if using Git)
```bash
git clone <your-repository-url>
cd <project-folder>
```

---

## Step 2: Install Dependencies

Navigate to the project folder and install all required packages:

```bash
npm install
```

This command reads the `package.json` file and installs all dependencies needed for the project. Wait for it to complete (this may take 2-5 minutes on first run).

---

## Step 3: Set Up Environment Variables (if needed)

Create a `.env.local` file in the root directory of your project:

1. Open the project folder in your code editor
2. Create a new file named `.env.local` in the root directory
3. Add any required environment variables (your configuration will go here)

For this basic landing page, no environment variables are required initially.

---

## Step 4: Start the Development Server

Run the development server with:

```bash
npm run dev
```

You should see output like:
```
> next dev
  ▲ Next.js 14.2.0
  - Local:        http://localhost:3000
```

---

## Step 5: View Your Project

1. Open your web browser
2. Navigate to: `http://localhost:3000`
3. You should see your landing page loaded and ready!

---

## Development Workflow

### Making Changes
- Edit any `.tsx` or `.css` files in the project
- Save the file (Ctrl+S on Windows, Cmd+S on Mac)
- Your browser will automatically refresh to show your changes
- This is called "hot reload" - a key feature of Next.js

### Project Structure
```
project-root/
├── app/
│   ├── layout.tsx          # Main app layout
│   ├── page.tsx            # Home page component
│   └── globals.css         # Global styles and design tokens
├── components/
│   ├── sections/           # Full page sections
│   ├── common/             # Reusable UI components
│   └── ui/                 # shadcn/ui components
├── public/                 # Static assets (images, etc.)
├── SETUP.md               # This file
└── package.json           # Project dependencies
```

---

## Troubleshooting

### Port 3000 Already in Use
If you get an error that port 3000 is already in use:

```bash
npm run dev -- -p 3001
```

This runs the server on port 3001 instead. Visit `http://localhost:3001`

### Dependencies Installation Failed
Try clearing npm cache and reinstalling:

```bash
npm cache clean --force
rm -rf node_modules
npm install
```

### Changes Not Showing Up
1. Make sure you saved the file (Ctrl+S)
2. Check the terminal for any error messages
3. Try refreshing your browser (F5 or Cmd+R)
4. Stop the server (Ctrl+C) and restart it with `npm run dev`

### "npm: command not found"
Node.js isn't properly installed. Reinstall it from https://nodejs.org and restart your terminal.

---

## Building for Production

When you're ready to deploy, create a production build:

```bash
npm run build
npm run start
```

This optimizes your code for performance and prepares it for deployment.

---

## Useful Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting (if configured)
npm run lint
```

---

## Next Steps

1. **Customize Content**: Edit the section components in `components/sections/` to match your brand messaging
2. **Update Images**: Replace placeholder images with your own in the `public/` folder
3. **Modify Colors**: Edit the design tokens in `app/globals.css` to match your brand colors
4. **Add Pages**: Create new files in the `app/` folder to add more pages
5. **Deploy**: When ready, deploy to Vercel or your preferred hosting platform

---

## Getting Help

- Check the [Next.js Documentation](https://nextjs.org/docs)
- Review component comments in the code - they explain each part
- Check the terminal for error messages - they're usually helpful!

---