<script>
 import InstrumentCard from "$lib/components/InstrumentCard.svelte";
 import { instruments } from "$lib/data/data"


</script>

<div class="flex justify-center">
    <div class="w-full max-w-[3000px] md:max-w-[1200px]">
        <div class="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 self-center gap-5 p-5 my-5">
            {#each instruments as instrument, i}
                <div class="w-full h-full">
                    <InstrumentCard {i} {...instrument}/> 
                </div>
            {/each}
        </div>
    </div>
</div>


