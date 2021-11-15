;$(function(){
//    function randomNumber() {
    // ランダムな数字の生成（Math.random() * ( (最大値 + 1) - 最小値 ) + 最小値;）
    // 2から5までのランダムな数字の生成
    // var randomNum = Math.floor(Math.random() * ((7 + 1) - 0)) + 0;
    // 画面に表示
    // $('#disp').
    // var i = Number(randomNum);

    // var tamplate = `<div class="beach" id="beach1"><p>${beaches[i][0]}</p><img src="assets/img/araha.jpg" alt="araha"><a href="https://www.okinawastory.jp/spot/600006207" target="_blank" ><p>クリック</p></a></div>`
    
// }
    $("#box-btn").on("click",function(){
        // $(".beach")[i].fadeIn();
        // console.log($(".beach")[i]);
        // console.log($("#beach1"));
        // $(".result").html(tamplate)
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


