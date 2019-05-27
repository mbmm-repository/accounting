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

// スライドクリック移動と矢印表示非表示
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

  // 答えと解答スライドの移動と矢印非表示設定
  $('.answer-right').click(function(){
    $('.block').removeClass('block');

    var r_index = $('.answer-right').index($(this));
    var r_indexx = r_index + 1

    $('.change-answer').show();

    if (r_indexx == 0) {
      $('.answer-left').hide();
    } else if (r_indexx == $('.answer-check').length - 1) {
      $('.answer-right').hide();
    }

    $('.answer-check').eq(r_indexx).addClass('block');
    $('.answer-check').eq(r_indexx).show();
  });

  $('.answer-left').click(function(){
    $('.block').removeClass('block');

    var l_index = $('.answer-left').index($(this));

    $('.change-answer').show();

    if (l_index == 0) {
      $('.answer-left').hide();
    } else if (l_index == $('.answer-check').length - 1) {
      $('.answer-right').hide();
    }

    $('.answer-check').eq(l_index).addClass('block');
    $('.answer-check').eq(l_index).show();
  });

  // 演習問題へのclick移動
  $('.btn-square').click(function(){
    $('.active').removeClass('active');
    $('#cover').css('display', 'none');
    $('.answer-check').hide();
  })

  // バツボタンclickでスライドとカバー非表示
  $('.fa-times-circle').click(function(){
    $('.active').removeClass('active');
    $('#cover').css('display', 'none');
    $('.answer-check').hide();
    $(".answercheck-nav").css('display', 'none');
  })

  // カバーclickでスライドとカバー非表示
  $('#cover').click(function(){
    $('.active').removeClass('active');
    $('#cover').css('display', 'none');
    $('.answer-check').hide();
    $(".answercheck-nav").css('display', 'none');
  })

  // 問題切り替えタブ
  $('.question-nav li').click(function(){
    $('.question-nav li').removeClass('nav');
    $('.question-content').removeClass('show');
    $('.answer-content').removeClass('show');

    var ind = $('.question-nav li').index($(this));

    $('.question-nav li').eq(ind).addClass('nav');
    $('.question-content').eq(ind).addClass('show');
    $('.answer-content').eq(ind).addClass('show');
  })
  // 次の問題へ
  $('.btn-nextquestion').click(function(){
    $('.question-nav li').removeClass('nav');
    $('.question-content').removeClass('show');
    $('.answer-content').removeClass('show');

    $('.question-nav li').next().addClass('nav');
    $('.question-content').next().addClass('show');
    $('.answer-content').next().addClass('show');
  })
  // 前の問題へ
  $('.btn-backquestion').click(function(){
    $('.question-nav li').removeClass('nav');
    $('.question-content').removeClass('show');
    $('.answer-content').removeClass('show');

    $('.question-nav li').prev().addClass('nav');
    $('.question-content').prev().addClass('show');
    $('.answer-content').prev().addClass('show');
  })

