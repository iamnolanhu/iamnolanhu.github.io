---
layout: project
title: FRTC — Fraud Ring Triage Copilot
permalink: /projects/frtc/
image: /assets/images/projects/frtc/devpost-cover.png
image_wide: true
tech:
  - TypeScript
  - Next.js
  - Python
  - FastAPI
  - Multi-Agent AI
  - DigitalOcean
github_url: https://github.com/ht-epistolist/67hack
live_url: https://frtc-fraud-investigator-t8gb9.ondigitalocean.app/
devpost_url: https://devpost.com/software/frtc-g2izs8
achievement: "// 1st Place — vibeFORWARD: M2—Agents 2026"
---

**Uber for fraud detection.** FRTC autonomously hunts a coordinated fraud ring hidden in 90 days of bank transactions, with a live UI that shows the agents reasoning in real time.

## What Is FRTC?

Community bank fraud analysts work against the clock with detection tools that fire on thresholds. The problem is that real fraud rings know where those thresholds are. They keep every transfer just under the alert limit and fan the money out across mule accounts, so no single transaction ever looks wrong. The pattern only exists across accounts, and that is exactly what rule-based systems are blind to.

FRTC was built to see that pattern. Point it at a transaction set and it finds the ring on its own merits, then writes the case up the way an analyst would.

## How It Works

The system assumes only the shape of the data, never its contents. Nothing about the answer is hardcoded.

1. **Discover.** An unsupervised engine (NumPy + networkx) scores every account for anomaly and builds a coordination graph from shared devices, open-date cohorts, and transfer structure. Strongly connected communities become candidate rings.
2. **Corroborate or refute.** Six specialist agents — Network Analyst, Mule Hunter, Temporal Analyst, Structuring Analyst, Account Profiler, and an adversarial **Skeptic** — drill into each candidate concurrently, supporting or challenging it member by member over **Cognee** shared memory.
3. **Confirm.** A Risk Synthesizer fuses the findings, confirms the ring, and streams the verdict over WebSocket to the live UI.

The design is deliberately hybrid. The language models reason and decide; deterministic Python does the exact math. And ring membership stays anchored to the engine's candidate: the Skeptic may only prune a member that has no concrete tie, so model variance can never quietly drop a genuine account.

## Results

On Track 02's Crestline Community Bank data, FRTC found a 10-account ring moving **$161,750.90** across **250 peer transfers** at 100% precision and recall, matching the benchmark answer key to the cent. Pointed at a second, structurally different synthetic dataset, it discovered that ring too at 100% precision and recall, proving no answer was baked in.

## Screenshots

<div class="screenshot">
<img src="{{ '/assets/images/projects/frtc/fraud-detection.png' | relative_url }}" alt="FRTC live fraud investigation view">
<p><em>The six agents and the Skeptic reasoning in real time as the ring is confirmed, with Cognee shared memory on the right</em></p>
</div>

<div class="screenshot">
<img src="{{ '/assets/images/projects/frtc/report.png' | relative_url }}" alt="FRTC generated suspicious activity report">
<p><em>The case report it writes itself — ring members, exposure, evidence, and recommended action</em></p>
</div>

<div class="screenshot">
<img src="{{ '/assets/images/projects/frtc/datasets.png' | relative_url }}" alt="FRTC datasets view">
<p><em>Datasets view — point it at any same-schema transaction set</em></p>
</div>

<div class="screenshot">
<img src="{{ '/assets/images/projects/frtc/data-selection.png' | relative_url }}" alt="FRTC data selection view">
<p><em>Data selection — choose a bundled dataset or drop in your own CSV</em></p>
</div>

## Tech Stack

- **Frontend**: Next.js, React, TypeScript, React Flow, Framer Motion
- **Backend**: FastAPI, Python, NumPy, Pandas
- **Agent memory**: Cognee — Kuzu graph database + LanceDB vectors, with local fastembed embeddings (offline, zero token cost)
- **Models**: Google Gemini via OpenRouter — `gemini-2.5-flash` for the per-agent tool-calling loops, `gemini-2.5-pro` for structured conclusions and the case narrative
- **Deployment**: Docker on DigitalOcean App Platform

## Key Challenges

The hardest part was trust. A panel of language models reasoning over the same accounts will disagree, and a naive setup lets one skeptical model erase a real ring member. Anchoring membership to the unsupervised engine's candidate and giving the Skeptic veto power only over accounts with no concrete tie made the system robust without making it rigid.

The second challenge was keeping it honest. The detectors are adaptive rather than tuned to the demo: the structuring detector finds whatever round number a ring hugs, the timing detector flags concentration in any hours, and the cohort is found by open-date gaps. Drop in a new dataset and the case brief is derived from that data, not recited from a fixture.

## The Team

<div class="team-section">
<img src="{{ '/assets/images/projects/frtc/hackathon-1st-place.jpeg' | relative_url }}" alt="The team — 1st Place at vibeFORWARD: M2—Agents">
<p><strong>FRTC — Fraud Ring Triage Copilot</strong> — 1st Place, Best All-Around Application at vibeFORWARD: M2—Agents 2026.<br>
Built by Nolan Hu, <a href="https://devpost.com/buddhsen-tripathi" target="_blank" rel="noopener noreferrer">Buddhsen Tripathi</a>, <a href="https://devpost.com/joy-oranje" target="_blank" rel="noopener noreferrer">Joy van Oranje</a>, <a href="https://devpost.com/srijith-reddy" target="_blank" rel="noopener noreferrer">Saisrijith Reddy Maramreddy</a>, and <a href="https://devpost.com/tesliaolena" target="_blank" rel="noopener noreferrer">Olena Teslia</a>.</p>
</div>
