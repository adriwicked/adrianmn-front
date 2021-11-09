import { mount } from '@vue/test-utils'
import ProjectsTable from '@/components/ProjectsTable'

describe('ProjectsTable', () => {
    let wrapper

    it('shows all the projects received', () => {
        wrapper = mount(ProjectsTable, {
            propsData: {
                projects: [
                    {
                        title: 'Tetris',
                        description: 'A flat simple version of the legendary game',
                        language: 'Javascript'
                    },
                    {
                        title: 'Minesweeper',
                        description: 'A minimalist version of minesweeper',
                        language: 'Javascript'
                    },
                    {
                        title: 'Meetings',
                        description: 'A library that gives you available time slots to meet',
                        language: 'Python'
                    },
                ]
            }
        })

        const tableRows = wrapper.findAll('.item-container')

        expect(tableRows.length).toBe(4)
    })
})
