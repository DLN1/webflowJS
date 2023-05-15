export function setClassNames({ Order_Status__c }) {
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