import { mount } from '@vue/test-utils'
import CTable from '@/components/CTable.vue'

describe('CTable', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(CTable)
    expect(wrapper.vm).toBeTruthy()
  })
})
