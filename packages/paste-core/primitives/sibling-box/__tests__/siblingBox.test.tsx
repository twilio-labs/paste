import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Theme} from '@twilio-paste/theme';
import {SiblingBox} from '../src';

describe('SiblingBox render', () => {
  it('should render', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <SiblingBox
            width="sizeSquare50"
            _hover={{
              backgroundColor: 'colorBackgroundBody',
            }}
            _hoverSibling={{
              paddingLeft: 'space50',
            }}
            _activeSibling={{
              color: 'colorText',
            }}
            _invalidSibling={{
              backgroundColor: 'colorBackground',
            }}
            _disabledSibling={{
              borderColor: 'colorBorder',
            }}
            _focusSibling={{
              margin: 'space10',
            }}
            _checkedSibling={{
              padding: 'space10',
            }}
            _boxChild={{
              marginBottom: 'space30',
            }}
            _checkedSiblingAndBoxChild={{
              paddingBottom: 'space30',
            }}
            _checkedAndDisabledSibling={{
              width: 'sizeIcon50',
            }}
            _checkedAndActiveSibling={{
              height: 'sizeSquare110',
            }}
            _checkedAndFocusSibling={{
              minHeight: 'size110',
            }}
            _checkedAndInvalidSibling={{
              marginRight: 'space80',
            }}
            _checkedAndHoverSibling={{
              borderRadius: 'borderRadius10',
            }}
          >
            child
          </SiblingBox>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
