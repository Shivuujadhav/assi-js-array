//Add Element at top
function addElementToTop() { 
	// Get input values 
	let name = 
		document.getElementById("nameInput").value; 
	let email = 
		document.getElementById("emailInput").value; 
	let mobile = 
		document.getElementById("numberInput").value; 
	
	
	// Get the table and insert a new row at the end 
	let table = document.getElementById("outputTable");
	let newRow = table.insertRow(1); 	
	
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