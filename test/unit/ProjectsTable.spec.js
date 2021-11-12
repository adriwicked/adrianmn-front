import { shallowMount } from '@vue/test-utils'
import ProjectsTable from '@/components/ProjectsTable'
import { projects } from '@/test/mocks'

describe('ProjectsTable', () => {
    let wrapper

    it('shows all the projects received', () => {
        wrapper = shallowMount(ProjectsTable, {
            propsData: {
                projects
            }
        })

        const tableRows = wrapper.findAll('.item-container')
        expect(tableRows.length).toBe(7)
    })
})
