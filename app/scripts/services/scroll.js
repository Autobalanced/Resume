'use strict';

//NOTE: Requires some sort of scroll % detection (this.currentYPosition() should do the job) or return to update the .nav-active class in "/styles/main.css"

// Create scroll service so that navbar can call elements within other controllers (actually just bypasses controllers and uses pure JS document.getElementById(eID)).
// Animated and elegant solution found at: http://stackoverflow.com/questions/21749878/angular-js-anchorscroll-smooth-duration
// Source: http://jsfiddle.net/brettdewoody/y65G5/

angular.module('resumeV3App')
    .service('ScrollService', function()
    {
        this.scrollTo = function(eID)
        {

            // This scrolling function 
            // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript

            var startY = currentYPosition();
            var stopY = elmYPosition(eID);
            var distance = stopY > startY ? stopY - startY : startY - stopY;
            if (distance < 100)
            {
                scrollTo(0, stopY);
                return;
            }
            var speed = Math.round(distance / 100);
            if (speed >= 20) speed = 20;
            var step = Math.round(distance / 25);
            var leapY = stopY > startY ? startY + step : startY - step;
            var timer = 0;
            if (stopY > startY)
            {
                for (var i = startY; i < stopY; i += step)
                {
                    setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                    leapY += step;
                    if (leapY > stopY) leapY = stopY;
                    timer++;
                }
                return;
            }
            for (var i = startY; i > stopY; i -= step)
            {
                setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                leapY -= step;
                if (leapY < stopY) leapY = stopY;
                timer++;
            }

            function currentYPosition()
            {
                // Firefox, Chrome, Opera, Safari
                if (self.pageYOffset) return self.pageYOffset;
                // Internet Explorer 6 - standards mode
                if (document.documentElement && document.documentElement.scrollTop)
                    return document.documentElement.scrollTop;
                // Internet Explorer 6, 7 and 8
                if (document.body.scrollTop) return document.body.scrollTop;
                return 0;
            }

            function elmYPosition(eID)
            {
                var elm = document.getElementById(eID);
                var y = elm.offsetTop;
                var node = elm;
                while (node.offsetParent && node.offsetParent != document.body)
                {
                    node = node.offsetParent;
                    y += node.offsetTop;
                }
                return y;
            }

        };

    });
