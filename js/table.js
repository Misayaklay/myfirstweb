// 新增数据函数
function addData() {
    var table = document.getElementById("table");
    // console.log(table);

    length = table.rows.length
    // console.log(length);

    // 插入行节点
    var new_rows = table.insertRow(length);
    // console.log(new_rows);

    // 插入列节点对象
    var nameCol = new_rows.insertCell(0);
    var contactCol = new_rows.insertCell(1);
    var operationCol = new_rows.insertCell(2);

    // 修改节点内容
    nameCol.innerHTML = '未命名';
    contactCol.innerHTML = "无联系方式";
    operationCol.innerHTML = "<button onclick='editRow(this)'>编辑</button> <button onclick='deleteRow(this)'>删除</button>";
}

// 删除函数
function deleteRow(button) {
    // console.log(button);
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

//  编辑函数
function editRow(button) {
    // console.log(button);
    var row = button.parentNode.parentNode;
    var name = row.cells[0];
    var contact = row.cells[1];

    var inputName = prompt("请输入名字：");
    var inputcontact = prompt("请输入联系方式：");

    name.innerHTML = inputName;
    contact.innerHTML = inputcontact;

}


