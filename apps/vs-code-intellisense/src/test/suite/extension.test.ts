import assert from 'assert';
import vscode from 'vscode';

import * as myExtension from '../../extension';

suite('Extension Test Suite', () => {
  vscode.window.showInformationMessage('Start all tests.');

  suite('findPasteToken', () => {
    test('when we find twilio paste token', () => {
      const colorBackgroundWord = 'colorBackground';
      const colorBackgroundToken = myExtension.findPasteToken(colorBackgroundWord);

      assert.strictEqual(colorBackgroundToken?.name, 'color-background');
      assert.strictEqual(colorBackgroundToken?.value, '#f4f4f6');
      assert.strictEqual(colorBackgroundToken?.comment, 'Default background color for any container.');

      const fontSize10Word = 'fontSize10';
      const fontSize10Token = myExtension.findPasteToken(fontSize10Word);

      assert.strictEqual(fontSize10Token?.name, 'font-size-10');
      assert.strictEqual(fontSize10Token?.value, '0.625rem');
      assert.strictEqual(fontSize10Token?.comment, 'Constant typography token for font size 10');

      const colorTextWord = 'colorText';
      const colorTextToken = myExtension.findPasteToken(colorTextWord);

      assert.strictEqual(colorTextToken?.name, 'color-text');
      assert.strictEqual(colorTextToken?.value, '#121c2d');
      assert.strictEqual(colorTextToken?.comment, 'Body text color');
    });

    test('when we don`t find twilio paste token', () => {
      const borderWidth0Word = 'borderWidth0';
      const borderWidth0Token = myExtension.findPasteToken(borderWidth0Word);

      assert.strictEqual(borderWidth0Token?.name, 'border-width-0');
      assert.strictEqual(borderWidth0Token?.value, '0');

      const notFoundWord = 'notFoundWord';
      const notFoundToken = myExtension.findPasteToken(notFoundWord);

      assert.strictEqual(notFoundToken, undefined);
    });

    test('when word is undefined', () => {
      const result = myExtension.findPasteToken(undefined);

      assert.strictEqual(result, undefined);
    });
  });

  suite('getAttributeName', () => {
    test('when attribute name is correct', () => {
      const marginLeftPrefix = '<div marginTop=`space20` marginLeft="';
      const marginLeftAttribute = myExtension.getAttributeName(marginLeftPrefix);

      assert.strictEqual(marginLeftAttribute, 'marginLeft');

      const colorPrefix = '<div marginTop=`space20` marginLeft=`space40` color="';
      const colorAttribute = myExtension.getAttributeName(colorPrefix);

      assert.strictEqual(colorAttribute, 'color');

      const fontSizeWithoutQuote = '<div marginTop=`space20` fontSize=';
      const fontSizeAttribute = myExtension.getAttributeName(fontSizeWithoutQuote);

      assert.strictEqual(fontSizeAttribute, 'fontSize');
    });

    test('when attribute name is not correct', () => {
      const marginLeftPrefix = '<div marginTop=`space20` marginLet="';
      const marginLeftAttribute = myExtension.getAttributeName(marginLeftPrefix);

      assert.strictEqual(marginLeftAttribute, 'marginLet');

      const colorPrefix = '<div marginTop=`space20` marginLeft=`space40` color"';
      const colorAttribute = myExtension.getAttributeName(colorPrefix);

      assert.strictEqual(colorAttribute, 'color');

      const fontSizeWithoutQuote = '<div marginTop=`space20` font-size="';
      const fontSizeAttribute = myExtension.getAttributeName(fontSizeWithoutQuote);

      assert.strictEqual(fontSizeAttribute, 'font-size');
    });
  });

  suite('getAttributeTokens', () => {
    test('paste token items by attribute name', () => {
      const borderRadiusToken = myExtension.getAttributeTokens('borderRadius');

      assert.strictEqual(borderRadiusToken.length, 6);

      const zIndexToken = myExtension.getAttributeTokens('zIndex');

      assert.strictEqual(zIndexToken.length, 10);
    });

    test('when attribute name is not correct and empty', () => {
      const borderRadiusToken = myExtension.getAttributeTokens('borderRadi');

      assert.strictEqual(borderRadiusToken.length, 0);

      const zIndexToken = myExtension.getAttributeTokens('');

      assert.strictEqual(zIndexToken.length, 0);
    });
  });

  suite('getCompletionItem', () => {
    test('returns completion color item when type is color', () => {
      const result = myExtension.getCompletionItem({
        type: 'color',
        category: 'background-color',
        value: '#1f304c',
        comment: 'Strong default background color.',
        name: 'color-background-strong',
      });

      const expected = {
        label: 'colorBackgroundStrong',
        documentation: '#1f304c',
        kind: vscode.CompletionItemKind.Color,
        detail: '#1f304c',
      };
      assert.deepStrictEqual(result, expected);
    });

    test('returns basic completion when type is not color', () => {
      const result = myExtension.getCompletionItem({
        type: 'size',
        category: 'radius',
        value: '0',
        comment: 'Border radius reset',
        name: 'border-radius-0',
      });

      const expected = new vscode.CompletionItem(
        {
          description: '0',
          label: 'borderRadius0',
        },
        vscode.CompletionItemKind.Constant,
      );
      assert.deepStrictEqual(result, expected);
    });
  });
});
