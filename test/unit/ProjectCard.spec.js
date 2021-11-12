import { mount } from '@vue/test-utils'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/test/mocks'

describe('ProjectCard', () => {
    let wrapper

    it('shows the title of the project', () => {
        const project = projects[0]

        wrapper = mount(ProjectCard, {
            propsData: {
                project
            }
        })

        const titleElem = wrapper.find('.title')
        expect(titleElem.text()).toBe(project.title)
    })
    
    it('shows the description of the project', () => {
        const project = projects[0]
    
        wrapper = mount(ProjectCard, {
            propsData: {
                project
            }
        })
    
        const descElem = wrapper.find('.project-description')
        expect(descElem.text()).toBe(project.description)
    })
    
    it('shows as many links as the project has', () => {
        const project = projects[0]
    
        wrapper = mount(ProjectCard, {
            propsData: {
                project
            }
        })
    
        const linkElems = wrapper.findAll('.link')
        expect(linkElems.length).toBe(1)
    })

    it('shows as many technologies as the project has', () => {
        const project = projects[0]
    
        wrapper = mount(ProjectCard, {
            propsData: {
                project
            }
        })
    
        const linkElems = wrapper.findAll('.tech')
        expect(linkElems.length).toBe(3)
    })
})
