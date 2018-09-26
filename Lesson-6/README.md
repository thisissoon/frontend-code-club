# Lesson 6 (26/09/2018) - Build our first website

## Topics

- Terminal
  - Commands
    - `cd`
    - `ls`
- [Homebrew](https://brew.sh/)
  - Installation
    - `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
- [Go Hugo](https://gohugo.io/)
  - Installation
    - `brew install hugo`
  - Create site
    - `hugo new site designers-desktops`
    - Folder structure
      - archetypes - A example “thing” e.g. an example user page
      - content - markdown used to generate pages
      - data - data that can be use to help generate parts of the site
      - layout - partials/templates (snippets of html code) to reuse in the site
      - resources - _can ignore_
      - static - our css/javascript/images etc…
      - themes - _can ignore_
      - config.toml - site config options

## Demo / Task

- Install [Go Hugo](https://gohugo.io/) and use it to generate a basic static site.
