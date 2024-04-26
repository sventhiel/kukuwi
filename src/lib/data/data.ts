import type { instrumentCardType } from "$lib/types/types";
import { base } from "$app/paths";

export const instruments:instrumentCardType[] = [
	{
		id: 1,
		name: 'Schlagzeug',
		image:'instrumente/icons8-drums-100.png',
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
		image:'instrumente/icons8-ukelele-100.png',
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
		image:'instrumente/icons8-bass-guitar-100.png',
		audios:[
			'Bs1 AfricanFunk Gm 120bpm.mp3',
			'Bs1 Alternative Em 120bpm.mp3',
			'Bs1 Blues Amaj 88bpm.mp3',
			'Bs1 Chill Bm 108bpm.mp3',
			'Bs1 Funk Cmaj 124bpm.mp3',
			'Bs1 Punk Emaj 170bpm.mp3'
		]
	 },
	// {
	// 	id: 4,
	// 	name: 'Synthesizer',
	// 	image:'004-elektrisches-klavier.png',
	// 	audios:['']
	// },
	{
		id: 5,
		name: 'Piano',
		image:'instrumente/icons8-piano-100.png',
		audios:[
			'Piano Grand Piano Dirty Stabs E Minor 90 bpm.mp3',
			'Piano Ostinato Focus F Dorian 85 bpm.mp3',
			'Piano Ostinato Retrospection D Major 100 bpm.mp3',
			'Piano Phrase Blues Sky Eb Minor 92bpm.mp3',
			'Piano Phrase Lazy Day IV-I Ab Major 105 bpm.mp3',
			'Piano Progression City Drive A Minor 125 bpm.mp3'
		]
	},
	{
		id: 6,
		name: 'Trompete',
		image:'instrumente/icons8-trumpet-100.png',
		audios:[
			'Trumpet 87bpm G minor.mp3',
			'Trumpet 105bpm D minor.mp3',
			'Trumpet Sax Sound Instrument.mp3',
			'Trumpet Solo F Instrument.mp3'
		]
	},
	{
		id: 7,
		name: 'Violine',
		image:'instrumente/icons8-violin-100.png',
		audios:['Violine 1.mp3']
	},
	{
		id: 8,
		name: 'Saxophone',
		image:'instrumente/icons8-saxophone-100.png',
		audios:[
			'Sax 60bpm E minor.mp3'
		]
	},
	{
		id: 9,
		name: 'Mikrophone',
		image:'instrumente/icons8-microphone-100.png',
		audios:[
			'Vocal Beatbox Quasheesh.mp3',
			'Vocal Demo Harmony.mp3',
			'Vocal Kyathe Monks.mp3',
			'Vocal L10 Demo Voc Reverb 1.mp3'
		]
	},
	{
		id: 10,
		name: 'Harmonium',
		image:'instrumente/icons8-harmonica-100.png',
		audios:[
			'Harmonium_124bpm_E.mp3'
		]
	},
	{
		id: 11,
		name: 'Banjo',
		image:'instrumente/icons8-banjo-100.png',
		audios:[
			'Banjo-exotic-loop_100bpm_B_minor.mp3'
		]
	},
	{
		id: 12,
		name: 'Flöte',
		image:'instrumente/icons8-flute-100.png',
		audios:[
			'Flute-vibey_150bpm.mp3'
		]
	}
]


export const successGifs:string[] = 
[
	"/images/success1.gif",
	"/images/success2.gif",
	"/images/success3.gif",
	"/images/success4.gif",
	"/images/success5.gif"
]

export const failGifs:string[] = 
[
	"/images/fail1.gif",
	// "/images/fail2.gif",
	"/images/fail3.gif",
	"/images/fail4.gif",
]