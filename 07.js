
// :(

function pluck(objArray, propertyName) {
    var result = [];

    for (i = 0; i < objArray.length; i++) {
        result.push(objArray[i][propertyName]);
    }

    return result;
}

// :)

function pluck(objArray, propertyName) {
    return objArray.map(function (obj) {
        return obj[propertName];
    });
}
