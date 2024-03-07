function appendData() { 
	// Get input values 
	let name = 
		document.getElementById("nameInput").value; 
	let email = 
		document.getElementById("emailInput").value; 
	let mobile = 
		document.getElementById("numberInput").value; 
	
	
	// Get the table and insert a new row at the end 
	let table = document.getElementById("outputTable"); 
	let newRow = table.insertRow(table.rows.length); 
	
	// Insert data into cells of the new row 
	newRow.insertCell(0).innerHTML = name; 
	newRow.insertCell(1).innerHTML = email; 
	newRow.insertCell(2).innerHTML = mobile; 
	newRow.insertCell(3).innerHTML = 
		'<button onclick="editData(this)">Edit</button>'+ 
		'<button onclick="removeElementAtIndex(this)">Delete</button>'; 
	
	// Clear input fields 
	clearInputs(); 
} 
appendData();
function editData(button) { 
	
	// Get the parent row of the clicked button 
	let row = button.parentNode.parentNode; 
	
	// Get the cells within the row 
	let nameCell = row.cells[0]; 
	let emailCell = row.cells[1]; 
	let mobileCell = row.cells[2]; 
	
	// Prompt the user to enter updated values 
	let nameInput = 
		prompt("Enter the updated name:", 
			nameCell.innerHTML); 
	let emailInput = 
		prompt("Enter the updated email:", 
			emailCell.innerHTML); 
	let numberInput = 
		prompt("Enter the updated mobile details:", 
			mobileCell.innerHTML 
		); 
	
	// Update the cell contents with the new values 
	nameCell.innerHTML = nameInput; 
	emailCell.innerHTML = emailInput; 
	mobileCell.innerHTML = numberInput; 
	/*addressCell.innerHTML = addressInput;*/ 
} 
function clearInputs() { 
	
	// Clear input fields 
	document.getElementById("nameInput").value = ""; 
	document.getElementById("emailInput").value = ""; 
	document.getElementById("numberInput").value = ""; 

} 