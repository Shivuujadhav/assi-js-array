// View Table
function createTableView(){
	let userData = [
  {name: 'Vilas Shetkar',email:'vilas@gmail.com',mobile:9860581224},
  {name: 'Shivani',email:'Shivanijadhav@gmail.com',mobile:7057973845},
  {name: 'shraddha',email:'sonu@gmail.com',mobile:8805331422},
];


// Get the table and insert a new row at the end 
	let table = document.getElementById("outputTable"); 	 
	
	// Insert data into cells of the new row 
	for(var i=0;i<userData.length;i++)
	{
	let newRow = table.insertRow(table.rows.length);
	newRow.insertCell(0).innerHTML = userData[i].name; 
	newRow.insertCell(1).innerHTML = userData[i].email; 
	newRow.insertCell(2).innerHTML = userData[i].mobile; 
	newRow.insertCell(3).innerHTML = 
		'<button onclick="editData(this)">Edit</button>'+ 
		'<button onclick="removeElementAtIndex(this)">Delete</button>'; 
	
	// Clear input fields 
	}
	clearInputs(); 

	
}
createTableView();

