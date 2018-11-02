// Controller for data
var DeliverOrdersController = (function () {

  // Data to use for showing content, Should from database
  var deliverOrders = [{
    orderNumber: "34123",
    quantity: 1,
    dateCreated: "11/1/2018",
    from: "Rwanda",
    fromPostCode: "P.O.BOX 119",
    to: "USA",
    toPostCode: "0000",
    status: "transit"
  }, {
    orderNumber: "34123",
    quantity: 1,
    dateCreated: "11/1/2018",
    from: "Rwanda",
    fromPostCode: "P.O.BOX 111",
    to: "USA",
    toPostCode: "0000",
    status: "transit"
  }, {
    orderNumber: "34123",
    quantity: 1,
    dateCreated: "07/1/2018",
    from: "Rwanda",
    fromPostCode: "1234",
    to: "USA",
    toPostCode: "1000",
    status: "delivered"
  }, {
    orderNumber: "34123",
    quantity: 1,
    dateCreated: "05/1/2018",
    from: "USA",
    fromPostCode: "1234",
    to: "RWANDA",
    toPostCode: "P.O.BOX 49",
    status: "delivered"
  }, {
    orderNumber: "34123",
    quantity: 1,
    dateCreated: "11/1/2018",
    from: "Rwanda",
    fromPostCode: "1234",
    to: "USA",
    toPostCode: "1090",
    status: "transit"
  }];

  return {
    getDeliveryOrders: () => {
      return deliverOrders;
    }
  };
})();

// UI Controller
var UIController = (function () {

  var DOMStrings = {
    numberParcelDelivered: "#number-parcel-delivered",
    numberParcelInTransit: "#number-parcel-in-transit",
    table: "#table-delivery-orders"
  }

  return {

    // Write table content and number of delivered and in transit
    writeTableAndBoxes: function (deliveryOrders) {
      var table = document.querySelector(DOMStrings.table);
      var numberOfDeliveredOrder = 0;
      var numberOfParcelInTransit = 0;
      var number = 1;

      deliveryOrders.map(order => {
        var row = table.insertRow();
        var cellNumber = row.insertCell();
        var cellOrderNumber = row.insertCell();
        var cellDateCreated = row.insertCell();
        var cellFrom = row.insertCell();
        var cellTo = row.insertCell();
        var cellStatus = row.insertCell();

        cellNumber.innerHTML = number++;
        cellOrderNumber.innerHTML = order.orderNumber;
        cellDateCreated.innerHTML = order.dateCreated;
        cellFrom.innerHTML = order.from;
        cellTo.innerHTML = order.to;
        cellStatus.innerHTML = order.status;

        if (order.status.toLowerCase() !== "delivered") {
          numberOfParcelInTransit++;
        } else {
          numberOfDeliveredOrder++
        }
      });
      var numberDeliveredDOM = document.querySelector(DOMStrings.numberParcelDelivered);
      var numberTransitDOM = document.querySelector(DOMStrings.numberParcelInTransit);

      numberDeliveredDOM.innerHTML = numberOfDeliveredOrder;
      numberTransitDOM.innerHTML = numberOfParcelInTransit;

    },

  };

})();

// Grobal Controller
var Controller = (function (DOCtrl, UICtrl) {

  var passData = () => {
    UICtrl.writeTableAndBoxes(DOCtrl.getDeliveryOrders());
  }

  return {
    init: () => passData()
  }
})(DeliverOrdersController, UIController);

Controller.init()