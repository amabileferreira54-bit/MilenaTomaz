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
       HEADER AO ROLAR
    ====================================================== */

    const header = document.getElementById("header");

    function updateHeader() {

        if (!header) return;

        if (window.scrollY > 80) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }

    window.addEventListener("scroll", updateHeader);

    updateHeader();

    /* ======================================================
       FAQ ACCORDION
    ====================================================== */

    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach(item => {

        const button = item.querySelector(".accordion-header");
        const content = item.querySelector(".accordion-content");

        button.addEventListener("click", () => {

            const opened = item.classList.contains("active");

            accordionItems.forEach(i => {

                i.classList.remove("active");

                i.querySelector(".accordion-content").style.maxHeight = null;

            });

            if (!opened) {

                item.classList.add("active");

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

    window.addEventListener("scroll", revealOnScroll);

    revealOnScroll();

    /* ======================================================
       CARDS
    ====================================================== */

    const cards = document.querySelectorAll(".service-card");

    function revealCards() {

        const trigger = window.innerHeight * 0.90;

        cards.forEach(card => {

            if (card.getBoundingClientRect().top < trigger) {

                card.classList.add("show");

            }

        });

    }

    window.addEventListener("scroll", revealCards);

    revealCards();

    /* ======================================================
       PARALLAX
    ====================================================== */

    const hero = document.querySelector(".hero");

    function parallax() {

        if (!hero) return;

        const offset = window.pageYOffset;

        hero.style.backgroundPositionY = offset * 0.45 + "px";

    }

    window.addEventListener("scroll", parallax);

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

    window.addEventListener("scroll", activeMenu);

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