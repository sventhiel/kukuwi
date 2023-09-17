export function getRandomIndex(list:any[])
	{
   if(list != undefined)
			{
				return parseInt(""+Math.random() * (list.length));
			}

			return -1;
	}