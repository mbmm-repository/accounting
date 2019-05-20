// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require jquery
//= require jquery_ujs

$(document).on('turbolinks:load', function(){

  $('.arrow-right').click(function(){
    $('.active').removeClass('active');

    var r_index = $('.arrow-right').index($(this));
    var r_indexx = r_index + 1

    $('.change-slide').show();

    if (r_indexx == 0) {
      $('.arrow-left').hide();
    } else if (r_indexx == $('.slide').length - 1) {
      $('.arrow-right').hide();
    }

    $('.slide').eq(r_indexx).addClass('active');
  });

  $('.arrow-left').click(function(){
    $('.active').removeClass('active');

    var l_index = $('.arrow-left').index($(this));
    var l_indexx = l_index - 1

    $('.change-slide').show();

    if (l_indexx == 0) {
      $('.arrow-left').hide();
    } else if (l_indexx == $('.slide').length - 1) {
      $('.arrow-right').hide();
    }

    $('.slide').eq(l_indexx).addClass('active');
  });

  $('.btn-square').click(function(){
    $('.active').removeClass('active');
    $('#cover').css('display', 'none');
  })

  $('html').keyup(function(e){
        switch(e.which){
          case 39: // Key[→]
          var r_index = $('.slide').index($('.active'));
          var r_indexx = r_index + 1;

          console.log(r_indexx);

          if (r_indexx > 0){
            if (r_indexx < $('.slide').length) {
              $('.active').removeClass('active');

              $('.change-slide').show();

              if (r_indexx == 0) {
                $('.arrow-left').hide();
              } else if (r_indexx == $('.slide').length - 1) {
                $('.arrow-right').hide();
              }

              $('.slide').eq(r_indexx).addClass('active');
              break;
            }
            break;
          }
        }

        switch(e.which){
          case 37: // Key[←]
          var l_index = $('.slide').index($('.active'));
          var l_indexx = l_index - 1;

          if (l_indexx >= 0){
            $('.active').removeClass('active');

            $('.change-slide').show();

            if (l_indexx == 0) {
              $('.arrow-left').hide();
            } else if (l_indexx == $('.slide').length - 1) {
              $('.arrow-right').hide();
            }

            $('.slide').eq(l_indexx).addClass('active');
            break;
          }
        }

        switch(e.which){
          case 13: // ENTER
          var index = $('.slide').index($('.active'));
          var indexx = index + 1;

          if (indexx >= $('.slide').length) {
            $('.active').removeClass('active');
            $('#cover').css('display', 'none');
            break;
          }
        }
    });
})
// console.log(l_indexx); デバッグ
