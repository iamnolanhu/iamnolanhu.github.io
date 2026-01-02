<h1 align="center">./ 0xPortfolio</h1>

<p align="center">
  <img src="./assets/images/profile-pic-circle.png" alt="Nolan Hu" width="150" />
</p>

<p align="center">
  <strong>Nolan Hu</strong><br/>
  AI Automation Architect
</p>

<p align="center">
  <a href="https://dev.nolanhu.com">
    <img src="https://img.shields.io/badge/🌐_Live-dev.nolanhu.com-b5e853?style=for-the-badge" alt="Live Site" />
  </a>
  <a href="https://linkedin.com/in/nolanhu">
    <img src="https://img.shields.io/badge/LinkedIn-nolanhu-0077b5?style=for-the-badge&logo=linkedin" alt="LinkedIn" />
  </a>
  <a href="https://x.com/nolanhu">
    <img src="https://img.shields.io/badge/X-@nolanhu-000?style=for-the-badge&logo=x" alt="X" />
  </a>
</p>

<p align="center">
  <em>Like a ghost in the shell, I see beyond the data.</em>
</p>

---

## ./ 0xNavigate

| Section | Description |
|---------|-------------|
| [**Projects**](https://dev.nolanhu.com/projects/) | Side projects & experiments |
| [**Blog**](https://dev.nolanhu.com/blog/) | Technical writeups & archives |
| [**WHOAMI**](https://dev.nolanhu.com/whoami/) | Career, timeline, press |
| [**Resources**](https://dev.nolanhu.com/resources/) | Downloads & files |

---

## ./ 0xStack

- **Framework**: Jekyll + Hacker Theme
- **Hosting**: GitHub Pages
- **Background**: Matrix rain animation

---

<details>
<summary><strong>./ 0xSetup</strong> (clone & run locally)</summary>

### About This Portfolio

This portfolio is built with Jekyll, a static site generator that transforms plain text into a beautiful website. It highlights my professional journey, technical skills, and projects that I've worked on over the years.

### Clone and Setup

If you're interested in using this portfolio as a template for your own site, follow these steps to clone the repository and set it up on your machine:

#### Prerequisites

Ensure you have the following installed on your system:

- **Ruby** version 2.5.0 or higher
- **RubyGems**
- **Bundler**
- **GCC and Make**

For detailed installation instructions, visit the [Jekyll documentation](https://jekyllrb.com/docs/).

#### Installation Steps

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/iamnolanhu/iamnolanhu.github.io.git
   cd iamnolanhu.github.io
   ```

2. **Install Dependencies:**

   Use Bundler to install the necessary gems:

   ```bash
   bundle install
   ```

3. **Set Up Environment Variables:**

   If you have sensitive information like Google Analytics IDs, create a `_config_secrets.yml` file and add it to your `.gitignore`:

   ```yaml
   google_analytics: "YOUR_GOOGLE_ANALYTICS_ID"
   ```

4. **Serve the Site Locally:**

   Run the following command to build and serve the site locally:

   ```bash
   bundle exec jekyll serve --config _config.yml,_config_secrets.yml
   ```

5. **View Your Site:**

   Open your browser and navigate to `http://localhost:4000` to see your site in action.

### Setting Up GitHub Pages with Jekyll

1. **Push to GitHub:**

   After making your changes, push your repository to GitHub. Ensure your repository is named `yourusername.github.io` for user pages.

2. **Configure GitHub Pages:**

   - Go to your repository on GitHub.
   - Click on **Settings**.
   - Scroll down to the **Pages** section.
   - Select the branch you want to use for GitHub Pages (usually `main` or `master`).
   - Click **Save**.

3. **Custom Domain Setup:**

   If you want to use a custom domain, create a `CNAME` file in the root of your repository with your domain name:

   ```plaintext
   www.yourdomain.com
   ```

   - Update your DNS settings to point your domain to GitHub Pages. Typically, this involves setting an `A` record to `185.199.108.153` (and similar IPs) and a `CNAME` record pointing to `yourusername.github.io`.

4. **Verify Your Site:**

   After setting up, your site should be live at `https://yourusername.github.io` or your custom domain.

</details>

---

<p align="center">
  <em>Ad Astra!</em>
</p>
