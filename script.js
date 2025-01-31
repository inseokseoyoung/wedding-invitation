// script.js
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".fade-in"); // fade-in 클래스를 가진 모든 섹션을 선택

    const observerOptions = {
        root: null, // 뷰포트 기준
        rootMargin: "0px", // 관찰 영역의 여백
        threshold: 0.2 // 요소가 20% 보일 때 애니메이션 시작
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // 요소가 보이면 visible 클래스 추가
                observer.unobserve(entry.target); // 한 번만 실행되도록 중지
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section)); // 각 섹션을 관찰
});

function calculateDday() {
    const weddingDate = new Date(2025, 4, 24); // 2025년 5월 24일
    const today = new Date();
    const diff = weddingDate - today;
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

    const dDayElement = document.getElementById("d-day");
    if (days > 0) {
        dDayElement.textContent = `D-${days}`; // D-Day 형태로 표시
    } else if (days === 0) {
        dDayElement.textContent = "D-Day!"; // 결혼식 당일 표시
    } else {
        dDayElement.textContent = `D+${Math.abs(days)}`; // 결혼식 후 표시
    }
}

document.addEventListener("DOMContentLoaded", calculateDday);


// 페이지가 로드되면 디데이 계산
document.addEventListener("DOMContentLoaded", calculateDday);


document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper('.swiper-container', {
      loop: true,  // 무한 슬라이드
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      speed: 1200,
      grabCursor: true,
      slidesPerView: 1,
    });
  });
  
  