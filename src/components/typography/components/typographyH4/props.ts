import { PropType } from 'vue'

export const typographyH4Props = {
  align: {
    type: String as PropType<'inherit' | 'left' | 'center' | 'right' | 'justify'>,
    default: 'inherit',
  },
  noWrap: {
    type: Boolean,
    default: false,
  },
}
