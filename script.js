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
