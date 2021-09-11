window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
        "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    let empList = createEmployeePayrollJSON();
    let innerHtml = `${headerHtml}`;
    for (const empData of empList) {
        innerHtml = `${innerHtml}
<tr>
    <td><img class="profile" src="${empData._profilePic}" alt=""></td>
    <td>${empData._name}</td>
    <td>${empData._gender}</td>
    <td>${getDeptHtml(empData._department)}</td>
    <td>${empData._salary}</td>
    <td>${empData._startDate}</td>
    <td>
        <img src="../assets/icons/delete-black-18dp.svg" alt="delete" name="${empData._id}" onclick="remove(this)">
        <img src="../assets/icons/create-black-18dp.svg" alt="edit" name="${empData._id}" onclick="update(this)">
    </td>
</tr>
    `;
    }
    document.querySelector('#display').innerHTML = innerHtml;
}

const createEmployeePayrollJSON = () => {
    let empListLocal = [
        {
            _name: 'Yudhajit Koley',
            _gender: 'Male',
            _department: [
                'Engineering', 'Sales'
            ],
            _salary: '67000',
            _startDate: '16 Sep 2020',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '../assets/profile-images/Ellipse -1.png'
        },
        {
            _name: 'Ram Kabir',
            _gender: 'Male',
            _department: [
                'Finance'
            ],
            _salary: '56000',
            _startDate: '16 May 2020',
            _note: '',
            _id: new Date().getTime() + 1,
            _profilePic: '../assets/profile-images/Ellipse -4.png'
        }
    ];
    return empListLocal;
}

const getDeptHtml = (list) => {
    let deptHtml = '';
    for (const dept of list) {
        deptHtml = `${deptHtml}<div class="dept-label">${dept}</div>`;
    }
    return deptHtml;
}