---
layout: post
title: "How I Ship Like a Team of One"
date: 2026-06-26
author: Nolan Hu
tags: [ai, agents, claude-code, automation, sigma-synapses]
---

## The thing nobody tells you about AI coding

Everyone's got an opinion on which model is smartest. Almost nobody talks about the part that actually moves the needle: the discipline you wire around it.

Here's the reality. The model is a commodity. Any tool can call one. What separates "I have a chatbot that writes code" from "I ship features to production every week, alone" is the scaffolding — the skills, the guardrails, the muscle memory baked into the environment. The skill isn't prompting. Any tool can prompt. The skill is building a system that turns a prompt into something tested, reviewed, and live.

I run [Sigma Synapses](https://sigmasynapses.com) as a solo founder. I write the code, run production, and talk to clients — no handoffs. That only works because I spent the time making my setup do the heavy lifting. This post is about that setup, which I just open-sourced.

## What I open-sourced

It's called [claude-dotfiles](https://github.com/iamnolanhu/claude-dotfiles). It's the actual Claude Code configuration I use day to day — not a sanitized demo. Clone it, run one command, and you get the same engine I do:

```bash
git clone https://github.com/iamnolanhu/claude-dotfiles.git
cd claude-dotfiles
./setup.sh
```

A 15-plugin core installs the workflow backbone — brainstorming, test-driven development, systematic debugging, planning, multi-file feature work, code review, persistent memory, browser-driven verification. Then there's an onboarding layer that, if you've never coded, will literally walk you from "I want to build a thing" to a deployed result. You open Claude Code, say `help me get started`, and it routes you through plan → build → verify → review → ship, explaining every step in plain words.

I built that part for a specific reason: I kept watching people with great ideas get stuck at the terminal. The model could build their thing. They just didn't know how to ask, or what was safe to do. So I encoded the asking.

## The guardrails are the point

The flashy part is the agents. The part that lets me sleep is the guardrails:

- Nothing is "done" until it's actually run and shown working. No "this should work."
- Every working state gets committed automatically, so there's always a point to rewind to.
- Anything risky — spending money, deploying, deleting, touching secrets — stops and asks first.

These sound boring. They're the whole game. A non-coder can ship with this setup _because_ the rails won't let the thing quietly break. I ship fast with it for the same reason — I'm not babysitting, I'm reviewing.

## How this actually runs a company

At Sigma Synapses this isn't a toy config. It's production tooling:

- One monorepo, isolated worktrees per workstream, so parallel features never step on each other.
- Custom skills for the repetitive loop — `/implement-feature`, `/fix-bug`, `/add-migration`, `/create-pr`.
- Changelog bumps itself on merge. I stopped tracking versions by hand a long time ago.
- The design system blocks hardcoded colors before they ever land.
- Every incident gets a postmortem, so the same bug never bills me twice.
- Inference runs self-hosted at $3.44/hr instead of bleeding per-token cloud costs.

One person, weekly client releases. Not because I'm fast at typing — because the system is.

## Take it

It's MIT licensed. [Clone it](https://github.com/iamnolanhu/claude-dotfiles), fork it, rip out what doesn't fit. If you're non-technical and you've been waiting for permission to build something, this is it — `help me get started` is a real door.

And if you'd rather have AI agents handle your customer conversations instead of building it yourself, that's literally what I do for a living. Come say hi at [sigmasynapses.com](https://sigmasynapses.com).

There's a ghost hiding in that repo, by the way. You'll find it if you look.

_Streamline the Future._
