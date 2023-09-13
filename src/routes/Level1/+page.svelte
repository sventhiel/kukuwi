<script>
import InstrumentCards from "$lib/components/InstrumentCards.svelte";
import { instruments } from "$lib/data/data"
function selectFn(e)
{
    alert(e.detail);
    var selectedId = e.detail;
}

 
</script>

<h1>Level 0</h1>
<InstrumentCards {instruments} gameMode={true} on:select={selectFn}/>