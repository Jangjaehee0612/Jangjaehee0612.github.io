document.addEventListener('DOMContentLoaded', function() {
    console.log('웹 페이지가 로드되었습니다!');
});

// 첫 번째 화면 타이핑 효과 대상 요소들
const headingText1 = "Hello, Welcome!";
const paragraphText1 = "Who Are You? Please, Tell Me Your Name.";
const heading1Element = document.getElementById('heading1');
const paragraph1Element = document.getElementById('paragraph1');

// 두 번째 화면 타이핑 효과 대상 요소들
const headingText2 = "Hello, Welcome to JAEHEE's World!";
const paragraphText2 = "This is your second step into the fashion and technic adventure.";
const heading2Element = document.getElementById('screen2-heading');
const paragraph2Element = document.getElementById('screen2-paragraph');

// 타이핑 속도
const typingSpeed = 100;

// 타이핑 효과 함수
function typeText(element, text, index = 0, callback = null) {
    if (index === 0) {
        element.innerHTML = '';
    }

    if (index < text.length) {
        element.innerHTML += text.charAt(index);
        setTimeout(() => typeText(element, text, index + 1, callback), typingSpeed);
    } else if (callback) {
        setTimeout(callback, 500);  // 텍스트 완료 후 콜백 함수 실행 (0.5초 후)
    }
}

// 페이지 로드 시 첫 번째 화면 타이핑 효과 시작
window.onload = startFirstScreenTyping;

// 첫 번째 화면 타이핑 효과 실행
function startFirstScreenTyping() {
    typeText(heading1Element, headingText1, 0, () => {
        typeText(paragraph1Element, paragraphText1);
    });
}

// 두 번째 화면 타이핑 효과 실행
function startSecondScreenTyping() {
    typeText(heading2Element, headingText2, 0, () => {
        typeText(paragraph2Element, paragraphText2);
    });
}

// 첫 번째 화면에서 이름 입력 처리
const nameInput = document.getElementById('name-input');
const screen1 = document.getElementById('screen1');
const screen2 = document.getElementById('screen2');

// 스크린1에서 2로 화면 전환 함수
function goToNextScreen() {
    const userName = nameInput.value.trim();
    if (userName) {
        screen1.style.display = 'none';   // 첫 화면 숨기기
        screen2.style.display = 'block';  // 두 번째 화면 보이기
        startSecondScreenTyping();  // 두 번째 화면 타이핑 효과 실행
    } else {
        alert("Please enter your name!");  // 이름을 입력하지 않으면 경고창
    }
}

// 다음 버튼 클릭 시 스크린2로 화면 전환
const nextButton = document.getElementById('next-button');
if (nextButton) {
    nextButton.addEventListener('click', goToNextScreen);
}

// 스크린2에서 3으로 화면 전환 함수
function goToThirdScreen() {
    const userName = nameInput.value.trim();
    if (userName) {
        screen2.style.display = 'none';   // 두 화면 숨기기
        screen3.style.display = 'block';  // 세 번째 화면 보이기
    }
}

// 다음 버튼 클릭 시 화면 전환
const nextScreenButton = document.getElementById('next-screen-button');
if (nextScreenButton) {
    nextScreenButton.addEventListener('click', goToThirdScreen);
}

// Enter 키 입력 시에도 화면 전환
nameInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        goToNextScreen();
    }


});
