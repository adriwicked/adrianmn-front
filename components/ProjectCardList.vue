<template>
    <div class="project-card-list-container">
        <ProjectCard
            v-for="project in projects"
            :key="project.id"
            :project="project"
        />
    </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard";
export default {
    components: {
        ProjectCard,
    },
    props: {
        projects: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style>
</style>