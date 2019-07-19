Vue.component('todo-item', {
  // The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.
  props: ['item'],
  template: `
  <div class="item">
    <a href="#none">
      <em>{{item.companyTit}}</em> 
      <strong>{{item.tit}}</strong>
      <span>{{item.desc}}</span>
    </a>
    </div>
    `
})

const app = new Vue({
  el: '.owl-carousel',
  data: {
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
  }
});