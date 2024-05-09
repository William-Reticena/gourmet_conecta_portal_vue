import { PropType } from 'vue'

export const inputBaseProps = {
  placeholder: {
    type: String,
    default: '',
  },
  type: {
    type: String as PropType<'text' | 'password' | 'email'>,
    default: 'text',
  },
}
