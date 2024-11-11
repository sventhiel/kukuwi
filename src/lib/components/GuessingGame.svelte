
<script lang="ts">


    import SoundControl from "$lib/components/SoundControl.svelte";
    import {base} from '$app/paths';
    import type {instrumentCardType} from "$lib/types/types";
    import MidiBoardGrid from "$lib/components/MidiBoardGrid.svelte";
    import MusicControl from "$lib/components/MusicControl.svelte";
    import { writable } from "svelte/store";

    let {
        instruments,
        active_tile_list,
        pause_tile_list,
        board_bg_color = "bg-[#252525]",
        track_source,

    }:{
        instruments:Array<instrumentCardType>,
        active_tile_list:Array<boolean>,
        pause_tile_list:Array<boolean>,
        onmouseup:(end_of_song:boolean,id:number) => any,
        board_bg_color?:string,
        track_source:string,
        track_paused?:boolean,

    } = $props();


    let sound_level_float:number = $state(0.4);


    function handle_play_button():void{


    }


    let track_paused = $state(false);





    let time:number= $state(0);
    let time_running:boolean = $state(false);
    let tries:number = $state(0);
    let repeats:number = $state(0);


    function start() {

		setInterval(() => {
			time++
            console.log(time)
		}, 1000)

	}

    start();

</script>




<div class="
            flex
            flex-row
            justify-evenly
            rounded-2xl
            {board_bg_color}
            w-full
            h-full
            p-3
            lg:p-10
            border-b-gray-600
            border-l-gray-200
            border-t-gray-400
            border-r-gray-400
            border-b-[20px]
            border-l-[10px]
            border-r-[10px]
            border-t-[10px]
            shadow-2xl [rotate-y-20deg]">


        <div class="basis-2/12">
            <MusicControl

                time={time}
                track_source = {track_source}
                bind:sound_level_float = {sound_level_float}
                bind:track_paused = {track_paused}
                tries={tries}
                repeats={repeats}
                >
            </MusicControl>
        </div>

        <div class="basis-8/12 ">
            <MidiBoardGrid
                    bind:sound_level_float = {sound_level_float}
                    active_tile_list = {active_tile_list}
                    pause_tile_list = {pause_tile_list}
                    use_tile_sounds = {false}
                    instruments = {instruments}
                    onmouseup = {handle_play_button}
            ></MidiBoardGrid>
        </div>

        <div class="basis-1/12 " >
            <SoundControl
                    bind:sound_level_float={sound_level_float}
            ></SoundControl>
        </div>

</div>

<div>{time}</div>

