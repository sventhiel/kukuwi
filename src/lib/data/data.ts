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
		audios:['']
	},
	{
		id: 3,
		name: 'Bass',
		image:'003-elektrische-gitarre.png',
		audios:['']
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
		audios:['']
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
		audios:['']
	}
]
