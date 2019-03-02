async function logger(details) {
  try {
    let securityInfo = await browser.webRequest.getSecurityInfo(
      details.requestId, {certificateChain: true}
    );
    console.log("URL",details.url)

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
			let cipherSuiteInfo = securityInfo.cipherSuite;
			console.log(cipherSuiteInfo);
			let i = 0;
			console.log(securityInfo.certificates.length);
			while (i != (securityInfo.certificates.length))
				{
				console.log("Certificate no.", i);
				console.log(securityInfo.certificates[i].issuer);
				console.log(securityInfo.certificates[i].subject);
				i++;
			  console.log("Next certificate");
			//console.log(securityInfo.certificates[]);
					}
    }

  }
  catch(error) {
    console.error(error);
  }
}

browser.webRequest.onHeadersReceived.addListener(logger,
  {urls: ["<all_urls>"]},
  ["blocking"]
);

