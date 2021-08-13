class MyHeader extends HTMLElement {
    constructor() {
      super();
      // 요소추가
    }
  
    // 그리기
    render()
    {
        let result = this.getAttribute('n') || "바보";
        this.innerHTML = `
        <header>
            <div class="top_head">
            <div class="logo">
            <a href="index.html"> <img src="./images/logo.png" alt="로고"></a>
            </div>
            <nav>
                <ul>
                    <li>${this.result}
                        <ul class="depth2">
                            <li class="show1"><a href="">병원소개</a></li>
                            <li class="show1"><a href="">의료진소개</a></li>
                        </ul>
                    </li>
                    <li>클리닉 소개
                        <ul class="depth2">
                            <li class="show1"><a href="">임플란트</a></li>
                            <li class="show1"><a href="">교정</a></li>
                            <li class="show1"><a href="">미백/성형</a></li>
                            <li class="show1"><a href="">치아살리기</a></li>
                        </ul>
                    </li>
                    <li>스페셜 프로그램
                        <ul class="depth2">
                            <li class="show1"><a href="">스마일 성형</a></li>
                            <li class="show1"><a href="">웨딩/면접</a></li>
                            <li class="show1"><a href="">맞춤예방</a></li>
                        </ul>
                    </li>
                    <li>커뮤니티
                    <ul class="depth2">
                        <li class="show1"><a href="">고객의 소리</a></li>
                        <li class="show1"><a href="">공지사항</a></li>
                        <li class="show1"><a href="">갤러리</a></li>
                        <li class="show1"><a href="">자유게시판</a></li>
                    </ul>
                    </li>
                    <li>오시는길
                    <ul class="depth2">
                        <li class="show1"><a href="">오시는길</a></li>
                        <li class="show1"><a href="">진료 시간</a></li>
                        <li class="show1"><a href="sub4_1.html">온라인 상담</a></li>
                    </ul>
                    </li>
                    </ul>
            </nav>
            </div>
            </div>
            
        </header>
        `;
    }


    connectedCallback() {
    //   html 요소에 추가되면 실행
        // 아직 실행 안됬으면
        if (!this.rendered)
        {
            // 실행시킨다.
            this.render();
            // 나 실행중인거 홈페이지에 알려준다.
            this.rendered = true;
        }
    }
  
    disconnectedCallback() {
      // 요소가 자바스크립트나 제이쿼리에 지워지면 실행
    }
  
    static get observedAttributes() {
    /* img (src) <-  이 속성 만드는 곳 */
      return ['n'];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      // 위 속성 값이 변했을 때 발생
      // n 값이 바뀌면 다시 그려준다.
        this.render();
    }
  
    adoptedCallback() {
      // 사용할일 거의 없음
        // 자바스크립트 appendchild 쓰면 발생
    }
  
}

// 브라우저에 이거 사용하겠다고 알림
customElements.define("my-header", MyHeader);
