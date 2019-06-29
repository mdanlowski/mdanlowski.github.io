const apiBase = "https://public-sip-api.tw.waw.pl/api/GetLatestPanelPredictions?userCode=WWW&userApiKey=3aAhqA2/*RWsmvy}P8AsxgtFZ&stopId="
const sadyZoliborskie = "604003"
const metroMarymont = "600503"

function httpGetAsync(getUrl, callback, targetElement)
{
  let xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() { 
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
    callback(xmlHttp.responseText, targetElement);
  }
  xmlHttp.open("GET", getUrl, true);
  xmlHttp.send(null);
}

function parseResults(content, targetElement){
  let contentObject = JSON.parse(content);
  if(!(contentObject instanceof Array))
    return new TypeError("Request failed")
  else
    renderResults(contentObject, targetElement);
}

function renderResults(results, targetElement){ 
  targetElement.innerHTML = "";

  for(departure of results){
    let template = `
    <td class=${toWork(departure.Line) ? "to-work departs-soon" : "departs-soon"}>
    <strong> ${departure.Line} </strong>
    </td>
    <td class="${departure.Arrival < 7 ? 'departs-soon' : ''}"> ${departure.ArrivalAcurate.substr(3)} </td>
    <td> ${departure.LowFloor ? "TAK" : "NIE"} </td>
    <td> ${departure.OnStop ? "TAK" : "NIE"} </td>
    `;
    let row = document.createElement('tr');
    row.innerHTML = template;
    targetElement.append(row);
  }

  function toWork(lineNumber){
    return ["17", "33"].includes(lineNumber);
  }
}

function fetchAndRenderDepartures(){
  httpGetAsync(apiBase+sadyZoliborskie, parseResults, document.querySelector('#sady'));
  httpGetAsync(apiBase+metroMarymont, parseResults, document.querySelector('#marymont'));
}

function digiClock(){
  let timestamp = new Date()
  document.querySelector('#date-time').innerText = timestamp.toLocaleString();
}

document.addEventListener('DOMContentLoaded', function(){
  fetchAndRenderDepartures();
  window.setInterval(digiClock, 1000);
  window.setInterval(fetchAndRenderDepartures, 60000);
});