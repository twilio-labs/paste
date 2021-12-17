import type { GenericThemeShape } from '@twilio-paste/theme';
import type { EmotionMatchers } from 'jest-emotion'

declare global {
  const TestTheme: GenericThemeShape;
}

declare module 'jest-emotion' {
  interface Jest {
    JestMatchers: EmotionMatchers;
  }
}
