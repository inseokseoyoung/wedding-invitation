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
  if (!canvas) {
      console.error("🔥 Error: Canvas element not found!");
      return; // canvas가 없으면 실행 중단
  }

  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  class Firework {
      constructor(x, y) {
          this.x = x;
          this.y = y;
          this.particles = [];
          for (let i = 0; i < 50; i++) {
              this.particles.push({
                  x: this.x,
                  y: this.y,
                  angle: Math.random() * Math.PI * 2,
                  speed: Math.random() * 4 + 2,
                  life: 50
              });
          }
      }

      update() {
          this.particles.forEach(p => {
              p.x += Math.cos(p.angle) * p.speed;
              p.y += Math.sin(p.angle) * p.speed;
              p.life--;
          });

          this.particles = this.particles.filter(p => p.life > 0);
      }

      draw() {
          ctx.fillStyle = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 1)`;
          this.particles.forEach(p => {
              ctx.beginPath();
              ctx.rect(p.x, p.y, 4, 4);
              ctx.fill();
          });
      }
  }

  const fireworks = [];

  function createFirework(x, y) {
      fireworks.push(new Firework(x, y));
  }

  function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      fireworks.forEach((firework, index) => {
          firework.update();
          firework.draw();
          if (firework.particles.length === 0) {
              fireworks.splice(index, 1);
          }
      });

      requestAnimationFrame(animate);
  }

  animate();

  canvas.addEventListener("click", function (event) {
    // 폭죽이 생성될 때, canvas 클릭 이벤트가 다른 요소의 클릭 이벤트를 방해하지 않도록 stopPropagation 제거
    createFirework(event.clientX, event.clientY);
});

  function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
  }

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();
});
