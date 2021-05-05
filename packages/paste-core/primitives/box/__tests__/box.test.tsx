import * as React from 'react';
import renderer from 'react-test-renderer';
import {Theme} from '@twilio-paste/theme';
import {Box} from '../src';

describe('Backgrounds', () => {
  it('should render single values', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Box backgroundColor="colorBackgroundPrimary">background single</Box>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render responsive values', () => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Box backgroundColor={['colorBackgroundPrimaryWeak', 'colorBackgroundPrimary']}>background responsive</Box>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Color mappings', () => {
  it('should map single color values', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Box
            backgroundColor="colorBackgroundPrimary"
            borderColor="colorBorderStrong"
            borderBottomColor="colorBorderErrorStrong"
            borderLeftColor="colorBorderErrorStrong"
            borderRightColor="colorBorderInverse"
            borderTopColor="colorBorderInverse"
            color="colorText"
          >
            background single
          </Box>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should map responsive color values', () => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Box
            backgroundColor={['colorBackgroundPrimaryWeak', 'colorBackgroundPrimary']}
            borderColor={['colorBorderStrong', 'colorBorderDestructiveStrong']}
            color={['colorText', 'colorTextBrandInverse']}
          >
            background responsive
          </Box>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should map pseudo selector color values', () => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Box
            _hover={{
              backgroundColor: 'colorBackground',
              borderColor: 'colorBorderDestructiveStrong',
              color: 'colorTextBrandInverse',
            }}
          >
            background responsive
          </Box>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should map responsive pseudo selector color values', () => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Box
            _hover={{
              backgroundColor: ['colorBackground', 'colorBackgroundBody'],
              borderColor: ['colorBorderDestructiveStrong', 'colorBorderErrorStrong'],
              color: ['colorTextError', 'colorTextIconInverse'],
            }}
          >
            background responsive
          </Box>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Borders', () => {
  it('should render single values', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Box
            borderStyle="solid"
            borderColor="colorBorderPrimaryStrong"
            borderWidth="borderWidth10"
            borderRadius="borderRadius20"
          >
            border single
          </Box>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render responsive values', () => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Box
            borderStyle={['dashed', 'dotted', 'solid']}
            borderColor={['colorBorderPrimaryStrong', 'colorBorderPrimaryWeak']}
            borderWidth={['borderWidth10', 'borderWidth20']}
            borderRadius={['borderRadius0', 'borderRadius10']}
          >
            border responsive
          </Box>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Sizes', () => {
  it('should render single values', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Box width="size10" minWidth="size0" maxWidth="size20" height="size10" minHeight="size0" maxHeight="size20">
            size single
          </Box>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render responsive values', () => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Box
            width={['size10', 'size20']}
            minWidth={['size0', 'size10']}
            maxWidth={['size20', 'size30']}
            height={['size10', 'size20']}
            minHeight={['size0', 'size10']}
            maxHeight={['size20', 'size30']}
          >
            size responsive
          </Box>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Spaces', () => {
  it('(A) it should render single values', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Box margin="space20">space single 1</Box>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('(A) it should render responsive values', () => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Box margin={['space20', 'space30']}>space responsive 1</Box>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('(B) it should render single values', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Box marginTop="space20" marginRight="space20" marginBottom="space30" marginLeft="space30">
            space single 2
          </Box>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('(B)it should render responsive values', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Box
            marginTop={['space20', 'space30']}
            marginRight={['space20', 'space30']}
            marginBottom={['space30', 'space40']}
            marginLeft={['space30', 'space40']}
          >
            space responsive 2
          </Box>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Shadows', () => {
  it('should render single values', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Box boxShadow="shadowCard">shadow single</Box>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render responsive values', () => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Box boxShadow={['shadowCard', 'shadowFocus']}>shadow responsive</Box>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('ZIndex', () => {
  it('should render single values', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Box zIndex="zIndex10">z-index single</Box>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render responsive values', () => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Box zIndex={['zIndex10', 'zIndex20']}>z-index responsive</Box>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('Pseudo-class props', () => {
    it('should generate pseudo-class CSS', (): void => {
      const tree = renderer
        .create(
          <Theme.Provider theme="console">
            <Box
              _hover={{padding: 'space10'}}
              _active={{padding: 'space10'}}
              _focus={{padding: 'space10'}}
              _visited={{padding: 'space10'}}
              _even={{padding: 'space10'}}
              _odd={{padding: 'space10'}}
              _disabled={{padding: 'space10'}}
              _checked={{padding: 'space10'}}
              _mixed={{padding: 'space10'}}
              _selected={{padding: 'space10'}}
              _invalid={{padding: 'space10'}}
              _pressed={{padding: 'space10'}}
              _readOnly={{padding: 'space10'}}
              _first={{padding: 'space10'}}
              _last={{padding: 'space10'}}
              _expanded={{padding: 'space10'}}
              _grabbed={{padding: 'space10'}}
              _notFirst={{padding: 'space10'}}
              _notLast={{padding: 'space10'}}
              _groupHover={{padding: 'space10'}}
              _before={{padding: 'space10'}}
              _after={{padding: 'space10'}}
              _focusWithin={{padding: 'space10'}}
              _placeholder={{padding: 'space10'}}
            >
              PseudoBox
            </Box>
          </Theme.Provider>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
