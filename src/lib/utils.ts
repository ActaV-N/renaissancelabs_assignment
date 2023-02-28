/**
 * return array from 0 to i - 1
 * @param i 
 * @returns range(0, i)
 */
export const range = (i:number) => Array.from(new Array(i), (_, v) => v);

/**
 * Function for converting bit number: 
 * 1,000 => k
 * 1,000,000 => m
 * @param n 
 * @returns original n or converted text (ex: 23.5k)
 */
export const unitAbbreviation = (n: number) => {
    const getQuotient = (n:number, unit:number) => Math.floor(n / unit);
    const getRemain = (n:number, unit: number) => Math.floor((n % unit) / (unit / 10));

    let unit;
    let unitText;
    if(n >= 1000000){
        unit = 1000000;
        unitText='m'
    } else if(n >= 1000){
        unit = 1000;
        unitText='k'
    } else{
        return n
    }

    return `${getQuotient(n, unit)}.${getRemain(n, unit)}${unitText}`;
}