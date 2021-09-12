class EmployeePayroll {

    //Getters & Setters
    id;
    
    get name() {
        return this._name;
    }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        if (nameRegex.test(name)) {
            this._name = name;
        } else {
            throw 'Name is in Incorrect Format';
        }
    }
    get profilePic() {
        return this._profilePic;
    }
    set profilePic(profilePic) {
        this._profilePic = profilePic;
    }
    get gender() {
        return this._gender;
    }
    set gender(gender) {
        this._gender = gender;
    }
    get department() {
        return this._department;
    }
    set department(department) {
        this._department = department;
    }
    get salary() {
        return this._salary;
    }
    set salary(salary) {
        this._salary = salary;
    }
    get note() {
        return this._note;
    }
    set note(note) {
        this._note = note;
    }
    get startDate() {
        return this._startDate;
    }
    set startDate(startDate) {
        if (startDate > new Date()) {
            throw 'Date is A Future Date !';
        }
        var diff = Math.abs(new Date().getTime() - startDate.getTime());
        if (diff / (1000 * 60 * 60 * 24) > 30) {
            throw 'Date is Not Within 30 Days !';
        }
        this._startDate = startDate;
    }

    //Methods
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate === undefined ? "Undefined" : this.startDate.toLocaleDateString("en-US", options);
        return "id : " + this.id + " Name : " + this.name + " Gender : " + this.gender + " Profile Pic : "
            + this.profilePic + " Department : " + this.department + " Salary : " + this.salary + " Start Date : " + empDate
            + " Notes : " + this.note;
    }
}