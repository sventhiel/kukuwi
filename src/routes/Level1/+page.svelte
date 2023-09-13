<script>
import InstrumentCards from "$lib/components/InstrumentCards.svelte";
import { instruments } from "$lib/data/data"
import GameOptions from "./GameOptions.svelte";


let selectedId=0;
let playId=0;

function selectFn(e)
{

    selectedId = e.detail;
    console.log("result", selectedId, playId)
}

 
</script>

<InstrumentCards {instruments} gameMode={true} on:select={selectFn}/>
<GameOptions {instruments} bind:playId />