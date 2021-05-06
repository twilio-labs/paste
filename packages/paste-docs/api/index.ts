import matter from 'gray-matter';
import marked from 'marked';

export async function getAllComponentPages() {
  const context = require.context('../component-pages', false, /\.mdx$/);
  const posts = [];
  for (const key of context.keys()) {
    const post = key.slice(2);
    const content = await import(`../component-pages/${post}`);
    const meta = matter(content.default);
    posts.push({
      slug: post.replace('.mdx', ''),
      title: meta.data.title,
    });
  }
  return posts;
}

export async function getComponentPageBySlug(slug) {
  const fileContent = await import(`../component-pages/${slug}.mdx`);
  const meta = matter(fileContent.default);
  const content = marked(meta.content);
  return {
    title: meta.data.title,
    content: content,
  };
}
