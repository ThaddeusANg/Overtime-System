(function(){
    var app = angular.module('store',[]);

    app.controller('TopMenuController', function (){
        this.pages = [
            { name: 'Availibility', url: 'pages/availability.html' },
            { name: 'Jobs', url: 'pages/available-jobs.html' },
            { name: 'Police Request Forms', url: 'pages/create-job.html' }
        ];

        this.selected = this.pages[0];
    });

    app.controller('WeekAvailableController', function () {
       
        this.tab = 1;

        this.ReloadRoute = function (value) {
            this.tab = value;
            //$route.reload();
        };

    });    // End WeekAvailableController

    app.controller('WeekController', function(){

        this.am = 'AM';
        this.pm = 'PM';

        this.days = [
            { name: "Sunday", weather: { am: 'images/showersDay-white.svg', pm: 'images/partCloudNight-white.svg' }, temp: { am: 50, pm: 60 }, order: 4 },
            { name: "Monday", weather: { am: 'images/showersDay-white.svg', pm: 'images/partCloudNight-white.svg' }, temp: { am: 55, pm: 65 }, order: 5 },
            { name: "Tuesday", weather: { am: 'images/showersDay-white.svg', pm: 'images/partCloudNight-white.svg' }, temp: { am: 45, pm: 63 }, order: 6 },
            { name: "Wednesday", weather: { am: 'images/showersDay-white.svg', pm: 'images/partCloudNight-white.svg' }, temp: { am: 60, pm: 72 }, order: 7 },
            { name: "Thursday", weather: { am: 'images/showersDay-white.svg', pm: 'images/partCloudNight-white.svg' }, temp: { am: 62, pm: 75 }, order: 1 },
            { name: "Friday", weather: { am: 'images/showersDay-white.svg', pm: 'images/partCloudNight-white.svg' }, temp: { am: 58, pm: 68 }, order: 2 },
            { name: "Saturday", weather: { am: 'images/showersDay-white.svg', pm: 'images/partCloudNight-white.svg' }, temp: { am: 40, pm: 55 }, order: 3 }
        ];

        this.ToggleActive = function(item) {
            item.labelClass = (item.labelClass === "day-name") ? "" : "day-name";
            item.showDay = (item.showDay === true) ? false : true;
        };

    });     // End WeekController
})();
