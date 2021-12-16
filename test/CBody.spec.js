import { mount } from '@vue/test-utils'
import CBody from '@/components/CBody.vue'

describe('CBody', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(CBody)
    expect(wrapper.vm).toBeTruthy()
  })
})
