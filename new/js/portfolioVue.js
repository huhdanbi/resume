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
          '웹표준과 접근성, 크로스 브라우징을 고려한 작업이 가능합니다.',
          '각 태그별 명세를 파악하여 의미에 맞는 마크업이 가능합니다.',
          'CSS 속성별 특징을 정확히 이해하여 사용하고 있습니다.',
          'CSS 전처리기(SASS)를 능숙하게 사용하고 있습니다.',
          'Repaint/Reflow를 고려한 마크업과 스타일 작성을 지향합니다.',
          '직관적인 네이밍을 준수하며, 스타일의 재상용성을 고려합니다.'
        ]
      },
      { 
        tit: 'JAVASCRIPT', 
        desc : [
          'JS ES2015+와 jQuery로 실무에 적용하고 있습니다.',
          'API를 이용한 데이터 바인딩 작업이 가능합니다.',
          'Vanilla JS로 기능 구현이 가능합니다.',
          'JavaScript Vue.js 템플릿 작업의 경험이 있습니다.',
          'nodeJS와 socket.io를 이용한 실시간 데이터 처리가 가능합니다.',
          '재사용성과 유지보수를 고려해 코드를 모듈화하여 작성하기 위해 노력합니다.'
        ]
      },
      { 
        tit: 'IDE', 
        desc : [
          'Git/Git Hub으로 버전 관리, Git Command가 익숙합니다.',
          'SASS를 주로 사용하고 컴파일을 위해 Gulp를 세팅 및 사용합니다.',
          'JS 개발 실무 환경을 위해 적절한 플러그인 사용과 Webpack/Babel 셋팅이 가능합니다.',
          '네트워크 속도를 고려하여 CSS 및 JS 최적화(min/bundle)하여 프로젝트에 반영합니다.'
        ]
      },{ 
        tit: 'etc.', 
        desc : [
          '기획/디자인을 고려한 스펙 프로토타이핑이 가능합니다. ',
          'JIRA를 이용해 업무 스케줄을 계획하며, WIKI를 통해 업무 분석, 가이드 작성이 가능합니다.'
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
        "name" : "카카오 프렌즈 글로벌몰",
        "link" : "https://us.kakaofriends.com/",
        "company" : "디케이테크인",
        "image" : "https://huhdanbi.github.io/resume/portfolio/images/image_friends.png",
        "desc" : "마크업 50%"
      },
      {
        "name" : "카카오 스토리 채널카드",
        "link" : "https://accounts.kakao.com/login/kakaostory",
        "company" : "디케이테크인",
        "image" : "https://huhdanbi.github.io/resume/portfolio/images/image_story.png",
        "desc" : "마크업 작업 담당자"
      },
      {
        "name" : "카카오네비 헬로카봇 프로모션",
        "link" : "https://kakaonavi.kakao.com/launch/event/carbot/index.do",
        "company" : "디케이테크인",
        "image" : "https://huhdanbi.github.io/resume/portfolio/images/image_carbot.png",
        "desc" : "마크업 100%"
      },
      {
        "name" : "모바일 다음메인 통합슬롯",
        "link" : "https://m.daum.net/",
        "company" : "디케이테크인",
        "image" : "https://huhdanbi.github.io/resume/portfolio/images/image_newsTab.png",
        "desc" : "마크업 100%"
      },
      {
        "name" : "2017 올해의 검색어",
        "link" : "https://search.daum.net/search?nil_suggest=btn&w=tot&DA=SBC&q=%EC%98%AC%ED%95%B4%EC%9D%98+%EA%B2%80%EC%83%89%EC%96%B4",
        "company" : "디케이테크인",
        "image" : "https://huhdanbi.github.io/resume/portfolio/images/image_query.png",
        "desc" : "마크업 100% / 스크립트 개발 50%"
      },
      {
        "name" : "다음검색 스포츠 검색개편",
        "link" : "https://search.daum.net/search?w=tot&DA=YZR&t__nil_searchbox=btn&sug=&sugo=&q=LG%ED%8A%B8%EC%9C%88%EC%8A%A4",
        "company" : "디케이테크인",
        "image" : "https://huhdanbi.github.io/resume/portfolio/images/image_lg.png",
        "desc" : "마크업 100% / 스크립트 개발 70%"
      },
      {
        "name" : "윔팩토리 사이트 구축",
        "link" : "https://www.wimfactory.com/index_v2.html",
        "company" : "울랄라랩",
        "image" : "https://huhdanbi.github.io/resume/portfolio/images/image_fact.png",
        "desc" : "마크업 100% / 스크립트 100%"
      },
      {
        "name" : "WIM-X 대시보드 개편",
        "link" : "#none",
        "company" : "울랄라랩",
        "image" : "https://huhdanbi.github.io/resume/portfolio/images/image_wimx.png",
        "desc" : "마크업 80%"
      },
      {
        "name" : "참투어 사이트 구축",
        "link" : "#none",
        "company" : "포비즈넷",
        "image" : "https://huhdanbi.github.io/resume/portfolio/images/image_charm.png",
        "desc" : "마크업 100%"
      },
      {
        "name" : "산웅 엔지니어링",
        "link" : "#none",
        "company" : "포비즈넷",
        "image" : "https://huhdanbi.github.io/resume/portfolio/images/image_che.png",
        "desc" : "마크업 100%"
      },
      {
        "name" : "신명식품",
        "link" : "#none",
        "company" : "포비즈넷",
        "image" : "https://huhdanbi.github.io/resume/portfolio/images/image_bakery.png",
        "desc" : "마크업 100%"
      },
      {
        "name" : "스포톡",
        "link" : "#none",
        "company" : "포비즈넷",
        "image" : "https://huhdanbi.github.io/resume/portfolio/images/image_spo.png",
        "desc" : "마크업 100%"
      },
      {
        "name" : "영광 상사화 축제",
        "link" : "#none",
        "company" : "포비즈넷",
        "image" : "https://huhdanbi.github.io/resume/portfolio/images/image_fes.png",
        "desc" : "마크업 100%"
      }
    ] 
  })
});


