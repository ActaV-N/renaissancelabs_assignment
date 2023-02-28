/**
 * return array from 0 to i - 1
 * @param i 
 * @returns range(0, i)
 */
export const range = (i:number) => Array.from(new Array(i), (_, v) => v);