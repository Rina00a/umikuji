    // var i = Number(randomNum);

    // var tamplate = `<div class="beach" id="beach1"><p>${beaches[i][0]}</p><img src="assets/img/araha.jpg" alt="araha"><a href="https://www.okinawastory.jp/spot/600006207" target="_blank" ><p>クリック</p></a></div>`
    
// }
    $("#box-btn").on("click",function(){
        // $(".beach")[i].fadeIn();
        // console.log($(".beach")[i]);
        // console.log($("#beach1"));
        // $(".result").html(tamplate)
        var araha = ["アラハビーチ＜北谷町＞","assets/img/araha.jpg","araha","https://www.okinawastory.jp/spot/600006207"]
        var emerarudo =["エメラルドビーチ＜海洋博公園内＞","./assets/img/emerarudo.jpg","emerarudo","https://oki-park.jp/kaiyohaku/inst/75"]
        var tyurasan = 
        var bibi = 
        var sesoko = 
        var minna =
        var kouri = 
        var okuma =
        var randomNum = Math.floor(Math.random() * ((7 + 1) - 0)) + 0;
        var i = Number(randomNum);
        console.log($('.beach').eq(i).fadeIn());
        console.log($('.beach')[0]);
        // $(".beach").each( function(index, value) {
 
        //     console.log(value);
        //     console.log(index);
        //     console.log($(this));

        //     // if(i==index){
        //     //     $(this).fadeIn();
        //     // }
        // })
    })
    
})


