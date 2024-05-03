import { PropType } from 'vue'

export const drawerProps = {
  side: {
    type: String as PropType<'left' | 'right'>,
    default: 'left',
  },
}
