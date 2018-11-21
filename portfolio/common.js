(function(){
    'use strict';

    $.ajax({
        url: './data.json',
        dataType : 'json',
        success : function(data){
            var str = '';
            for(var list in data){
                var dataList = data[list];

                str += '<li>';
                str += '<a href=' + dataList.link + ' class="group_proj" target="_blank" style="background-image:url(' + dataList.image + ')">';
                str += '<div class="box_proj"><div class="area_proj">';
                str += ' <span class="desc_proj">' + dataList.company + '</span><strong class="tit_proj"> '+ dataList.name + ' </strong><span class="txt_proj">'+ dataList.desc + '</span>';
                str += '</div></div>';
                str += '</a>';
                str += '</li>';
            }
            $('.list_proj').html(str);
            $('.group_proj').on('click', function(){
                if( $(this).attr('href') == '#none' ){
                    alert('이미 사라진 페이지에요ㅠㅠ..');
                    return false;
                }
            });

        }
      });
})();