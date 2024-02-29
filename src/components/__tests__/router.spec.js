import { mount, RouterLinkStub } from '@vue/test-utils'
import PodcastItem from '@/components/PodcastItem.vue'

describe('Router', () => {
  test('renders router link', () => {
    const podcast = {
      docID: 'abc'
    }

    const wrapper = mount(PodcastItem, {
      props: { podcast },
      global: {
        components: {
          'router-link': RouterLinkStub
        }
      }
    })

    expect(wrapper.findComponent(RouterLinkStub).props().to).toEqual({
      name: 'podcast',
      params: { id: podcast.docID }
    })
  })
})
