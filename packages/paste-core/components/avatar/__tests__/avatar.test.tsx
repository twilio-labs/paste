import * as React from 'react';
import {render} from '@testing-library/react';
import {UserIcon} from '@twilio-paste/icons/esm/UserIcon';
// @ts-ignore typescript doesn't like js imports
import axe from '../../../../../.jest/axe-helper';
import {Avatar} from '../src';
import {
  getCorrespondingLineHeightFromSizeToken,
  getCorrespondingFontSizeFromSizeToken,
  getCorrespondingIconSizeFromSizeToken,
  getComputedTokenNames,
  getInitialsFromName,
} from '../src/utils';

describe('Avatar', () => {
  describe('Utils', () => {
    describe('getInitialsFromName', () => {
      it('should return first and last initial from a name', () => {
        expect(getInitialsFromName('Philando Castile')).toEqual('PC');
        expect(getInitialsFromName('Tamir')).toEqual('T');
        expect(getInitialsFromName('Chimamanda Ngozi Adichie')).toEqual('CA');
        expect(getInitialsFromName('Super Long Name Example')).toEqual('SE');
      });
    });
    describe('getCorrespondingLineHeightFromSizeToken', () => {
      it('should return a line height to match icon size', () => {
        expect(getCorrespondingLineHeightFromSizeToken('sizeIcon10')).toEqual('lineHeight10');
        expect(getCorrespondingLineHeightFromSizeToken('sizeIcon20')).toEqual('lineHeight20');
        expect(getCorrespondingLineHeightFromSizeToken('sizeIcon30')).toEqual('lineHeight30');
        expect(getCorrespondingLineHeightFromSizeToken('sizeIcon40')).toEqual('lineHeight40');
        expect(getCorrespondingLineHeightFromSizeToken('sizeIcon50')).toEqual('lineHeight50');
        expect(getCorrespondingLineHeightFromSizeToken('sizeIcon60')).toEqual('lineHeight60');
        expect(getCorrespondingLineHeightFromSizeToken('sizeIcon70')).toEqual('lineHeight70');
        expect(getCorrespondingLineHeightFromSizeToken('sizeIcon80')).toEqual('lineHeight80');
        expect(getCorrespondingLineHeightFromSizeToken('sizeIcon90')).toEqual('lineHeight90');
        expect(getCorrespondingLineHeightFromSizeToken('sizeIcon100')).toEqual('lineHeight100');
        expect(getCorrespondingLineHeightFromSizeToken('sizeIcon110')).toEqual('lineHeight110');
      });
    });

    describe('getCorrespondingFontSizeFromSizeToken', () => {
      it('should return a font size to match icon size', () => {
        expect(getCorrespondingFontSizeFromSizeToken('sizeIcon10')).toEqual('fontSize10');
        expect(getCorrespondingFontSizeFromSizeToken('sizeIcon20')).toEqual('fontSize10');
        expect(getCorrespondingFontSizeFromSizeToken('sizeIcon30')).toEqual('fontSize10');
        expect(getCorrespondingFontSizeFromSizeToken('sizeIcon40')).toEqual('fontSize10');
        expect(getCorrespondingFontSizeFromSizeToken('sizeIcon50')).toEqual('fontSize10');
        expect(getCorrespondingFontSizeFromSizeToken('sizeIcon60')).toEqual('fontSize10');
        expect(getCorrespondingFontSizeFromSizeToken('sizeIcon70')).toEqual('fontSize20');
        expect(getCorrespondingFontSizeFromSizeToken('sizeIcon80')).toEqual('fontSize30');
        expect(getCorrespondingFontSizeFromSizeToken('sizeIcon90')).toEqual('fontSize40');
        expect(getCorrespondingFontSizeFromSizeToken('sizeIcon100')).toEqual('fontSize60');
        expect(getCorrespondingFontSizeFromSizeToken('sizeIcon110')).toEqual('fontSize70');
      });
    });

    describe('getCorrespondingIconSizeFromSizeToken', () => {
      it('should return a reduced sizeIcon to match icon size', () => {
        expect(getCorrespondingIconSizeFromSizeToken('sizeIcon10')).toEqual('sizeIcon10');
        expect(getCorrespondingIconSizeFromSizeToken('sizeIcon20')).toEqual('sizeIcon10');
        expect(getCorrespondingIconSizeFromSizeToken('sizeIcon30')).toEqual('sizeIcon10');
        expect(getCorrespondingIconSizeFromSizeToken('sizeIcon40')).toEqual('sizeIcon10');
        expect(getCorrespondingIconSizeFromSizeToken('sizeIcon50')).toEqual('sizeIcon20');
        expect(getCorrespondingIconSizeFromSizeToken('sizeIcon60')).toEqual('sizeIcon20');
        expect(getCorrespondingIconSizeFromSizeToken('sizeIcon70')).toEqual('sizeIcon30');
        expect(getCorrespondingIconSizeFromSizeToken('sizeIcon80')).toEqual('sizeIcon40');
        expect(getCorrespondingIconSizeFromSizeToken('sizeIcon90')).toEqual('sizeIcon50');
        expect(getCorrespondingIconSizeFromSizeToken('sizeIcon100')).toEqual('sizeIcon70');
        expect(getCorrespondingIconSizeFromSizeToken('sizeIcon110')).toEqual('sizeIcon80');
      });
      it('should throw an error when non IconSize values are passed in', () => {
        // @ts-ignore
        expect(() => getCorrespondingIconSizeFromSizeToken('size50')).toThrow();
        // @ts-ignore
        expect(() => getCorrespondingIconSizeFromSizeToken(true)).toThrow();
      });
    });

    describe('getComputedTokenNames', () => {
      it('should handle single size values', () => {
        expect(getComputedTokenNames('sizeIcon50')).toEqual({
          fontSize: 'fontSize10',
          lineHeight: 'lineHeight50',
          iconSize: 'sizeIcon20',
        });
      });
      it('should handle responsive size values', () => {
        expect(getComputedTokenNames(['sizeIcon50', 'sizeIcon100'])).toEqual({
          fontSize: ['fontSize10', 'fontSize60'],
          lineHeight: ['lineHeight50', 'lineHeight100'],
          iconSize: ['sizeIcon20', 'sizeIcon70'],
        });
      });
    });
  });

  describe('ensure icon is a Paste Icon', () => {
    it('should fail if icon is not a Paste Icon', () => {
      // @ts-ignore
      expect(() => render(<Avatar size="sizeIcon20" name="avatar example" icon="UserIcon" />)).toThrow();
    });
  });

  describe('accessibility', () => {
    it('should have no accessibility violations', async () => {
      const {container} = render(
        <>
          <Avatar size="sizeIcon10" name="Simon Taggart" />
          <Avatar size="sizeIcon10" name="avatar example" src="/avatars/avatar2.png" />
          <Avatar size="sizeIcon10" name="Simon Taggart" icon={UserIcon} />
        </>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
