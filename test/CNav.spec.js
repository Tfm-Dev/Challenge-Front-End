import { mount } from '@vue/test-utils'
import CNav from '@/components/CNav.vue'

describe('CNav', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(CNav)
    expect(wrapper.vm).toBeTruthy()
  })
})
