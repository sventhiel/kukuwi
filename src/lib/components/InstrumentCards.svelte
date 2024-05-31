<script lang="ts">
 import InstrumentCard from "$lib/components/InstrumentCard.svelte";
 import type {instrumentCardType} from "$lib/types/types"


 export let gameMode= false;
 export let instruments:instrumentCardType[] = [];


</script>

<div class="flex justify-center pt-5" >
    <div class="w-5/6 max-w-[3000px]">
        <div class="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 self-center gap-5 px-5 ">
            {#each instruments as instrument, i}
                <InstrumentCard {i} {...instrument}  {gameMode} on:select/> 
            {/each}
        </div>
    </div>
</div>


