// import { Client } from '@notionhq/client';
// import { NotionBlocksHtmlParser } from '@notion-stuff/blocks-html-parser';

// const notion = new Client({ auth: import.meta.env.VITE_DB_KEY });
// process: get the url,
// convert slug to something searchable
//get the article from Notion
// parse it to HTML
// return it
// function slugToTitle(slug) {
// 	let chunks = slug.split('-');
// 	chunks = chunks.map((element) => {
// 		return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
// 	});
// 	let result = chunks.join(' ');
// 	console.log('result', result);
// 	return result;
// }

// function getPostDetailsFromPost(post) {
// 	let details = {
// 		blockId: post.results[0].id,
// 		post_title: post.results[0].properties.Name.title[0].plain_text,
// 		created: post.results[0].created_time,
// 		edited: post.results[0].last_edited_time,
// 		source: post.results[0].properties.Source.url,
// 		topic: post.results[0].properties.Topic.multi_select.map((d) => {
// 			return d.name;
// 		})
// 	};

// 	return details;
// }

// /** @type {import('../routes/notes/[slug]s/notes/[slug]').RequestHandler} */
// export async function get(params) {
// 	let slug = params.params.slug;
// 	let title = slugToTitle(slug);
// 	console.log('title', title);

// 	// GET ALL POST IDs
// 	const databaseId = import.meta.env.VITE_NOTES_DB_ID;

// 	const response = await notion.databases.query({
// 		database_id: databaseId,
// 		filter: {
// 			and: [
// 				{
// 					property: 'Published',
// 					checkbox: {
// 						equals: true
// 					}
// 				},
// 				{
// 					property: 'Name',
// 					rich_text: {
// 						equals: title
// 					}
// 				}
// 			]
// 		}
// 	});
// 	let postDetails = getPostDetailsFromPost(response);

// 	// GET BLOCKS FOR SINGLE POST
// 	const response2 = await notion.blocks.children.list({
// 		block_id: postDetails.blockId,
// 		page_size: 50
// 	});

// 	// let postDetails = getPostDetailsFromPost(response2);
// 	let instance = NotionBlocksHtmlParser.getInstance();
// 	const htmlPost = instance.parse(response2.results);
// 	// let postDetails = {};
// 	if (htmlPost) {
// 		return {
// 			body: { htmlPost, postDetails }
// 		};
// 	}

// 	return {
// 		status: 404
// 	};
// }
