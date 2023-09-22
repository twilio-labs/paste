import { runCmd } from '../runCmd';

describe('runCmd', () => {
  it('receives output from completed processes', async () => {
    const spy = jest.spyOn(console, 'log');
    spy.mockImplementation(() => {});
    const result = await runCmd('echo', ['hi']);
    expect(typeof result.pid).toBe('number');
    expect(result.stdout).toBe('hi\n');
    expect(result.stderr).toBe('');

    expect(result.output[0]).toBe(result.stdout);
    expect(result.output[1]).toBe(result.stderr);

    expect(result.status).toBe(0);
    expect(result.signal).toBe(null);
    spy.mockRestore();
  });

  it(`throws errors when processes return non-zero exit codes`, async () => {
    const spy = jest.spyOn(console, 'log');
    spy.mockImplementation(() => {});
    let didThrow = false;
    try {
      await runCmd('false');
    } catch (error: any) {
      didThrow = true;
      expect(typeof error.pid).toBe('number');
      expect(error.status).toBe(1);
      expect(error.signal).toBe(null);
    }
    expect(didThrow).toBe(true);
    spy.mockRestore();
  });

  it(`throws errors when processes don't exist`, async () => {
    const spy = jest.spyOn(console, 'log');
    spy.mockImplementation(() => {});
    let didThrow = false;
    try {
      await runCmd('fake-app');
    } catch (error: any) {
      didThrow = true;
      expect(error.pid).not.toBeDefined();
      expect(error.code).toBe('ENOENT');
      expect(error.status).toBe(null);
      expect(error.signal).toBe(null);
    }
    expect(didThrow).toBe(true);
    spy.mockRestore();
  });
});
