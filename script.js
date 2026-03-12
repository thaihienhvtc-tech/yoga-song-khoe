// Xử lý cuộn trang mượt mà (Smooth Scrolling)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Xử lý gửi Form (Demo)
const contactForm = document.getElementById('contact-form');
const formMsg = document.getElementById('form-msg');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Hiệu ứng gửi thành công giả lập
        contactForm.style.opacity = '0.5';
        const btn = contactForm.querySelector('button');
        btn.innerText = 'Đang gửi...';
        btn.disabled = true;

        setTimeout(() => {
            contactForm.reset();
            contactForm.style.display = 'none';
            formMsg.style.display = 'block';
            formMsg.innerText = "Cảm ơn bạn! Đội ngũ 'Yoga - Nghệ thuật sống khỏe' sẽ liên hệ với bạn trong vòng 24h.";
        }, 1500);
    });
}

// Hiệu ứng Fade-in khi scroll
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.benefit-card');
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight - 100) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});