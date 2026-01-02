---
layout: archive-post
title: "InfoSec Institute CTF Writeup (2015) | Blog Archive"
description: "Archived blog post from March 2015 documenting solutions to the InfoSec Institute Capture The Flag challenges."
permalink: /blog/archive/ctf-writeup-2015/
archive_title: "InfoSec Institute CTF Writeup"
archive_date: "March 11, 2015"
archive_source: "my old site"
---

Thanks for checking out my first CTF write up. Please don't bash on me too hard since I'm still a n00b in this.

## Level 1

Level 1 says "May the source be with you!". This hints me to look at the source code. You right click on the webpage and select "View Page Source". To my surprise, the flag is in the comment on the first of the source code.

<figure class="archive-figure">
  <img src="{{ '/assets/images/blog/archive/ctf-writeup-2015/lvl1-1.png' | relative_url }}" alt="Level 1 - View source hint">
</figure>

<figure class="archive-figure">
  <img src="{{ '/assets/images/blog/archive/ctf-writeup-2015/lvl1-2.png' | relative_url }}" alt="Level 1 - Flag in source code">
</figure>

**Flag = infosec_flagis_welcome**

---

## Level 2

Level 2 shows a JPEG image which shows nothing. My first instinct is to download the image to analyze it.

<figure class="archive-figure">
  <img src="{{ '/assets/images/blog/archive/ctf-writeup-2015/lvl2-1.png' | relative_url }}" alt="Level 2 - Blank image">
</figure>

To download the image, I view the source code and find the link to the image. Then right click the link and select "save link as".

<figure class="archive-figure">
  <img src="{{ '/assets/images/blog/archive/ctf-writeup-2015/lvl2-2.png' | relative_url }}" alt="Level 2 - Saving the image">
</figure>

I begin by viewing the contents of the file with the cat command. The output is a string of gibberish but it looks like base64 encryption.

`aW5mb3NlY19mbGFnaXNfd2VhcmVqdXN0c3RhcnRpbmc=`

<figure class="archive-figure">
  <img src="{{ '/assets/images/blog/archive/ctf-writeup-2015/lvl2-3.png' | relative_url }}" alt="Level 2 - Base64 string in file">
</figure>

I try base64 decoding the output to see what I get. Voila! The flag is in front of my eyes.

**Flag = infosec_flagis_wearejuststarting**

Alternative GUI way: You can use a hex editor to view the contents of the file. After you get the encoded string, you can then use an online base64 tool to decode it to get the flag.

<figure class="archive-figure">
  <img src="{{ '/assets/images/blog/archive/ctf-writeup-2015/lvl2-4.png' | relative_url }}" alt="Level 2 - Hex editor view">
</figure>

<figure class="archive-figure">
  <img src="{{ '/assets/images/blog/archive/ctf-writeup-2015/lvl2-5.png' | relative_url }}" alt="Level 2 - Online base64 decoder">
</figure>

---

## Level 3

Level 3 shows an image of a QR Code. Intuitively, I pull out my Android device and use the default "QR Code Reader".

<figure class="archive-figure">
  <img src="{{ '/assets/images/blog/archive/ctf-writeup-2015/lvl3-1.png' | relative_url }}" alt="Level 3 - QR Code">
</figure>

The "QR Code Reader" displays a bunch of dots and lines which you can assume it's morse code. I copy the morse code and use the first <a href="http://morsecode.scphillips.com/translator.html" target="_blank" rel="noopener noreferrer">morse code translator</a> on Google to convert the code.

<figure class="archive-figure">
  <img src="{{ '/assets/images/blog/archive/ctf-writeup-2015/lvl3-2.png' | relative_url }}" alt="Level 3 - Morse code from QR">
</figure>

The converted morse code gives us:

**Flag = INFOSECFLAGISMORSING**

<figure class="archive-figure">
  <img src="{{ '/assets/images/blog/archive/ctf-writeup-2015/lvl3-3.png' | relative_url }}" alt="Level 3 - Morse code translated">
</figure>

---

## Levels 4-15

*This writeup was never completed. The remaining levels were left as placeholders in the original post.*
