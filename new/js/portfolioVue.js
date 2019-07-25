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
  data : {
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
          '네트워크의 속도와 코드의 보안을 고려해 CSS/JS 압축(minify) 및 난독화(uglify)하여 프로젝트에 반영합니다.'
        ]
      },{ 
        tit: 'etc.', 
        desc : [
          '기획/디자인을 고려한 스펙 프로토타이핑이 가능합니다. ',
          'JIRA를 이용해 업무 스케줄을 계획하며, WIKI를 통해 업무 분석, 가이드 작성이 가능합니다.'
        ]
      }
    ]
  }
});




const career = new Vue({
  el: '.career_cont',
  data:{
    list: [{ 
      tit: 'HB invest', 
      desc : '개발팀',
      date : '2018.12.03 ~ 현재',
      use : ['html','css','javascript'],
      txt : '비트코인 트레이딩 플랫폼 거래소인 비트파이를 서비스하며, 마크업과 스크립트 개발을 담당했습니다.'
        + '\n직접 개발 작업환경을 구성해 적용하며 좀 더 웹팩을 익숙하게 다룰 수 있게 되었습니다.'
        + '\n또한 nodeJS와 socket.io를 이용한 실시간 서비스와 EChart를 접목한 실시간 차트를 적용했습니다.',
      proj : [{
        tit : '비트파이 - 비트코인 트레이딩 플랫폼 거래소',
        use : ['html','css','javascript'],
        desc :
          [ 
            'nodeJS와 socket.io를 이용한 실시간 거래 및 EChart와 접목해 실시간 차트를 구현했습니다.'
          ]
        },
        {
          tit : '사내 어드민 시스템',
          use : ['html','css','javascript'],
          desc :
            [
              '매출, 고객관리, 가맹점관리를 한눈에 알아볼 수 있도록 만들어진 어드민 사이트입니다.'
            ]
      }]
    },{ 
      tit: '디케이테크인', 
      desc : 'FT개발팀, UI개발팀',
      date : '2017.05 ~ 2018.07',
      use : ['html','css','javascript'],
      txt : 'FT개발팀:검색개발셀에서 IE8에 대응하는 마크업과 스크립트 개발을 함께 했으며, javascript의 기본기를 제대로 다질 수 있었습니다.'
            + '\njQuery + ES6 문법의 일부를 활용하여 개발을 진행했습니다.'
            + '\nUI개발팀에서는 주로 카카오와 관련된 마크업을 담당하며 더 적절한 구조와 스타일의 이해도를 높일 수 있었습니다.'
            + '\n다양한 직군과 다양한 프로젝트를 진행하며 업무를 좀 더 능숙하게 대응할 수 있게 되었습니다.',
      proj : [{
        tit : '카카오 프렌즈 글로벌몰',
        use : ['html','css'],
        desc :
          [ 
            '미국을 타겟으로 한 글로벌몰이며 반응형으로 작업하였습니다.'
          ]
      },{
        tit : '카카오 스토리 채널카드 개편',
        use : ['html','css'],
        desc :
          [ 
            '마크업 담당자 및 커뮤니케이션 담당자를 맡으며 진행했던 프로젝트입니다.',
          ]
      },{
        tit : '프로모션',
        use : ['html','css'],
        desc :
          [ 
            '각종 프로모션 마크업을 진행하며 웹 접근성에 신경써서 작업하였습니다.',
          ]
      },{
        tit : '다음검색 - 멜론 검색',
        use : ['html','css'],
        desc :
          [ 
            '음악 검색 시 검색 결과에 멜론과 엠넷뮤직의 순위를 보여주는 프로젝트입니다.',
          ]
      },{
        tit : '다음검색 - 추석 개편',
        use : ['html','css','javascript'],
        desc :
          [ 
            '추석에 대한 정보 및 이벤트를 소개하는 화면의 프로젝트입니다.',
          ]
      },{
        tit : '다음검색 - 스포츠 개편 PC',
        use : ['html','css','javascript'],
        desc :
          [ 
            '구기종목과 관련한 스포츠 검색화면 개편 프로젝트입니다.',
            'jQuery + ES6 문법 일부를 사용하여 개발하였습니다.'
          ]
      }
    ]},{ 
      tit: '울랄라랩', 
      desc : '플랫폼 개발팀',
      date : '2016.12 ~ 2017.04',
      use : ['html','css','javascript'],
      txt : '마크업과 스크립트를 담당하였으며, 기획에도 참여해 UI/UX에 대해 고민해 볼 수 있었습니다. keyframe으로 애니메이션이 들어간 프로젝트를 진행하며 Reflow/Repaint를 고려할 수 있었습니다. SCSS를 사용하기 위해 GULP를 세팅하여 사용했습니다.',
      proj : [{
        tit : '윔팩토리 사이트 구축',
        use : ['html','css','javascript'],
        desc :
          [ 
            '반응형 사이트로 PC 및 Mobile 대응으로 구현하였습니다.',
            '걸프를 사용하여 SCSS로 작업하였습니다.',
          ]
        },
        {
          tit : '사내 어드민 시스템',
          use : ['html','css','javascript'],
          desc :
            [
              '출/퇴근 관리 및 고객문의 관련한 사내 어드민 프로젝트입니다.',
            ]
      }]
    } ,{ 
      tit: '엠서클', 
      desc : '디자인팀',
      date : '2015.04 ~ 2016.04',
      use : '',
      txt : '병원을 타켓으로 한 웹에이전시로, 디자인을 주로 진행하였습니다.',
    } ,{ 
      tit: '포비즈넷', 
      desc : 'UI팀',
      date : '2013.06 ~ 2014.07',
      use : ['html','css'],
      txt : '마크업과 디자인을 병행하였으며, UI/UX에 대한 이해도를 높일 수 있었습니다. 주로 마크업을 담당해 레이아웃의 구조와 스타일의 특성을 파악할 수 있었습니다.',
    }
  ]},
  methods:{
    setRows : function(idx){
      return (this.list[idx].txt).split('\n').join('<br>');
    }
  }
});




