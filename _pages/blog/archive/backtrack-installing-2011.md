---
layout: archive-post
title: "Installing Backtrack 4 on USB (2011) | Blog Archive"
description: "Archived blog post from April 2011 about installing Backtrack 4 R2 on a USB drive using Unetbootin."
permalink: /blog/archive/backtrack-installing-2011/
archive_title: "Installing Backtrack 4 on USB"
archive_date: "April 1, 2011"
archive_source: "Hacking Hamster (Blogger)"
archive_warning: "Backtrack has been discontinued and replaced by Kali Linux. This content is preserved for historical reference only."
---

Before we begin, I must say that everything that got me into penetration testing is due to Backtrack. When I first used Backtrack, the latest version was Backtrack 3 USB version. Now the latest version is Backtrack 4 R2.

Backtrack is a Linux security distribution that contains a vast amount of tools to test to see if your system is secure. This operating system can be your main operating system or can be made live to boot anywhere you want.

*Note: The original download link pointed to backtrack-linux.org which now redirects to <a href="https://www.kali.org/" target="_blank" rel="noopener noreferrer">Kali Linux</a>, Backtrack's successor.*

I have Backtrack 4 R2 ISO Image on my flashdrive. In order for you to install a portable version of Backtrack, you will need a minimum 2GB USB flashdrive, Backtrack ISO image, and Unetbootin (download at <a href="http://unetbootin.github.io/" target="_blank" rel="noopener noreferrer">http://unetbootin.github.io/</a>). Backtrack is about the size of 2GB and might take a while to download. But once you have all three things, we can install Backtrack onto the USB flashdrive.

## Installing Backtrack Live USB

1. Plug your USB flashdrive into the computer
2. Format the USB flashdrive to FAT32
3. Open Unetbootin
4. Select the diskimage button and click the "..." to browse for the bt4-r2.iso
5. Select your USB drive and press OK

*(Note: The installation might take a while and it might seem like it may be stuck at one point but make sure you leave it alone. Mine got stuck around 80% and it took around ten minutes to move on.)*

<figure class="archive-figure">
  <img src="{{ '/assets/images/blog/archive/backtrack-installing-2011/unetbootin.png' | relative_url }}" alt="Unetbootin installer interface">
</figure>

Once you finished installing Backtrack, your USB flashdrive files should look like this:

<figure class="archive-figure">
  <img src="{{ '/assets/images/blog/archive/backtrack-installing-2011/usb-contents.png' | relative_url }}" alt="USB flashdrive contents after Backtrack installation">
</figure>

Now you have completed the installation of Backtrack 4 onto your USB flashdrive. Now we try to boot the operating system (OS) and see if we have successfully installed BT4 (Backtrack 4).
