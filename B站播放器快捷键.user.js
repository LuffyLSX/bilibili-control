// ==UserScript==
// @name         B站播放器快捷键
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  alt开关弹幕、enter全屏、crtl+方向键切换集数
// @author       Luffy_LSX
// @match        *://*.bilibili.com/video/*
// @match        *://*.bilibili.com/bangumi/*
// @match        *://*.bilibili.com/blackboard/*
// @require      https://code.jquery.com/jquery-2.1.4.min.js
// ==/UserScript==

(function(){
    'use strict';
    var delay = 2200
    setTimeout(function(){document.getElementsByClassName('bilibili-player-video-danmaku-input')[0].style.display = "none"}, delay);


     //document.getElementsByClassName('bilibili-player-video-danmaku-input')[0].style.display = "block"

    document.onkeydown = function(event){
        if(event.keyCode == 18){
            var a = document.getElementsByClassName('bilibili-player-video-btn bilibili-player-video-btn-danmaku')[0].click();
            if(document.getElementsByClassName('bilibili-player-danmaku-setting-lite').length == 1){
        }
            var b = document.getElementsByClassName('bui-checkbox')[0].click();
    }
        if(document.getElementsByClassName('btn-old').length == 1 && window.location.pathname.search('bangumi') == 1 && event.keyCode == 13){
            document.getElementsByClassName('bilibili-player-iconfont bilibili-player-iconfont-fullscreen-off player-tooltips-trigger')[0].click();
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
        if(event.keyCode == 96){
            if( document.getElementsByClassName('bilibili-player-video-danmaku-input')[0].style.display == 'none'){

                document.getElementsByClassName('bilibili-player-video-danmaku-input')[0].style.display = "block"
            }
            else{
                document.getElementsByClassName('bilibili-player-video-danmaku-input')[0].style.display = "none"
            }
        }
    };
}())
//切换集数
(function(){
    var ep = 0;
    var nep = 0;
    $(document).keydown(function(event){
        for (var n in document.getElementsByClassName('ep-item')){
            if (document.getElementsByClassName('ep-item')[n] == document.getElementsByClassName('ep-item cursor visited')[0]){
            nep = Number(n);
        }
    }
        for (var i in document.getElementsByClassName('episode-item')){
            if (document.getElementsByClassName('episode-item')[i] == document.getElementsByClassName('episode-item on')[0]){
            ep = Number(i);
        }
    }
        if(event.ctrlKey && event.which == 39){
            if(document.getElementsByClassName('btn-old').length == 1){
                document.getElementsByClassName('ep-item')[nep + 1].click();
            }
            else{
                document.getElementsByClassName('episode-item')[ep + 1].click();
            }
        }
        if(event.ctrlKey && event.which == 37){
            if(document.getElementsByClassName('btn-old').length == 1){
                document.getElementsByClassName('ep-item')[nep - 1].click();
            }
            else{
                document.getElementsByClassName('episode-item')[ep - 1].click();
            }
        }
    });
}())
