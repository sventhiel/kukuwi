<script>
 import InstrumentCard from "$lib/components/InstrumentCard.svelte";
 import { instruments } from "$lib/data/data"


</script>


<div class="grid grid-cols-5 self-center gap-14 p-5 my-5">

 {#each instruments as instrument}
     <InstrumentCard {...instrument}/> 
 {/each}

</div>


