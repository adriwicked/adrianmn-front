<template>
    <div class="page-container">
        <header class="presentation-header">
            <img src="~/assets/imgs/me.png" alt="me" class="personal-img" />
            <div class="personal-title">
                <h1>ADRIAN MORENO</h1>
                <h2>SOFTWARE ENGINEER</h2>
            </div>
            <div class="buttons-container">
                <a
                    class="button"
                    href="https://firebasestorage.googleapis.com/v0/b/admona-9b351.appspot.com/o/cv-adrian-moreno-07-08-2021.pdf?alt=media&token=6ff2b415-0ce0-451d-897e-da60c43c727b"
                    target="_blank"
                >
                    Resume
                </a>
                <a
                    class="button"
                    href="mailto:adrianmn90@gmail.com"
                    target="_blank"
                >
                    Contact
                </a>
            </div>
            <div class="introduction">
                <p>
                    Hi, I'm Adrián, a software developer with the strong belief
                    that clean code and tests are the fundamental pillars for
                    the correct maintenance and scalability of software
                    products.
                </p>
            </div>
        </header>

        <section class="projects">
            <h2>Projects</h2>
            <ProjectCardList v-if="isMobile" :projects="projects" />
            <ProjectsTable v-if="!isMobile" :projects="projects" />
        </section>

        <section class="achievements">
            <h2>Achievements</h2>
            <ul>
                <li>
                    Managed to create and run a
                    <a href="http://teamgothammadrid.com/" target="_blank"
                        >game dev company</a
                    >
                    for 5 years. (2014 - 2019)
                </li>
                <li>
                    Won
                    <a
                        href="https://twitter.com/TeamGotham_/status/923531034884558849?s=20"
                        target="_blank"
                        >'Best Game Narrative'</a
                    >
                    award at Cassual Connect. Kyiv, Ukraine. (2017)
                </li>
                <li>Bitcoin early investor. (2017)</li>
                <li>
                    Won
                    <a
                        href="http://www.injuve.es/empleo/noticia/certamen-nacional-de-jovenes-emprendedores-2016"
                        target="_blank"
                        >Certamen Nacional Jóvenes Emprendedores</a
                    >. (2016)
                </li>
                <li>
                    Won 'Best Debut Game' award at
                    <a
                        href="https://www.hobbyconsolas.com/industria/gamelab-2016-ganadores-premios-nacionales-videojuego-59708"
                        target="_blank"
                        >Premios Nacionales del Videojuego</a
                    >. Barcelona, Spain. (2016)
                </li>
                <li>
                    Won 'Game of the year' award at
                    <a
                        href="https://www.eldiario.es/juegoreviews/noticias/the-ghest-team-gotham-reboot-develop-2015_1_2701075.html"
                        target="_blank"
                        >Reboot Develop</a
                    >. Dubrovnik, Croatia. (2015)
                </li>
            </ul>
        </section>

        <section class="game-programmer-background">
            <h2>My background</h2>
            <div class="videos">
                <iframe
                    src="https://www.youtube.com/embed/SFlaBZr-o1k"
                    srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/SFlaBZr-o1k?autoplay=1><img src=https://img.youtube.com/vi/SFlaBZr-o1k/hqdefault.jpg alt='Video The Dark Knight Rises: What Went Wrong? – Wisecrack Edition'><span>▶</span></a>"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
                <iframe
                    src="https://www.youtube.com/embed/lr9cQDR9mtg"
                    srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/lr9cQDR9mtg?autoplay=1><img src=https://img.youtube.com/vi/lr9cQDR9mtg/hqdefault.jpg alt='Video The Dark Knight Rises: What Went Wrong? – Wisecrack Edition'><span>▶</span></a>"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
        </section>

        <section class="books">
            <h2>Books I recommend</h2>
            <ul>
                <li>
                    <a href="https://amzn.com/1617292397" target="_blank"
                        >Soft Skills</a
                    >
                    by John Sonmez
                </li>
                <li>
                    <a href="https://amzn.com/0132350882" target="_blank"
                        >Clean Code</a
                    >
                    by Robert C. Martin
                </li>
                <li>
                    <a href="https://amzn.com/0134494164" target="_blank"
                        >Clean Architecture</a
                    >
                    by Robert C. Martin
                </li>
                <li>
                    <a href="https://amzn.com/0137081073" target="_blank"
                        >Clean Coder</a
                    >
                    by Robert C. Martin
                </li>
                <li>
                    <a href="https://amzn.com/0321146530" target="_blank"
                        >Test-Driven Development</a
                    >
                    by Kent Beck
                </li>
                <li>
                    <a href="https://amzn.com/1491950293" target="_blank"
                        >Programming Javascript Applications</a
                    >
                    by Eric Elliott
                </li>
                <li>
                    <a href="https://amzn.com/0596005555" target="_blank"
                        >AI for Game Developers</a
                    >
                    by Glenn Seemann & David Bourg
                </li>
                <li>
                    <a href="https://amzn.com/1491954388" target="_blank"
                        >Mastering Bitcoin</a
                    >
                    by Andreas Antonopoulos
                </li>
            </ul>
        </section>

        <section class="about-me">
            <h2>Things I like to do</h2>
            <ul>
                <li>Strength training lifting heavy weights.</li>
                <li>
                    Practice
                    <a
                        href="https://www.wimhofmethod.com/practice-the-method"
                        target="_blank"
                        >Wim Hof Method</a
                    >
                    every now and then.
                </li>
                <li>Invest part of my savings mainly in stocks.</li>
                <li>Expose myself to sunlight daily.</li>
                <li>Eating eggs in the morning.</li>
                <li>Finding calm through meditation.</li>
            </ul>
        </section>

        <footer>
            <ul class="footer-links">
                <li>
                    <a href="https://github.com/adriwicked" target="_blank"
                        >Github</a
                    >
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/adrian-moreno-navarro/"
                        target="_blank"
                        >Linkedin</a
                    >
                </li>
            </ul>
        </footer>
    </div>
