---
layout: post
title: "From College Labs to Hackathon Podiums: My Journey With DigitalOcean and AI"
date: 2025-12-28
author: Nolan Hu
tags: [hackathon, digitalocean, ai, sharkbyte]
---

## A decade of tinkering

Let me take you back more than ten years. I'm a college student, broke, curious, and I just spun up my first virtual machine on DigitalOcean. Their simple pricing and developer-friendly tools let me host side projects without destroying my wallet. Over the years, DigitalOcean became my playground. I learned how to deploy web apps, set up databases, and experiment with new frameworks. That experience set the stage for everything I build today.

Fast-forward to 2025. Generative AI has completely transformed how we build things. I'd been incorporating AI into my workflows for months, shipping side projects that would have taken weeks just a year ago. So when I saw that Major League Hacking and DigitalOcean were hosting an AI hackathon in Brooklyn on December 12–13, 2025, I knew I had to be there.

## Why I built an AI support agent

Here's the thing. When DigitalOcean launched their Gradient AI platform, I was impressed by how easily it let developers set up AI infrastructure. And as someone who's always loved automating things, my brain immediately went: what if users could create their own website-aware chatbot with nothing but a DigitalOcean API key? No manual training. No tedious FAQ writing. Just paste a URL and go. That systematic, programmatic approach to AI tooling? That's exactly the kind of problem I love solving.

## The hackathon experience

The MLH × DigitalOcean hackathon was intense. Over 130 participants filled ZeroSpace, this cold warehouse space bathed in blue projector lights. Hacking kicked off at 7 pm on Friday, but here's the catch: ZeroSpace closed at 10 pm and didn't reopen until Saturday morning.

So I headed home. And I didn't sleep.

I stayed up the entire night, running on nothing but adrenaline and caffeinated tea, trying to manifest my idea as fast as possible. During those sleepless hours I built SharkByte Support, an app that transforms any website into an AI-powered support agent.

Here's how it works. You enter a URL. SharkByte crawls your site and extracts key content. Then, using DigitalOcean's Gradient AI, it builds a vector database and configures an agent to answer questions. Users can start chatting immediately, with streaming responses that feel conversational.

The interface is deliberately simple: a single input box on the homepage, light/dark/ocean themes, and a mobile-friendly chat UI. Under the hood it's built with Next.js 16, React 19, Tailwind CSS and shadcn/ui. All technologies I'd learned during late nights on DigitalOcean droplets.

## Overcoming challenges

Building SharkByte in a day wasn't easy. Coordinating asynchronous workflows (scraping content, creating knowledge bases, configuring agents) was tricky. I also spent time crafting system prompts so that Sammy the Shark, DigitalOcean's mascot whom I've seen frequently over the past decade, would stay helpful and on-brand. The simplicity of the UX hides significant complexity. And honestly, I'm proud of how polished the final product feels.

But here's where things got stressful.

The next day, I didn't show up until the very end. Almost every team had already presented. I was literally the last person to present, still trying to get my project to fully work while all the other contestants were in line eating dinner. I was doubtful I would win given how everything had gone. But I wanted to present no matter what. I was proud of what I'd built.

Then they announced the winners.

When they called SharkByte Support, I was in disbelief. I'd barely made the cutoff. I thought nobody was even paying attention to my presentation. But SharkByte won 3rd place for Best Use of DigitalOcean Gradient AI. I hope I made DO proud by creating an app that really showcases the Gradient AI platform and their beloved mascot Sammy.

## Two DigitalOcean wins in one year

Here's the wild part. This was actually my second DigitalOcean hackathon win in 2025. Earlier this year, I teamed up with a partner at the Hacking with Agents hackathon in NYC, where we built TwelveSocial and won Best Use of DigitalOcean.

Two hackathon wins with DigitalOcean in one year. If you told me that a decade ago when I was spinning up my first droplet, I wouldn't have believed you. But it happened. And it wouldn't have been possible without my years of experience on their platform and the power of AI-driven development.

## AI as a 10x multiplier

A common theme throughout both hackathons was how AI accelerates development. Tools like Copilot, Gradient AI and open-source models allowed me to move at a pace that felt impossible just a year ago. I don't subscribe to the "10x developer" myth. But I do believe AI can multiply a developer's impact. By handling boilerplate, suggesting solutions, and generating code, AI freed me to focus on architecture and user experience. That's why SharkByte went from idea to working product in less than 24 hours.

This shift matters beyond hackathons. Businesses that adopt AI-driven development can build better products faster, outpacing competitors who cling to old workflows. As someone who's been hands-on with these tools since their inception, I'm excited to help teams harness them effectively.

## What SharkByte can do

I've spent the past couple of sleepless nights since the hackathon making SharkByte deployment-ready. Here's what the current version supports:

- **Instant setup.** Paste a URL and go.
- **Website-aware answers** using Gradient AI.
- **Streaming responses** for a conversational feel.
- **Embeddable chat widget** you can add to any site.
- **Customizable themes** and a mobile-friendly design.
- **One-click self-hosting.** Clone the repo, add your DigitalOcean API key, deploy via Vercel. Done.

It's a great demo of what the Gradient AI platform can do. Future features like custom uploaded knowledge base data, structured data support, and advanced chatbot customization are on the roadmap. Though I'll need to prioritize other work unless there's significant demand.

## An invitation

I share this story not to brag about trophies. I share it to show you what's possible when curiosity meets the right tools.

If you're a developer or entrepreneur curious about AI-powered support agents, try SharkByte and tell me what you think. If you're building a business and need help implementing AI or scaling your product, let's talk. My decade on DigitalOcean and two hackathon wins have taught me a lot. I'm eager to apply those lessons to real-world problems.

You can explore SharkByte at [sharkbyte-support.vercel.app](https://sharkbyte-support.vercel.app) and view the open-source code on [GitHub](https://github.com/iamnolanhu/sharkbyte-support).

Thank you for being part of this journey.
