// $(function() {
//     // $(".navigation__bar").hide();
//     $("nav").click(function() {
//         $(this).toggleClass();
//         $(".navigation__bar").toggleClass("sp_open");
//     });
// });

// $(function() {
//     $("nav").click(function() {
//         // 非表示に設定
//         $(".navigation__bar").hide();
//     });
//     $("nav").click(function() {
//         // 表示に設定
//         $(".navigation__bar").show();
//     });
// });

$(function () {
        $('#button__Open').click(function() {
            $('.navigation__menu').toggleClass('active');
        });

        $('.c_button').click(function() {
            $('.navigation__menu').removeClass('active');
        });
});