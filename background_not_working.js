//console.log("This has run");


function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);
  let decoder = new TextDecoder("utf-8");
  let encoder = new TextEncoder();
    
/*	let securityInfo = await browser.webRequest.getSecurityInfo(details.requestId, {});
  console.log(details.url);
  if (securityInfo.state === "secure" || securityInfo.state === "weak") {
    console.log(securityInfo.certificates[0].subject);
  }
 */
  filter.ondata = event => {
    let str = decoder.decode(event.data, {stream: true});
    // Just change any instance of Example in the HTTP response
    // to WebExtension Example.
    str = str.replace(/Example/g, '...this...');
    filter.write(encoder.encode(str));
    filter.disconnect();
  }

  return {};
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  {urls: ["https://*/*"], types: ["main_frame"]},
  ["blocking"]
);

