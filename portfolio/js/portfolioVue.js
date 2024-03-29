
const skill = new Vue({
  el: '.skill_cont',
  data : {
    list: [
      { 
        tit: 'HTML/CSS', 
        desc : [
          '웹표준과 접근성, 크로스 브라우징을 고려한 작업이 가능합니다.',
          '각 태그별 명세를 파악하여 의미에 맞는 마크업이 가능합니다.',
          'Vue의 기본 구조를 파악하고 있으며, 컴포넌트 단위의 마크업이 가능합니다.',
          '컴포넌트의 구성 및 사용성을 고려하여 마크업을 작성합니다.',
          'CSS 속성별 특징을 정확히 이해하여 사용하고 있습니다.',
          'CSS 전처리기(SASS)를 능숙하게 사용하고 있습니다.',
          'Repaint/Reflow를 고려한 마크업과 스타일 작성을 지향합니다.',
          '직관적인 네이밍을 준수하며, 스타일의 재상용성을 고려합니다.'
        ]
      },
      { 
        tit: 'JAVASCRIPT', 
        desc : [
          'Vanilla JS로 기능 구현이 가능합니다.',
          'API를 이용한 데이터 바인딩 작업이 가능합니다.',
          'axios를 활용한 RESTful API의 경험이 있습니다.',
          '재사용성과 유지보수를 고려해 코드를 모듈화하여 작성하기 위해 노력합니다.',
          'nodeJS와 socket.io를 이용한 실시간 데이터 처리가 가능합니다.',
          'Vue의 문법과 lifecycle을 활용한 공통 컴포넌트 개발의 경험이 있습니다.',
          'Vuetify를 사용하여 UI적용의 경험이 있습니다.',
          'Nuxt.js 환경에서 vue 개발의 경험이 있으며 SSR과 CSR의 차이를 이해하고 있습니다.',
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
          'Sketch, Zeplin, Figma 등 다양한 디자인툴의 사용 경험이 있습니다.',
          'JIRA를 이용해 업무 스케줄을 계획하며, WIKI를 통해 업무 분석, 가이드 작성이 가능합니다.'
        ]
      }
    ]
  }
});




