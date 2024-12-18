<script lang="ts">
	import { Button, Card, IconButton, TextField } from './material3';
	import { enhance } from '$app/forms';
	import clickOutside from '../actions/clickOutside';

	export let loginFormAction = '/auth?/login';
	export let logoutFormAction = '/auth?/logout';
	export let user:
		| { firstName?: string | null; lastName?: string | null; email?: string | null }
		| null
		| undefined = undefined;
	let email = '';
	let password = '';
	let showUserMenu = false;
	const toggleUserMenu = () => {
		showUserMenu = !showUserMenu;
	};
	// TODO: how to close menu when clicking outside in Svelte 5
	const closeMenu = () => {
		showUserMenu = false;
	};
</script>

<div use:clickOutside onclickoutside={closeMenu} class="relative">
	<IconButton onclick={toggleUserMenu} icon="account_circle" />
	{#if showUserMenu}
		<div class="absolute right-0 top-full">
			<Card variant="elevated">
				<div class="p-6">
					<form
						method="post"
						action={user ? logoutFormAction : loginFormAction}
						class="mx-auto flex w-72 flex-col gap-4"
						use:enhance
					>
						<input type="hidden" name="currentUrl" value={window.location.href} />
						{#if user}
							{#if user.email}<div>{user.email || ''}</div>{/if}
							{#if user.firstName || user.lastName}<div>
									{user.lastName || ''}
									{user.firstName || ''}
								</div>{/if}
							<Button variant="elevated" icon="settings">Beállítások</Button>
							<Button type="submit" variant="outlined">Kijelentkezés</Button>
						{:else}
							<TextField type="email" bind:value={email} label="Email" name="email" class="w-full"
							></TextField>
							<TextField
								type="password"
								bind:value={password}
								label="Jelszó"
								name="password"
								class="w-full"
							></TextField>
							<Button type="submit">Bejelentkezés</Button>
						{/if}
					</form>
				</div>
			</Card>
		</div>
	{/if}
</div>
