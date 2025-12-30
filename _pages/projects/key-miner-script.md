---
layout: project
title: Key Miner Script
permalink: /projects/key-miner-script/
tech:
  - Python
  - Docker
  - Ethereum
  - Shell
github_url: https://github.com/iamnolanhu/key-miner-script
ascii_art: |
    +----------------------+
    |  KEY MINER [ETH]     |
    |  [*] Generating...   |
    |  0x420...9420: 0.5E  |
    +----------------------+
---

Automates Ethereum wallet generation, balance checking, and summarization. Combines Docker-based wallet generation and Python-powered balance validation into a streamlined process.

## Overview

A toolset for generating Ethereum wallets in parallel and checking their balances automatically, useful for research and educational purposes.

## Features

- **Automated Process** - From wallet generation to balance checks in one command
- **Parallel Processing** - Wallets generated quickly using multithreaded Docker containers
- **Balance Summarization** - Checks Ethereum wallet balances and outputs only wallets with funds

## How It Works

1. **Environment Setup** - Creates and activates a Python virtual environment
2. **Wallet Generation** - Uses Docker to generate wallets and save to database
3. **Monitor Progress** - Waits until Docker container finishes generation
4. **Balance Check** - Runs balance checker to query Ethereum wallet balances
5. **Summarize Results** - Outputs wallets with non-zero balances

## Usage

```bash
# Make executable
chmod +x main.sh

# Run the script
./main.sh
```

## Output Example

```
Starting the Key Miner Script...
Creating virtual environment...
Activating virtual environment...
Installing dependencies...
Generating wallets using Docker...
Wallet generation completed.
Checking wallet balances...

Wallets with balance:
0x420d2455e5533fb715ae13b0c22a1074bbfe9420: 0.5 ETH
0x420dc893957607608b5b091a220859c39ee64420: 0.25 ETH
Process complete!
```

## Requirements

- Docker
- Python 3
- VirtualEnv

## Advanced Options

Customize parameters in `main.sh`:
- **Wallet Count**: `-limit 1000`
- **Threads**: `-c 8`
- **Mode**: `-mode 2`
