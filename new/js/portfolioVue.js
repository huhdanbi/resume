// Vue.component('todo-item', {
//   props: ['item'],
//   template: `
//   <div class="item">
//     <div class="group_item">
//       <div class="area_item">
//         <em class="sub_item">{{item.companyTit}}</em> 
//         <strong class="tit_item">{{item.tit}}</strong>
//         <span class="desc_item">{{item.desc}}</span>
//         <a v-bind:href="'{{item.link}}'" target="_blank" class="link_item">자세히보기</a>
//       </div>
//     </div>
//   </div>
//   `
// })

const skill = new Vue({
  el: '.skill_cont',
  data:()=>({
    list: [
      { 
        tit: 'HTML/CSS', 
        desc : [
          'some',
          'some2'
        ]
      },
      { 
        tit: 'JAVASCRIPT', 
        desc : [
          'some',
          'some2'
        ]
      },
      { 
        tit: 'IDE', 
        desc : [
          'some',
          'some2'
        ]
      },{ 
        tit: 'ETC', 
        desc : [
          'some',
          'some2'
        ]
      }
    ]
  })
});

const career = new Vue({
  el: '.career_cont',
  data:()=>({
    list: [
      { 
        tit: 'tit', 
        desc : '이름이에여 이름',
        date : '2019.07.22 ~ 2019.07.22',
        use : ['html','css','javascript'],
        proj : [
          {
            tit : 'tit',
            desc : [
              '내용1',
              '내용2'
            ]
          }
        ]
      }
    ]
  })
});

const portfolio = new Vue({
  el: '.owl-carousel',
  data:()=>({
    list: [
      { 
        companyTit: 'some', 
        link : '//naver.com',
        tit : 'title',
        img : 'https://huhdanbi.github.io/resume/portfolio/images/image_friends.png',
        desc : '마크업 100% / 스크립트 80%'
      },
      { 
        companyTit: 'some', 
        link : '//naver.com',
        tit : 'title',
        img : 'https://huhdanbi.github.io/resume/portfolio/images/image_friends.png',
        desc : 'something 100% / something 80%'
      },
      { 
        companyTit: 'some', 
        link : '//naver.com',
        tit : 'title',
        img : 'https://huhdanbi.github.io/resume/portfolio/images/image_friends.png',
        desc : 'something 100% / something 80%'
      },
      { 
        companyTit: 'some', 
        link : '//naver.com',
        tit : 'title',
        img : 'https://huhdanbi.github.io/resume/portfolio/images/image_friends.png',
        desc : 'something 100% / something 80%'
      },
      { 
        companyTit: 'some', 
        link : '//naver.com',
        tit : 'title',
        img : 'https://huhdanbi.github.io/resume/portfolio/images/image_friends.png',
        desc : 'something 100% / something 80%'
      }
    ]
  })
});