</template>

<script>
import { projects } from "@/test/mocks";

export default {
    data() {
        return {
            projects,
            windowWidth: 0,
        };
    },
    beforeMount() {
        this.$nextTick(() => {
            window.addEventListener("resize", this.onResize);
        });
    },
    computed: {
        isMobile: function () {
            return this.windowWidth <= 687;
        },
    },
    methods: {
        onResize() {
            this.windowWidth = window.innerWidth;
        },
    },
};
</script>

<style>
body {
    display: flex;
    justify-content: center;
    padding: 0 2rem 0 2rem;
    color: #3c3c3c;
    line-height: 1.5rem;
    letter-spacing: 0.03rem;
    font-size: 18px;
}

a {
    text-decoration: none;
    font-weight: bold;
    padding-bottom: 1px;
    color: #565656;
    border-bottom: 1px solid;
}

a:hover {
    color: #eeeeee;
    background-color: #3c3c3c;
    border: none;
}

.page-container {
    max-width: 50rem;
}

.presentation-header {
    margin-top: 4rem;
    text-align: center;
}

.personal-img {
    width: 100px;
    height: 100px;
    padding: 0.4rem;
    background-color: white;
    border: 1px solid #c3c3c3;
    border-radius: 50%;
    filter: grayscale(100%) contrast(0.8) brightness(1.13);
}

.personal-title {
    margin-top: 1rem;
}

.personal-title h1 {
    font-size: 30px;
    font-family: Helvetica, sans-serif;
    font-weight: 700;
    color: #3c3c3c;
    letter-spacing: 0.1rem;
}

.personal-title h2 {
    font-size: 18px;
    font-family: "Times New Roman", Times, serif;
    color: #565656;
    letter-spacing: 0.34rem;
    margin-top: 0.3rem;
}

.buttons-container {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.button {
    margin: 1rem 1rem;
    padding: 1rem 1rem 1rem 1rem;
    background: none;
    box-shadow: none;
    border-radius: 0px;
    border: 2px solid #565656;
    color: #565656;
    font-family: "Times New Roman", Times, serif;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 0.1rem;
    cursor: pointer;
}

.button:hover {
    background-color: #565656;
    color: white;
    border: 2px solid #565656;
}

.introduction {
    margin-top: 4rem;
}

.introduction p {
    margin-top: 2rem;
    font-size: 20px;
    font-style: italic;
    line-height: 1.5;
}

.description {
    margin-top: 1rem;
    font-family: serif;
    color: #2e2e2e;
}

section {
    margin-top: 3rem;
}

section h2 {
    font-family: "Times New Roman", Times, serif;
    color: #565656;
    font-weight: bold;
    font-size: 32px;
    margin-bottom: 3rem;
}

section > ul {
    padding-left: 1rem;
}

section > ul > li {
    margin-top: 1rem;
}

table {
    border-collapse: collapse;
    width: 100%;
}

tr {
    border-bottom: 1px solid #dddddd;
    border-top: 1px solid #dddddd;
}

td,
th {
    text-align: left;
    padding: 8px;
}

th {
    font-weight: bold;
}

.link-icon {
    width: 1.5em;
    height: 1.5em;
}

.videos {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    align-content: center;
    flex-wrap: nowrap;
}

.videos iframe {
    width: 320px;
    height: 178px;
    margin-bottom: 1rem;
}

.footer-links {
    display: flex;
    justify-content: center;
    padding: 3rem 0 2rem 0;
}

.footer-links li {
    margin: 0 1rem;
}

@media screen and (min-width: 688px) {
    .buttons-container {
        flex-direction: row;
    }

    .button {
        padding: 0.75rem 2rem 0.75rem 2rem;
    }

    section {
        margin-top: 6rem;
    }

    .videos {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }

    .videos iframe {
        margin-bottom: 0;
    }
}
</style>