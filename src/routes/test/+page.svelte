<script lang="ts">

	 import GIF from '$lib/components/GIF.svelte';

	 let ready:boolean = $state(true)

</script>


<div class="flex flex-col justify-center items-center w-screen h-screen bg-red-600 z-10">
	<button
		class="w-40 h-40 bg-blue-500 z-1"
		onclick={() => {ready=true}}

	>Lets Go</button>
</div>


{#if ready}
<div class="fixed top-0 bottom-0 flex flex-col justify-center items-center h-screen w-screen  z-20 b">
	<div class="h-5/6 max-h-5/6">

		<GIF success={true}></GIF>

	</div>
</div>
<div class="fixed top-0 bottom-0 flex flex-col justify-center items-center h-screen w-screen  z-15 opacity-80 bg-gray-500">
</div>
{/if}
