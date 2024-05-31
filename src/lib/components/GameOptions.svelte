<script lang="ts">
	import type { instrumentCardType } from "$lib/types/types";
	import { onMount } from "svelte";
	import Fa from 'svelte-fa'
 import { faPlay } from '@fortawesome/free-solid-svg-icons'
 import {base} from '$app/paths'
	import { getRandomIndex } from '$lib/helper'

 export let playId:number = 0 ;
 export let instruments:instrumentCardType[] = [];

 let audiourl = base+'/audios/';
	let i = 0;
	let time = 0;
	let duration = 0;
	let paused = true;


 const index:number = getRandomIndex(instruments);
 const instrument = instruments[index];
 playId = instrument.id;

 i = getRandomIndex(instrument.audios);
 if(i>-1){ audiourl = audiourl + ""+instrument.audios[i]}

 function start()
 {
   time=0;
   duration=0;
   paused = !paused;
   
 }

 </script>
<div class="p-5">
<audio
src={audiourl}
bind:currentTime={time}
bind:duration
bind:paused
preload="none"
on:ended={() => {
 time = 0;
}}/>


<div class="flex justify-center ">
	<div class="flex w-5/6  space-x-3">
		<div class="flex-none">			
			<button class="btn variant-filled-primary" on:click={()=>paused = !paused}><Fa icon={faPlay}/></button>
		</div>
		<div class="grow">
			<progress class="grow" value={time} max={duration} />
		</div>
	</div>
</div>
</div>
