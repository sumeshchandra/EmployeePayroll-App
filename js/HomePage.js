let employeePayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    employeePayrollList = getListFromLocalStorage();
    document.querySelector(".emp-count").textContent = employeePayrollList.length;
    createInnerHtml();
});

const getListFromLocalStorage = () => {
    return localStorage.getItem('empList') ? JSON.parse(localStorage.getItem('empList')) : [];
}

const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
        "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    if (employeePayrollList.length == 0) return;
    let innerHtml = `${headerHtml}`;
    for (const empData of employeePayrollList) {
        innerHtml = `${innerHtml}
<tr>
    <td><img class="profile" src="${empData._profilePic}" alt=""></td>
    <td>${empData._name}</td>
    <td>${empData._gender}</td>
    <td>${getDeptHtml(empData._department)}</td>
    <td>${empData._salary}</td>
    <td>${stringifyDate(empData._startDate)}</td>
    <td>
        <img src="../assets/icons/delete-black-18dp.svg" alt="delete" id="${empData._name}" onclick="remove(this)">
        <img src="../assets/icons/create-black-18dp.svg" alt="edit" id="${empData._name}" onclick="update(this)">
    </td>
</tr>
    `;
    }
    document.querySelector('#display').innerHTML = innerHtml;
}

const getDeptHtml = (list) => {
    let deptHtml = '';
    for (const dept of list) {
        deptHtml = `${deptHtml}<div class="dept-label">${dept}</div>`;
    }
    return deptHtml;
}

const remove = (node) => {
    let empData = employeePayrollList.find(empData => empData._name == node.id);
    if (!empData) return;
    const index = employeePayrollList.map(empData => empData._name).indexOf(empData._name);
    employeePayrollList.splice(index, 1);
    localStorage.setItem("empList", JSON.stringify(employeePayrollList));
    document.querySelector(".emp-count").textContent = employeePayrollList.length;
    createInnerHtml();
}