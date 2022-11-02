"use strict"

function parsePartCode(partCode) {
    let separator = partCode.indexOf(":");
    let separator2 = partCode.indexOf("-");

    let supplierCode = partCode.substring(0, separator);
    let productNumber = partCode.substring(separator, separator2);
    let size = partCode.substring(separator2 + 1);

    let code = {
        supplierCode: supplierCode,
        productNumber: productNumber,
        size: size,
    }
    return code;
}
let partCode1 = "XYZ:1234-L";
let part1 = parsePartCode(partCode1);
console.log("Supplier: " + part1.supplierCode +
    " Product Number: " + part1.productNumber +
    " Size: " + part1.size);