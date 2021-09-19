const THOUSAND = 1000
const MILLION = 1000000
const BILLION = 1000000000

export function showNumber(num) {
	if(num>BILLION) return Math.round(num/BILLION*10)/10 + 'B'
	else if(num>MILLION) return Math.round(num/MILLION*10)/10 + 'M'
	else if(num>THOUSAND) return Math.round(num/THOUSAND*10)/10 + 'K'
	else return num;
}