import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
	const works = await getCollection('work');

	return rss({
		title: 'Danielas Portfolio',
		description: 'Welcome!',
		site: context.site,
		items: works.map((work) => ({
			...work.data,
			link: `/work/${work.slug}/`,
		})),
	});
}
