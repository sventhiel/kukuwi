<script lang="ts">
 
 export let id: number;
 export let name: string;
 export let image: string ;
 export let audio: string;

 let url='/images/'+image;

</script>

<div class="card cursor-pointer shadow-xl hover:shadow-md p-40">
 <img src={url} alt="{name}" class="w-[80%]"/>
</div>