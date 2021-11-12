<template>
    <ol class="ordered-list">
        <li class="item-container table-header">
            <div></div>
            <div>Title</div>
            <div class="description-col">Description</div>
            <div>Tech</div>
        </li>
        <li
            v-for="project in projects"
            :key="project.id"
            class="item-container"
        >
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
            </div>
            <div>                
                <a :href="project.package || project.demo" target="blank">
                    {{ project.title }}
                </a>                
            </div>
            <div class="description-col">{{ project.description }}</div>
            <div>{{ project.tech }}</div>
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
    grid-template-columns: 3em 6em auto 5em;

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
    height: 1em;
}

.item-container a:hover {
    background-color: transparent;
}

.links-container {
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

@media screen and (min-width: 688px) {
    /* .item-container {
        display: grid;
        grid-template-columns: 8em auto 6em 3em;

        margin: 0;
        padding: 0 1em;
        border-bottom: 1px solid #ddd;
        min-height: 2.5em;
        align-items: center;
    } */
}
</style>