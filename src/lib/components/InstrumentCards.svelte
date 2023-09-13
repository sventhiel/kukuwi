<script lang="ts">
 import InstrumentCard from "$lib/components/InstrumentCard.svelte";
 import type {instrumentCardType} from "$lib/types/types"


 export let gameMode= false;
 export let instruments:instrumentCardType[] = [];

</script>

<div class="flex justify-center">
    <div class="w-full max-w-[3000px]">
        <div class="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 self-center gap-14 p-5 ">
            {#each instruments as instrument, i}
                <InstrumentCard {i} {...instrument}  {gameMode} on:select/> 
            {/each}
        </div>
    </div>
</div>


