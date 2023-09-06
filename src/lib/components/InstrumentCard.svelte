<script lang="ts">
	import { ProgressBar } from '@skeletonlabs/skeleton';

	import { onMount } from 'svelte';

 export let id: number;
	export let i :number;
 export let name: string;
 export let image: string ;
 export let audios: string[];


	let index = getRandomAudioIndex();


 let imageurl='/images/'+image;
	let audiourl = '/audios/';
 $:audiourl;

	// console.log(audiourl, index, audios)
	let time = 0;
	let duration = 0;
	let paused = true;

	if(index>-1){ audiourl = audiourl + ""+audios[index]}
	

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

<div class="card btn cursor-pointer shadow-md hover:shadow-md lg:p-20 sm:p-5 md:p-10 hover:variant-filled-primary"  on:click={start} >
  <img src={imageurl} alt="{name}" class="w-full"/>
</div>

