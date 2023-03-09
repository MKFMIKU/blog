import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: "Kangfu MEI's Blog",
    description: "Thoughts and Ideas",
    site: 'https://blog.kfmei.page',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-US</language>`,
  });
}
