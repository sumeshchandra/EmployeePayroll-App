window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
        "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    const innerHtml = `${headerHtml}
<tr>
    <td><img class="profile" src="../assets/profile-images/Ellipse -10.png" alt=""></td>
    <td>Yudhajit Koley</td>
    <td>Male</td>
    <td>
        <div class="dept-label">Engineer</div>
        <div class="dept-label">Finance</div>
    </td>
    <td>50000</td>
    <td>1 Nov 2020</td>
    <td>
        <img src="../assets/icons/delete-black-18dp.svg" alt="delete" id="1" onclick="remove(this)">
        <img src="../assets/icons/create-black-18dp.svg" alt="edit" id="1" onclick="update(this)">
    </td>
</tr>
    `;
    document.querySelector('#display').innerHTML = innerHtml;
}