import * as React from 'react';
import {render, screen} from '@testing-library/react';
import axe from '../../../../../.jest/axe-helper';
import {Avatar} from '../src';
import {
  getCorrespondingLineHeightFromSizeToken,
  getCorrespondingFontSizeFromSizeToken,
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

    describe('getComputedTokenNames', () => {
      it('should handle single size values', () => {
        expect(getComputedTokenNames('sizeIcon50')).toEqual({fontSize: 'fontSize10', lineHeight: 'lineHeight50'});
      });
      it('should handle responsive size values', () => {
        expect(getComputedTokenNames(['sizeIcon50', 'sizeIcon100'])).toEqual({
          fontSize: ['fontSize10', 'fontSize60'],
          lineHeight: ['lineHeight50', 'lineHeight100'],
        });
      });
    });
  });

  describe('intials', () => {
    it('should render responsive css', (): void => {
      const {asFragment} = render(<Avatar size={['sizeIcon10', 'sizeIcon60', 'sizeIcon100']} name="Simon Taggart" />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
  describe('image', () => {
    it('should render alt and src attributes', (): void => {
      render(<Avatar size="sizeIcon10" name="avatar example" src="/avatars/avatar2.png" />);
      expect(screen.getByRole('img').getAttribute('src')).toEqual('/avatars/avatar2.png');
      expect(screen.getByRole('img').getAttribute('alt')).toEqual('avatar example');
    });
    it('should render responsive css with an image', (): void => {
      const {asFragment} = render(
        <Avatar size={['sizeIcon30', 'sizeIcon40', 'sizeIcon90']} name="avatar example" src="/avatars/avatar2.png" />
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('accessibility', () => {
    it('should have no accessibility violations', async () => {
      const {container} = render(
        <>
          <Avatar size="sizeIcon10" name="Simon Taggart" />
          <Avatar size="sizeIcon10" name="avatar example" src="/avatars/avatar2.png" />
        </>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
