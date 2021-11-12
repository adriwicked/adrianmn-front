<template>
    <div class="card-container">
        <div class="card-header">
            <h1 class="title">{{ project.title }}</h1>
            <ul class="links">
                <li v-if="project.repository" class="link">
                    <a :href="project.repository" target="blank">
                        <img
                            class="link-icon"
                            src="~/assets/imgs/github-icon.svg"
                        />
                    </a>
                </li>
                <li v-if="project.package" class="link">
                    <a :href="project.package" target="blank">
                        <img
                            class="link-icon"
                            src="~/assets/imgs/package-icon.svg"
                        />
                    </a>
                </li>
                <li v-if="project.demo" class="link">
                    <a :href="project.demo" target="blank">
                        <img
                            class="link-icon"
                            src="~/assets/imgs/demo-icon.svg"
                        />
                    </a>
                </li>
            </ul>
        </div>
        <p class="project-description">{{ project.description }}</p>
        <ul class="techs">
            <li v-for="tech in project.techs" :key="tech.id" class="tech">
                {{ tech }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        project: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style>
.card-container {
    padding: 0.7em 0.5em;
    border-bottom: 1px solid #ddd;
}

.card-header {
    display: flex;
    justify-content: space-between;
}

.title {
    font-size: 20px;
    display: inline-block;
    font-weight: bold;
}

.links {
    display: inline-flex;
}

.links > li {
    font-size: 16px;
    height: 1.5em;
    margin-left: 0.7em;
}

.links > li > a {
    border-bottom: none;
}

.project-description {
    padding-left: 1em;
    margin: 0.8em 0 0.5em 0;
    font-style: italic;
}

.techs {
    display: inline-flex;
}

.tech {
    padding: 0.2em 0.5em 0 0.5em;
    margin-right: 1em;
    font-family: "Courier New", Courier, monospace;
    font-size: 14px;
    color: #565656;
    background-color: #ddd;
    border-radius: 2px;
}
</style>