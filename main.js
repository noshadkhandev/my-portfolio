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
                animateHero();
            }
        });
    }
}, 50);