const portfolio = new Vue({
  el: '.owl-carousel',
  data:{
    list: [
      {
        "name" : "카카오 프렌즈 글로벌몰",
        "link" : "https://us.kakaofriends.com/",
        "company" : "디케이테크인",
        "image" : "https://huhdanbi.github.io/resume/portfolio/images/image_friends.png",
        "desc" : ['html','css']
      },
      {
        "name" : "카카오 프렌즈 글로벌몰",
        "link" : "https://us.kakaofriends.com/",
        "company" : "디케이테크인",
        "image" : "https://huhdanbi.github.io/resume/portfolio/images/image_friends.png",
        "desc" : ['html','css']
      },
      {
        "name" : "카카오 프렌즈 글로벌몰",
        "link" : "https://us.kakaofriends.com/",
        "company" : "디케이테크인",
        "image" : "https://huhdanbi.github.io/resume/portfolio/images/image_friends.png",
        "desc" : ['html','css']
      },
      {
        "name" : "카카오 프렌즈 글로벌몰",
        "link" : "https://us.kakaofriends.com/",
        "company" : "디케이테크인",
        "image" : "https://huhdanbi.github.io/resume/portfolio/images/image_friends.png",
        "desc" : ['html','css']
      },
      {
        "name" : "카카오 프렌즈 글로벌몰",
        "link" : "https://us.kakaofriends.com/",
        "company" : "디케이테크인",
        "image" : "https://huhdanbi.github.io/resume/portfolio/images/image_friends.png",
        "desc" : ['html','css']
      },
      {
        "name" : "카카오 프렌즈 글로벌몰",
        "link" : "https://us.kakaofriends.com/",
        "company" : "디케이테크인",
        "image" : "https://huhdanbi.github.io/resume/portfolio/images/image_friends.png",
        "desc" : ['html','css']
      },
      {
        "name" : "카카오 스토리 채널카드",
        "link" : "https://accounts.kakao.com/login/kakaostory",
        "company" : "디케이테크인",
        "image" : "https://huhdanbi.github.io/resume/portfolio/images/image_story.png",
        "desc" : ['html','css']
      },
      {
        "name" : "카카오네비 헬로카봇 프로모션",
        "link" : "https://kakaonavi.kakao.com/launch/event/carbot/index.do",
        "company" : "디케이테크인",
        "image" : "https://huhdanbi.github.io/resume/portfolio/images/image_carbot.png",
        "desc" : ['html','css']
      },
      {
        "name" : "모바일 다음메인 통합슬롯",
        "link" : "https://m.daum.net/",
        "company" : "디케이테크인",
        "image" : "https://huhdanbi.github.io/resume/portfolio/images/image_newsTab.png",
        "desc" : ['html','css']
      },
      {
        "name" : "2017 올해의 검색어",
        "link" : "https://search.daum.net/search?nil_suggest=btn&w=tot&DA=SBC&q=%EC%98%AC%ED%95%B4%EC%9D%98+%EA%B2%80%EC%83%89%EC%96%B4",
        "company" : "디케이테크인",
        "image" : "https://huhdanbi.github.io/resume/portfolio/images/image_query.png",
        "desc" : ['html','css','javascript']
      },
      {
        "name" : "다음검색 스포츠 검색개편",
        "link" : "https://search.daum.net/search?w=tot&DA=YZR&t__nil_searchbox=btn&sug=&sugo=&q=LG%ED%8A%B8%EC%9C%88%EC%8A%A4",
        "company" : "디케이테크인",
        "image" : "https://huhdanbi.github.io/resume/portfolio/images/image_lg.png",
        "desc" : ['html','css','javascript']
      },
      {
        "name" : "윔팩토리 사이트 구축",
        "link" : "https://www.wimfactory.com/index_v2.html",
        "company" : "울랄라랩",
        "image" : "https://huhdanbi.github.io/resume/portfolio/images/image_fact.png",
        "desc" : ['html','css','javascript']
      },
      {
        "name" : "WIM-X 대시보드 개편",
        "link" : "#none",
        "company" : "울랄라랩",
        "image" : "https://huhdanbi.github.io/resume/portfolio/images/image_wimx.png",
        "desc" : ['html','css','javascript']
      },
      {
        "name" : "참투어 사이트 구축",
        "link" : "#none",
        "company" : "포비즈넷",
        "image" : "https://huhdanbi.github.io/resume/portfolio/images/image_charm.png",
        "desc" : ['html','css']
      },
      {
        "name" : "산웅 엔지니어링",
        "link" : "#none",
        "company" : "포비즈넷",
        "image" : "https://huhdanbi.github.io/resume/portfolio/images/image_che.png",
        "desc" : ['html','css']
      },
      {
        "name" : "신명식품",
        "link" : "#none",
        "company" : "포비즈넷",
        "image" : "https://huhdanbi.github.io/resume/portfolio/images/image_bakery.png",
        "desc" : ['html','css']
      },
      {
        "name" : "스포톡",
        "link" : "#none",
        "company" : "포비즈넷",
        "image" : "https://huhdanbi.github.io/resume/portfolio/images/image_spo.png",
        "desc" : ['html','css']
      },
      {
        "name" : "영광 상사화 축제",
        "link" : "#none",
        "company" : "포비즈넷",
        "image" : "https://huhdanbi.github.io/resume/portfolio/images/image_fes.png",
        "desc" : ['html','css']
      }
    ] 
  },
  methods: {
    urlState : function(url){
      if( url == '#none' ){
        alert('이미 사라진 페이지에요ㅠㅠ..');
        return false;
      }
    }
  },
});

