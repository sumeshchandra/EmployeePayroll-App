let employeePayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    if (site_properties.use_local_storage.match("true")) {
        getListFromLocalStorage();
    }
    else {
        getListFromJsonServer();
    }
});

const getListFromLocalStorage = () => {
    employeePayrollList = localStorage.getItem('empList') ? JSON.parse(localStorage.getItem('empList')) : [];
    processEmployeePayrollDataResponse();
}

const processEmployeePayrollDataResponse = () => {
    document.querySelector(".emp-count").textContent = employeePayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');
}

const getListFromJsonServer = () => {
    makeServiceCall("GET", site_properties.server_url, true)
        .then(responseText => {
            employeePayrollList = JSON.parse(responseText);
            processEmployeePayrollDataResponse();
        })
        .catch(error => {
            console.log("GET ERROR STATUS : " + JSON.stringify(error));
            employeePayrollList = [];
            processEmployeePayrollDataResponse();
        });
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
        <img src="../assets/icons/delete-black-18dp.svg" alt="delete" id="${empData.id}" onclick="remove(this)">
        <img src="../assets/icons/create-black-18dp.svg" alt="edit" id="${empData.id}" onclick="update(this)">
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
    let empData = employeePayrollList.find(empData => empData.id == node.id);
    if (!empData) return;
    const index = employeePayrollList.map(empData => empData.id).indexOf(empData.id);
    employeePayrollList.splice(index, 1);
    localStorage.setItem("empList", JSON.stringify(employeePayrollList));
    document.querySelector(".emp-count").textContent = employeePayrollList.length;
    createInnerHtml();
}

const update = (node) => {
    let empData = employeePayrollList.find(empData => empData.id == node.id);
    if (!empData) return;
    localStorage.setItem('editEmp', JSON.stringify(empData));
    window.location.replace(site_properties.add_emp_payroll_page);
}