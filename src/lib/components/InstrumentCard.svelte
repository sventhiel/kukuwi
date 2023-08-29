<script lang="ts">
 
 import { RangeSlider } from '@skeletonlabs/skeleton';

 export let id: number;
 export let name: string;
 export let image: string ;
 export let audio: string;

 let imageurl='/images/'+image;
 let audiourl='/audio/'+audio;

 let time = 0;
	let duration = 0;
	let paused = true;

 function start()
 {
   time=0;
   duration=0;
   paused = !paused;
 }

</script>

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


<div class="card btn cursor-pointer shadow-md hover:shadow-md lg:p-40 sm:p-5 md:p-10 hover:variant-filled-primary"  on:click={start} >
  <img src={imageurl} alt="{name}" class="w-full"/>
</div>