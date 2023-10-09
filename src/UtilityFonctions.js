export function getDateDay(myDate){
    const day = new Date(myDate);
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return dayNames[day.getDay()];
}

export default getDateDay;