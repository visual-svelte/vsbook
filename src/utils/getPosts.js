import { Client } from '@notionhq/client';

console.log(import.meta.env.VITE_DB_KEY);
const notion = new Client({ auth: import.meta.env.VITE_DB_KEY });

(async () => {
	const databaseId = import.meta.env.VITE_NOTES_DB_ID;
	const response = await notion.databases.query({
		database_id: databaseId,

		sorts: [
			{
				property: 'Date Finished',
				direction: 'ascending'
			}
		]
	});
	console.log(response);
})();
