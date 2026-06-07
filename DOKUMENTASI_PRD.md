# 📋 DOKUMENTASI LENGKAP PORTFOLIO WEBSITE
## Technical Documentation & Code Explanation

**Penulis:** Muhammad Adzkarulah  
**Proyek:** Portfolio Website Pribadi  
**Tanggal:** 2026  
**Status:** Active Development  

---

## 📑 Daftar Isi
1. [Executive Summary](#executive-summary)
2. [Arsitektur Teknologi & Tools](#arsitektur-teknologi)
3. [Struktur Folder & File](#struktur-folder)
4. [Penjelasan Detail Per File](#penjelasan-file)
5. [Component Breakdown](#component-breakdown)
6. [Data Flow & State Management](#data-flow)
7. [Styling Architecture](#styling)
8. [Build & Run Commands](#build-commands)

---

## 📌 Executive Summary {#executive-summary}

### Deskripsi Proyek
Portfolio website pribadi untuk Muhammad Adzkarulah, seorang Full Stack Web Developer & UI/UX Designer yang sedang belajar di KODEIN school dan SMA kelas 10. Website ini menampilkan:
- **Hero Section**: Pengenalan diri dengan call-to-action
- **About Section**: Informasi lengkap tentang diri dan skills
- **Tools Section**: Daftar tools yang digunakan dalam development
- **Projects Section**: Portfolio proyek yang telah dikerjakan
- **Contact Section**: Form kontak untuk komunikasi

### Tujuan Utama
1. ✅ Menampilkan portfolio dan kemampuan sebagai developer
2. ✅ Memberikan platform untuk networking dan hire
3. ✅ Mendemonstrasikan skill dalam web development modern
4. ✅ Showcase pengalaman dengan teknologi terkini

### Target Audience
- 🎯 Potential employers/HR
- 🎯 Potential clients
- 🎯 Networking connections
- 🎯 Learning community

---

## 🔧 Arsitektur Teknologi & Tools {#arsitektur-teknologi}

### Tech Stack yang Digunakan

```
┌─────────────────────────────────────────────────┐
│        PORTFOLIO WEBSITE TECH STACK             │
├─────────────────────────────────────────────────┤
│                                                 │
│  Frontend Framework:                            │
│  ├─ React 19.2.6        → UI Component Library  │
│  ├─ React DOM 19.2.6    → DOM Rendering        │
│  └─ JSX               → Template Syntax        │
│                                                 │
│  Build Tool:                                    │
│  ├─ Vite 8.0.12        → Fast Build Tool       │
│  └─ Vite Plugin React  → React Support        │
│                                                 │
│  Styling:                                       │
│  ├─ Tailwind CSS 4.3   → Utility-First CSS    │
│  ├─ Tailwind Vite      → Vite Integration     │
│  └─ Styled Components 6.4 → CSS-in-JS        │
│                                                 │
│  Development Tools:                             │
│  ├─ ESLint 10.3.0      → Code Linting        │
│  ├─ Node.js            → JavaScript Runtime   │
│  └─ npm                → Package Manager      │
│                                                 │
│  Deployment:                                    │
│  ├─ Vercel             → Hosting Platform     │
│  └─ GitHub             → Version Control      │
│                                                 │
└─────────────────────────────────────────────────┘
```

### Dependencies Breakdown

#### Production Dependencies
```json
{
  "react": "^19.2.6"              // Library untuk membuat component UI yang reusable
  "react-dom": "^19.2.6"          // Untuk merender React component ke DOM browser
  "styled-components": "^6.4.2"   // Library untuk CSS-in-JS (styling dynamic)
  "tailwindcss": "^4.3.0"         // Utility-first CSS framework
  "@tailwindcss/vite": "^4.3.0"   // Integrasi Tailwind dengan Vite
}
```

#### Development Dependencies
```json
{
  "@vitejs/plugin-react": "^6.0.1"        // Plugin React untuk Vite
  "vite": "^8.0.12"                       // Build tool modern yang sangat cepat
  "eslint": "^10.3.0"                     // Linter untuk JavaScript
  "@eslint/js": "^10.0.1"                 // Config ESLint
  "eslint-plugin-react-refresh": "^0.5.2" // ESLint plugin untuk React
  "eslint-plugin-react-hooks": "^7.1.1"   // ESLint plugin untuk React Hooks
  "@types/react": "^19.2.14"              // Type definitions untuk React
  "@types/react-dom": "^19.2.3"           // Type definitions untuk React DOM
  "globals": "^17.6.0"                    // Global variables definitions
}
```

---

## 📁 Struktur Folder & File {#struktur-folder}

```
kls10/
│
├── 📄 package.json          → Metadata proyek & dependencies
├── 📄 vite.config.js        → Konfigurasi build tool Vite
├── 📄 eslint.config.js      → Konfigurasi linter ESLint
├── 📄 index.html            → Entry point HTML utama
├── 📄 README.md             → Dokumentasi proyek
│
├── 📁 public/               → Static assets (tidak diproses)
│   └── 📁 assets/
│       ├── 📁 tools/        → Image tools (vscode.png, reactjs.png, dll)
│       └── 📁 proyek/       → Image projects (proyek1.webp, dll)
│
└── 📁 src/                  → Source code utama
    ├── 📄 main.jsx          → Entry point React aplikasi
    ├── 📄 index.css         → Global styling
    ├── 📄 App.jsx           → Main component & page layout
    ├── 📄 data.js           → Data statis (tools & projects)
    │
    └── 📁 components/       → Reusable components
        ├── 📄 navbar.jsx    → Navigation bar component
        ├── 📄 Footer.jsx    → Footer component
        └── 📄 preloader.jsx → Loading animation component
```

---

## 🔍 Penjelasan Detail Per File {#penjelasan-file}

### 1️⃣ `package.json` - Metadata & Dependencies
**Lokasi:** `/package.json`  
**Fungsi:** Mendefinisikan metadata proyek, scripts, dan dependencies

```json
{
  "name": "kls10",                    // Nama proyek
  "private": true,                    // Tidak dipublikasi ke npm registry
  "version": "0.0.0",                 // Versi development
  "type": "module",                   // Menggunakan ES6 module syntax
  
  "scripts": {
    "dev": "vite",                    // Jalankan development server
    "build": "vite build",            // Build untuk production
    "lint": "eslint .",               // Check kualitas kode
    "preview": "vite preview"         // Preview build production
  }
}
```

**Penjelasan Scripts:**
| Script | Fungsi | Perintah Terminal |
|--------|--------|-------------------|
| `dev` | Menjalankan development server dengan hot reload | `npm run dev` |
| `build` | Mengcompile kode untuk production | `npm run build` |
| `lint` | Mengecek style code dan error | `npm run lint` |
| `preview` | Preview hasil build production | `npm run preview` |

---

### 2️⃣ `vite.config.js` - Build Configuration
**Lokasi:** `/vite.config.js`  
**Fungsi:** Konfigurasi Vite build tool

```javascript
import { defineConfig } from 'vite'      // Import function untuk config
import react from '@vitejs/plugin-react' // Plugin React untuk Vite
import tailwindcss from '@tailwindcss/vite' // Plugin Tailwind untuk Vite

export default defineConfig({
  plugins: [ 
    tailwindcss(),  // Aktifkan Tailwind CSS processing
    react()         // Aktifkan React JSX transpilation
  ],
})
```

**Cara Kerja:**
1. `defineConfig()` → Membungkus konfigurasi untuk type-safe
2. `tailwindcss()` → Memproses Tailwind CSS classes menjadi CSS
3. `react()` → Mengkonversi JSX menjadi JavaScript yang bisa dijalankan browser
4. Plugins dijalankan dalam urutan: Tailwind dulu, lalu React

---

### 3️⃣ `index.html` - Entry Point HTML
**Lokasi:** `/index.html`  
**Fungsi:** File HTML utama yang dimuat browser

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <div id="root"></div>  <!-- React akan render di sini -->
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

**Penjelasan Elemen:**
- `<div id="root">` → Container tempat React DOM di-mount
- `<script type="module">` → Memuat main.jsx sebagai ES6 module
- Meta viewport → Membuat website responsive di mobile

---

### 4️⃣ `src/main.jsx` - React Entry Point
**Lokasi:** `/src/main.jsx`  
**Fungsi:** Inisialisasi React aplikasi dan mount ke DOM

```javascript
import { StrictMode } from 'react'
// StrictMode = utility untuk highlight potential problems dalam development

import { createRoot } from 'react-dom/client'
// createRoot = fungsi untuk membuat React root di DOM element

import './index.css'                    // Import global styles
import App from './App.jsx'             // Import main App component
import Navbar from './components/navbar.jsx'
import Footer from './components/Footer.jsx'
import Loader from './components/preloader.jsx'

createRoot(document.getElementById('root')).render(
  // Cari element dengan id "root" dan render React tree di dalamnya
  
  <StrictMode>
    {/* Wrapping dalam StrictMode untuk development checks */}
    
    <Loader />                          {/* Show loading animation */}
    <div className="container mx-auto px-6">
      {/* Container dengan max-width dan padding horizontal */}
      
      <Navbar />                        {/* Navigation bar */}
      <App />                           {/* Main content */}
      <Footer/>                         {/* Footer */}
    </div>
  </StrictMode>,
)
```

**Cara Kerja Step-by-Step:**
```
1. Browser load index.html
2. index.html load main.jsx
3. main.jsx import semua dependencies
4. createRoot mencari #root element
5. Render hierarchy: Loader → Navbar → App → Footer
6. React mengubah JSX menjadi DOM elements
7. Browser menampilkan website
```

**Tailwind Classes Breakdown:**
- `container` → Max-width container, centered
- `mx-auto` → Margin horizontal auto (centered)
- `px-6` → Padding horizontal 24px (1.5rem)

---

### 5️⃣ `src/App.jsx` - Main Component
**Lokasi:** `/src/App.jsx`  
**Fungsi:** Komponen utama yang berisi semua section website

#### A. HERO SECTION (Baris 1-23)
```javascript
<div className="hero grid md:grid-cols-2 pt-10 items-center xl:gap-0 gap-6 grid-cols-1">
  {/* Grid layout: 
      - md:grid-cols-2 = 2 kolom di medium screen
      - grid-cols-1 = 1 kolom di mobile
      - pt-10 = padding top
      - items-center = vertical align center
  */}
  
  <div>
    {/* LEFT SIDE: Text content */}
    
    <div className="flex items-center gap-4 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
      {/* Badge container: flex, gap, background, width fit-content, padding, rounded */}
      <img src={DataImage.HeroImage} alt="Hero" className="w-7 rounded-md" />
      <q>Full Stack Web Developer.🖥️</q>
    </div>
    
    <h1 className="text-5xl/tight font-bold mb-6">Hi, I am ADZKA</h1>
    {/* text-5xl = font size 60px, /tight = line height tight, font-bold */}
    
    <p className="text-base/loose mb-6 opacity-50">...</p>
    {/* text-base/loose = base size dengan line height loose, opacity 50% */}
    
    <a href="#" className="bg-violet-700 p-3 rounded-2xl hover:bg-violet-500">
      {/* Button: violet background, padding, rounded, hover effect */}
      See Projects
    </a>
  </div>
  
  <img src={DataImage.HeroImage} alt="Hero" className="w-[400px] md:ml-auto" />
  {/* RIGHT SIDE: Hero image */}
</div>
```

**Data Import:**
```javascript
import DataImage from "./data.js";
import { listTools, listProyek } from "./data.js"
// DataImage = object berisi path image hero
// listTools = array data tools
// listProyek = array data projects
```

#### B. ABOUT SECTION (Baris 25-63)
```javascript
<div id="about" className="about mt-32 py-10">
  {/* id="about" = anchor untuk navigation */}
  
  <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg">
    {/* 
      Responsive width:
      - xl:w-2/3 = 66% width di XL screen
      - lg:w-3/4 = 75% width di LG screen
      - w-full = 100% width di mobile
      - mx-auto = centered
    */}
    
    <p className="text-xl font-bold">Who Am I ?</p>
    <p className="text-base/loose mb-10">...</p>
    
    <div className="flex flex-wrap gap-4 mt-6">
      {/* flex flex-wrap = container flex dengan wrap */}
      <button className="bg-violet-700 hover:bg-violet-500 p-2 rounded-md">
        UI/UX Design
      </button>
      {/* Skill badges dengan hover effect */}
    </div>
  </div>
```

#### C. TOOLS SECTION (Baris 65-99)
```javascript
<div className="tools mt-32">
  <h1 className="text-4xl/snug font-bold mb-4">Tools used</h1>
  <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50">
    {/* Responsive width untuk paragraph */}
    Here are some tools that I usually use...
  </p>
  
  <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
    {/* Grid responsive:
        - lg: 4 kolom
        - md: 3 kolom
        - sm: 2 kolom
        - default: 1 kolom
    */}
    
    {listTools.map(tool => (
      // Mapping array listTools menjadi JSX elements
      <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" key={tool.id}>
        {/* key={tool.id} penting untuk React rendering efficiency */}
        
        <img src={tool.gambar} alt="tools image" 
             className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" />
        {/* Tailwind group-* classes = child elements berubah saat parent hover */}
        
        <div>
          <h4 className="font-bold">{tool.nama}</h4>
          <p className="opacity-50">{tool.ket}</p>
        </div>
      </div>
    ))}
  </div>
</div>
```

**Penjelasan `map()` Function:**
```javascript
// Sebelum map():
listTools = [
  {id: 1, gambar: Tools1, nama: "VS Code", ket: "Code Editor"},
  {id: 2, gambar: Tools2, nama: "React JS", ket: "Framework"},
  // ... lebih banyak
]

// Sesudah map():
// Setiap object diubah menjadi JSX <div> element dengan data masing-masing
// Hasilnya: 9 tool cards di UI
```

#### D. PROJECTS SECTION (Baris 101-133)
```javascript
<div id="projects" className="proyek mt-32 py-10">
  <h1 className="text-center text-4xl font-bold mb-2">Projects</h1>
  <p className="text-base/loose text-center opacity-50">What Projects Do I Have</p>
  
  <div className="proyekbox mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
    {/* Grid: 3 kolom lg, 2 kolom sm, 1 kolom mobile */}
    
    {listProyek.map(proyek => (
      <div className="p-4 bg-zinc-800 rounded-md" key={proyek.id}>
        <img src={proyek.gambar} alt="project" loading="lazy"/>
        {/* loading="lazy" = lazy load image, improve performance */}
        
        <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
        <p className="text-base/loose mb-4">{proyek.desk}</p>
        
        <div className="flex flex-wrap gap-2">
          {proyek.tools.map((tool, index) => (
            // tools adalah array dalam object proyek
            <p className="py-1 px-3 border border-zinc-600 rounded-md bg-zinc-500" 
               key={index}>
              {tool}
            </p>
          ))}
        </div>
        
        <a className="bg-violet-700 p-3 rounded-md block hover:bg-violet-500 mt-8 text-center"
           href={proyek.link} target="_blank" rel="noopener noreferrer">
          {/* 
            target="_blank" = buka di tab baru
            rel="noopener noreferrer" = security best practice
          */}
          See Project
        </a>
      </div>
    ))}
  </div>
</div>
```

#### E. CONTACT SECTION (Baris 135-165)
```javascript
<div id="contact" className="contact mt-32 sm:p-10 p-0">
  <h1 className="text-4xl mb-2 font-bold text-center">Contact</h1>
  <p className="text-base/loose text-center mb-10 opacity-50">Contact Me.</p>
  
  <form action="https://formsubmit.co/muhammadadzkarullah@gmail.com" 
        method="POST" 
        className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md"
        autoComplete="off">
    {/* 
      action="https://formsubmit.co/..." = FormSubmit API endpoint
      method="POST" = mengirim data via POST request
      autoComplete="off" = disable browser autocomplete
    */}
    
    <div className="flex flex-col gap-6">
      
      {/* Full Name Field */}
      <div className="flex flex-col gap-2">
        <label className="font-semibold">Full Name</label>
        <input type="text" name="fullName" 
               placeholder="Enter your full name.." 
               required 
               className="border border-zinc-500 p-2 rounded-md" />
        {/* required = form tidak bisa submit jika kosong */}
      </div>
      
      {/* Email Field */}
      <div className="flex flex-col gap-2">
        <label className="font-semibold">Email</label>
        <input type="email" name="email" 
               placeholder="Enter your email.." 
               required 
               className="border border-zinc-500 p-2 rounded-md" />
        {/* type="email" = browser validate email format */}
      </div>
      
      {/* Message Field */}
      {/* (asumsi ada textarea untuk message) */}
    </div>
  </form>
</div>
```

**Cara Kerja Contact Form:**
```
1. User isi form (name, email, message)
2. User click submit
3. Form POST ke FormSubmit API
4. FormSubmit relay email ke muhammadadzkarullah@gmail.com
5. Email terkirim ke inbox
```

---

### 6️⃣ `src/data.js` - Static Data
**Lokasi:** `/src/data.js`  
**Fungsi:** Centralized data untuk images, tools list, dan projects list

#### A. Image Import & Export
```javascript
import HeroImage from "../public/assets/hero-image.webp";

const Image = {
  HeroImage,  // Shorthand untuk {HeroImage: HeroImage}
};

export default Image;
// Diimport di App.jsx sebagai DataImage
```

**Cara Pakai di App.jsx:**
```javascript
<img src={DataImage.HeroImage} alt="Hero" />
// DataImage.HeroImage = "../public/assets/hero-image.webp"
```

#### B. Tools List
```javascript
import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
// ... import semua tools images

export const listTools = [
  {
    id: 1,                              // Unique identifier
    gambar: Tools1,                     // Image path
    nama: "Visual Studio Code",         // Display name
    ket: "Code Editor",                 // Description/category
    dad: "100",                         // Index number (untuk sorting?)
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  // ... 9 tools lainnya
];
```

**Data Structure Breakdown:**
| Field | Tipe | Fungsi |
|-------|------|--------|
| `id` | number | React key + unique identifier |
| `gambar` | image import | Image display |
| `nama` | string | Tool name display |
| `ket` | string | Category/description |
| `dad` | string | Sorting index |

#### C. Projects List
```javascript
import Proyek1 from "/assets/proyek/proyek1.webp";
import Proyek2 from "/assets/proyek/proyek2.webp";
// ... import semua project images

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,                    // Project thumbnail
    nama: "Clone Lasles Vpn",           // Project name
    desk: "Create a clone...",          // Project description
    tools: ["HTML", "CSS"],             // Array of tools used
    dad: "200",                         // Index number
    link: "https://lasles-vpn-clone.vercel.app/",  // Project link
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Movie Website",
    desk: "Create design movie website...",
    tools: ["Figma", "Canva"],
    dad: "300",
    link: "#",
  },
  // ... lebih banyak projects
];
```

**Data Flow dari data.js ke UI:**
```
data.js: export const listProyek
    ↓
App.jsx: import { listProyek }
    ↓
App.jsx: {listProyek.map(proyek => (...))}
    ↓
Browser: 4 project cards rendered
```

---

### 7️⃣ `src/index.css` - Global Styles
**Lokasi:** `/src/index.css`  
**Fungsi:** Global CSS styling dan Tailwind directives

```css
/* Biasanya berisi:
   - Reset styles
   - Global font families
   - Tailwind @directives
   - Root color variables
   - Global animations
*/

@tailwind base;    /* Tailwind base styles */
@tailwind components; /* Tailwind components */
@tailwind utilities;  /* Tailwind utilities */
```

---

## 🎨 Component Breakdown {#component-breakdown}

### Component 1: Navbar.jsx
**Lokasi:** `/src/components/navbar.jsx`  
**Fungsi:** Navigation bar dengan scroll detection

```javascript
import { useState, useEffect } from "react";

const Navbar = () => {
    const [active, setActive] = useState(false);
    // State: active = boolean, true ketika page di-scroll > 150px
    
    useEffect(() => {
        // Run side effect saat component mount
        
        const handleScroll = () => {
            // Event handler untuk scroll event
            if (window.scrollY > 150) {
                setActive(true);    // Show navbar saat scroll > 150
            } else {
                setActive(false);   // Hide navbar saat scroll <= 150
            }
        }

        window.addEventListener("scroll", handleScroll);
        // Attach event listener ke window scroll
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
            // Cleanup: remove listener saat component unmount
            // PENTING: Prevent memory leaks
        }
    }, [])
    // Dependency array kosong = run sekali saat mount
    
    return (
        <div className="Navbar py-7 flex items-center justify-between">
            <div className="logo">
                <h1 className="text-3xl font-bold bg-white text-black p-1 md:bg-transparent md:text-white">
                    {/* 
                    Styling logic:
                    - Mobile: white background, black text, padding
                    - Desktop (md+): transparent bg, white text, no padding
                    */}
                    Portfolio
                </h1>
            </div>
            
            <ul className={`menu flex items-center sm:gap-10 gap-4 
                          md:static fixed left-1/2 -translate-x-1/2 md:translate-x-0 
                          md:opacity-100 bg-white/30 backdrop-blur-md p-4 
                          rounded-br-2xl rounded-bl-2xl md:bg-transparent 
                          transition-all md:transition-none z-40 
                          ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}`}>
                {/*
                Conditional classes menggunakan template literal:
                - Mobile: fixed positioning, hidden by default (-top-10)
                - Desktop: static, always visible
                - Dropdown animation saat active=true: top-0 opacity-100
                */}
                
                <li className="sm:text-lg text-base font-medium">
                    <a href="#home">Home</a>
                </li>
                <li className="sm:text-lg text-base font-medium">
                    <a href="#about">About</a>
                </li>
                <li className="sm:text-lg text-base font-medium">
                    <a href="#projects">Project</a>
                </li>
                <li className="sm:text-lg text-base font-medium">
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;
```

**Cara Kerja Navbar Step-by-Step:**
```
1. Component mount
2. useEffect attach scroll event listener
3. User scroll page
4. handleScroll trigger
5. Check if scrollY > 150
6. If yes: setActive(true) → conditional classes apply
7. Mobile menu muncul dengan animasi dari top
8. User scroll ke atas < 150
9. setActive(false) → menu hilang
```

**Diagram Scroll Behavior:**
```
Desktop (md+):
┌──────────────────────────────┐
│ Logo    Home About Project   │  ← Always visible, static position
└──────────────────────────────┘

Mobile (scrollY ≤ 150):
┌──────────┐
│ Logo     │  ← Only logo visible
└──────────┘

Mobile (scrollY > 150):
┌────────────────────────────┐
│ Logo  Home About Project   │  ← Menu dropdown with animation
└────────────────────────────┘
```

---

### Component 2: Footer.jsx
**Lokasi:** `/src/components/Footer.jsx`  
**Fungsi:** Footer dengan links, social media, dan copyright

```javascript
const Footer = () => {
    return (
        <footer className="text-white px-7 py-16 mt-50px" id="contact">
            {/* id="contact" untuk anchor link navigation */}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
                {/* Responsive grid:
                    - Mobile: 1 kolom
                    - Tablet: 2 kolom
                    - Desktop: 4 kolom
                */}
                
                {/* SECTION 1: Brand */}
                <div>
                    <h3 className="text-2xl font-bold text-[#4a90e2] mb-4">
                        ADZKA
                    </h3>
                    <p className="text-sm text-gray-200 mb-2">
                        Full Stack Web Developer & UI/UX Designer
                    </p>
                    <p className="text-sm text-gray-400 leading-6">
                        Creating modern and responsive web experiences...
                    </p>
                </div>
                
                {/* SECTION 2: Quick Links */}
                <div>
                    <h4 className="text-base font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        {/* space-y-2 = gap vertical 8px */}
                        <li>
                            <a href="#" className="text-sm text-gray-300 hover:text-[#4a90e2] transition-colors">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="text-sm text-gray-300 hover:text-[#4a90e2] transition-colors">
                                About
                            </a>
                        </li>
                        {/* transition-colors = smooth color change on hover */}
                    </ul>
                </div>
                
                {/* SECTION 3: Skills */}
                <div>
                    <h4 className="text-base font-semibold mb-4">Skills</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>HTML & CSS</li>
                        <li>JavaScript</li>
                        <li>UI/UX Design</li>
                        <li>Photography</li>
                    </ul>
                </div>
                
                {/* SECTION 4: Social Media */}
                <div>
                    <h4 className="text-base font-semibold mb-4">Follow Me</h4>
                    <div className="flex gap-5">
                        {/* WhatsApp Button */}
                        <a href="https://wa.me/6285943652388"
                           target="_blank"
                           rel="noopener noreferrer"
                           aria-label="WhatsApp"
                           className="w-45px h-45px rounded-full flex items-center justify-center 
                                    text-[#4a90e2] border-2 border-transparent 
                                    transition-all duration-300 
                                    hover:text-white hover:bg-[#4a90e233] 
                                    hover:border-[#4a90e2] hover:-translate-y-1">
                            {/* 
                            Classes breakdown:
                            - w-45px h-45px = 45px circle
                            - rounded-full = circular button
                            - flex items-center justify-center = center icon
                            - hover:-translate-y-1 = lift up on hover (translateY -4px)
                            */}
                            <i className="fa-brands fa-whatsapp text-[28px]"></i>
                            {/* Font Awesome icon */}
                        </a>
                        
                        {/* GitHub Button */}
                        <a href="https://github.com/ADZKA-AKN"
                           target="_blank"
                           rel="noopener noreferrer"
                           aria-label="GitHub"
                           className="w-45px h-45px rounded-full flex items-center justify-center 
                                    text-[#4a90e2] border-2 border-transparent 
                                    transition-all duration-300 
                                    hover:text-white hover:bg-[#4a90e233] 
                                    hover:border-[#4a90e2] hover:-translate-y-1">
                            <i className="fa-brands fa-github text-[28px]"></i>
                        </a>
                        
                        {/* Instagram Button */}
                        <a href="https://www.instagram.com/a.dzk_4/"
                           target="_blank"
                           rel="noopener noreferrer"
                           aria-label="Instagram"
                           className="w-45px h-45px rounded-full flex items-center justify-center 
                                    text-[#4a90e2] border-2 border-transparent 
                                    transition-all duration-300 
                                    hover:text-white hover:bg-[#4a90e233] 
                                    hover:border-[#4a90e2] hover:-translate-y-1">
                            <i className="fa-brands fa-instagram text-[28px]"></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-300">
                {/* border-white/10 = 10% white opacity border */}
                <p className="mt-10">
                    &copy; 2026 ADZKA WEB. All rights reserved. | Design by{" "}
                    <span className="text-[#4a90e2] font-semibold">
                        Muhammad Adzkarulah
                    </span>
                </p>
            </div>
        </footer>
    )
}

export default Footer
```

**Footer Structure Diagram:**
```
┌─────────────────────────────────────────────────┐
│ Footer                                          │
├─────────────────────────────────────────────────┤
│                                                 │
│  [Brand]      [Quick Links]  [Skills] [Social] │
│  ADZKA        Home           HTML&CSS   [W]     │
│  Description  About          JS        [G]     │
│  ...          Project        UI/UX     [I]     │
│               Contact        Photo            │
│                                                 │
├─────────────────────────────────────────────────┤
│  © 2026 ADZKA WEB. All rights reserved         │
└─────────────────────────────────────────────────┘
```

---

### Component 3: preloader.jsx
**Lokasi:** `/src/components/preloader.jsx`  
**Fungsi:** Loading animation yang muncul 3 detik saat page load

```javascript
import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const Loader = () => {
    const [loading, setLoading] = useState(true);
    // State: loading = true initially, become false after 3 seconds
    
    useEffect(() => {
        // Set timer untuk trigger loading selesai
        setTimeout(() => setLoading(false), 3000);
        // 3000ms = 3 detik
    }, [])
    // Run sekali saat component mount

    return (
        loading && (
            // Conditional render: hanya show jika loading === true
            <div className="w-screen h-screen fixed flex items-center justify-center bg-black z-50">
                {/* 
                Classes:
                - w-screen h-screen = full viewport width & height
                - fixed = fixed position
                - flex items-center justify-center = center content
                - bg-black = black background
                - z-50 = very high z-index (on top)
                */}
                
                <StyledWrapper>
                    {/* Styled-component wrapper untuk animation */}
                    <div className="boxes">
                        <div className="box">
                            <div /> <div /> <div /> <div />
                        </div>
                        <div className="box">
                            <div /> <div /> <div /> <div />
                        </div>
                        <div className="box">
                            <div /> <div /> <div /> <div />
                        </div>
                        <div className="box">
                            <div /> <div /> <div /> <div />
                        </div>
                    </div>
                </StyledWrapper>
            </div>  
        )
    );
}

// Styled Component untuk CSS-in-JS
const StyledWrapper = styled.div`
  /* CSS animation styles di sini */
  /* Ini menghasilkan animasi loading yang menarik */
`;

export default Loader;
```

**Cara Kerja Loader:**
```
Timeline:
0s      → Component mount
        → loading = true
        → setTimeout(3000) dimulai
        → Loader JSX dirender ke DOM
        
0-3s    → Loading animation ditampilkan
        
3s      → setTimeout selesai
        → setLoading(false)
        → Component re-render
        → loading && (...) evaluasi ke false
        → Loader tidak dirender
        → Main content visible
```

**Styled Components Breakdown:**
- `styled-components` = CSS-in-JS library
- `styled.div` = membuat styled HTML element
- CSS ditulis dalam template literal
- Hasil: component dengan styling yang scoped dan dynamic

---

## 🔄 Data Flow & State Management {#data-flow}

### Data Flow Diagram

```
┌─────────────────────────────────────────────────┐
│             Website Lifecycle                   │
└─────────────────────────────────────────────────┘

1. INITIALIZATION
   ↓
   Browser load index.html
   ↓
   Vite bundler process files
   ↓
   React render main.jsx
   ↓

2. COMPONENT RENDER
   ┌─────────────────────┐
   │    main.jsx         │
   │  - Load components  │
   │  - Create React DOM │
   │  - Mount to #root   │
   └─────────────────────┘
   ↓
   ├── Preloader (visible 0-3s)
   │   └── setTimeout 3000ms
   │       └── setLoading(false)
   │           └── Component unmount
   │
   ├── Navbar
   │   ├── useState(active)
   │   ├── addEventListener("scroll")
   │   └── scrollY > 150 → setActive(true)
   │
   ├── App
   │   ├── Import data.js (listTools, listProyek)
   │   ├── Map listTools → Tool Cards
   │   ├── Map listProyek → Project Cards
   │   └── Form submit → FormSubmit API
   │
   └── Footer
       └── Static content + Social links

3. USER INTERACTION
   
   SCROLL EVENT:
   scrollY ≤ 150 → Navbar menu hidden
   scrollY > 150 → Navbar menu shown
   
   CLICK ANCHOR LINK:
   <a href="#about"> → Jump to #about section
   
   FORM SUBMIT:
   User input → POST to FormSubmit → Email sent
   
   MAP CLICK:
   Click tool/project card → Show info
```

### State Management Architecture

```
┌─────────────────────────────────────────┐
│        React Component State            │
├─────────────────────────────────────────┤
│                                         │
│  Preloader.jsx                          │
│  └─ loading: boolean                    │
│     ├─ Initial: true                    │
│     └─ After 3s: false                  │
│                                         │
│  Navbar.jsx                             │
│  └─ active: boolean                     │
│     ├─ Default: false                   │
│     └─ On scroll >150: true             │
│                                         │
│  App.jsx                                │
│  └─ No local state                      │
│     ├─ Data from data.js (props-like)   │
│     └─ Form data native HTML            │
│                                         │
└─────────────────────────────────────────┘
```

---

## 🎨 Styling Architecture {#styling}

### Tailwind CSS Utility Classes Reference

#### Spacing
```
pt-10       = padding-top: 40px (10 * 4px)
pb-10       = padding-bottom: 40px
px-6        = padding-left & right: 24px
py-7        = padding-top & bottom: 28px
gap-4       = gap: 16px
mb-6        = margin-bottom: 24px
mt-32       = margin-top: 128px
```

#### Typography
```
text-5xl    = font-size: 60px
text-4xl    = font-size: 36px
text-3xl    = font-size: 30px
text-xl     = font-size: 20px
text-base   = font-size: 16px
text-sm     = font-size: 14px

font-bold   = font-weight: 700
font-semibold = font-weight: 600
font-medium = font-weight: 500

/tight      = line-height: 1.25
/loose      = line-height: 1.75
/snug       = line-height: 1.375
```

#### Colors
```
bg-zinc-800   = background-color: rgb(39 39 42)  [Dark Gray]
bg-violet-700 = background-color: rgb(109 40 217) [Purple]
bg-white      = background-color: white
bg-black      = background-color: black

text-white    = color: white
text-gray-300 = color: rgb(209 213 219)
opacity-50    = opacity: 0.5
```

#### Layout & Positioning
```
flex           = display: flex
flex-wrap      = flex-wrap: wrap
flex-col       = flex-direction: column
items-center   = align-items: center
justify-center = justify-content: center
justify-between = justify-content: space-between

grid           = display: grid
grid-cols-1    = grid-template-columns: repeat(1)
grid-cols-2    = grid-template-columns: repeat(2)
grid-cols-3    = grid-template-columns: repeat(3)
grid-cols-4    = grid-template-columns: repeat(4)

w-full         = width: 100%
w-screen       = width: 100vw
h-screen       = height: 100vh
mx-auto        = margin-left & right: auto (centered)
```

#### Responsive Prefixes
```
sm:  → @media (min-width: 640px)
md:  → @media (min-width: 768px)
lg:  → @media (min-width: 1024px)
xl:  → @media (min-width: 1280px)

Contoh:
md:grid-cols-2  = 2 columns di medium screen ke atas
sm:gap-10       = gap 40px di small screen ke atas
lg:w-2/3        = width 66% di large screen ke atas
```

#### Hover & Interactive
```
hover:bg-violet-500     = background change on hover
hover:text-[#4a90e2]    = text color change on hover
hover:-translate-y-1    = move up 4px on hover
transition-colors       = animate color changes smooth
transition-all          = animate all property changes
duration-300            = 300ms animation duration
```

#### Border & Rounding
```
border              = border: 1px solid
border-zinc-600     = border-color: rgb(82 82 89)
rounded-md          = border-radius: 6px
rounded-lg          = border-radius: 8px
rounded-2xl         = border-radius: 16px
rounded-full        = border-radius: 9999px (circle)
rounded-br-2xl      = border-radius-bottom-right: 16px
rounded-bl-2xl      = border-radius-bottom-left: 16px
```

### Tailwind Responsive Grid Examples

**Tools Section Grid:**
```
lg:grid-cols-4  md:grid-cols-3  sm:grid-cols-2  grid-cols-1
    ↓               ↓               ↓               ↓
[1][2][3][4]  [1][2][3]      [1][2]          [1]
[5][6][7][8]  [4][5][6]      [3][4]          [2]
[9]           [7][8][9]      [5][6]          [3]
                              [7][8]          [4]
                              [9]             [...]
```

**Projects Section Grid:**
```
lg:grid-cols-3      sm:grid-cols-2      grid-cols-1
    ↓                   ↓                   ↓
[1][2][3]        [1][2]             [1]
[4]              [3][4]             [2]
                                    [3]
                                    [4]
```

---

## 🚀 Build & Run Commands {#build-commands}

### Development Server
```bash
# Start development server dengan hot reload
npm run dev

# Akan menampilkan:
# VITE v8.0.12  ready in 123 ms
# ➜  Local:   http://localhost:5173/
# ➜  press h + enter to show help
```

**Fitur Development:**
- ✅ Hot Module Replacement (HMR) - auto refresh tanpa reload
- ✅ Fast Refresh - preserve state saat edit
- ✅ Source Maps - debugging dengan original source
- ✅ Error overlay - error ditampilkan di browser

### Build untuk Production
```bash
# Compile & optimize untuk production
npm run build

# Output di folder /dist/
# - index.html (minified)
# - assets/
#   ├── index-xxxxx.js (bundled & minified)
#   └── index-xxxxx.css (bundled & minified)
```

**Optimizations yang Dilakukan:**
1. **Minification** - Remove whitespace & comments
2. **Tree Shaking** - Remove unused code
3. **Code Splitting** - Split ke chunks jika perlu
4. **Image Optimization** - WebP format (.webp)
5. **CSS Purging** - Remove unused Tailwind classes

### Preview Build
```bash
# Preview hasil build production locally
npm run preview

# Akan run di port berbeda, show actual production output
```

### Linting
```bash
# Check code quality & style
npm run lint

# ESLint akan cek:
# - Syntax errors
# - Best practices
# - React hooks rules
# - Unused variables
```

---

## 📊 Performance Considerations

### Image Optimization
```javascript
// Loading attribute untuk lazy load
<img src={...} alt="..." loading="lazy" />

// WebP format lebih efficient
// File size lebih kecil, quality tetap tinggi
// hero-image.webp (bukan .png atau .jpg)
```

### Component Optimization
```javascript
// Conditional rendering efficient
loading && (
  <div>Loader</div>
)
// Only render jika loading true

// Map dengan key untuk list efficiency
{listTools.map(tool => (
  <div key={tool.id}>  // ← Key penting!
    ...
  </div>
))}
```

### CSS Optimization
```javascript
// Tailwind CSS hanya include used classes di build
// Unused classes di-remove (tree shaking)
// Result: lebih kecil bundle size
```

---

## 🔐 Security Best Practices

### Form Security
```javascript
<form action="https://formsubmit.co/email@gmail.com" 
      method="POST" 
      autoComplete="off">
  {/* 
    - autoComplete="off" prevent autocomplete
    - method="POST" tidak exposed di URL
    - FormSubmit endpoint trusted third-party
  */}
</form>
```

### Link Security
```javascript
<a href={link} 
   target="_blank" 
   rel="noopener noreferrer">
  {/* 
    - target="_blank" buka di tab baru
    - rel="noopener" prevent window.opener access
    - rel="noreferrer" prevent referrer info
  */}
</a>
```

---

## 🎯 Summary & Architecture Overview

```
┌────────────────────────────────────────────────────────────┐
│         PORTFOLIO WEBSITE ARCHITECTURE                     │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  BUILD LAYER:                                              │
│  ├─ Vite (bundler)                                         │
│  ├─ React Plugin (JSX transpilation)                       │
│  └─ Tailwind Plugin (CSS processing)                       │
│                                                            │
│  APPLICATION LAYER:                                        │
│  ├─ main.jsx (entry point)                                │
│  ├─ App.jsx (main page layout)                             │
│  └─ data.js (static data store)                            │
│                                                            │
│  COMPONENT LAYER:                                          │
│  ├─ Navbar.jsx (navigation + scroll detection)            │
│  ├─ Footer.jsx (footer + social links)                    │
│  └─ Preloader.jsx (loading animation)                     │
│                                                            │
│  STYLING LAYER:                                            │
│  ├─ Tailwind CSS (utility-based styling)                  │
│  ├─ Styled-Components (CSS-in-JS for animations)          │
│  └─ index.css (global styles)                             │
│                                                            │
│  DEPLOYMENT:                                               │
│  ├─ Vercel (hosting)                                       │
│  └─ GitHub (version control)                              │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

---

## 📝 Kesimpulan Cara Kerja Website

### Step-by-Step Execution Flow

```
1. USER AKSES WEBSITE
   ↓
2. BROWSER LOAD index.html
   ↓
3. Vite BUNDLER PROCESS:
   - Minify HTML
   - Bundle JavaScript
   - Process Tailwind CSS
   - Optimize images
   ↓
4. React INITIALIZATION (main.jsx):
   - Create root element
   - Mount React tree
   - Load components
   ↓
5. COMPONENTS RENDER:
   - Preloader visible (3 second loading)
   - Navbar attach scroll listener
   - App render all sections:
     * Hero Section
     * About Section
     * Tools Section (map listTools)
     * Projects Section (map listProyek)
     * Contact Section (form)
   - Footer render static content
   ↓
6. BROWSER DISPLAY PAGE
   ↓
7. USER INTERACTION:
   
   a) SCROLL EVENT:
      - scrollY updated
      - handleScroll trigger
      - active state changed
      - Navbar menu shown/hidden
   
   b) CLICK LINK:
      - Jump to anchor (#about, #projects, #contact)
      - Smooth scroll ke section
   
   c) SUBMIT FORM:
      - POST request ke FormSubmit API
      - Email terkirim ke inbox
      - Success message (FormSubmit default)

8. LOOP TERUS SAMPAI USER CLOSE PAGE
```

---

## 🏁 Final Notes

**Teknologi yang Digunakan:**
- ✅ **React** untuk UI components yang reusable
- ✅ **Vite** untuk build yang super cepat
- ✅ **Tailwind CSS** untuk styling yang efisien
- ✅ **FormSubmit** untuk email handling
- ✅ **Font Awesome** untuk social media icons

**Best Practices yang Diterapkan:**
- ✅ Component-based architecture
- ✅ Responsive design (mobile-first)
- ✅ Performance optimization (lazy loading, minification)
- ✅ SEO-friendly (semantic HTML)
- ✅ Security best practices (noopener, noreferrer)
- ✅ Proper state management (React hooks)
- ✅ Event cleanup (prevent memory leaks)

**Folder Struktur yang Terorganisir:**
- ✅ Separasi concerns (components, data, styles)
- ✅ Easy to maintain dan scale
- ✅ Clear file naming conventions

Dokumentasi ini menjelaskan SETIAP aspek kode, dari build setup sampai user interaction!

