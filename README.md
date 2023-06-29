# Code Journal

Are you tired of Wordpress messing up your code upon publishing? Or if your headless CMS runs into issues, you are locked out of your code journal until you restore service.

This is where Code Journal comes in. Code Journal is built using Gatsby, so you can always access your code journal by opening the statically generated site, or open the markdown files directly.

## Installation

1. `git clone https://github.com/ryanhuangio/code-journal-gatsby.git`
2. `cd code-journal`
3. `yarn install`
4. `gatsby develop`

## Adding Content

1. Navigate to `./code-journal/src/content/`
2. Create a new markdown file in this format `YYYY-MM-DD-blog-post.md`. You can name it anything you want, as long as it is in the the content folder and is a .md file.
3. Add the "frontmatter" between --- and beneath that is your post.

```markdown
---
title: "How to Verify a Conversion Tracking Pixel"
slug: "verify-tracking-pixel"
date: "2015-02-26"
---

Markdown goes here...
```

## Deployment

1. `gatsby build && gatsby serve`









