//let listCert=[];
let cleanText ;
let jsonStr;
let popupNode;
function onGot(item) {
	//cosole.log("Inside onGot");
	jsonStr = JSON.stringify(item);
	cleanText = jsonStr.replace(/\{|\}|\"/g, '  ');
  var node = document.createElement("LI");
	console.log('This is creating that node', cleanText);
	popupNode = document.createTextNode(cleanText);
	//console.log(typeof(cleanText));
	console.log('this is the test node', popupNode);
	node.appendChild(popupNode);
	document.getElementById("myList").appendChild(node);
	console.log(popupNode);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

function cipherGot(item){
	var node = document.createElement("LI");
	jsonStr = JSON.stringify(item);
	cleanText = jsonStr.replace(/\{|\}|\"/g, '  ');
	popupNode = document.createTextNode(cleanText);
	node.appendChild(popupNode);
	document.getElementById("Cipher used").appendChild(node);
}

	
	
//console.log("Getting item");
//let gettingItem = browser.storage.local.get();
//gettingItem.then(onGot, onError);
//let table = document.createElement('table');
//table.insertRow();
//console.log("After wards");
//console.log(typeof(listCert));
//console.log("THis is the table?");
//console.log(cleanText);

//let gettingItem2 = browser.storage.local.get("2");
//gettingItem2.then(onGot, onError);





let gettingCipherSuite = browser.storage.local.get("cipherSuite");
gettingCipherSuite.then(cipherGot, onError);

let gettingItem0 = browser.storage.local.get("Subject 1");
gettingItem0.then(onGot, onError);

let gettingItem1 = browser.storage.local.get("Issuer 1");
gettingItem1.then(onGot, onError);

let gettingItem2 = browser.storage.local.get("Subject 2");
gettingItem2.then(onGot, onError);

let gettingItem3 = browser.storage.local.get("Issuer 2");
gettingItem3.then(onGot, onError);

let gettingItem4 = browser.storage.local.get("Subject 3");
gettingItem4.then(onGot, onError);

let gettingItem5 = browser.storage.local.get("Issuer 3");
gettingItem5.then(onGot, onError);




/*
var table = document.createElement('table');
var tr = document.createElement('tr');
var td1 = document.createElement('td');
var td2 = document.createElement('td');
*/


console.log('End of popup.js');

/*var node = document.createElement("LI");
//onsole.log('This is creating that node', cleanText);
popupNode = document.createTextNode("dasdf");
node.appendChild(popupNode);	
document.getElementById("myList").appendChild(node);
*/

//Promise.all([gettingItem]).then(function(values) {
//	listCert[values];
//  console.log(listCert);
//});

//console.log(listCert)
//document.body.appendChild(gettingItem.then(onGot, onError));
