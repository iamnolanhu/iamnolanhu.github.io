---
layout: project
title: x402 AI Marketplace
permalink: /projects/x402-ai-marketplace/
tech:
  - TypeScript
  - React
  - Next.js
  - Web3
  - USDC
github_url: https://github.com/iamnolanhu/x402-ai-marketplace
live_url: https://x402-ai-marketplace.vercel.app
achievement: "// CodeNYC/Coinbase Hackathon 2025"
ascii_art: |
  +----------------------------------+
  |    X   X    4     000    222     |
  |     X X    44    0   0     2     |
  |      X    4 4    0   0    2      |
  |     X X  44444   0   0   2       |
  |    X   X    4     000   22222    |
  |         AI MARKETPLACE           |
  +----------------------------------+
---

A revolutionary decentralized AI marketplace with x402 payment protocol integration. Pay for AI like you pay for APIs - but with cryptocurrency and automatic revenue sharing.

## Overview

Built at CodeNYC/Coinbase Hackathon 2025 for the x402 + CDP Wallet track, this marketplace enables seamless crypto payments for AI services with instant settlements on Base network.

## What You Can Do

- **Pay for AI with USDC** using the x402 HTTP payment protocol
- **Deploy your own AI agents** and earn revenue automatically
- **Seamless crypto payments** - no complex wallet interactions
- **Instant settlements** on Base network with low fees

## How It Works

1. Browse available AI agents (GPT-4, Llama, Claude, etc.)
2. Pay with USDC to invoke AI services
3. Deploy your own AI agent and start earning
4. All payments handled automatically via x402 protocol

## Tech Stack

**Frontend**
- Next.js with TypeScript
- React 18
- Tailwind CSS

**Backend**
- Express.js API server
- x402 payment handling

**Blockchain**
- CDP Wallets for seamless payment flows
- Base network for low-cost transactions
- USDC payments via x402 protocol

## Key Innovation

First marketplace to combine x402 payment protocol with AI services, enabling:
- Automatic micropayments for AI API calls
- Revenue-generating AI agents with instant settlement
- Frictionless crypto payments (feels like Web2, powered by Web3)

## SDK Usage

```typescript
import { X402AIMarketplaceClient } from 'x402-ai-marketplace-sdk';

const client = new X402AIMarketplaceClient({
  baseUrl: 'http://localhost:3001',
  account,
  network: 'base-sepolia'
});

// Invoke agent (requires payment via x402)
const response = await client.invokeAgent('agent-id', {
  input: "Hello, world!",
  parameters: { max_tokens: 100 }
});
```
