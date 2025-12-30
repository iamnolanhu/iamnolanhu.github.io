---
layout: project
title: Based Sigma
permalink: /projects/based-sigma/
image: /assets/images/projects/based-sigma/sigmaguy.png
tech:
  - React
  - Supabase
  - Mistral AI
  - Tailwind CSS
live_url: https://www.basedsigma.com/
devpost_url: https://devpost.com/software/basedsigma-com
achievement: "// World's Largest Bolt Hackathon"
---

**Your tactical AI co-founder.** From zero to CEO on autopilot.

## Overview

Based Sigma is an AI-powered startup builder designed for solo entrepreneurs who prefer quiet execution over hype. It guides users from concept to launch through a unified chatbot interface, automating the entire startup creation process.

## The 5 Modules

Based Sigma automates startup creation across five key areas:

- **Branding** - Company names, taglines, and domain suggestions
- **Legal** - Business structure, registration, and jurisdiction guidance
- **Marketing** - Landing pages, email sequences, and social copy
- **Monetization** - Pricing strategies and revenue models
- **Launch Kits** - PDF and ZIP exports for immediate deployment

## Inspiration

We built Based Sigma for "the founder in the shadows" - the stealth builders who execute without seeking external validation. We rejected bloated SaaS and aimed to create something minimal yet powerful.

## Tech Stack

**Frontend**
- Bolt.new for rapid UI deployment
- Vite + React with dark-mode, matrix-inspired interface
- Tailwind CSS for styling
- Mobile-optimized, low-bandwidth design

**Backend**
- Supabase for authentication, sessions, and modular data persistence
- Database tables tracking profiles, branding, legal docs, marketing, revenue

**AI Engine**
- Single Mistral Small 3.1 model handling all modules via segmented prompts
- Each output includes regeneration toggles and transparency logs
- No multi-agent stack - one LLM with modular prompt architecture

**Export**
- html2pdf.js for client-side PDF generation
- ZIP packaging for complete startup kits

## Key Challenges

1. **Prompt Engineering** - Making one model handle distinct tones (legal language vs. ad copy)
2. **Chat State Management** - Designing a non-linear control panel experience without enforcing funnels
3. **Real-time PDF Rendering** - Cross-browser mobile compatibility without backend overhead
4. **Minimalism at Scale** - Removing all non-essential UI elements while maintaining functionality

## The Team

- **Apoorva Mahajan** - MVP/Product
- **Nolan Hu** - Development
- **Brian Cordova** - Development
- **Suzanna Lam** - Design/Frontend

## Built At

World's Largest Hackathon presented by Bolt
