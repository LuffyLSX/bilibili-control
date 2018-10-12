// ==UserScript==
// @name         B站播放器快捷键
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  alt开关弹幕、enter全屏、crtl+方向键切换集数
// @author       Luffy_LSX
// @match        *://*.bilibili.com/video/*
// @match        *://*.bilibili.com/bangumi/*
// ==/UserScript==
'use strict';
(function() {
    document.onkeydown=function(event){
        if(event.keyCode == 18){
            var a = document.getElementsByClassName('bilibili-player-video-btn bilibili-player-video-btn-danmaku')[0].click();
            if(document.getElementsByClassName('bilibili-player-danmaku-setting-lite').length == 1){
                document.getElementsByClassName('bilibili-player-danmaku-setting-lite')[0].style.display="none";
        }
            var b = document.getElementsByClassName('bui-checkbox')[0].click();
    }
        if(window.location.pathname.search('bangumi') == 1 && event.keyCode == 13){
            var c = document.getElementsByName('browser_fullscreen')[0].click();
        }
        if(document.getElementsByClassName('trynew-btn').length == 1 && window.location.pathname.search('video') == 1 && event.keyCode == 13){
            document.getElementsByName('browser_fullscreen')[0].click();
        }
        else if(window.location.pathname.search('video') == 1 && event.keyCode == 13){
                document.getElementsByClassName('bilibili-player-iconfont bilibili-player-iconfont-fullscreen-off player-tooltips-trigger')[0].click();
                }
    };
})();
//切换集数
(function(){
    var titleList = [];
    var ep = 0;
    for (var i = 0; i < document.getElementsByClassName('episode-item').length; i++){
        titleList.push(document.getElementsByClassName('episode-item')[i].title);
    }
    $(document).keydown(function(event){
        if(event.ctrlKey && event.which == 39){
            var epTitle = document.getElementsByClassName('episode-item on')[0].title;
            ep = titleList.indexOf(epTitle);
            document.getElementsByClassName('episode-item')[ep + 1].click();
        }
        if(event.ctrlKey && event.which == 37){
            var epTitle1 = document.getElementsByClassName('episode-item on')[0].title;
            ep = titleList.indexOf(epTitle1);
            document.getElementsByClassName('episode-item')[ep - 1].click();
        }
    });
})()
