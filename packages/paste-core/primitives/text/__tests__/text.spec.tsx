import * as React from 'react';
import renderer from 'react-test-renderer';
import {Theme} from '@twilio-paste/theme';
import {Text} from '../src';

describe('as', () => {
  it('should render as a provided HTML element', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Text as="label">background single</Text>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('display', () => {
  it('should set a display property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Text as="span" display="inline-block">
            display single
          </Text>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should set a responsive display property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Text as="span" display={['inline-block', 'block']}>
            display responsive
          </Text>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('fontFamily', () => {
  it('should set a font family property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Text as="span" fontFamily="fontFamilyCode">
            font family single
          </Text>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should set a responsive font family property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Text as="span" fontFamily={['fontFamilyText', 'fontFamilyCode']}>
            font family responsive
          </Text>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('fontSize', () => {
  it('should set a font size property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Text as="span" fontSize="fontSize10">
            font size single
          </Text>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should set a responsive font size property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Text as="span" fontSize={['fontSize20', 'fontSize30']}>
            font size responsive
          </Text>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('fontStyle', () => {
  it('should set a font style property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Text as="span" fontStyle="italic">
            font style single
          </Text>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should set a responsive font style property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Text as="span" fontStyle={['italic', 'normal']}>
            font style responsive
          </Text>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('fontWeight', () => {
  it('should set a font weight property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Text as="span" fontWeight="fontWeightBold">
            font weight single
          </Text>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should set a responsive font weight property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Text as="span" fontWeight={['fontWeightLight', 'fontWeightSemibold']}>
            font weight responsive
          </Text>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('letterSpacing', () => {
  it('should set a letter spacing property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Text as="span" letterSpacing="1px">
            letter spacing single
          </Text>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should set a responsive letter spacing property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Text as="span" letterSpacing={['-2px', '3px']}>
            letter spacing responsive
          </Text>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('lineHeight', () => {
  it('should set a line height property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Text as="span" lineHeight="lineHeight10">
            line height single
          </Text>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should set a responsive line height property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Text as="span" lineHeight={['lineHeight20', 'lineHeight30']}>
            line height responsive
          </Text>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('margin', () => {
  it('should set a margin property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Text as="span" margin="space10">
            margin single
          </Text>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should set a responsive margin property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Text as="span" margin={['space20', 'space30']}>
            margin responsive
          </Text>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('marginBottom', () => {
  it('should set a marginBottom property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Text as="span" marginBottom="space10">
            marginBottom single
          </Text>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should set a responsive marginBottom property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Text as="span" marginBottom={['space20', 'space30']}>
            marginBottom responsive
          </Text>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('marginLeft', () => {
  it('should set a marginLeft property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Text as="span" marginLeft="space10">
            marginLeft single
          </Text>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should set a responsive marginLeft property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Text as="span" marginLeft={['space20', 'space30']}>
            marginLeft responsive
          </Text>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('marginRight', () => {
  it('should set a marginRight property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Text as="span" marginRight="space10">
            marginRight single
          </Text>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should set a responsive marginRight property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Text as="span" marginRight={['space20', 'space30']}>
            marginRight responsive
          </Text>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('marginTop', () => {
  it('should set a marginTop property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Text as="span" marginTop="space10">
            marginTop single
          </Text>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should set a responsive marginTop property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Text as="span" marginTop={['space20', 'space30']}>
            marginTop responsive
          </Text>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('padding', () => {
  it('should set a padding property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Text as="span" padding="space10">
            padding single
          </Text>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should set a responsive padding property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Text as="span" padding={['space20', 'space30']}>
            padding responsive
          </Text>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('paddingBottom', () => {
  it('should set a paddingBottom property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Text as="span" paddingBottom="space10">
            paddingBottom single
          </Text>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should set a responsive paddingBottom property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Text as="span" paddingBottom={['space20', 'space30']}>
            paddingBottom responsive
          </Text>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('paddingLeft', () => {
  it('should set a paddingLeft property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Text as="span" paddingLeft="space10">
            paddingLeft single
          </Text>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should set a responsive paddingLeft property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Text as="span" paddingLeft={['space20', 'space30']}>
            paddingLeft responsive
          </Text>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('paddingRight', () => {
  it('should set a paddingRight property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Text as="span" paddingRight="space10">
            paddingRight single
          </Text>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should set a responsive paddingRight property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Text as="span" paddingRight={['space20', 'space30']}>
            paddingRight responsive
          </Text>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('paddingTop', () => {
  it('should set a paddingTop property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Text as="span" paddingTop="space10">
            paddingTop single
          </Text>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should set a responsive paddingTop property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Text as="span" paddingTop={['space20', 'space30']}>
            paddingTop responsive
          </Text>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('textAlign', () => {
  it('should set a textAlign property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Text as="span" textAlign="right">
            textAlign single
          </Text>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should set a responsive textAlign property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Text as="span" textAlign={['center', 'left']}>
            textAlign responsive
          </Text>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('color', () => {
  it('should set a color property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Text as="span" color="colorText">
            color single
          </Text>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should set a responsive color property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Text as="span" color={['colorTextError', 'colorTextSuccess']}>
            color responsive
          </Text>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('textDecoration', () => {
  it('should set a textDecoration property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Text as="span" textDecoration="underline">
            textDecoration single
          </Text>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should set a responsive textDecoration property', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Text as="span" textDecoration={['underline', 'normal']}>
            textDecoration responsive
          </Text>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Pseudo-class props', () => {
  it('should generate pseudo-class CSS', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Text
            as="span"
            _hover={{color: 'colorTextLink'}}
            _active={{color: 'colorTextLinkStrong'}}
            _focus={{color: 'colorTextLinkStronger'}}
            _visited={{color: 'colorTextLinkDestructive'}}
            _even={{padding: 'space40'}}
            _odd={{margin: 'space30'}}
            _disabled={{paddingTop: 'space40'}}
            _checked={{paddingRight: 'space40'}}
            _mixed={{paddingBottom: 'space40'}}
            _selected={{paddingLeft: 'space40'}}
            _invalid={{marginTop: 'space40'}}
            _pressed={{marginRight: 'space40'}}
            _readOnly={{marginBottom: 'space40'}}
            _first={{marginLeft: 'space40'}}
            _last={{color: 'colorTextLinkWeak'}}
            _expanded={{color: 'colorTextWeaker'}}
            _grabbed={{color: 'colorTextSuccess'}}
            _notFirst={{color: 'colorTextWarning'}}
            _notLast={{color: 'colorTextWarningStrong'}}
            _before={{content: `"Before text"`, position: 'absolute', bottom: 0, left: 0}}
            _after={{content: `"After text"`, position: 'absolute', bottom: 0, left: 0}}
            _focusWithin={{color: 'colorTextWeak'}}
          >
            PseudoBox
          </Text>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
