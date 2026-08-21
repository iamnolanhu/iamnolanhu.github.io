---
layout: project
title: Python Telegram Bot
permalink: /projects/telegram-bot/
image: /assets/images/projects/telegram-bot/hero.png
image_wide: true
tech:
  - Python
  - Telegram API
---

I realized I was doing the same checks manually every morning—API status, deployment logs, uptime reports. The actual thinking took 15 minutes. The ritual took an hour.

## Why I Built This

I don't like rituals that don't serve thinking. Every morning I'd open the same tabs, run the same commands, wait for the same responses—before I could even start working on what mattered. The pattern was obvious: these checks could happen without me. I just needed the results.

Built this bot to eliminate the ritual, not the thinking. Now I wake up to a Telegram message with everything I need to know. If something's wrong, I see it immediately. If everything's fine, I skip the ceremony entirely.

## Tech Stack

- **Python** — Core bot logic with async/await for non-blocking operations
- **python-telegram-bot** — Clean API wrapper that handles the Telegram protocol

## What It Does

- Runs scheduled checks on my infrastructure
- Surfaces problems before I go looking for them
- Answers queries I used to open dashboards for
- Stays out of my way when everything's working

The interface is Telegram because that's where I already am. The real product isn't the bot—it's the hour I get back every morning.
