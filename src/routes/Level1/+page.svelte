<script lang="ts">
import InstrumentCards from "$lib/components/InstrumentCards.svelte";
import { instruments, successGifs, failGifs } from "$lib/data/data"

import GameOptions from "./GameOptions.svelte";

import type { ModalSettings } from "@skeletonlabs/skeleton";
import { getModalStore } from '@skeletonlabs/skeleton';

const modalStore = getModalStore();


let selectedId=0;
let playId=0;


function selectFn(e)
{
    selectedId = e.detail;
    console.log("result", selectedId, playId)

				const modal = getResultImage(selectedId==playId)
			modalStore.trigger(modal);
}

function getResultImage(valid:boolean)
{
		if(valid)
		{
			
			const image = successGifs[0];
			 let r: ModalSettings = {
				type: 'alert',
				// Data
				title: 'Richtig',
				image: image,
			};

			return r;

		}
		else
		{
			const image = failGifs[0];
			let r: ModalSettings = {
				type: 'alert',
				// Data
				title: 'Leider nicht richtig',
				image: image,
			};

			return r;

		}
}
 
</script>

<InstrumentCards {instruments} gameMode={true} on:select={selectFn}/>
<GameOptions {instruments} bind:playId />
