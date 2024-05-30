<script>
	import { AppRail, AppRailAnchor, AppRailTile, AppShell } from '@skeletonlabs/skeleton';
	import Logo from "$lib/assets/logo.png"
	import '../app.postcss';
	import { updated } from '$app/stores';
	import {base} from '$app/paths'


	let currentTile = 0;
	$:currentTile

	function updateTile(i)
	{
		currentTile = i;
		console.log("currentTile",currentTile)
	}

	import { initializeStores } from '@skeletonlabs/skeleton';

 initializeStores();

</script>

<AppShell>
	<!--<svelte:fragment slot="header">
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="lead">
				<img src={Logo} alt="download icon" class="w-24"/>
			</svelte:fragment>
		
			<h1 class="h1">Instrumenten Spiel </h1>
		</AppBar>
	</svelte:fragment> -->

	<svelte:fragment slot="sidebarLeft">
		<!-- Hidden below Tailwind's large breakpoint -->
		<AppRail>
			<svelte:fragment slot="lead">
				<AppRailAnchor href="{base}/" on:click={()=>updateTile(0)}><img src={Logo} alt="download icon" /></AppRailAnchor>
			</svelte:fragment>
			<!-- --- -->
			<AppRailTile href="{base}/Level1" bind:group={currentTile} name="1" value={1} title="Level 1" >
				<AppRailAnchor href="{base}/Level1" on:click={()=>updateTile(1)}><h1 class="h1">1</h1></AppRailAnchor>
			</AppRailTile>
			<AppRailTile bind:group={currentTile} name="tile-2" value={2} title="Level 2">
				<AppRailAnchor href="{base}/Level2" on:click={()=>updateTile(2)}><h1 class="h1">2</h1></AppRailAnchor>
			</AppRailTile>
			<AppRailTile bind:group={currentTile} name="tile-3" value={3} title="Level 3">
				<AppRailAnchor href="{base}/Level3" on:click={()=>updateTile(2)}><h1 class="h1">3</h1></AppRailAnchor>
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
