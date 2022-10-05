const $txt = document.querySelector(".txt-title");
const content = "김건우\nENFP 개발자\n1993.12.05\n위코드 39기";
let contentIndex = 0;

// typing 함수
let typing = function () {
    $txt.innerHTML += content[contentIndex];
    contentIndex++;
    if (content[contentIndex] === "\n") {
      $txt.innerHTML += "<br />";
      contentIndex++;
    }
    if (contentIndex > content.length) {
      $txt.textContent = "";
      contentIndex = 0;
    }
  };
  
  // 0.2초간격으로 typing 함수 실행
  setInterval(typing, 200);