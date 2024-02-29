import PodcastItem from '@/components/PodcastItem.vue'
import { mount, RouterLinkStub } from '@vue/test-utils'

describe('PodcastItem.vue', () => {
  test('render podcast.display_name', () => {
    const podcast = {
      display_name: 'Jane Doe'
    }

    const wrapper = mount(PodcastItem, {
      props: {
        podcast
      },
      global: {
        stubs: {
          'router-link': RouterLinkStub
        }
      }
    })

    const compositionAuthor = wrapper.find('.text-zinc-500')

    expect(compositionAuthor.text()).toBe(podcast.display_name)
  })
})
