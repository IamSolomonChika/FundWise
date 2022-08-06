exports.getDate = () => {
    let options = { weekday: 'long', month: 'long', day: 'numeric' };
    let today = new Date();
    return today.toLocaleDateString("en-US", options);
}

exports.getWeekDay = () => {
    let options = { weekday: 'long' };
    let today = new Date();
    return today.toLocaleDateString("en-US", options);
}

exports.getNumericDay = () => {
    let options = { day: 'numeric' };
    let today = new Date();
    return today.toLocaleDateString("en-US", options);
}

exports.getMonth = () => {
    let options = { month: 'long' };
    let today = new Date();
    return today.toLocaleDateString("en-US", options);
}