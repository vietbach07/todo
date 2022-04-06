function getFormattedDate(date) {
    var year = date.getFullYear();

    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;

    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;

    return year + '-' + month + '-' + day;
    // return month + '/' + day + '/' + year;
}

function toDate(dateStr) {
    var parts = dateStr.split("-")
    return new Date(parts[0], parts[1] - 1, parts[2])
}

const dispatchEvent = (name) => {
    const event = new Event(name);
    window.dispatchEvent(event);
}
export {
    getFormattedDate,
    toDate,
    dispatchEvent,
}