import { Box } from '@twilio-paste/box';
import { Button } from '@twilio-paste/button';
import { Input } from '@twilio-paste/input';
import { Paragraph } from '@twilio-paste/paragraph';
import { Option, Select } from '@twilio-paste/select';
import { Stack } from '@twilio-paste/stack';
import { TextArea } from '@twilio-paste/textarea';
import * as React from 'react';
import { Helmet } from 'react-helmet';

import { ThemeProvider } from '../src/themeProvider';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Theme/ThemeProvider',
  component: ThemeProvider,
};

export const EnglishFontFamily = (): React.ReactNode => (
  <Box>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Nisi porta lorem mollis aliquam ut porttitor leo. Hendrerit gravida rutrum quisque non. A arcu
      cursus vitae congue mauris rhoncus aenean vel elit. Tortor dignissim convallis aenean et tortor at risus.
      Vestibulum lorem sed risus ultricies. Tempor nec feugiat nisl pretium fusce id. Morbi tempus iaculis urna id
      volutpat lacus laoreet non curabitur. In ante metus dictum at. Sit amet risus nullam eget felis eget nunc
      lobortis.
    </Paragraph>
    <Stack orientation="vertical" spacing="space50">
      <Button variant="primary" onClick={() => {}}>
        Click me
      </Button>
      <Input aria-label="Search" placeholder="Search options..." type="text" />
      <Select aria-label="Options">
        <Option value="option1">Option 1</Option>
      </Select>
      <TextArea aria-label="Feedback" value="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
    </Stack>
  </Box>
);

export const JapaneseFontFamily = (): JSX.Element => (
  <>
    <Helmet>
      <html lang="ja" />
    </Helmet>
    <Box>
      <Paragraph>
        「ヒラギノ角ゴシック体」は、「ヒラギノ明朝体」との混植を意識してデザインした角ゴシック体です。モダンでカウンターが広く明るいだけではなく、少しフトコロを締め気味にして、現代的な明るさを残しつつもオーソドックスなデザインになっています。文字のすき間を均等に配置することと画線両端のアクセントにより、可読性と存在感を両立させた角ゴシック体です。極小サイズの本文から、特大サイズの見出しまで、広い範囲をカバーできます。
      </Paragraph>
      <Paragraph>
        あ い う え お ア イ ウ エ オ 安 以 宇 衣 於 か き く け こ カ キ ク ケ コ 加 幾 久 計 己 さ し す せ そ サ シ
        ス セ ソ 左 之 寸 世 曽 た ち つ て と タ チ ツ テ ト 太 知 川 天 止 A B C D a b c d 1 2 3 4 、 。 ！ ？ 「 」
      </Paragraph>
      <Stack orientation="vertical" spacing="space50">
        <Button variant="primary" onClick={() => {}}>
          ダミーテキスト
        </Button>
        <Input aria-label="ダミーテキスト" placeholder="ダミーテキスト" type="text" />
        <Select aria-label="ダミーテキスト">
          <Option value="option1">ダミーテキスト</Option>
        </Select>
        <TextArea
          aria-label="ダミーテキスト"
          value="「ヒラギノ角ゴシック体」は、「ヒラギノ明朝体」との混植を意識してデザインした角ゴシック体です。モダンでカウンターが広く明るいだけではなく、少しフトコロを締め気味にして、現代的な明るさを残しつつもオーソドックスなデザインになっています。文字のすき間を均等に配置することと画線両端のアクセントにより、可読性と存在感を両立させた角ゴシック体です。極小サイズの本文から、特大サイズの見出しまで、広い範囲をカバーできます。"
        />
      </Stack>
    </Box>
  </>
);
