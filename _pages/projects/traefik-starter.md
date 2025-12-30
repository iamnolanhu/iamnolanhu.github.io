---
layout: project
title: Traefik Starter
permalink: /projects/traefik-starter/
tech:
  - Docker
  - Shell
  - Traefik
  - Let's Encrypt
github_url: https://github.com/iamnolanhu/traefik-starter
ascii_art: |
    +----------------------+
    |  [=] TRAEFIK v3      |
    |  +-- HTTPS           |
    |  +-- Let's Encrypt   |
    |  +-- Auto-Discovery  |
    +----------------------+
---

A minimal, production-ready Traefik stack using Docker Compose, designed for easy replication and deployment on any server.

## Overview

This starter template provides everything you need to set up a reverse proxy with automatic HTTPS, authentication, and automatic container updates.

## Features

- **Traefik v3** - Modern reverse proxy and load balancer
- **Automatic HTTPS** - Let's Encrypt certificate management
- **HTTP Basic Auth** - Secure dashboard access
- **Sablier Plugin** - On-demand container scaling
- **Watchtower** - Automatic container updates

## Quick Start

```bash
# Clone the repository
git clone https://github.com/iamnolanhu/traefik-starter.git
cd traefik-starter

# Configure environment
cp .env.example .env
# Edit .env with your credentials

# Start the stack
docker compose up -d
```

## Directory Structure

```
traefik-starter/
├── docker-compose.yml
├── dynamic-config.yml
├── .env.example
└── README.md
```

## Prerequisites

- Docker & Docker Compose installed
- Pre-existing Docker networks: `traefik-public` and `coolify`

## Replication

To replicate on another server:
1. Copy the directory to the new server
2. Adjust `.env` as needed
3. Ensure required Docker networks exist
4. Run `docker compose up -d`
