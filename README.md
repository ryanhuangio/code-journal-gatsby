# Code Journal

Are you tired of Wordpress messing up your code upon publishing? Or if your headless CMS runs into an issue, you are locked out of accessing your content until you restore your application.

This is where Code Journal comes in. Code Journal built using Gatsby. Code Journal lets you publish your blogs as markdown files.

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









