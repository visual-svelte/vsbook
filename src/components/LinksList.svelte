<script>
	export let genre;
	import { showLogin } from '../stores/state';
	import { ago } from '../utils/ago';
	async function getPosts(genre) {
		const res = await fetch(`/api/${genre}.json`);
		const jsonPosts = await res.json();
		if (res.ok) {
			return jsonPosts;
		} else {
			throw new Error(jsonPosts);
		}
	}

	let promise = getPosts(genre);

	function titleToSlug(title) {
		let slug = title.replaceAll(' ', '-');
		return slug.toLowerCase();
	}
</script>

{#await promise}
	<p>...waiting</p>
{:then posts}
	{#each posts as post}
		<div class="mx-auto max-w-[400px]">
			<a
				class=" text-left  "
				rel="internal"
				on:click={() => {
					$showLogin = null;
				}}
				href={post.path}
			>
				<div class="flex py-2 px-6 dark:hover:bg-gray-600 hover:bg-gray-100 flex-row">
					<span class="grow">{post.meta.title}</span>
					<span class="italic text-xs">{ago(new Date(post.meta.date))} ago</span>
				</div>
			</a>
		</div>
	{/each}
	<!-- <p>The number is {number}</p> -->
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

<!-- {#each localPosts as post} -->