const career = new Vue({
  el: '.career_cont',
  data:{
    list: [
      { 
      tit: '[너우리 시스템] KTds AI 시니어케어', 
      desc : '프리랜서',
      date : '2023.03 ~ 2023.05',
      use : ['Vue', 'javascript'],
      txt : 'KT에서 주관하는 AI 시니어케어 프로젝트로 KTds와 협력하여 진행하였습니다. 사이트 접근은 신청한 유저들만 가능합니다. 시니어들을 위해 셋탑기기를 활용하여 알람을 보내주는 서비스입니다. Vue.js 개발을 진행했습니다.',
      subTxt: [
        '- 추가개발이 필요한 페이지의 CRUD Vue 개발',
        '- Axios를 활용한 비동기통신 개발',
        '- UI 컴포넌트 관리',
        '- Vuex를 활용한 유저정보 state관리',
        '- jwt 를 활용한 로그인 유저정보 관리',
        '- 젠킨스를 이용한 CI/CD 빌드 배포'
      ]
    },
      { 
      tit: '[텔레씽크] KTds safe2go', 
      desc : '프리랜서',
      date : '2021.11 ~ 2023.02',
      use : ['Vue', 'javascript'],
      txt : '국내외 입출국시 코로나 검사예약 대행을 위한 프로젝트로, Vue.js 를 위해 세팅된 환경에서 프론트 운영 개발을 진행했습니다.',
      subTxt: [
        '- 기존 개발이 완료된 Vue 프로젝트의 운영 및 추가 개발',
        '- 요구사항의 UI 및 CRUD 개발',
        '- Axios를 활용한 비동기통신 개발',
        '- 서비스의 기술적 버그픽스 (XSS 대응 등)',
        '- UI 컴포넌트 관리',
        '- 한달 단위의 젠킨스를 이용한 CI/CD 배포',
        '- Vuex를 활용한 유저정보 state관리',
      ]
    }, { 
      tit: '[바인소프트] 삼성카드 모바일 UI개편 프로젝트', 
      desc : '프리랜서',
      date : '2020.07 ~ 2021.10',
      use : ['Vue', 'javascript'],
      txt : '삼성카드 프로젝트의 모바일 화면 UI개편사업으로, Vue 환경에서 공통 컴포넌트 개발 및 화면 UI개발을 진행했습니다.',
      subTxt: [
        '- Vue 공통 컴포넌트 마크업 및 개발',
        '- 공통 컴포넌트 관린를 위한 Storybook 작성',
        '- Vue 컴포넌트 사용을 위한 퍼블리셔 가이드'
      ]
    }, { 
      tit: '[대원 C&C] SK Telecom 바로이사 프로젝트', 
      desc : '프리랜서',
      date : '2020.04 ~ 2021.06',
      use : ['html','css'],
      txt : 'SK Telecom 바로이사 모바일 프로젝트의 마크업을 담당하였습니다.'
    },{ 
      tit: '[노벨알엔디] 삼성전자 DS 프로젝트 (정보 대외비)', 
      desc : '프리랜서',
      date : '2020.07 ~ 2021.03',
      use : ['html','css'],
      txt : '(정보 대외비) HTML5와 CSS3를 기본으로 UI개발을 담당했습니다.'
    },{ 
      tit: '[행복 ICT] SK C&C AI 프로젝트', 
      desc : '프리랜서',
      date : '2019.09 ~ 2020.06',
      use : ['html','css','Vue'],
      txt : 'AI로 기능하는 드론 및 CCTV를 실시간으로 모니터링 하는 사이트로 Vue.js를 활용한 마크업을 담당했습니다.'
      + '\n상태에 맞는 데이터와 이벤트를 보여주기 위해 Vue의 컴포넌트 및 문법을 활용한 간단한 UI개발도 함께 진행했습니다.',
      subTxt: [
        '- Nuxt.js 환경에서 vuetify를 활용한 UI공통 컴포넌트 개발',
        '- Vue 문법을 이용한 데이터 핸들링 및 상태 개발',
        '- 레이아웃을 위한 모바일 대응 반응형 마크업'
      ]
    },{ 
      tit: 'HB invest', 
      desc : '개발팀',
      date : '2018.12 ~ 2019.09',
      use : ['html','css','javascript'],
      txt : '비트코인 트레이딩 플랫폼 거래소인 비트파이를 서비스하며, 마크업과 스크립트 개발을 담당했습니다.',
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
      }],
      subTxt: [
        '- 마크업 및 JS개발',
        '- Webpack/ Babel을 사용하여 ES6 문법 환경 구성',
        '- 암호화 및 압축화 빌드 설정',
        '- nodeJS와 Socket.io를 이용한 실시간 차트 구현 (EChart.js)'
      ]
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
    ]}
    // ,{ 
    //   tit: '울랄라랩', 
    //   desc : '플랫폼 개발팀',
    //   date : '2016.12 ~ 2017.04',
    //   use : ['html','css','javascript'],
    //   txt : '마크업과 스크립트를 담당하였으며, 기획에도 참여해 UI/UX에 대해 고민해 볼 수 있었습니다. keyframe으로 애니메이션이 들어간 프로젝트를 진행하며 Reflow/Repaint를 고려할 수 있었습니다. SCSS를 사용하기 위해 GULP를 세팅하여 사용했습니다.',
    //   proj : [{
    //     tit : '윔팩토리 사이트 구축',
    //     use : ['html','css','javascript'],
    //     desc :
    //       [ 
    //         '반응형 사이트로 PC 및 Mobile 대응으로 구현하였습니다.',
    //         '걸프를 사용하여 SCSS로 작업하였습니다.',
    //       ]
    //     },
    //     {
    //       tit : '사내 어드민 시스템',
    //       use : ['html','css','javascript'],
    //       desc :
    //         [
    //           '출/퇴근 관리 및 고객문의 관련한 사내 어드민 프로젝트입니다.',
    //         ]
    //   }]
    // } ,{ 
    //   tit: '엠서클', 
    //   desc : '디자인팀',
    //   date : '2015.04 ~ 2016.04',
    //   use : '',
    //   txt : '병원을 타켓으로 한 웹에이전시로, 디자인을 주로 진행하였습니다.',
    // } ,{ 
    //   tit: '포비즈넷', 
    //   desc : 'UI팀',
    //   date : '2013.06 ~ 2014.07',
    //   use : ['html','css'],
    //   txt : '마크업과 디자인을 병행하였으며, UI/UX에 대한 이해도를 높일 수 있었습니다. 주로 마크업을 담당해 레이아웃의 구조와 스타일의 특성을 파악할 수 있었습니다.',
    // }

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
        "name" : "SK C&C AI 프로젝트",
        "link" : "#none1",
        "company" : "프리랜서",
        "image" : "https://huhdanbi.github.io/resume/old/images/image_sk.png",
        "desc" : ['html','css','Vue']
      },
      {
        "name" : "비트파이 - 거래소",
        "link" : "http://bit314.com/",
        "company" : "HB invest",
        "image" : "https://huhdanbi.github.io/resume/old/images/image_bitpi.png",
        "desc" : ['html','css','javascript']
      },
      {
        "name" : "사내 어드민",
        "link" : "#none1",
        "company" : "HB invest",
        "image" : "https://huhdanbi.github.io/resume/old/images/image_bAdmin.png",
        "desc" : ['html','css','javascript']
      },
      {
        "name" : "암호화폐 통합 실시간 차트",
        "link" : "#none1",
        "company" : "HB invest",
        "image" : "https://huhdanbi.github.io/resume/old/images/image_bChart.png",
        "desc" : ['html','css','javascript']
      },
      {
        "name" : "카카오 프렌즈 글로벌몰",
        "link" : "https://us.kakaofriends.com/",
        "company" : "디케이테크인",
        "image" : "https://huhdanbi.github.io/resume/old/images/image_friends.png",
        "desc" : ['html','css']
      },
      {
        "name" : "카카오 스토리 채널카드",
        "link" : "https://accounts.kakao.com/login/kakaostory",
        "company" : "디케이테크인",
        "image" : "https://huhdanbi.github.io/resume/old/images/image_story.png",
        "desc" : ['html','css']
      },
      {
        "name" : "카카오네비 헬로카봇 프로모션",
        "link" : "https://kakaonavi.kakao.com/launch/event/carbot/index.do",
        "company" : "디케이테크인",
        "image" : "https://huhdanbi.github.io/resume/old/images/image_carbot.png",
        "desc" : ['html','css']
      },
      {
        "name" : "모바일 다음메인 통합슬롯",
        "link" : "https://m.daum.net/",
        "company" : "디케이테크인",
        "image" : "https://huhdanbi.github.io/resume/old/images/image_newsTab.png",
        "desc" : ['html','css']
      },
      {
        "name" : "다음검색 멜론 차트",
        "link" : "https://search.daum.net/search?nil_suggest=btn&w=tot&DA=SBC&q=%EB%A9%9C%EB%A1%A0+%EC%B0%A8%ED%8A%B8",
        "company" : "디케이테크인",
        "image" : "https://huhdanbi.github.io/resume/old/images/image_melon.png",
        "desc" : ['html','css']
      },
      {
        "name" : "2017 올해의 검색어",
        "link" : "https://search.daum.net/search?nil_suggest=btn&w=tot&DA=SBC&q=%EC%98%AC%ED%95%B4%EC%9D%98+%EA%B2%80%EC%83%89%EC%96%B4",
        "company" : "디케이테크인",
        "image" : "https://huhdanbi.github.io/resume/old/images/image_query.png",
        "desc" : ['html','css','javascript']
      },
      {
        "name" : "다음검색 스포츠 검색개편",
        "link" : "https://search.daum.net/search?w=tot&DA=YZR&t__nil_searchbox=btn&sug=&sugo=&q=LG%ED%8A%B8%EC%9C%88%EC%8A%A4",
        "company" : "디케이테크인",
        "image" : "https://huhdanbi.github.io/resume/old/images/image_lg.png",
        "desc" : ['html','css','javascript']
      },
      {
        "name" : "윔팩토리",
        "link" : "https://www.wimfactory.com/index_v2.html",
        "company" : "울랄라랩",
        "image" : "https://huhdanbi.github.io/resume/old/images/image_fact.png",
        "desc" : ['html','css','javascript']
      },
      {
        "name" : "WIM-X 대시보드 개편",
        "link" : "#none",
        "company" : "울랄라랩",
        "image" : "https://huhdanbi.github.io/resume/old/images/image_wimx.png",
        "desc" : ['html','css','javascript']
      },
      {
        "name" : "참투어",
        "link" : "#none",
        "company" : "포비즈넷",
        "image" : "https://huhdanbi.github.io/resume/old/images/image_charm.png",
        "desc" : ['html','css']
      },
      {
        "name" : "산웅 엔지니어링",
        "link" : "#none",
        "company" : "포비즈넷",
        "image" : "https://huhdanbi.github.io/resume/old/images/image_che.png",
        "desc" : ['html','css']
      },
      {
        "name" : "신명식품",
        "link" : "#none",
        "company" : "포비즈넷",
        "image" : "https://huhdanbi.github.io/resume/old/images/image_bakery.png",
        "desc" : ['html','css']
      },
      {
        "name" : "스포톡",
        "link" : "#none",
        "company" : "포비즈넷",
        "image" : "https://huhdanbi.github.io/resume/old/images/image_spo.png",
        "desc" : ['html','css']
      },
      {
        "name" : "영광 상사화 축제",
        "link" : "#none",
        "company" : "포비즈넷",
        "image" : "https://huhdanbi.github.io/resume/old/images/image_fes.png",
        "desc" : ['html','css']
      }
    ] 
  },
  methods: {
    urlState : function(url){
      if( url == '#none' ){
        alert('이미 사라진 페이지에요ㅠㅠ..');
        return false;
      }else if( url == '#none1' ){
        alert('링크를 제공할 수 없는 사이트입니다..')
        return false;
      }
    }
  },
});

