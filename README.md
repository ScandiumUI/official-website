# ScandiumOS Official Website

This repository contains the source code for the official website of ScandiumOS (scandiumui.tech), a custom Android operating system based on AOSP.

## Overview

The website is designed to provide users with information regarding ScandiumOS features, installation guides (Wiki), download links for supported devices, and details about the project contributors.

## Project Details

- Current Version: 0.7.9
- Framework: Vue 3
- Build Tool: Vite
- Styling: Tailwind CSS and Vuetify
- Internationalization: Vue I18n (English and Bahasa Indonesia)

## Tech Stack

- Vue 3 (Composition API)
- Vite 8
- Tailwind CSS 4
- Vuetify 3
- Vue Router 4
- Swiper for carousels
- Material Design Icons

## Getting Started

### Prerequisites

Ensure you have Node.js and npm installed on your system.

### Installation

Install the project dependencies using:

```bash
npm install
```

### Development

Start the development server with hot-reload:

```bash
npm run dev
```

### Build

Compile and minify for production:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

## Directory Structure

- /src/components: Reusable UI components
- /src/pages: Main page views (Home, About, Download, Wiki, etc.)
- /src/composables: Shared logic and state management
- /src/i18n: Language translation files
- /src/router: Routing configuration
- /public: Static assets and icons
