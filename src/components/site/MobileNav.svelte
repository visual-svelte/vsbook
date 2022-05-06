<script>
	import { scale, fade } from 'svelte/transition';
	import { crossmorph } from '../utils/crossmorph.js';
	import { quintIn } from 'svelte/easing';
	import MenuMain from '$components/MenuMain.svelte';
	import MenuAcc from '$components/MenuAcc.svelte';
	import { clickOutside } from '../utils/clickOutside.js';
	import { state, dark, showLogin, showSignup } from '../stores/state';
	let easing = quintIn,
		duration = 400,
		delay = 100,
		keyCode,
		fadein = false;
	const [send, receive] = crossmorph({
		duration,
		easing,
		delay,
		fallback: scale
	});
	function openLogin() {
		$showLogin = true;
	}
	function hideLogin() {
		$showLogin = false;
		$state = null;
	}
	function openSignup() {
		$showSignup = true;
	}
	function hideSignup() {
		$showSignup = false;
	}
	function handleKeydown(event) {
		keyCode = event.keyCode;
		if (keyCode == 27) {
			hideSignup();
			hideLogin();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />
<nav
	class="font-sans dark:bg-gray-900 dark:border-gray-700 flex text-center flex-row h- justify-between py-1 px-2 bg-white shadow shadow-yellow-700 sm:items-baseline w-full"
>
	<div class="text-left w-16">
		{#if !$showLogin}
			<button
				class="menu bg-white dark:bg-gray-900  p-1 rounded"
				class:blur={$showSignup}
				class:active={$showLogin}
				on:click={openLogin}
				in:receive={{ key: 'login' }}
				out:send={{ key: 'login' }}
			>
				<span
					style="z-index: 9"
					out:fade={{ duration: 550 }}
					on:outroend={() => (fadein = true)}
					in:fade={{ delay: duration + 100 }}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill=""
						stroke={$dark ? 'white' : 'gray'}
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-menu"
						><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line
							x1="3"
							y1="18"
							x2="21"
							y2="18"
						/></svg
					></span
				>
			</button>
		{/if}
	</div>
	<a
		href="/"
		rel="internal"
		class:blur={$showSignup || $showLogin}
		class=" font-serif text-center dark:text-gray-100 text-gray-500 justify-center mt-2 md:mt-0 xs:align-middle "
	>
		Will Needham
	</a>
	<div class="text-right mr-2 mt-1  w-16">
		{#if !$showSignup}
			<button
				class="select-none"
				class:blur={$showLogin}
				class:active={$showSignup}
				on:click={openSignup}
				in:receive={{ key: 'signup' }}
				out:send={{ key: 'signup' }}
			>
				<span
					class="sm:text-md  text-gray-500 dark:text-gray-100 font-serif"
					style="z-index: 9"
					out:fade={{ duration: 550 }}
					on:outroend={() => (fadein = true)}
					in:fade={{ delay: duration + 100 }}>Aa</span
				>
			</button>
		{/if}
	</div>
</nav>

{#if $showLogin}
	<div class="pop-grid" class:fadein>
		<div
			class="will-change-transform"
			use:clickOutside
			on:click_outside={hideLogin}
			in:receive={{ key: 'login' }}
			out:send={{ key: 'login' }}
		>
			<MenuMain />
		</div>
	</div>
{/if}
{#if $showSignup}
	<div class="pop-grid" class:fadein>
		<div
			class=" will-change-transform"
			use:clickOutside
			on:click_outside={hideSignup}
			in:receive={{ key: 'signup' }}
			out:send={{ key: 'signup' }}
		>
			<MenuAcc />
		</div>
	</div>
{/if}
{#if $showLogin || $showSignup}
	<span in:fade out:fade={{ delay: 450 }} class="overlay" />
{/if}

<style>
	.login {
		grid-area: 1 / 1 / 2 / 2;
	}
	.signup {
		grid-area: 1 / 2 / 1 / 2;
	}
	.blur {
		filter: blur(2px);
	}
	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1;
		width: 100%;
		height: 100%;
		background: #0000008a;
		content: '';
		opacity: 1;
		-webkit-transition: opacity 0.5s;
		transition: opacity 0.5s;
		pointer-events: none;
	}
	.pop-grid {
		position: fixed;
		z-index: 999;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: grid;
		place-content: center;
		opacity: 0;
		transform: opacity 0.9s ease-out;
	}
	.fadein {
		opacity: 1;
	}
	.menu {
		position: fixed;
		top: 6px;
	}
</style>
