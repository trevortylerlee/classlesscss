# Why I Built classlesscss.com

By **[Trevor Tyler Lee](https://trevortylerlee.com)**

There are a lot of classless CSS frameworks and comparing them is
annoying. I wanted a single page where I could flip through them all
against the same HTML.

## Things You'll Notice

Spend a few minutes clicking through themes and you'll start to notice
differences. Some apply a `max-width` to the body and center the
content. Some style the `<nav>` element, some ignore it entirely.
Some have dark mode, some don't.

## How It's Built

The site is built with [Astro](https://astro.build). Themes are
loaded dynamically from their CDNs based on a query parameter. The site
itself has no opinion on styling (except for the nav).