// ヒントのスライド表示
// chapter001
  $('.slide001-3').click(function(){
    $('#cover').show();
    $('.slide').eq(2).addClass('active');

    var r_index = $('.arrow-right').index($(this));
    var r_indexx = r_index + 1
    var l_index = $('.arrow-left').index($(this));
    var l_indexx = l_index - 1

    $('.change-slide').show();

    if (r_indexx == 0) {
      $('.arrow-left').hide();
    } else if (r_indexx == $('.slide').length - 1) {
      $('.arrow-right').hide();
    }

    $('.change-slide').show();

    if (l_indexx == 0) {
      $('.arrow-left').hide();
    } else if (l_indexx == $('.slide').length - 1) {
      $('.arrow-right').hide();
    }
  })
  $('.slide001-4').click(function(){
    $('#cover').show();
    $('.slide').eq(3).addClass('active');

    var r_index = $('.arrow-right').index($(this));
    var r_indexx = r_index + 1
    var l_index = $('.arrow-left').index($(this));
    var l_indexx = l_index - 1

    $('.change-slide').show();

    if (r_indexx == 0) {
      $('.arrow-left').hide();
    } else if (r_indexx == $('.slide').length - 1) {
      $('.arrow-right').hide();
    }

    $('.change-slide').show();

    if (l_indexx == 0) {
      $('.arrow-left').hide();
    } else if (l_indexx == $('.slide').length - 1) {
      $('.arrow-right').hide();
    }
  })

  // 答えと解説を開く
  $('.btn-commentary').click(function(){
    $('.block').removeClass('block');

    $('#cover').show();
    $('.answer-check').eq(0).addClass('block');
    $('.answer-check').eq(0).show();

    var r_index = $('.answer-right').index($(this));
    var r_indexx = r_index + 1
    var l_index = $('.answer-left').index($(this));

    $('.change-answer').show();

    if (r_indexx == 0) {
      $('.answer-left').hide();
    } else if (r_indexx == $('.answer-check').length - 1) {
      $('.answer-right').hide();
    }

    $('.change-answer').show();

    if (l_index == 0) {
      $('.answer-left').hide();
    } else if (l_index == $('.answer-check').length - 1) {
      $('.answer-right').hide();
    }
  })

  // 解答閲覧チェック
  $('.btn-openanswer').click(function(){
    $('#cover').show();
    $('.answercheck-nav').slideDown();
  })
  // ナビゲーションclose
  $('.close-btn').click(function(){
    $(".nextchapter-nav").css('display', 'none');
    $(".answercheck-nav").css('display', 'none');
  })
  $('.btn-no').click(function(){
    $('#cover').css('display', 'none');
    $(".answercheck-nav").css('display', 'none');
  })


  $('html').keyup(function(e){

    // スライドキーボード操作、移動と矢印表示非表示
        switch(e.which){
          case 39: // Key[→]
          var r_index = $('.slide').index($('.active'));
          var r_indexx = r_index + 1;

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

        // 答えと解答スライドキーボード操作、移動と矢印非表示設定
        switch(e.which){
          case 39: // Key[→]
          var r_index = $('.answer-check').index($('.block'));
          var r_indexx = r_index + 1;

          if (r_indexx >= 0){
            if (r_indexx < $('.answer-check').length) {
              $('.block').removeClass('block');

              $('.change-answer').show();

              if (r_indexx == 0) {
                $('.answer-left').hide();
              } else if (r_indexx == $('.answer-check').length - 1) {
                $('.answer-right').hide();
              }

              $('.answer-check').eq(r_indexx).addClass('block');
              $('.answer-check').eq(r_indexx).show();
              break;
            }
            break;
          }
        }

        switch(e.which){
          case 37: // Key[←]
          var l_index = $('.answer-check').index($('.block'));
          var l_indexx = l_index - 1;

          if (l_indexx >= 0){
            $('.block').removeClass('block');

            $('.change-answer').show();

            if (l_indexx == 0) {
              $('.answer-left').hide();
            } else if (l_indexx == $('.answer-check').length - 1) {
              $('.answer-right').hide();
            }

            $('.answer-check').eq(l_indexx).addClass('block');
            $('.answer-check').eq(l_indexx).show();
            break;
          }
        }

        // 演習問題へのキー操作移動
        switch(e.which){
          case 13: // ENTER
          var index = $('.slide').index($('.active'));
          var indexx = index + 1;

          if (indexx >= $('.slide').length) {
            $('.active').removeClass('active');
            $('.answer-check').hide();
            $('#cover').css('display', 'none');
            break;
          }
        }
    });


    // 問題回答チェック
      $('.btn-answer001').click(function(){
        $('.mistake1,.mistake2,.mistake3').hide();
        var val1 = $('#my-form [name=chapter001-1-1]').val();
        var val2 = $('#my-form [name=chapter001-1-2]').val();
        var val3 = $('#my-form [name=chapter001-1-3]').val();

        if (val1 == '当期純利益'){
          if (val2 == 150) {
            if (val3 == 12300){
              $('.btn-nextchapter').show();
              $(".nextchapter-nav").slideDown();
            } else {
              $('.mistake3').show();
            };
          } else {
            $('.mistake2').show();
          };
        } else {
          $('.mistake1').show();
        };
      })
})
// console.log(l_indexx); デバッグ
