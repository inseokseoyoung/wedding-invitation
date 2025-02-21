document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".fade-in"); // fade-in 클래스를 가진 모든 섹션 선택

  const observerOptions = {
      root: null, // 뷰포트 기준
      rootMargin: "0px",
      threshold: 0.2 // 20% 보일 때 애니메이션 시작
  };

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
              setTimeout(() => {
                  entry.target.classList.add("visible");
              }, index * 200); // 200ms 딜레이 추가
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
  if (dDayElement) {
      if (days > 0) {
          dDayElement.textContent = `D-${days}`;
      } else if (days === 0) {
          dDayElement.textContent = "D-Day!";
      } else {
          dDayElement.textContent = `D+${Math.abs(days)}`;
      }
  } else {
      console.warn("🚨 'd-day' 요소를 찾을 수 없습니다.");
  }
}

// 페이지가 로드되면 디데이 계산
document.addEventListener("DOMContentLoaded", calculateDday);

document.addEventListener("DOMContentLoaded", () => {
  new Swiper('.swiper-container', {
      loop: true, // 무한 슬라이드
      autoplay: {
          delay: 0,
          disableOnInteraction: false,
      },
      speed: 4000,
      grabCursor: true,
      slidesPerView: 1.5,
      centeredSlides: true, // 중앙에 슬라이드 위치
      spaceBetween: 10,
  });
});

function copyToClipboard(text, message) {
  navigator.clipboard.writeText(text).then(() => {
      alert(message);
  }).catch(() => {
      alert('복사에 실패했습니다. 다시 시도해주세요.');
  });
}

function copyAddress() {
  copyToClipboard("서울 구로구 새말로 97 신도림테크노마트 7층", '주소가 복사되었습니다. 지도 앱을 통해 길찾기를 시작해주세요.');
}

function copyManAccount() {
  copyToClipboard("신한은행 110205761080", '계좌번호가 복사되었습니다.');
}

function copyManPapaAccount() {
  copyToClipboard("신한은행 110205761080", '계좌번호가 복사되었습니다.');
}

function copyManMamaAccount() {
  copyToClipboard("신한은행 110205761080", '계좌번호가 복사되었습니다.');
}

function copyWomanAccount() {
  copyToClipboard("신한은행 110205761080", '계좌번호가 복사되었습니다.');
}

function copyWomanPapaAccount() {
  copyToClipboard("신한은행 110205761080", '계좌번호가 복사되었습니다.');
}

function copyWomanMamaAccount() {
  copyToClipboard("신한은행 110205761080", '계좌번호가 복사되었습니다.');
}

document.addEventListener("DOMContentLoaded", () => {
  if (window.Kakao) {
    window.Kakao.init('16C71C8705B56C225898'); // 카카오 SDK 초기화
  }
  
  const shareButton = document.getElementById("kakao-share");
  if (shareButton) {
    shareButton.addEventListener("click", function() {
      window.Kakao.Share.createDefaultButton({
        container: '#kakao-share', // 카카오톡 공유 버튼
        objectType: 'feed',
        content: {
          title: 'Inseok & Seoyoung의 결혼식',
          description: '2025년 5월 24일 결혼식에 초대합니다!',
          imageUrl: 'https://inseokseoyoung.github.io/wedding-invitation/images/thumbnail.jpg',
          link: {
            mobileWebUrl: 'https://inseokseoyoung.github.io/wedding-invitation/',
            webUrl: 'https://inseokseoyoung.github.io/wedding-invitation/'
          }
        }
      });
    });
  } else {
    console.warn("🚨 'kakao-share' 요소를 찾을 수 없습니다.");
  }
});



// 링크 복사 버튼 클릭 시
document.getElementById("copy-link").addEventListener("click", function() {
  const url = window.location.href; // 현재 페이지 URL
  copyToClipboard(url, '링크가 복사되었습니다');
});

// 시스템 공유 버튼 클릭 시
document.getElementById("system-share").addEventListener("click", function() {
  if (navigator.share) {
      navigator.share({
          title: 'Inseok & Seoyoung의 결혼식',
          text: '저희 결혼식에 초대합니다. 함께 해주세요!',
          url: window.location.href
      }).then(() => {
          console.log('공유 성공');
      }).catch((error) => {
          console.error('공유 실패', error);
      });
  } else {
      alert('이 기능은 모바일에서만 사용할 수 있습니다.');
  }
});
