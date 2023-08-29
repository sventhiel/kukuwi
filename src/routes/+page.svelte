<script>
 import InstrumentCard from "$lib/components/InstrumentCard.svelte";
 import { instruments } from "$lib/data/data"


</script>

<div class="flex justify-center">
    <div class="w-full max-w-[3000px]">
        <div class="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 self-center gap-14 p-5 my-5">
            {#each instruments as instrument}
                <InstrumentCard {...instrument}/> 
            {/each}
        </div>
    </div>
</div>


