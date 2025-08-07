
  gsap.registerPlugin(ScrollTrigger);

  // Animate About Text
  gsap.from(".about-text", {
    scrollTrigger: {
      trigger: ".about-text",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

  // Animate About Image
  gsap.from(".about-image", {
    scrollTrigger: {
      trigger: ".about-image",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: "power3.out"
  });

   gsap.registerPlugin(ScrollTrigger);

  // Animate each box card when it enters the viewport
  gsap.utils.toArray(".type .block").forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play reverse play reverse"
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power3.out",
      delay: i * 0.05  // slight stagger based on index
    });
  });

   gsap.registerPlugin(ScrollTrigger);

  const heroTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#hero-features",
      start: "top 80%",
      toggleActions: "play reverse play reverse"
    }
  });

  // Animate Heading
  heroTimeline.from("#hero-features h1", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

  // Animate Subtext
  heroTimeline.from("#hero-features p.text-lg", {
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  }, "-=0.6");

  // Animate Each Feature Card
  heroTimeline.from("#hero-features feature > div", {
    opacity: 0,
    y: 40,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
  }, "-=0.6");

  // Animate CTA Button
  heroTimeline.from("#hero-features call", {
    scale: 0.9,
    opacity: 0,
    duration: 0.8,
    ease: "back.out(1.7)"
  }, "-=0.6");

   gsap.registerPlugin(ScrollTrigger);

  // Timeline for choose section
  gsap.from("#choose h2", {
    scrollTrigger: {
      trigger: "#choose",
      start: "top 80%",
      toggleActions: "play reverse play reverse"
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });
gsap.registerPlugin(ScrollTrigger);
  // Timeline for choose section
  gsap.from("#it-works h2", {
    scrollTrigger: {
      trigger: "#choose",
      start: "top 50%",
      toggleActions: "play reverse play reverse"
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

 gsap.registerPlugin(ScrollTrigger);

const mm = gsap.matchMedia();

mm.add({
  // Desktop and larger screens
  "(min-width: 768px)": () => {
    gsap.from(".why-pic", {
      x: -20,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".why-pic",
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

    gsap.from(".why-text", {
      x: 20,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".why-text",
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  },

  // Mobile screens
  "(max-width: 767px)": () => {
    gsap.from(".why-pic", {
      x: -10,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".why-pic",
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

    gsap.from(".why-text", {
      x: 10,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".why-text",
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  }
});
