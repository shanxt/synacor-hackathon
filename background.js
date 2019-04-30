
async function logger(details) {
  try {
    let securityInfo = await browser.webRequest.getSecurityInfo(
      details.requestId, {certificateChain: true}
    );
    console.log("URL",details.url);

/*    if ((securityInfo.state == "secure" || securityInfo.state == "weak") &&
        !securityInfo.isUntrusted) {
        console.log("HSTS:",securityInfo.hsts)
    }

		*/


		  if (securityInfo.state === "secure" || securityInfo.state === "weak") {
      //console.log(securityInfo.certificates[0].subject);
			/*console.log(securityInfo.certificates[securityInfo.certificates.length - 1].issuer);
			console.log(securityInfo.certificates[securityInfo.certificates.length - 2].issuer);
			console.log(securityInfo.certificates[0].issuer);
			console.log(securityInfo.certificates[0].subject);
			console.log('New stuff');*/
			let scriptInput = [];
			let cipherSuiteInfo = securityInfo.cipherSuite;

			browser.storage.local.set({'cipherSuite':cipherSuiteInfo});
			console.log(cipherSuiteInfo);
			let i = 0;
			console.log(securityInfo.certificates.length);
			while (i != (securityInfo.certificates.length))
				{
				console.log("Certificate no.", i);
				certIssuer = securityInfo.certificates[i].issuer;
				certSub = securityInfo.certificates[i].subject;
				console.log(certIssuer);
				console.log(certSub);
				scriptInput.push(certSub);
				scriptInput.push(certIssuer);
        subject_num = 'Subject ' + (i + 1);
				issuer_num = 'Issuer ' + (i + 1) ;	

				console.log(subject_num, certSub);
				browser.storage.local.set({[subject_num]:certSub});
				browser.storage.local.set({[issuer_num]:certIssuer});
				console.log(issuer_num, certIssuer);
				i++;
			  console.log("Next certificate");
			//console.log(securityInfo.certificates[]);
					}
				//console.log(scriptInput);
//				let tlsDataLocal = [];
//				let j = scriptInput.length;
//        browser.storage.local.set({'len':j});
/*				while (j >= 0)
				{ 
					console.log(j);
					browser.storage.local.set(
					{ [j]: scriptInput[j]
					});
					j--;
				}
*/
    }
  //return scriptInput
  }
  catch(error) {
    console.error(error);
  }
}



browser.webRequest.onHeadersReceived.addListener(logger,
  {urls: ["<all_urls>"]},
  ["blocking"]
);

