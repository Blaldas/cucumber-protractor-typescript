/**
 * This file is used to store methods that are general an non selenium related;
 */

export async function getMonthName(monthNumber: number): Promise<string> {
    const date = new Date();
    date.setMonth(monthNumber - 1); // Subtract 1 since month numbers are zero-based in JavaScript

    const options: Intl.DateTimeFormatOptions = { month: 'long' };
    const formatter = new Intl.DateTimeFormat('en', options);

    return formatter.format(date);
}

export async function getYear(): Promise<number> {
    return await new Date().getFullYear();
}


export async function getCurrentMonth(): Promise<number> {
    return await new Date().getMonth();
}

/**
 * This method generates a random string of n lenght
 * @param length 
 * @returns 
 */
export async function generateString(n: number) {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < n; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}
