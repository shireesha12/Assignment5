/*eslint-env browser*/
var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

	var employees, i;
    var html = "";
    var html1 = "";
    employees =	[["Zak", "Developer", 4567], ["Mark", "QA", 5643], ["Smith", "Engineer", 8970], ["John", "Staff", 1349], ["Joe", "Engineer", 7890]];



function show() {
	"use strict";
	html += "Showing " + employees.length + " Employees";
	$("lineText").innerHTML = html;
	
	html1 += "<tr><th>Name </th>" + "<th>Title </th>" + "<th>Extension </th>" + "<th></th></tr>";
    for (i = 0; i < employees.length; i += 1) {
		html1 += "<tr><td>" + employees[i][0] + "</td>" + "<td>" + employees[i][1] + "</td>" + "<td>" + employees[i][2] + "</td>" + "<td><input type='button' value='Delete' onclick='deleteRow(this)'> </td></tr>";
   }
     $("employee_info").innerHTML = html1;
	
	}

var processEntries = function () {
   "use strict";
    var header, html4, html5, requried, msg, name, title, extension;
    
    header = "";
	html4 = "";
    html5 = "";
    requried = "<span>Requried Field..</span>";
    msg = "please review your entries and complete all requried fields";
    name = $("name").value;
    title = $("title").value;
    extension = $("extension").value;
    
        
    // basic validtaion
    if (name === "") {
		$("nameerror").innerHTML = requried;
        header = msg;
	}
    if (title === "") {
		$("titleerror").innerHTML = requried;
        header = msg;
	}
    if (extension === "") {
		$("extensionerror").innerHTML = requried;
        header = msg;
	}
      
    if (header !== msg) {
		employees.push([name, title, extension]);		
		$("registration_form").reset();
		$("nameerror").innerHTML = "";
        $("titleerror").innerHTML = "";
		$("extensionerror").innerHTML = "";
		$("employee_info").innerHTML = "";
		$("lineText").innerHTML = "";
		html4 += "Showing " + employees.length + " Employees";
$("lineText").innerHTML = html4;
	
	html5 += "<tr><th>Name </th>" + "<th>Title </th>" + "<th>Extension </th>" + "<th></th></tr>";
         for (i = 0; i < employees.length; i += 1) {
	html5 += "<tr><td>" + employees[i][0] + "</td>" + "<td>" + employees[i][1] + "</td>" + "<td>" + employees[i][2] + "</td>" + "<td><input type='button' value='Delete' onclick='deleteRow(this)'> </td></tr>";
   }
     $("employee_info").innerHTML = html5;
	}
};

function deleteRow(r) {
	"use strict";
	$("registration_form").reset();
	$("nameerror").innerHTML = "";
    $("titleerror").innerHTML = "";
	$("extensionerror").innerHTML = "";
	var html5 = "";
	
	var table = $("employee_info");
    var rowCount = table.rows.length;
	
	var k = rowCount - 2;
	html5 += "Showing " + k + " Employees";
	$("lineText").innerHTML = html5;
	
	
    var i = r.parentNode.parentNode.rowIndex;
	$("employee_info").deleteRow(i);
	employees.splice(i-1,1);
	window.console.log(employees);
	}
	


window.addEventListener("load", function () {
   "use strict";
	show();
    $("register").addEventListener("click", processEntries);	
});