<script lang="ts">
	import { ProgressBar } from '@skeletonlabs/skeleton';

	import { onMount, createEventDispatcher } from 'svelte';
	import {base} from '$app/paths'

 export let id: number;
	export let i :number;
 export let name: string;
 export let image: string ;
 export let audios: string[];
	export let gameMode: boolean = false;


	let index = getRandomAudioIndex();


 let imageurl= base+"/images/"+image;
	let audiourl = base+'/audios/';
 $:audiourl;

	// console.log(audiourl, index, audios)
	let time = 0;
	let duration = 0;
	let paused = true;

	if(index>-1){ audiourl = audiourl + ""+audios[index]}
	

	// event
	const dispatch = createEventDispatcher();

 function clickFn()
	{
				if(gameMode) //if game mode is true, then dispatch id via click 
				{
						dispatch('select', id);
				}else
				{
					console.log("start");
					
					start();
				}

	}

 function start()
 {
   time=0;
   duration=0;
   paused = !paused;
		 console.log(i, audios, index, audios.length);
 }

 function getRandomAudioIndex()
	{
   if(audios != undefined)
			{
				return parseInt(""+Math.random() * (audios.length));
			}

			return -1;
	}

</script>



{#if audios.length>0}
<audio
		src={audiourl}
		bind:currentTime={time}
		bind:duration
		bind:paused
		preload="none"
		on:ended={() => {
			time = 0;
		}}
	/>
{/if}

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="card btn cursor-pointer shadow-md hover:shadow-md lg:p-20 sm:p-5 md:p-10 hover:variant-filled-primary"  on:click={clickFn} >
  <img src={imageurl} alt="{name}" class="w-full"/>
</div>

