async function logger(details) {
  try {
    let securityInfo = await browser.webRequest.getSecurityInfo(
      details.requestId, {}
    );
    console.log("URL",details.url)

/*    if ((securityInfo.state == "secure" || securityInfo.state == "weak") &&
        !securityInfo.isUntrusted) {
        console.log("HSTS:",securityInfo.hsts)
    }

		*/


		  if (securityInfo.state === "secure" || securityInfo.state === "weak") {
      //console.log(securityInfo.certificates[0].subject);
			console.log(securityInfo.certificates[securityInfo.certificates.length - 1].issuer);
			console.log('New stuff');
			//console.log(securityInfo.certificates[]);
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

