import theo from 'theo';
import path from 'path';

beforeAll(() => {
  theo.registerTransform('web', ['color/rgb']);
});

describe('Design Tokens', () => {
  it('matches the Global theme', () => {
    const theme = theo.convertSync({
      transform: {
        type: 'web',
        file: path.resolve(__dirname, '../tokens/tokens.yml'),
      },
      format: {
        type: 'json',
      },
    });
    expect(theme).toMatchSnapshot();
  });

  it('matches the Console theme', () => {
    const theme = theo.convertSync({
      transform: {
        type: 'web',
        file: path.resolve(__dirname, '../tokens/themes/console/tokens.yml'),
      },
      format: {
        type: 'json',
      },
    });
    expect(theme).toMatchSnapshot();
  });

  it('matches the Sendgrid theme', () => {
    const theme = theo.convertSync({
      transform: {
        type: 'web',
        file: path.resolve(__dirname, '../tokens/themes/sendgrid/tokens.yml'),
      },
      format: {
        type: 'json',
      },
    });
    expect(theme).toMatchSnapshot();
  });

  it('matches the Dark theme', () => {
    const theme = theo.convertSync({
      transform: {
        type: 'web',
        file: path.resolve(__dirname, '../tokens/themes/dark/tokens.yml'),
      },
      format: {
        type: 'json',
      },
    });
    expect(theme).toMatchSnapshot();
  });
});
