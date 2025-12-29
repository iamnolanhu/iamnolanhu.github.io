---
layout: project
title: Namecheap Scripts
permalink: /projects/namecheap-scripts/
tech:
  - Python
  - Namecheap API
github_url: https://github.com/iamnolanhu/namecheap_scripts
---

A collection of Python scripts to manage DNS records through the Namecheap API.

## Overview

These scripts allow you to manage your Namecheap domains directly from the command line, eliminating the need to navigate through the web interface for common DNS operations.

## Features

- **Add/Update Subdomain A Records** - Quickly point subdomains to new IP addresses
- **Check/List DNS Records** - View existing DNS records for any domain
- **CLI-First Design** - Scriptable and automatable

## Usage

```bash
# Add or update a subdomain
python add_subdomain.py --domain dev.example.com --ip 8.8.8.8

# Check existing records
python check_old_records.py --domain example.com
```

## Getting Started

1. Clone the repository
2. Create a `.env` file with your Namecheap API credentials
3. Install dependencies: `pip install -r requirements.txt`
4. Run the scripts

## Resources

- [Namecheap DNS API Documentation](https://www.namecheap.com/support/api/)
