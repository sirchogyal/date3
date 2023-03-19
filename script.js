var d = new Date();
    var date = d.getUTCDate();
    var month = d.getUTCMonth() + 1; // Add 1 Since getUTCMonth() returns month from 0-11 not 1-12
    var year = d.getUTCFullYear();
    
    if (date < 10) {
          date = "0" + date;
}
    if (month < 10) {
          month = "0" + month;
}
 
var dateStr = "Date: " + date + "/" + month + "/" + year;
var dateElem = document.querySelector(".date");
dateElem.innerHTML = dateStr;