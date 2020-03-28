$(function(){
  $('#form').submit(function(){
    // let selectGoods = $('#select-goods').val();
    let selectSize = $('#select-size').val();
    // $('#output-goods').text(selectGoods);
    $('#output-size').text(selectSize);
    return false;
  });

  $('.index-btn').click(function(){
    $('.active').removeClass('active');
    let clickedIndex = $('.index-btn').index($(this));
    $('.slide').eq(clickedIndex).addClass('active');

    let slideIndex = $('.slide').index($('.active'));
    $('.change-btn').show();
    if(slideIndex == 0){
      $('.prev-btn').hide();
    }else if(slideIndex == 2){
      $('.next-btn').hide();
    }
  });


  $('.change-btn').click(function(){
    let $displaySlide = $('.active');
    $displaySlide.removeClass('active');
    if($(this).hasClass('next-btn')){
      $displaySlide.next().addClass('active');
    }else{
      $displaySlide.prev().addClass('active');
    }

    let slideIndex = $('.slide').index($('.active'));
    $('.change-btn').show();
    if(slideIndex == 0){
      $('.prev-btn').hide();
    }else if(slideIndex == 2){
      $('.next-btn').hide();
    }



  });

});
