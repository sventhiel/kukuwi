<script>
	import { AppRail, AppRailAnchor, AppRailTile, AppShell } from '@skeletonlabs/skeleton';
	import { AppBar } from '@skeletonlabs/skeleton';
	import Logo from "$lib/assets/logo.png"
	import '../app.postcss';

	let currentTile="test"

</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="lead">
				<img src={Logo} alt="download icon" class="w-24"/>
			</svelte:fragment>
		
			<h1 class="h1">Instrumenten Spiel </h1>
		</AppBar>
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		<!-- Hidden below Tailwind's large breakpoint -->
		<AppRail>
			<svelte:fragment slot="lead">
				<AppRailAnchor href="/" >(icon)</AppRailAnchor>
			</svelte:fragment>
			<!-- --- -->
			<AppRailTile href="/Level1" bind:group={currentTile} name="1" value={0} title="Level 1">
				<AppRailAnchor href="/Level1" >(icon)</AppRailAnchor>
				<span>Level 1</span>
			</AppRailTile>
			<AppRailTile bind:group={currentTile} name="tile-2" value={1} title="Level 2">
				<AppRailAnchor href="/Level2" >(icon)</AppRailAnchor>
				<span>Level 2</span>
			</AppRailTile>

		</AppRail>
	</svelte:fragment>
	

	<!-- <svelte:fragment slot="sidebarLeft">Sidebar Left</svelte:fragment> -->
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<!-- <svelte:fragment slot="pageFooter">Page Footer</svelte:fragment> -->
	<!-- (footer) -->
</AppShell>
