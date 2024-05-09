import { PropType } from 'vue'

export const inputProps = {
  label: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  type: {
    type: String as PropType<'text' | 'password' | 'email'>,
    default: 'text',
  },
}
