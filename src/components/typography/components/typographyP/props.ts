import { PropType } from 'vue'

export const typographyPProps = {
  noWrap: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String as PropType<'body1' | 'body2'>,
    default: 'body1',
  },
}
