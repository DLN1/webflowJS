function setClassNames({ Order_Status__c }) {
  const salesForceStatus = document.getElementById("Title-BG");
  if (Order_Status__c == "Complete") {
    salesForceStatus.classList.remove("service-status-default");
    salesForceStatus.classList.add("service-status-cp");
  } else if (Order_Status__c == "Canceled") {
    salesForceStatus.classList.remove("service-status-default");
    salesForceStatus.classList.add("service-status-xo");
  } else if (Order_Status__c == "Pending Dispatch") {
    salesForceStatus.classList.remove("service-status-default");
    salesForceStatus.classList.add("service-status-svc");
  } else if (Order_Status__c == "Dispatched") {
    salesForceStatus.classList.remove("service-status-default");
    salesForceStatus.classList.add("service-status-svc");
  } else if (Order_Status__c == "En Route") {
    salesForceStatus.classList.remove("service-status-default");
    salesForceStatus.classList.add("service-status-svc");
  } else if (Order_Status__c == "In Progress") {
    salesForceStatus.classList.remove("service-status-default");
    salesForceStatus.classList.add("service-status-svc");
  } else if (Order_Status__c == "Complete - Outstanding Balance") {
    salesForceStatus.classList.remove("service-status-default");
    salesForceStatus.classList.add("service-status-xo");
  }
}

function formatDate(dateVal) {
  var newDate = new Date(dateVal);
  var sMonth = padValue(newDate.getMonth() + 1);
  var sDay = padValue(newDate.getDate());
  var sYear = newDate.getFullYear();
  var sHour = newDate.getHours();
  var sMinute = padValue(newDate.getMinutes());
  var sAMPM = "AM";
  var iHourCheck = parseInt(sHour);
  if (iHourCheck > 12) {
    sAMPM = "PM";
    sHour = iHourCheck - 12;
  } else if (iHourCheck === 0) {
    sHour = "12";
  }
  sHour = padValue(sHour);
  return (
    sMonth +
    "/" +
    sDay +
    "/" +
    sYear +
    " " +
    sHour +
    ":" +
    sMinute +
    " " +
    sAMPM
  );
}
function formatMomentDate(dateObject) {
  return moment(dateObject).format("MM/DD/YYYY hh:mm A");
}
function padValue(value) {
  return value < 10 ? "0" + value : value;
}

function formatCurrency(value) {
    var num =
      "$" + value.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    console.log(num);
    return num;
  }
  function formatURL(spanID, url) {
    var spans = document.querySelectorAll("span#" + spanID);
    for (var i = spans.length; i--; ) {
      var a = document.createElement("a");
      a.href = url;
      spans[i].appendChild(a).appendChild(a.previousSibling);
    }
  }

  function showMessage(messageText) {
    const messageContainer = document.querySelector("#payment-message");
    messageContainer.classList.remove("hidden");
    messageContainer.textContent = messageText;
    setTimeout(function () {
      messageContainer.classList.add("hidden");
      messageText.textContent = "";
    }, 4000);
  }
  function setLoading(isLoading) {
    console.log("isloading", isLoading);
    if (isLoading) {
      document.querySelector("#submit").disabled = true;
      document.querySelector("#spinner").classList.remove("hidden");
      document.querySelector("#button-text").innerText =
        "Processing! Please wait ...";
    } else {
      document.querySelector("#submit").disabled = false;
      document.querySelector("#spinner").classList.add("hidden");
      document.querySelector("#button-text").classList.remove("hidden");
      document.querySelector("#button-text").innerText =
        "Pay and Confirm Service";
    }
  }