import { shallowMount } from '@vue/test-utils'
import DashboardView from '@/views/DashboardView.vue'
import PodcastItem from '@/components/PodcastItem.vue'

describe('DashboardView.vue', () => {
  test('renders list of podcasts', () => {
    const podcasts = [{}, {}, {}]

    const component = shallowMount(DashboardView, {
      data() {
        return {
          podcasts
        }
      }
    })

    const items = component.findAllComponents(PodcastItem)

    expect(items).toHaveLength(podcasts.length)

    items.forEach((wrapper, i) => {
      expect(wrapper.props().podcast).toStrictEqual(podcasts[i])
    })
  })
})
