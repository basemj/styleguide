/* Author: Leonie Lindo
Date: 07/03/12
*/
$(function () {

    $('.slideshow').each(function (i) {
        $(this).attr('id', 'slideshow-' + i);

        function pauseControl() {
            $('.pause' + i).click(function () {
                $(this).parent().parent().next().cycle('pause');
                $(this).addClass('offscreen');
                $(this).siblings('.resume' + i).removeClass('offscreen');
            });
        };
        function playControl() {
            $('.resume' + i).click(function () {
                $(this).parent().parent().next().cycle('resume');
                $(this).addClass('offscreen');
                $(this).siblings('.pause' + i).removeClass('offscreen');
            });
        };

        var slideNav = $('<div class="slide-nav"></div>');
        var slideControls = $('<div class="slide-controls"><div class="slide-nav slide-nav' + i + '"></div><div class="slide-pause-play pause-play' + i + '"><button role="button" title="Pause" type="button" class="pauseButton pause' + i + '"></button><button role="button" title="Play" type="button" class="resumeButton resume' + i + ' offscreen"></button></div></div>');


        var bannerSet = $(this).children('.banner');
        var bannerText = $('.banner-info');



        //    SLIDESHOW
        if ($(bannerSet).length > 1) {
            $(this).before(slideControls).cycle({
                speed: 600,
                timeout: 6000,
                cleartype: true, // disable cleartype corrections
                pager: '.slide-nav' + i,
                pagerEvent: 'mouseover',
                pauseOnPagerHover: true,
                fx: 'fade'
            });





            $(bannerText).each(function (i) {
                $(this).hover(
                    function () {
                        $(this).parent().parent().cycle('pause');
                        $(this).parent().parent().siblings('.slide-controls').find('button.pauseButton').trigger('click');
                    },
                    function () {
                        $(this).parent().parent().cycle('resume');
                        $(this).parent().parent().siblings('.slide-controls').find('button.resumeButton').trigger('click');
                    });

            });

                $('.slide-nav a').each(function (i) {

                var linkText = $(this).text();
                $(this).attr('title', 'Slide ' + linkText);

                $(this).hover(
                    function () {
                        $(this).parent().next().find('.pauseButton').trigger('click');
                    },
                    function () {
                        $(this).parent().next().find('.resumeButton').trigger('click');
                    });

            });
            pauseControl();
            playControl();

        }


    });


});