import type { GenericThemeShape } from '@twilio-paste/theme';
import type { EmotionMatchers } from '@emotion/jest';

declare global {
  const TestTheme: GenericThemeShape;
}

declare module 'jest' {
  interface Jest {
    JestMatchers: EmotionMatchers;
  }
}
