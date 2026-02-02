# 3D Portfolio - Boat & Island Theme

A stunning 3D portfolio website built with React, Three.js, and React Three Fiber, featuring interactive 3D models including a floating island and boat.

## Features

- **Interactive 3D Island**: Drag to rotate and explore different sections
- **3D Boat Model**: Featured in the contact page with animations
- **Modern UI**: Clean, responsive design with smooth animations
- **Mobile Friendly**: Optimized for all device sizes
- **Sound Controls**: Toggle background music (when audio file is added)
- **Smooth Transitions**: Page transitions and hover effects

## Pages

1. **Home**: Interactive 3D island scene with rotating elements
2. **About**: Personal information with skills and experience timeline
3. **Projects**: Showcase of portfolio projects with links
4. **Contact**: Contact form with animated 3D boat model

## Tech Stack

- **React 18** - Frontend framework
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for React Three Fiber
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **EmailJS** - Email service for contact form
- **Vite** - Build tool and development server

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd 3D_Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 3D Models

The project includes two main 3D models:

- `public/island.glb` - The main island model for the home page
- `public/boat_model.glb` - The boat model for the contact page

### Customization

Update your personal information in:
- `src/constants/index.js` - Skills, experiences, projects, and social links
- `src/pages/About.jsx` - Personal description
- `src/components/HomeInfo.jsx` - Home page information cards

## Acknowledgments

- Inspired by the tutorial from [JS Mastery](https://www.youtube.com/watch?v=FkowOdMjvYo)
- 3D models and assets from various sources
- Three.js and React Three Fiber communities
