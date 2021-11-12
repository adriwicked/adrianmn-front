import { shallowMount } from '@vue/test-utils'
import ProjectCardList from '@/components/ProjectCardList'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/test/mocks'

describe('ProjectCard', () => {
    let wrapper

    it('shows all the projects received', () => {
        wrapper = shallowMount(ProjectCardList, {
            propsData: {
                projects
            }
        })

        const projectCards = wrapper.findAllComponents(ProjectCard)        
        expect(projectCards.length).toBe(6)
    })
})
