# Nolan's Developer Portfolio

Welcome to my developer portfolio, showcasing my work history and projects. Feel free to explore and get inspired!

## About This Portfolio

This portfolio is built with Jekyll, a static site generator that transforms plain text into a beautiful website. It highlights my professional journey, technical skills, and projects that I've worked on over the years.

## Clone and Setup

If you're interested in using this portfolio as a template for your own site, follow these steps to clone the repository and set it up on your machine:

### Prerequisites

Ensure you have the following installed on your system:

- **Ruby** version 2.5.0 or higher
- **RubyGems**
- **Bundler**
- **GCC and Make**

For detailed installation instructions, visit the [Jekyll documentation](https://jekyllrb.com/docs/).

### Installation Steps

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

## Setting Up GitHub Pages with Jekyll

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

---

Thank you for visiting my portfolio. I hope it inspires you to create something amazing!
