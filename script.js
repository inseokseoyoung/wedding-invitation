// script.js
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".fade-in"); // fade-in 클래스를 가진 모든 섹션을 선택

    const observerOptions = {
        root: null, // 뷰포트 기준
        rootMargin: "0px", // 관찰 영역의 여백
        threshold: 0.2 // 요소가 20% 보일 때 애니메이션 시작
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, index * 200); // 섹션마다 200ms 딜레이 추가
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);
    
      sections.forEach((section) => observer.observe(section));
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
        delay: 0,
        disableOnInteraction: false,
      },
      speed: 4000,
      grabCursor: true,
      slidesPerView: 1.5,
      centeredSlides: true, // 중앙에 슬라이드 위치
      spaceBetween: 10, // 슬라이드 간 여백
    });
  });
  
  function copyAddress() {
    const address = "서울 구로구 새말로 97 신도림테크노마트 7층";
    navigator.clipboard.writeText(address).then(() => {
        alert('주소가 복사되었습니다. 지도 앱을 통해 길찾기를 시작해주세요.');
    }).catch(err => {
        alert('주소 복사에 실패했습니다. 다시 시도해주세요.');
    });
}
 