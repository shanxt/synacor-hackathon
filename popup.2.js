function onGot(item) {
  console.log(item);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let gettingItem = browser.storage.local.get();
let listCert=[];
gettingItem.then(onGot, onError);
let table = document.createElement('table');
table.insertRow();
console.log(table);
console.log("THis is the table?");


