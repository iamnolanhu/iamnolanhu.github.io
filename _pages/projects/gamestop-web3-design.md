---
layout: project
title: GameStop Web3 Clone
permalink: /projects/gamestop-web3-design/
tech:
  - React
  - TypeScript
  - Tailwind CSS
  - Stripe
  - Web3
github_url: https://github.com/iamnolanhu/gamestop-web3-design
ascii_art: |
    +---------------------+
    |  GAMESTOP  [Web3]   |
    |  +----+    +----+   |
    |  | NFT|    |USDC|   |
    |  +----+    +----+   |
    +---------------------+
---

A modern e-commerce platform built with React, TypeScript, and Tailwind CSS, featuring Web3 integration and Stripe payments.

## Overview

A full-featured gaming e-commerce interface inspired by GameStop, enhanced with Web3 wallet integration for digital assets and NFTs.

## Features

- **Modern Gaming E-commerce** - Responsive, mobile-first interface
- **Secure Payments** - Stripe integration for traditional payments
- **Web3 Wallet Integration** - Connect wallets for digital assets
- **Dynamic Product Catalog** - Categories and advanced search
- **Shopping Cart** - Real-time updates
- **Wishlist** - Save items for later
- **Dark Mode** - Default dark theme

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Payments**: Stripe
- **Web3**: Custom wallet integration
- **Build Tool**: Vite
- **Deployment**: Netlify

## Getting Started

```bash
# Clone and install
git clone https://github.com/iamnolanhu/gamestop-web3-design.git
cd gamestop-web3-design
npm install

# Start development server
npm run dev
```

## Project Structure

```
src/
├── components/
│   ├── common/        # Shared components
│   ├── home/          # Home page components
│   ├── layout/        # Layout components
│   ├── products/      # Product-related components
│   └── web3/          # Web3 integration
├── contexts/          # React contexts
├── data/             # Static data
└── types/            # TypeScript definitions
```
