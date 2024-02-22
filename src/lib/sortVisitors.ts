/**
 * the array that come from the spreadsheets will be like this:
 * 
 * [
 *      ["name", "email", "message", "date", "time"],
 *      ["name", "email", "message", "date", "time"]
 * ]
 * 
 * in the function bellow we'll be organizing it into a  array of 
 * JSON objects as it should be ;)
 */

export function organizeVisitorGroup(visitors: Array<string>[]) {
    const keys: string[] = visitors[0]
    const visitors_info: Array<string>[] = visitors.slice(1, visitors[0].length)
    const sortedVisiitors: any[] = [];

    visitors_info.forEach((visitor) => {
        sortedVisiitors.push(sortVisitor(keys, visitor))
    })

    return sortedVisiitors;
}

/**
 * in the function bellow we'll be sorting the visitor in this state:
 * 
 * ["name", "email", "message", "date", "time"]
 * 
 * to a JSON object
 */

export function sortVisitor(keys: string[], visitor: string[]) {
    let sortedVisitor = {};

    keys.map((key, i) => {
        sortedVisitor = { ...sortedVisitor, [key]: visitor[i] }
    })

    return sortedVisitor
}