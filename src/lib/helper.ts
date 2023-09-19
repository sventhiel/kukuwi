import { base } from "$app/paths";

export function getRandomIndex(list:any[])
	{
   if(list != undefined)
			{
				return parseInt(""+Math.random() * (list.length));
			}

			return -1;
	}

	export function getRandomSubset(list:any[], count:number)
	{
				const indexList:number[] = [];
				const tmp:any[] = [];

				do
				{
						const i = getRandomIndex(list);
						if(!indexList.includes(i))
						{
							 indexList.push(i);
								tmp.push(list[i])
						}

				}while(tmp.length<count)

				return tmp
	}

	export const goTo = async (url, intern = true) => {
		if (intern == true) {
			// go to inside bexis2
			if (window != null && base != null && url != null) {
				window.open(base + url, '_self')?.focus();
			}
		} // go to a external page
		else {
			window.open(url, '_blank')?.focus();
		}
	};