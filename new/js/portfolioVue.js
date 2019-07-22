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



const app = new Vue({
  el: '.owl-carousel',
  data:()=>({
    list: [
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