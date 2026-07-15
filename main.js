// ===================== MAIN JS =====================

document.addEventListener('DOMContentLoaded', () => {

    // ===================== LOADING SCREEN =====================
    const loader = document.getElementById('loader');
    const loaderPercent = document.getElementById('loaderPercent');
    const loaderFill = document.querySelector('.loader-bar-fill');
    
    let count = 0;
    const loaderInterval = setInterval(() => {
        count += Math.floor(Math.random() * 10) + 5;
        if (count >= 100) count = 100;
        
        loaderPercent.textContent = count + '%';
        loaderFill.style.width = count + '%';
        
        if (count === 100) {
            clearInterval(loaderInterval);
            gsap.to(loader, { 
                opacity: 0, 
                duration: 0.6, 
                delay: 0.3, 
                ease: 'power2.inOut',
                onComplete: () => {
                    loader.style.display = 'none';
                    animateHero(); // Start hero animations after loader
                }
            });
        }
    }, 50);

    // ===================== CUSTOM CURSOR =====================
    const cursorDot = document.getElementById('cursorDot');
    const cursorRing = document.getElementById('cursorRing');
    
    if (cursorDot && cursorRing && window.innerWidth > 768) {
        window.addEventListener('mousemove', (e) => {
            gsap.to(cursorDot, { x: e.clientX, y: e.clientY, duration: 0.1 });
            gsap.to(cursorRing, { x: e.clientX, y: e.clientY, duration: 0.3 });
        });

        document.querySelectorAll('a, button, [data-cursor="pointer"]').forEach(el => {
            el.addEventListener('mouseenter', () => {
                gsap.to(cursorRing, { scale: 1.5, opacity: 0.5, duration: 0.3 });
                gsap.to(cursorDot, { scale: 0, duration: 0.3 });
            });
            el.addEventListener('mouseleave', () => {
                gsap.to(cursorRing, { scale: 1, opacity: 1, duration: 0.3 });
                gsap.to(cursorDot, { scale: 1, duration: 0.3 });
            });
        });
    } else {
        if(cursorDot) cursorDot.style.display = 'none';
        if(cursorRing) cursorRing.style.display = 'none';
    }

    // ===================== SCROLL PROGRESS BAR =====================
    const scrollProgress = document.getElementById('scrollProgress');
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        if(scrollProgress) scrollProgress.style.width = scrollPercent + '%';
    });

    // ===================== NAVBAR & MOBILE MENU =====================
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    // Sticky Navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Hamburger Toggle
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        });
    }

    // Active Nav Link on Scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const navIndicator = document.getElementById('navIndicator');

    function moveIndicator(link) {
        if (!link || !navIndicator) return;
        navIndicator.style.left = link.offsetLeft + 'px';
        navIndicator.style.width = link.offsetWidth + 'px';
    }

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
                moveIndicator(link);
            }
        });
    });

    // Set initial indicator position
    moveIndicator(document.querySelector('.nav-link.active'));

    // ===================== TYPING EFFECT =====================
    const typingText = document.getElementById('typingText');
    const words = ['responsive websites.', 'clean UI/UX.', 'fast web apps.', 'pixel-perfect designs.'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentWord = words[wordIndex];
        typingText.textContent = isDeleting ? currentWord.substring(0, charIndex - 1) : currentWord.substring(0, charIndex + 1);
        
        charIndex = isDeleting ? charIndex - 1 : charIndex + 1;

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500); // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeEffect, 500); // Pause before next word
        } else {
            setTimeout(typeEffect, isDeleting ? 50 : 100);
        }
    }
    if(typingText) typeEffect();

    // ===================== GSAP & SCROLL ANIMATIONS =====================
    gsap.registerPlugin(ScrollTrigger);

    // Hero Animations
    function animateHero() {
        const heroTl = gsap.timeline();
        heroTl.from('[data-reveal]', { 
            y: 40, 
            opacity: 0, 
            duration: 0.8, 
            stagger: 0.15, 
            ease: 'power3.out' 
        });
    }

    // Scroll Reveal General
    gsap.utils.toArray('[data-reveal]').forEach(el => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out'
        });
    });

    // Stats Counter
    gsap.utils.toArray('[data-count]').forEach(counter => {
        const target = +counter.getAttribute('data-count');
        gsap.to(counter, {
            innerText: target,
            duration: 2,
            snap: { innerText: 1 },
            ease: 'power1.out',
            scrollTrigger: {
                trigger: counter,
                start: 'top 85%'
            }
        });
    });

    // Skill Bars Animation
    gsap.utils.toArray('.skill-bar').forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        const fill = bar.querySelector('.skill-fill');
        const text = bar.querySelector('.skill-percent');
        
        gsap.to(fill, {
            width: percent + '%',
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: bar,
                start: 'top 85%'
            }
        });

        gsap.to(text, {
            innerText: percent,
            duration: 1.5,
            snap: { innerText: 1 },
            suffix: '%',
            scrollTrigger: {
                trigger: bar,
                start: 'top 85%'
            }
        });
    });

    // ===================== TILT CARDS =====================
    const tiltCards = document.querySelectorAll('.tilt-card');

    if (window.innerWidth > 768) {
        tiltCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * 8;
                const rotateY = ((x - centerX) / centerX) * -8;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
            });
        });
    }

    // ===================== CONTACT FORM =====================
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !subject || !message) {
                formStatus.textContent = "Please fill out all fields.";
                formStatus.style.color = "#ff4d4d";
                return;
            }

            // Simulate sending
            formStatus.textContent = "Sending message...";
            formStatus.style.color = "#00f2fe";
            
            setTimeout(() => {
                formStatus.textContent = "Message sent successfully! ✅";
                formStatus.style.color = "#4caf50";
                contactForm.reset();
                
                setTimeout(() => {
                    formStatus.textContent = "";
                }, 4000);
            }, 2000);
        });
    }

    // ===================== BACK TO TOP =====================
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    if(backToTop) {
        backToTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ===================== SET CURRENT YEAR =====================
    const yearSpan = document.getElementById('year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // ===================== PARTICLES CANVAS (Optional Basic) =====================
    const canvas = document.getElementById('particles');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particlesArray = [];

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
                this.opacity = Math.random() * 0.5 + 0.2;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
                if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
            }
            draw() {
                ctx.fillStyle = `rgba(0, 242, 254, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function initParticles() {
            particlesArray = [];
            const numberOfParticles = (canvas.width * canvas.height) / 9000;
            for (let i = 0; i < numberOfParticles; i++) {
                particlesArray.push(new Particle());
            }
        }

        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
                particlesArray[i].draw();
            }
            requestAnimationFrame(animateParticles);
        }

        initParticles();
        animateParticles();

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        });
    }

});