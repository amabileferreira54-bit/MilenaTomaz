/* ==========================================================
   PSICÓLOGA MILENA TOMAZ
   script.js

   Todas as interações do site
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ======================================================
       MENU MOBILE
    ====================================================== */

    const menuButton = document.getElementById("menu-mobile");
    const mobileMenu = document.getElementById("mobile-nav");

    if (menuButton && mobileMenu) {

        menuButton.addEventListener("click", () => {

            mobileMenu.classList.toggle("active");
            menuButton.classList.toggle("active");

        });

        // Fecha ao clicar em qualquer link

        mobileMenu.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                mobileMenu.classList.remove("active");
                menuButton.classList.remove("active");

            });

        });

    }

    /* ======================================================
       FAQ ACCORDION
    ====================================================== */

    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach(item => {

        const button = item.querySelector(".accordion-header");
        const content = item.querySelector(".accordion-content");

        button.setAttribute("aria-expanded", "false");

        button.addEventListener("click", () => {

            const opened = item.classList.contains("active");

            accordionItems.forEach(i => {

                i.classList.remove("active");

                i.querySelector(".accordion-header").setAttribute("aria-expanded", "false");

                i.querySelector(".accordion-content").style.maxHeight = null;

            });

            if (!opened) {

                item.classList.add("active");

                button.setAttribute("aria-expanded", "true");

                content.style.maxHeight = content.scrollHeight + "px";

            }

        });

    });

    /* ======================================================
       SCROLL REVEAL
    ====================================================== */

    const revealElements = document.querySelectorAll(".reveal");

    function revealOnScroll() {

        const trigger = window.innerHeight * 0.88;

        revealElements.forEach(element => {

            const top = element.getBoundingClientRect().top;

            if (top < trigger) {

                element.classList.add("active");

            }

        });

    }

    /* ======================================================
       PARALLAX
    ====================================================== */

    const hero = document.querySelector(".hero");

    function parallax() {

        if (!hero) return;

        const offset = window.pageYOffset;

        hero.style.backgroundPositionY = offset * 0.45 + "px";

    }

    /* ======================================================
       SCROLL SPY
    ====================================================== */

    const sections = document.querySelectorAll("section[id]");
    const menuLinks = document.querySelectorAll(".menu a");

    function activeMenu() {

        const scroll = window.scrollY + 140;

        sections.forEach(section => {

            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute("id");

            if (scroll >= top && scroll < top + height) {

                menuLinks.forEach(link => {

                    link.classList.remove("active");

                });

                const active = document.querySelector(
                    '.menu a[href="#' + id + '"]'
                );

                if (active) {

                    active.classList.add("active");

                }

            }

        });

    }

    /* ======================================================
       LOOP ÚNICO DE SCROLL
       Agrupa as leituras/escritas de scroll (reveal, parallax,
       menu ativo) num único listener, executado no máximo uma
       vez por frame via requestAnimationFrame — evita reflows
       repetidos quando cada efeito tinha seu próprio listener.
    ====================================================== */

    let scrollScheduled = false;

    function onScroll() {

        if (scrollScheduled) return;

        scrollScheduled = true;

        window.requestAnimationFrame(() => {

            revealOnScroll();
            parallax();
            activeMenu();

            scrollScheduled = false;

        });

    }

    window.addEventListener("scroll", onScroll, { passive: true });

    revealOnScroll();
    parallax();
    activeMenu();

    /* ======================================================
       BOTÕES COM SCROLL SUAVE
    ====================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (event) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        });

    });

});