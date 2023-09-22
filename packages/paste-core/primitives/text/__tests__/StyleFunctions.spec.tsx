import { getPseudoStyles, getCustomElementStyles } from '../src/StyleFunctions';

describe('Text StyleFunctions', () => {
  /*
   * When rendered the theme object is injected onto Box props via emotions theming context
   * which is where the css and variant style functions look for their values
   */
  const mockTheme = {
    theme: {
      space: {
        space10: '10px',
      },
      backgroundColors: {
        colorBackgroundPrimary: 'blue',
      },
      borderColors: {
        colorBorderError: 'red',
      },
      textColors: {
        colorTextSuccess: 'green',
      },
      elements: {
        CARD: {
          color: 'colorTextSuccess',
          borderColor: 'purple',
          ':hover': {
            cursor: 'pointer',
          },
          variants: {
            primary: {
              backgroundColor: 'colorBackgroundPrimary',
              ':hover': {
                margin: 'space10',
                textDecoration: 'underline',
              },
            },
          },
        },
        ALERT: {
          padding: 'space10',
          textDecoration: 'underline',
          variants: {
            foo: {
              borderColor: 'colorBorderError',
            },
          },
        },
      },
    },
  };

  describe('getPseudoStyles', () => {
    it('should return resolved object styles when called with pseudo selector props set', () => {
      const cssFunc = getPseudoStyles({ _hover: { padding: 'space10', textDecoration: 'underline' }, as: 'span' });
      if (typeof cssFunc === 'function') {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(cssFunc(mockTheme)).toEqual({
          '&:hover': {
            padding: '10px',
            textDecoration: 'underline',
          },
        });
      }
    });
    it('should return an empty object styles when called with pseudo selector props set that do not match our expected pseudo selectors', () => {
      // @ts-expect-error testing invalid pseudo selectors
      const cssFunc = getPseudoStyles({ _hovered: { padding: 'space10' } });
      if (typeof cssFunc === 'function') {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(cssFunc(mockTheme)).toEqual({});
      }
    });
    it('should return an empty object styles when called without pseudo selector props set', () => {
      expect(getPseudoStyles({})).toEqual({});
    });
  });

  describe('getCustomElementStyles', () => {
    it('should return no styles if there are no matching elements', () => {
      const cardProps = {
        'data-paste-element': 'FOO',
        ...mockTheme,
      };
      // @ts-expect-error because I'm not setting the whole theme
      expect(getCustomElementStyles(cardProps)).toEqual({});
    });

    it('should return no styles if there are no matching elements with variants', () => {
      const cardProps = {
        'data-paste-element': 'FOO',
        variant: 'bar',
        ...mockTheme,
      };
      // @ts-expect-error because I'm not setting the whole theme
      expect(getCustomElementStyles(cardProps)).toEqual({});
    });

    it('should return a style function when elements match the theme', () => {
      const cardProps = {
        'data-paste-element': 'CARD',
        ...mockTheme,
      };
      // @ts-expect-error because I'm not setting the whole theme
      expect(typeof getCustomElementStyles(cardProps)).toEqual('function');
    });

    it('should return resolved styles when the return style function is called with props', () => {
      const cardProps = {
        'data-paste-element': 'CARD',
        ...mockTheme,
      };
      // @ts-expect-error because I'm not setting the whole theme
      const cardCSSFunc = getCustomElementStyles(cardProps);
      if (typeof cardCSSFunc === 'function') {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(cardCSSFunc()).toEqual({
          color: 'green',
          borderColor: 'purple',
          ':hover': {
            cursor: 'pointer',
          },
        });
      }

      const alertProps = {
        'data-paste-element': 'ALERT',
        ...mockTheme,
      };
      // @ts-expect-error because I'm not setting the whole theme
      const alertCSSFunc = getCustomElementStyles(alertProps);
      if (typeof alertCSSFunc === 'function') {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(alertCSSFunc()).toEqual({
          padding: '10px',
          textDecoration: 'underline',
        });
      }
    });

    it('should merge in variant styles to the resolved element styles when the style function is called with props', () => {
      const primaryCardProps = {
        'data-paste-element': 'CARD',
        variant: 'primary',
        ...mockTheme,
      };
      // @ts-expect-error because I'm not setting the whole theme
      const cardCSSFunc = getCustomElementStyles(primaryCardProps);
      if (typeof cardCSSFunc === 'function') {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(cardCSSFunc()).toEqual({
          color: 'green',
          borderColor: 'purple',
          backgroundColor: 'blue',
          ':hover': {
            cursor: 'pointer',
            textDecoration: 'underline',
            margin: '10px',
          },
        });
      }
      const primaryAlertProps = {
        'data-paste-element': 'ALERT',
        variant: 'foo',
        ...mockTheme,
      };
      // @ts-expect-error because I'm not setting the whole theme
      const alertCSSFun = getCustomElementStyles(primaryAlertProps);
      if (typeof alertCSSFun === 'function') {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(alertCSSFun()).toEqual({
          padding: '10px',
          borderColor: 'red',
          textDecoration: 'underline',
        });
      }
    });

    it('should not throw when variants that are not present on the theme are set on a component', () => {
      /*
       * this just covers a bug where Text would be looking for a variant that is not present on the theme
       * and rather than gracefully handle this, it would throw an error
       */

      const primaryAlertProps = {
        'data-paste-element': 'ALERT',
        variant: 'noneexistantvariant',
        ...mockTheme,
      };
      // @ts-expect-error because I'm not setting the whole theme
      const alertCSSFun = getCustomElementStyles(primaryAlertProps);
      if (typeof alertCSSFun === 'function') {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(alertCSSFun()).toEqual({
          padding: '10px',
          textDecoration: 'underline',
        });
      }
    });
  });
});
