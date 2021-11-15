$("#box-btn").on("click",function(){

    var araha = ["アラハビーチ＜北谷町＞","assets/img/araha.jpg","araha","https://www.okinawastory.jp/spot/600006207"];
    var emerarudo = ["エメラルドビーチ＜海洋博公園内＞","./assets/img/emerarudo.jpg","emerarudo","https://oki-park.jp/kaiyohaku/inst/75"];
        var tyurasan = ["美らSUNビーチ＜豊見城＞","./assets/img/tyurasan.jpg","tyurasan","https://www.okinawastory.jp/spot/600007643"];
        var bibi = ["美々（びび）ビーチいとまん＜糸満市＞","./assets/img/bibi.jpg","bibi","https://www.okinawastory.jp/spot/1113"];
        var sesoko = ["瀬底ビーチ＜瀬底島＞","./assets/img/sesoko.jpg","sesoko","https://www.motobu-ka.com/activity/activity-post-346/"];
        var minna = ["水納（みんな）ビーチ＜水納島＞","./assets/img/minna.jpg","minna","https://www.okinawastory.jp/spot/600006147"];
        var kouri = ["古宇利ビーチ＜古宇利島＞","./assets/img/kouri.jpg","kouri","https://www.okinawastory.jp/spot/600011642"];
        var okuma = ["オクマビーチ＜国頭村＞","./assets/img/okuma.jpg","okuma","https://www.okinawastory.jp/spot/1083"];
        
        var randomNum = Math.floor(Math.random() * ((7 + 1) - 0)) + 0;
        var i = Number(randomNum);

        var beaches =[araha,emerarudo,tyurasan,bibi,sesoko,minna,kouri,okuma]
        var template = `<div class="beach"><p>${beaches[i][0]}</p><a href=${beaches[i][3]} target="_blank" ><img src=${beaches[i][1]} alt=${beaches[i][2]}></a></div>`
        
        $(".result").html(template)

       
        $('.beach').fadeIn(2000);
        $('.top').fadeOut("fast");
        $('#box-btn2').fadeIn(2000);
        
})
$("#box-btn2").on("click",function(){

    var araha = ["アラハビーチ＜北谷町＞","assets/img/araha.jpg","araha","https://www.okinawastory.jp/spot/600006207"];
    var emerarudo = ["エメラルドビーチ＜海洋博公園内＞","./assets/img/emerarudo.jpg","emerarudo","https://oki-park.jp/kaiyohaku/inst/75"];
    var tyurasan = ["美らSUNビーチ＜豊見城＞","./assets/img/tyurasan.jpg","tyurasan","https://www.okinawastory.jp/spot/600007643"];
    var bibi = ["美々（びび）ビーチいとまん＜糸満市＞","./assets/img/bibi.jpg","bibi","https://www.okinawastory.jp/spot/1113"];
    var sesoko = ["瀬底ビーチ＜瀬底島＞","./assets/img/sesoko.jpg","sesoko","https://www.motobu-ka.com/activity/activity-post-346/"];
    var minna = ["水納（みんな）ビーチ＜水納島＞","./assets/img/minna.jpg","minna","https://www.okinawastory.jp/spot/600006147"];
    var kouri = ["古宇利ビーチ＜古宇利島＞","./assets/img/kouri.jpg","kouri","https://www.okinawastory.jp/spot/600011642"];
    var okuma = ["オクマビーチ＜国頭村＞","./assets/img/okuma.jpg","okuma","https://www.okinawastory.jp/spot/1083"];
        
    var randomNum = Math.floor(Math.random() * ((7 + 1) - 0)) + 0;
    var i = Number(randomNum);

    var beaches =[araha,emerarudo,tyurasan,bibi,sesoko,minna,kouri,okuma]
    var template = `<div class="beach"><p>${beaches[i][0]}</p><a href=${beaches[i][3]} target="_blank" ><img src=${beaches[i][1]} alt=${beaches[i][2]}></a></div>`
        
    $(".result").html(template)

       
    $('.beach').fadeIn(2000);
    $('.box').fadeOut("fast");
    
       
        

})


