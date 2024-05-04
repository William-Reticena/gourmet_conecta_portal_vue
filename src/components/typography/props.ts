import { PropType } from 'vue'

export const typographyProps = {
  variant: {
    type: String as PropType<
      'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline'
    >,
    default: 'body1',
  },
  noWrap: {
    type: Boolean,
    default: false,
  },
}
