<template>
    <ol class="ordered-list">
        <li class="item-container table-header">
            <div>Title</div>
            <div class="description-col">Description</div>
            <!-- <div>Tech</div> -->
            <div>Links</div>
        </li>
        <li
            v-for="project in projects"
            :key="project.id"
            class="item-container"
        >
            <div>
                <a :href="project.package || project.demo" target="blank">
                    {{ project.title }}
                </a>
            </div>
            <div class="description-col">
                <p>{{ project.description }}</p>
                <span v-for="tech in project.techs" :key="tech" class="tech">
                    {{ tech }}
                </span>
            </div>
            <!-- <div class="teachs-container">
                <span v-for="tech in project.techs" :key="tech">
                    {{ tech }}
                </span>
            </div> -->
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
                <a :href="project.demo" target="blank" v-if="project.demo">
                    <img class="link-icon" src="~/assets/imgs/demo-icon.svg" />
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
    grid-template-columns: 7em auto 4em;

    margin: 0;
    padding: 0 1em;
    border-bottom: 1px solid #ddd;
    min-height: 3em;
    align-items: center;
}

.item-container a {
    text-decoration: none;
    border: 0;
    padding: 0;
    height: 1.5em;
}

.item-container a:hover {
    background-color: transparent;
}

.description-col {
    padding-right: 1em;
    font-size: 16px;
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

.teachs-container {
    font-size: 16px;
}

.links-container {
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.link-icon {    
    margin-right: 0.5em;
}
</style>