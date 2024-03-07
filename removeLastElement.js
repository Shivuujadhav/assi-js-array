
function removeElementAtIndex(button) { 
	
	// Get the parent row of the clicked button 
	let row = button.parentNode.parentNode; 

	// Remove the row from the table 
	row.parentNode.removeChild(row); 
} 
