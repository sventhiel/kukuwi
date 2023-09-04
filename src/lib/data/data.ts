import type { instrumentCardType } from "$lib/types/types";

export const instruments:instrumentCardType[] = [
	{
		id: 1,
		name: 'Schlagzeug',
		image:'001-schlagzeug.png',
		audios:[
			'Drums - Funk 111 bpm.mp3',
			'Drums - Funk 112 bpm.mp3',
			'Drums - Funk 122 bpm.mp3',
			'Drums - Jazz Break 125 bpm.mp3',
			'Drums - Jazz Brushes 70 bpm.mp3',
			'Drums - Rock 72 bpm.mp3'
		]
	},
	{
		id: 2,
		name: 'Gitarre',
		image:'002-spanische-gitarre.png',
		audios:[
			'Gt1 AfricanFunk Gm 120bpm.mp3',
			'Gt1 Alternative Em 120bpm.mp3',
			'Gt1 Blues Amaj 88bpm.mp3',
			'Gt1 Chill Bm 108bpm.mp3',
			'Gt1 Funk Cmaj 124bpm.mp3',
			'Gt1 Punk Emaj 170bpm.mp3'
		]
		},
	{
		id: 3,
		name: 'Bass',
		image:'003-elektrische-gitarre.png',
		audios:[
			'Bs1 AfricanFunk Gm 120bpm.mp3',
			'Bs1 Alternative Em 120bpm.mp3',
			'Bs1 Blues Amaj 88bpm.mp3',
			'Bs1 Chill Bm 108bpm.mp3',
			'Bs1 Funk Cmaj 124bpm.mp3',
			'Bs1 Punk Emaj 170bpm.mp3'
		]
	},
	{
		id: 4,
		name: 'Synthesizer',
		image:'004-elektrisches-klavier.png',
		audios:['']
	},
	{
		id: 5,
		name: 'Piano',
		image:'005-tastatur.png',
		audios:[
			'Piano Grand Piano Dirty Stabs E Minor 90 bpm.mp3'
		]
	},
	{
		id: 6,
		name: 'Trompete',
		image:'006-trompete.png',
		audios:['']
	},
	{
		id: 7,
		name: 'Violine',
		image:'007-violine.png',
		audios:['']
	},
	{
		id: 8,
		name: 'Saxophone',
		image:'008-saxophon.png',
		audios:['']
	},
	{
		id: 9,
		name: 'Mikrophone',
		image:'009-karaoke.png',
		audios:[
			'Vocal Beatbox Quasheesh.mp3',
			'Vocal Demo Harmony.mp3',
			'Vocal Kyathe Monks.mp3',
			'Vocal L10 Demo Voc Reverb 1.mp3'
		]
	}
]
