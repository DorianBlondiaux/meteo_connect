// Take a date as parameter and return the litteral value
function getDateDay(myDate){
    const day = new Date(myDate);
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return dayNames[day.getDay()];
}


export default getDateDay;
