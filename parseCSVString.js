function parseCSVString(csvString) {
    var lines = csvString.trim().split('\n');
    var result = [];

    lines.forEach(function(line) {
        var data = line.split(',');
        var obj = {
            name: data[0],
            email: data[1],
            mobile: data[2]
        };
        result.push(obj);
    });

    return result;
}


let parsedData = parseCSVString(csvString);
createTableView(parsedData);