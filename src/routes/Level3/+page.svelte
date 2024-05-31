<script lang="ts">
	import InstrumentCards from '$lib/components/InstrumentCards.svelte';
	import { instruments, successGifs, failGifs } from '$lib/data/data';

	import GameOptions from '$lib/components/GameOptions.svelte';

	import type { ModalSettings } from '@skeletonlabs/skeleton';
	import { getModalStore } from '@skeletonlabs/skeleton';
	import { base } from '$app/paths';
	import { getRandomIndex, getRandomSubset } from '$lib/helper';
	import { onMount } from 'svelte';
 import type {instrumentCardType} from '$lib/types/types'
	import GameResult from '$lib/components/GameResult.svelte';

	const modalStore = getModalStore();

	let selectedId = 0;
	let playId = 0;

	let instrumentSubset:instrumentCardType[]
	$:instrumentSubset;

onMount(()=>{
		instrumentSubset = getRandomSubset(instruments,8);

})

	function selectFn(e:any) {
		selectedId = e.detail;
		console.log('result', selectedId, playId);

		const modal = getResultImage(selectedId == playId);
		modalStore.trigger(modal);
	}

	function getResultImage(valid: boolean) {
		if (valid) {
			const image = base + successGifs[getRandomIndex(successGifs)];
			let r: ModalSettings = {
				type: 'alert',
				// Data
				title: 'Richtig',
				image: image
			};

			return r;
		} else {
			const image = base + failGifs[getRandomIndex(failGifs)];
			let r: ModalSettings = {
				type: 'alert',
				// Data
				title: 'Leider nicht richtig',
				image: image,
				buttonTextCancel: 'X'
			};

			return r;
		}
	}
</script>

{#if instrumentSubset}
<InstrumentCards instruments={instrumentSubset} gameMode={true} on:select={selectFn} />
<GameOptions instruments={instrumentSubset} bind:playId />
<GameResult url={"/Level3"} />
{/if}