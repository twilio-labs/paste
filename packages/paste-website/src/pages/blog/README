# Paste Articles

This folder contains the articles we publish as blog posts on the Paste docs site.

Articles come in two forms:

- **Full article** - All the article content lives on the doc site
- **Linked article** - We only link to the article published on another platform

## Creating an article file

All articles are MDX pages. Like all Next pages, the url is reflective of the file name.

File names are in the format `YYYY-MM-DD-title-of-post.mdx`

Create a new file in the `/articles` directory and copy/paste an existing article's file contents.

Each file must start with a metadata section that controls the meta data of that page.

## Metadata

### Article data

- **Title** - Title of the article or post
- **date** - `YYYY-MM-DD` Date at which it was published
- **slug** - URL slug that the full article appears at, absolute to the root of the website domain (must end with a `/`)
- **status** - `draft` | `published` Controls the display of the article on the list view. If it is draft it will not appear in the list but will build and be available by url
- **Description** `optional` - Meta tag description
- **external_link** `optional` - URL where an Article or Post lives, if we are linking to it and not republishing
- **excerpt** `optional` - If we are not hosting the Article content, we need to create a manual excerpt to appear on the list view.

### Author data

- **author** - Name of the author
- **author_link** - Link to the authors bio, twitter, portfolio site
- **avatar** `optional` - Url to a avatar image (for a link to your Github avatar, go to your profile, right click your photo, and click "open image in new tab")

## Creating a full article

Treated exactly like any other MDX page. It can include react components and markdown.

### Metadata

Suggested metadata for a full article

```
export const meta = {
  title: '',
  description: '',
  slug: '',
  date: '',
  author: '',
  avatar: '',
  author_link: '',
  status: ''
}
```

### Shortcodes

#### ArticleHeader

Controls showing the article header with author, avatar and date. Takes Article metadata as props.

```
<ArticleHeader
  title={meta.title}
  description={meta.description}
  date={meta.date}
  machineDate={meta.date}
  author={meta.author}
  avatar={meta.avatar}
  authorLink={meta.author_link}
/>
```

#### ArticleContent

Simple layout component for the main article content column

```
<contentwrapper>

<ArticleContent>

... article content in MDX goes here ...

</ArticleContent>

<contentwrapper>

```

#### ArticleAside `optional`

Simple layout component for the article aside, right hand small column.

```
<contentwrapper>

<ArticleContent>

... article content in MDX goes here ...

</ArticleContent>

<ArticleAside>

... article aside content in mdx goes here ...

</ArticleAside>

<contentwrapper>

```

## Creating a linked article

Similar to a normal MDX page, but we only use the metadata it provides to display the linted article in the Article list. We do not need to write any content.

### Metadata

Suggested metadata for a linked article

```
export const meta = {
  title: '',
  slug: '',
  date: '',
  author: '',
  avatar: '',
  author_link: '',
  status: '',
  external_link: '',
  excerpt: ''
}
```
