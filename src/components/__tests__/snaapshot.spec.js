import PodcastItem from '@/components/PodcastItem.vue'
import { mount, RouterLinkStub } from '@vue/test-utils'

describe('snapshots PodcastItem.vue', () => {
  test('renders correctly', () => {
    const podcast = {
      docID: 'abc',
      modified_name: 'test',
      display_name: 'test',
      comment_count: 5
    }

    const wrapper = mount(PodcastItem, {
      props: { podcast },
      global: {
        components: {
          'router-link': RouterLinkStub
        }
      }
    })

    expect(wrapper.element).toMatchSnapshot()
  })
})
