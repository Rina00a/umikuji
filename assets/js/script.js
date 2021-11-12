// function randomNumber() {
// /    $('#disp').text(randomNum);
// };

$(function(){
    var randomNum = Math.floor(Math.random() * ((7 + 1) - 0)) + 0;
    var i = randomNum
    $("#box-btn").on("click",function(){
        // $(".beach")[0].fadeIn();
        console.log($(".beach")[i]);
    })
    
})
/**
* ランダム数字の生成
*/
