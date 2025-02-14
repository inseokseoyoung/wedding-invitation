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

function copyWomanAccount() {
  copyToClipboard("신한은행 110205761080", '계좌번호가 복사되었습니다.');
}

// 폭죽 효과 코드
document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("fireworksCanvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // 이미지 로드 (상대 경로로 설정)
  const particleImages = [
      new Image(),
      new Image(),
      new Image()
  ];

  // 이미지 경로 업데이트
  particleImages[0].src = "images/confetti_image_1.png"; // 첫 번째 이미지 경로
  particleImages[1].src = "images/confetti_image_2.png"; // 두 번째 이미지 경로
  particleImages[2].src = "images/confetti_image_3.png"; // 세 번째 이미지 경로

  class Firework {
      constructor() {
          // 폭죽이 양쪽 끝에서 랜덤하게 시작
          const randomSide = Math.random() > 0.5 ? 'left' : 'right';
          this.x = randomSide === 'left' ? Math.random() * (canvas.width / 2) : Math.random() * (canvas.width / 2) + canvas.width / 2;
          this.y = 0; // 화면 상단에서 시작
          this.particles = [];
          this.isExploded = false;

          // 파티클들 생성
          for (let i = 0; i < 150; i++) {  // 파티클 개수
              this.particles.push({
                  x: this.x,
                  y: this.y,
                  angle: Math.random() * Math.PI * 2,
                  speed: Math.random() * 6 + 4,  // 속도를 더 빠르게 설정
                  life: 100,
                  imageIndex: Math.floor(Math.random() * 3),  // 0, 1, 2 중 하나를 랜덤으로 선택
                  gravity: 0.1 + Math.random() * 0.2,  // 중력 추가
                  velocityY: 0  // Y축 속도
              });
          }
      }

      update() {
          if (!this.isExploded) {
              // 폭죽이 폭발할 때까지 떨어지도록 Y축 속도 증가
              this.particles.forEach(p => {
                  p.y += p.speed;  // 아래로 떨어짐
                  if (p.y > canvas.height / 3) {  // 일정 높이까지 떨어지면 폭발
                      this.isExploded = true;  // 폭발 상태로 변경
                  }
              });
          }

          if (this.isExploded) {
              // 폭죽이 터지면 파티클들이 떨어지게 하며 중력 효과 추가
              this.particles.forEach(p => {
                  p.x += Math.cos(p.angle) * p.speed;
                  p.y += Math.sin(p.angle) * p.speed;
                  p.velocityY += p.gravity;  // 중력 추가
                  p.y += p.velocityY;  // Y축 속도 적용
                  p.life--;
              });
          }

          this.particles = this.particles.filter(p => p.life > 0);  // 생명이 끝난 파티클 삭제
      }

      draw() {
          this.particles.forEach(p => {
              // 이미지가 로드된 후에 그리기
              if (particleImages[0].complete && particleImages[1].complete && particleImages[2].complete) {
                  // 랜덤으로 선택된 이미지 그리기
                  ctx.drawImage(particleImages[p.imageIndex], p.x, p.y, 40, 40); // 파티클 크기 조정
              }
          });
      }
  }

  const fireworks = [];

  function createFirework() {
      fireworks.push(new Firework());
  }

  function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      fireworks.forEach(firework => {
          firework.update();
          firework.draw();
      });
      requestAnimationFrame(animate);
  }

  animate();

  // 페이지 로드시 폭죽 터짐 (양쪽 끝에서)
  createFirework();
});

