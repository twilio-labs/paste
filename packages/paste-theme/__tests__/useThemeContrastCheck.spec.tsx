import * as React from 'react';
import {renderHook} from '@testing-library/react-hooks';
import {ThemeProvider} from '@twilio-paste/styling-library';
import {useThemeContrastCheck} from '../src/useThemeContrastCheck';

describe('useThemeContrastCheck', () => {
  test('should return the results of the contrast check when inside a theme', () => {
    const {result} = renderHook(() => useThemeContrastCheck(), {
      wrapper: (props) => (
        <ThemeProvider
          theme={{
            textColors: {
              colorTextIcon: '#606b85',
              colorText: '#121c2d',
            },
            backgroundColors: {
              colorBackground: '#999',
            },
          }}
        >
          {props.children}
        </ThemeProvider>
      ),
    });
    expect(result.current.totalFailures).toBe(2);
    expect(result.current.numberOfUIControlFailures).toBe(1);
    expect(result.current.numberOfTextFailures).toBe(1);
    expect(result.current.textContrastRating).toEqual([
      {
        aa: true,
        aaLarge: true,
        aaa: false,
        aaaLarge: true,
        background: 'color-background',
        backgroundValue: '#999',
        contrast: 5.994026623049845,
        foreground: 'color-text',
        foregroundValue: '#121c2d',
      },
      {
        aa: false,
        aaLarge: false,
        aaa: false,
        aaaLarge: false,
        background: 'color-background',
        backgroundValue: '#999',
        contrast: 1.871209802377353,
        foreground: 'color-text-icon',
        foregroundValue: '#606b85',
      },
    ]);
    expect(result.current.uiControlContrastRating).toEqual([
      {
        aa: false,
        aaLarge: false,
        aaa: false,
        aaaLarge: false,
        background: 'color-background',
        backgroundValue: '#999',
        contrast: 1.871209802377353,
        foreground: 'color-text-icon',
        foregroundValue: '#606b85',
      },
    ]);
  });
});
