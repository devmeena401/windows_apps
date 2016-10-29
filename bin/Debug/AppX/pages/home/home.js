(function () {
    "use strict";

    var dataArray = [
        { type: "item", title: "VAKRATUNDA", picture: "images/Vakratunda.jpg"},
        { type: "item", title: "EKDANTA", picture: "images/Ekadanta.jpg"},
        { type: "item", title: "MAHODARA", picture: "images/Mahodara.jpg"},
        { type: "item", title: "DHOOMRAVARNA", picture: "images/Dhoomravarna.jpg"},
        { type: "item", title: "GAJANANA", picture: "images/Gajanana.jpg"},
        { type: "item", title: "LAMBODAR", picture: "images/Lambodar.jpg"},
        { type: "item", title: "VIKATA", picture: "images/Vikata.jpg"},       
        { type: "item", title: "VIGHNRAJA", picture: "images/Vighnraja.JPG"},
    ];

    var dataList = new WinJS.Binding.List(dataArray);

    var publicMembers =
        {
            itemList: dataList
        };
    WinJS.Namespace.define("DataExample", publicMembers);
})();


(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
        }
    });
})();
