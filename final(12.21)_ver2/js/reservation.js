
var movie = ['스윙키즈', '먀악왕', '아쿠아맨', '보헤미안 랩소디', '국가부도의 날', '로마', '그린치', '스파이더맨', '어른이 되면', '라라랜드', '짱구는 못말려', '포켓몬스터'];
var movieList =[];


for(var i=0; i<movie.length; i++){
  movieList.push('<li>'+movie[i]+'</li>');
  console.log(movieList[i]);
};

var temp = movieList.join('');
console.log(temp);



  $( function() {

    // 영화정렬 후 리스트 형성
    $("#tabs-1").html("<ul>"+temp+"</ul>");
    $("#tabs-2").html("<ul>"+temp+"</ul>");
    $("#tabs-3").html("<ul>"+temp+"</ul>");

    $(".imgbox").html("<img src='images/reservation/moviePoster.png'>")

    $("[id^=schedule] button").on("click",function(){
      $(".price").html($(this).text());
    });



    // 탭기능
    $( "#tabs" ).tabs();
    // 아코디언기능
    $( "#accordion" ).accordion();
    // 지역선택 보이기
    $("#tabs>div li").click(function(){
      $("#off").addClass('none');
      $("#on").removeClass('hidden');
      $(".imgbox").html("<img src='images/reservation/Max2016LaLaLand.jpg'>")
      $(".evaluation").html($(this).text());
    });
    



    $(".catg_big").on("click", function(e) {
      // 현재에서 분모객체로 이동 후 다음 catg_mid 클래스로 이동 후 table태그를 찾아서 none 클래스를 제거
      $(this).parent().next('.catg_mid').find('table').removeClass('none');
      // 아이디가 schedule로 시작하는 모든 객체에 대해서 none클래스 추가
      $("[id^=schedule]").addClass('none');
    })
    $(".catg_mid td").on("click", function(e) {
      // 현재에서 분모객체 중 table태그로 이동하여 none클래스 추가 
      $(this).parents("table").addClass('none');
      // 현재 td태그의 아이디를 이용하여 schedule_ + id명 객체의 none클래스를 제거
      $("#schedule_" + $(this).attr("id")).removeClass('none');
      $(".information").html($(this).text());
    })
  });
