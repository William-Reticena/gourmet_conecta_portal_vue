import { PropType } from 'vue'

export const buttonProps = {
  type: {
    type: String as PropType<'button' | 'submit' | 'reset'>,
    default: 'button',
  },
}
