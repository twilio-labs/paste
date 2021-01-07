import {createCustomTheme} from '../src/utils';
import {mockTheme} from '../__fixtures__/mockThemes';

describe('createCustomTheme', () => {
  it('should merge base theme with overrides', () => {
    expect(createCustomTheme(mockTheme, {radii: {borderRadiusCircle: '20rem'}})).toEqual({
      shadows: {shadow: '0 4px 16px 0 rgba(18, 28, 45, 0.2)'},
      borderWidths: {borderWidth0: '0', borderWidth10: '1px'},
      radii: {borderRadius0: '0', borderRadiusCircle: '20rem'},
      breakpoints: ['25rem', '64rem', '77rem'],
      colors: {colorGray90: 'rgb(31, 48, 76)'},
    });
  });

  it('should merge base theme with overrides and breakpoints', () => {
    expect(createCustomTheme(mockTheme, {borderWidths: {borderWidth10: '10px'}}, ['120px', '360px'])).toEqual({
      shadows: {shadow: '0 4px 16px 0 rgba(18, 28, 45, 0.2)'},
      borderWidths: {borderWidth0: '0', borderWidth10: '10px'},
      radii: {borderRadius0: '0', borderRadiusCircle: '50%'},
      breakpoints: ['120px', '360px'],
      colors: {colorGray90: 'rgb(31, 48, 76)'},
    });
  });

  it('should merge base theme with overrides that include multiple keys', () => {
    expect(createCustomTheme(mockTheme, {colors: {colorGray90: 'red'}, borderWidths: {borderWidth0: '34px'}})).toEqual({
      shadows: {shadow: '0 4px 16px 0 rgba(18, 28, 45, 0.2)'},
      borderWidths: {borderWidth0: '34px', borderWidth10: '1px'},
      radii: {borderRadius0: '0', borderRadiusCircle: '50%'},
      breakpoints: ['25rem', '64rem', '77rem'],
      colors: {colorGray90: 'red'},
    });
  });

  it('should merge base theme with overrides that include multiple keys and breakpoints', () => {
    expect(
      createCustomTheme(
        mockTheme,
        {
          shadows: {shadow: 'blue'},
          radii: {
            borderRadius0: '3',
          },
        },
        ['120px', '800px']
      )
    ).toEqual({
      shadows: {shadow: 'blue'},
      borderWidths: {borderWidth0: '0', borderWidth10: '1px'},
      radii: {borderRadius0: '3', borderRadiusCircle: '50%'},
      breakpoints: ['120px', '800px'],
      colors: {colorGray90: 'rgb(31, 48, 76)'},
    });
  });
});
