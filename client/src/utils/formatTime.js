export const getDateAndTimeFromTimestamp = (timestamp) => {
    const time = timestamp * 1000;
    if(time) {
        return new Date(timestamp).toDateString() + ", " + new Date(timestamp).toTimeString()
    }
    return null
}  
 