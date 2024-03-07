function addElementAtIndex(index, name, email, mobile, dataArray) {
    const newData = {
        name: name,
        email: email,
        mobile: mobile
    };

    dataArray.splice(index, 0, newData);

    createTableView(dataArray);
}

// Example usage:
// Assuming dataArray is defined elsewhere
const indexToAdd = 3;
const newName = "Jane Doe";
const newEmail = "jane.doe@example.com";
const newMobile = "9876543210";

addElementAtIndex(indexToAdd, newName, newEmail, newMobile, dataArray);
