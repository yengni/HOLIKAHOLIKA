// ====== menu 클릭 시 menu_bg 보이기 =======
// menu_bg 숨기기
$('.menu_bg').hide()
var menu_state = true;
//메뉴의 현재 상태를 알기 위한 논리형 데이터 생성
$('.all_menu').on('click', function(e){
    e.preventDefault();
    menu_state = !menu_state
    console.log(`현재 상태는 : ${menu_state}`)
    if(menu_state == false){
        $('.all_menu .menu_btn').hide();
        $('.all_menu .x').show();
        $('.menu_bg').fadeIn(200);
    }
    else{
        $('.all_menu .menu_btn').show();
        $('.all_menu .x').hide();
        $('.menu_bg').fadeOut(200);
    }
})