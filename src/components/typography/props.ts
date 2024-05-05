import { PropType } from 'vue'

export const typographyProps = {
  align: {
    type: String as PropType<'inherit' | 'left' | 'center' | 'right' | 'justify'>,
    default: 'inherit',
  },
  noWrap: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String as PropType<
      'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline'
    >,
    default: 'body1',
  },
}
