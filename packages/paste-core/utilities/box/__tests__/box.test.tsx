import * as React from 'react';
import renderer from 'react-test-renderer';
import {Theme} from '@twilio-paste/theme';
import {Box} from '../src';

describe('Backgrounds', () => {
  it('it should render single values', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Box backgroundColor="colorBackgroundPrimary">background single</Box>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should render responsive values', () => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Box backgroundColor={['colorBackgroundPrimaryLight', 'colorBackgroundPrimary']}>background responsive</Box>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Borders', () => {
  it('it should render single values', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Box
            borderStyle="solid"
            borderColor="colorBorderPrimaryDark"
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

  it('it should render responsive values', () => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Box
            borderStyle={['dashed', 'dotted', 'solid']}
            borderColor={['colorBorderPrimaryDark', 'colorBorderPrimaryLight']}
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
  it('it should render single values', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Box width="size10" minWidth="size0" maxWidth="size20" height="size10" minHeight="size0" maxHeight="size20">
            size single
          </Box>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should render responsive values', () => {
    const tree = renderer
      .create(
        <Theme.Provider>
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
        <Theme.Provider>
          <Box margin="space20">space single 1</Box>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('(A) it should render responsive values', () => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Box margin={['space20', 'space30']}>space responsive 1</Box>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('(B) it should render single values', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider>
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
        <Theme.Provider>
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
  it('it should render single values', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Box boxShadow="shadowCard">shadow single</Box>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should render responsive values', () => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Box boxShadow={['shadowCard', 'shadowFocus']}>shadow responsive</Box>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('ZIndex', () => {
  it('it should render single values', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Box zIndex="zIndex10">z-index single</Box>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should render responsive values', () => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Box zIndex={['zIndex10', 'zIndex20']}>z-index responsive</Box>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
