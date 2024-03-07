function removeElementAtIndex(index, dataArray) {
    if (!Array.isArray(dataArray) || dataArray.length === 0 || index < 0 || index >= dataArray.length) {
        console.error("Invalid input array or index.");
        return;
    }

    dataArray.splice(index, 1);

    createTableView(dataArray);
}

// Example usage:
// Assuming dataArray is defined elsewhere
const indexToRemove = 2;
removeElementAtIndex(indexToRemove, dataArray);
