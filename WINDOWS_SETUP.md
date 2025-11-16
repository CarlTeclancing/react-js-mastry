# Windows Setup Guide

## Prerequisites Check

Before you begin, ensure you have:
1. **Node.js** (v16+) - Download from https://nodejs.org
2. **npm** (comes with Node.js)
3. **A Code Editor** - VS Code recommended (https://code.visualstudio.com)

### Verify Installation

Open PowerShell and run:
```powershell
node --version
npm --version
```

You should see version numbers (e.g., v18.12.0, 8.19.2)

## Complete Setup Steps

### Step 1: Navigate to Project Directory
```powershell
cd "c:\Users\HP-360\Desktop\crestlancing\internTracker\react-intern-tracker"
```

### Step 2: Install Dependencies
```powershell
npm install
```

This may take 2-5 minutes. You'll see lots of output as npm downloads packages.

### Step 3: Start the Development Server
```powershell
npm run dev
```

You should see output like:
```
  VITE v5.0.8  ready in 234 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

### Step 4: Open in Browser
- The app may open automatically, or
- Manually navigate to `http://localhost:5173`

## 🎉 Success!

You should now see:
- Header: "React.js Learning Intern" with gradient background
- Navigation tabs: "Dashboard" and "Weekly Plan"
- Dashboard showing progress statistics and week cards

## Project Structure Created

The application includes:

### Core Components
- **Header**: Title and branding
- **Navigation**: Tab switching between Dashboard and Weekly Plan
- **Dashboard**: Overview of all 12 weeks with statistics
- **WeeklyPage**: Detailed view of each week with tasks, activities, and notes
- **TaskList**: Checklist of learning objectives
- **ActivityList**: Tracking of learning activities with hours
- **ProgressBar**: Visual progress indicators
- **NotesSection**: Weekly reflection area

### Data Management
- **Custom Hook** (`useInternTracker`): Manages all state and LocalStorage
- **Weekly Data**: Pre-populated 12-week curriculum
- **TypeScript Types**: Full type safety

### Styling
- Modern CSS with responsive design
- Gradient backgrounds and smooth animations
- Mobile-friendly layout

## Common Issues & Solutions

### Issue: "npm not found"
**Solution**: Reinstall Node.js from https://nodejs.org

### Issue: "Cannot find module 'react'"
**Solution**: 
```powershell
npm install
```

### Issue: Port 5173 already in use
**Solution**:
```powershell
npm run dev -- --port 5174
```

### Issue: Browser shows blank page
**Solution**:
1. Open browser DevTools (F12)
2. Check Console tab for errors
3. Hard refresh page (Ctrl+Shift+R)

### Issue: Changes not reflecting
**Solution**:
1. Save the file (Ctrl+S)
2. Wait for Vite hot reload (usually instant)
3. If stuck, restart dev server: Stop (Ctrl+C) then `npm run dev`

## Building for Production

When you're ready to deploy:

```powershell
npm run build
```

This creates a `dist` folder with optimized, production-ready files.

To preview the production build:
```powershell
npm run preview
```

## Stopping the Development Server

Press `Ctrl+C` in PowerShell to stop the dev server.

## Restarting After Closing Terminal

To restart the app later:
```powershell
cd "c:\Users\HP-360\Desktop\crestlancing\internTracker\react-intern-tracker"
npm run dev
```

## File Locations

Your project files are at:
```
c:\Users\HP-360\Desktop\crestlancing\internTracker\react-intern-tracker
├── src\              (Source code)
├── public\           (Static files)
├── node_modules\     (Dependencies - auto-created)
├── dist\             (Production build - created with npm run build)
└── package.json      (Project configuration)
```

## Editing the App

Open the project folder in VS Code:
```powershell
code .
```

Key files to understand:
- `src/App.tsx` - Main application component
- `src/components/` - All UI components
- `src/data/weeklyData.ts` - Curriculum data
- `src/hooks/useInternTracker.ts` - State management

## Advanced: Customizing the Data

To add/edit weeks, tasks, or activities:
1. Open `src/data/weeklyData.ts`
2. Edit the `initialInternData` object
3. Follow the TypeScript interfaces in `src/types/index.ts`
4. Save the file and the app will hot-reload

## Updating Dependencies

To get the latest versions of packages:
```powershell
npm update
```

## Next Steps

1. ✅ Run `npm install` and `npm run dev`
2. ✅ Explore the Dashboard and Weekly pages
3. ✅ Start tracking Week 1 progress
4. ✅ Complete tasks and activities
5. ✅ Use the notes section for reflections
6. ✅ Progress through all 12 weeks

## Tips for Success

- **Start Fresh**: Begin with Week 1 even if you know some React
- **Be Consistent**: Set a daily/weekly schedule
- **Track Everything**: Log all activities and hours
- **Take Notes**: Capture what you learn each week
- **Build Projects**: Use the weeks to create real applications
- **Review**: Look back at earlier weeks occasionally

## Getting Help

1. **Read Error Messages**: PowerShell will tell you what's wrong
2. **Check Console**: Open browser DevTools (F12)
3. **Review Logs**: Terminal will show dev server messages
4. **Check Documentation**: See QUICKSTART.md and README.md

## Performance Notes

- First startup may take 30 seconds while dependencies load
- Hot Module Replacement (HMR) makes changes instant after
- Building for production takes 1-2 minutes

---

**Congratulations! Your React.js Learning Tracker is ready! 🎉**

Start with Week 1 and progress through the 12-week curriculum. Good luck! 📚
