// GET ASSET NAMES 
Array.from(document.querySelectorAll(".epi-secondaryText"))
  .filter(span => span.innerText === "Ready to Publish")
  .map(node => node.parentNode.children[0].innerText)
  // edit file types when necessary
  .filter(string => string.includes("png") || string.includes("jpg")).join(",")

// GET ASSET URLS
function buildAssetURLs(rootURL) {
  let assetURLs = []
  const templatePath = `/EPiServer/CMS/#context=epi.cms.contentdata:///`
  const selectURLs = Array.from(document.querySelectorAll(".epi-card__icon--thumbnailresizer"))
    .filter(node => {
      const status = Array.from(node.parentNode.parentNode.querySelectorAll(".epi-secondaryText"))[2].innerText
      if (status === "Ready to Publish") { 
        return node 
      }
    })
    .map(div => div.innerHTML)
  selectURLs.forEach(str => {
    Array.from(str).forEach(char => {
      if (char === ",") {
        let id = []
        const idxStart = str.indexOf(char) + 2
        id.push(Array.from(str).slice(idxStart, idxStart + 13))     
        const formatURL = `${rootURL}${templatePath}${id[0].join("")}`
        assetURLs.push(formatURL)
      }
    })
  })
  return [...new Set(assetURLs)].join(",")
}
// grab the root URL, pass to function as string, e.g.
buildAssetURLs('https://www.tim3.com')

  /**
Copy the return value (i.e. string of URLs separated by comma), go to Asset Request Form, paste the string onto a cell (e.g. A2), and write the following formula in the targeted column:
=transpose(split(A2, ","))
*/