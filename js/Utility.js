const stringifyDate = (date) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const newDate = !date ? "undefined" : new Date(Date.parse(date)).toLocaleDateString('en-GB', options);
    return newDate;
}

const checkName = (name) => {
    let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if (!nameRegex.test(name)) {
        throw 'Name is Incorrect !';
    }
}

const checkStartDate = (startDate) => {
    if (startDate > new Date()) {
        throw 'Date is A Future Date !';
    }
    var diff = Math.abs(new Date().getTime() - startDate.getTime());
    if (diff / (1000 * 60 * 60 * 24) > 30) {
        throw 'Date is Not Within 30 Days !';
    }
}