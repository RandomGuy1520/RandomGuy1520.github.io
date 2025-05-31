const navbar = document.getElementById("navbar");
let lastScrollTop = 0;
let scrollTimeout;

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScrollTop) {
        navbar.classList.remove("fade-in");
        navbar.classList.add("fade-out");
    } else {
        navbar.classList.remove("fade-out");
        navbar.classList.add("fade-in");
    }

    lastScrollTop = currentScroll;
    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
        navbar.classList.remove("fade-out");
        navbar.classList.add("fade-in");
    }, 100);
});

document.addEventListener('DOMContentLoaded', () => {
    const ball = document.getElementById('afk-ball');
    const base = document.getElementById('afk-base');
    const animationContainer = base.parentElement;

    if (!ball || !base || !animationContainer) {
        console.error("AFK animation elements not found!");
        return;
    }

    const pathPoints = [
        { x: 100, y: 272 },
        { x: 44, y: 243 },
        { x: 28, y: 176 },
        { x: 87, y: 151 },
        { x: 146, y: 183 },
        { x: 205, y: 123 },
    ];

    let currentSegment = 0;
    let progressInSegment = 0;
    const animationSpeed = 0.02;

    let offsetX = 0;
    let offsetY = 0;

    function calculateOffsetsAndInitialize() {
        const baseRect = base.getBoundingClientRect();
        const containerRect = animationContainer.getBoundingClientRect();
        offsetX = baseRect.left - containerRect.left;
        offsetY = baseRect.top - containerRect.top;

        if (pathPoints.length > 0) {
            ball.style.left = (offsetX + pathPoints[0].x) + 'px';
            ball.style.top = (offsetY + pathPoints[0].y) + 'px';
        }
    }

    function createParticles(x, y) {
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
            animationContainer.appendChild(particle);

            const angle = Math.random() * 2 * Math.PI;
            const distance = Math.random() * 80;
            const duration = 1000;

            particle.animate([
                {
                    transform: 'translate(0, 0)',
                    opacity: 1
                },
                {
                    transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`,
                    opacity: 0
                }
            ], {
                duration: duration,
                easing: 'ease-out',
                fill: 'forwards'
            });

            setTimeout(() => particle.remove(), duration);
        }
    }

    function animateBall() {
        if (pathPoints.length < 2) return;
		
        if (currentSegment >= pathPoints.length - 1 && progressInSegment >= 1.0) {
            currentSegment = 0;
            progressInSegment = 0;
            if (pathPoints.length > 0) {
                ball.style.left = (offsetX + pathPoints[0].x) + 'px';
                ball.style.top = (offsetY + pathPoints[0].y) + 'px';
            }
            requestAnimationFrame(animateBall);
            return;
        }
		
        if (currentSegment >= pathPoints.length - 1) {
            currentSegment = 0;
            progressInSegment = 0;
        }
		
        const p1 = pathPoints[currentSegment];
        const p2 = pathPoints[currentSegment + 1];
        const targetX = p1.x + (p2.x - p1.x) * progressInSegment;
        const targetY = p1.y + (p2.y - p1.y) * progressInSegment;

		if (currentSegment >= pathPoints.length - 2 && progressInSegment >= 1.0 - animationSpeed) {
			createParticles(offsetX + targetX + 10, offsetY + targetY + 10);
		}

        ball.style.left = (offsetX + targetX) + 'px';
        ball.style.top = (offsetY + targetY) + 'px';

        progressInSegment += animationSpeed;

        if (progressInSegment >= 1.0) {
            progressInSegment = 0;
            currentSegment++;
        }
        requestAnimationFrame(animateBall);
    }

    window.addEventListener('load', () => {
        calculateOffsetsAndInitialize();
        animateBall();
        fetchLatestRelease();
    });
    window.addEventListener('resize', calculateOffsetsAndInitialize);
});
