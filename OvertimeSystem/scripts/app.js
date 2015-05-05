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

    app.controller('WeekController', function(){

        this.days = [
            { name: "Sunday", weather: { am: 'images/showersDay-white.svg', pm: 'images/partCloudNight-white.svg' }, temp: { am: 50, pm: 60 }, order: 4 },
            { name: "Monday", weather: { am: 'images/showersDay-white.svg', pm: 'images/partCloudNight-white.svg' }, temp: { am: 50, pm: 60 }, order: 5 },
            { name: "Tuesday", weather: { am: 'images/showersDay-white.svg', pm: 'images/partCloudNight-white.svg' }, temp: { am: 50, pm: 60 }, order: 6 },
            { name: "Wednesday", weather: { am: 'images/showersDay-white.svg', pm: 'images/partCloudNight-white.svg' }, temp: { am: 50, pm: 60 }, order: 7 },
            { name: "Thursday", weather: { am: 'images/showersDay-white.svg', pm: 'images/partCloudNight-white.svg' }, temp: { am: 50, pm: 60 }, order: 1 },
            { name: "Friday", weather: { am: 'images/showersDay-white.svg', pm: 'images/partCloudNight-white.svg' }, temp: { am: 50, pm: 60 }, order: 2 },
            { name: "Saturday", weather: { am: 'images/showersDay-white.svg', pm: 'images/partCloudNight-white.svg' }, temp: { am: 50, pm: 60 }, order: 3 }
        ];
    });
})();
