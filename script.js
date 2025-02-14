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

function copyManAccount() {
  const address = "신한은행 110205761080";
  navigator.clipboard.writeText(address).then(() => {
      alert('계좌번호가 복사되었습니다.');
  }).catch(err => {
      alert('계좌번호 복사에 실패했습니다. 다시 시도해주세요.');
  });
}

function copyWomanAccount() {
  const address = "신한은행 110205761080";
  navigator.clipboard.writeText(address).then(() => {
      alert('계좌번호가 복사되었습니다.');
  }).catch(err => {
      alert('계좌번호 복사에 실패했습니다. 다시 시도해주세요.');
  });
}

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
    constructor(x, y, color, angle, speed) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.angle = angle;
        this.speed = speed;
        this.alpha = 1;
    }

    update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.alpha -= 0.02; // 서서히 사라지도록
    }

    draw() {
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

function createFirework(x, y) {
    const colors = ["#ff4d4d", "#ffaf40", "#40ff7f", "#4d79ff", "#ff66d9"];
    const particles = [];

    for (let i = 0; i < 30; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 4 + 2;
        const color = colors[Math.floor(Math.random() * colors.length)];
        particles.push(new Particle(x, y, color, angle, speed));
    }

    return particles;
}

let fireworks = [];

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    fireworks.forEach((firework, index) => {
        firework.forEach((particle, pIndex) => {
            particle.update();
            particle.draw();
            if (particle.alpha <= 0) {
                firework.splice(pIndex, 1);
            }
        });

        if (firework.length === 0) {
            fireworks.splice(index, 1);
        }
    });

    requestAnimationFrame(animate);
}

canvas.addEventListener("click", (event) => {
    const x = event.clientX;
    const y = event.clientY;
    fireworks.push(createFirework(x, y));
});

animate();
