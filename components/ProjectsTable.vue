<template>
    <ol class="ordered-list">
        <li class="item-container table-header">
            <div>Title</div>
            <div>Description</div>
            <div>Tech</div>
            <div>Links</div>
        </li>
        <li
            class="item-container"
            v-for="project in projects"
            :key="project.id"
        >
            <div>{{ project.title }}</div>
            <div>{{ project.description }}</div>
            <div>{{ project.tech }}</div>
            <div class="links-container">
                <a
                    :href="project.repository"
                    target="blank"
                    v-if="project.repository"
                >
                    <img
                        class="link-icon"
                        src="~/assets/imgs/github-icon.svg"
                    />
                </a>
                <a :href="project.demo" target="blank" v-if="project.demo">
                    <img src="~/assets/imgs/play-icon.svg" class="link-icon" />
                </a>
                <a
                    :href="project.package"
                    target="blank"
                    v-if="project.package"
                >
                    <img
                        class="link-icon"
                        src="~/assets/imgs/package-icon.svg"
                    />
                </a>
            </div>
        </li>
    </ol>
</template>

<script>
export default {
    props: {
        projects: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style>
.table-header {
    font-weight: bold;
}

.item-container {
    display: grid;
    grid-template-columns: 8em auto 7em 3em;

    margin: 0;
    padding: 0 1em;
    border-bottom: 1px solid #ddd;
    height: 2.5em;
    align-items: center;
}

.item-container a {
    text-decoration: none;
    border: 0;
    padding: 0;
    height: 1em;
}

.item-container a:hover {
    background-color: transparent;
}

.links-container {
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
}

.link-icon {
    width: 1em;
    height: 1em;
    margin-right: 0.5em;
}
</style>