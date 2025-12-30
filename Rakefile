# Rakefile for Jekyll site management
# Usage:
#   rake sync_images  - Sync image folders with content pages
#   rake serve        - Sync images then start Jekyll server
#   rake build        - Sync images then build site

require 'fileutils'

IMAGES_DIR = 'assets/images'

desc 'Sync image folders with content pages'
task :sync_images do
  puts "Syncing image folders..."

  # Ensure base directories exist
  %w[home blog/_index projects/_index whoami/_index].each do |dir|
    ensure_dir("#{IMAGES_DIR}/#{dir}")
  end

  # Sync blog posts
  Dir.glob('_posts/*.md').each do |post|
    slug = File.basename(post, '.md')
    ensure_dir("#{IMAGES_DIR}/blog/#{slug}")
  end

  # Sync project pages
  Dir.glob('_pages/projects/*.md').each do |project|
    slug = File.basename(project, '.md')
    ensure_dir("#{IMAGES_DIR}/projects/#{slug}")
  end

  # Sync whoami subpages
  Dir.glob('_pages/whoami/*.md').each do |page|
    slug = File.basename(page, '.md')
    ensure_dir("#{IMAGES_DIR}/whoami/#{slug}")
  end

  puts "Image folders synced!"
end

desc 'Sync images and start Jekyll server'
task :serve => :sync_images do
  sh 'bundle exec jekyll serve'
end

desc 'Sync images and build site'
task :build => :sync_images do
  sh 'bundle exec jekyll build'
end

desc 'Sync images and serve with secrets config'
task :serve_secrets => :sync_images do
  sh 'bundle exec jekyll serve --config _config.yml,_config_secrets.yml'
end

# Helper: Create directory with .gitkeep if it doesn't exist
def ensure_dir(path)
  unless Dir.exist?(path)
    FileUtils.mkdir_p(path)
    FileUtils.touch("#{path}/.gitkeep")
    puts "  Created: #{path}"
  end
end
