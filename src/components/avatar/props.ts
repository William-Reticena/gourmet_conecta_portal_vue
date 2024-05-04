import { PropType } from 'vue'

export const avatarProps = {
  src: {
    type: String,
    default: '',
  },
  size: {
    type: String as PropType<'small' | 'medium' | 'large'>,
    default: 'medium',
  },
}
