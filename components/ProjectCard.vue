<template>
    <div>
        <h1 class="title">{{ project.title }}</h1>
        <ul>
            <li class="link">
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
                    <img class="link-icon" src="~/assets/imgs/demo-icon.svg" />
                </a>
            </li>
        </ul>
        <p class="description">{{ project.description }}</p>
        <ul>
            <li
                v-for="tech in project.techs"
                :key="tech.id"
                class="tech"
            >
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
</style>