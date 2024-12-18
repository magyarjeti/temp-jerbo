<script lang="ts">
	import { Button, TextField } from '@packages/ui/components/material3';

	let email: string = $state('');
	let password: string = $state('');
</script>

<div class="container">
	<form method="post" action="?/login" class="mx-auto flex flex-col gap-2">
		<TextField type="email" bind:value={email} label="Email" name="email"></TextField>
		<TextField type="password" bind:value={password} label="Jelszó" name="password"></TextField>
		<Button type="submit">Bejelentkezés</Button>
	</form>
</div>
