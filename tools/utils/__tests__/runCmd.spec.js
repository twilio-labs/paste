const {runCmd} = require('../runCmd');

describe('runCmd', () => {
  it('receives output from completed processes', async () => {
    const result = await runCmd('echo', ['hi']);
    expect(typeof result.pid).toBe('number');
    expect(result.stdout).toBe('hi\n');
    expect(result.stderr).toBe('');

    expect(result.output[0]).toBe(result.stdout);
    expect(result.output[1]).toBe(result.stderr);

    expect(result.status).toBe(0);
    expect(result.signal).toBe(null);
  });

  it(`throws errors when processes return non-zero exit codes`, async () => {
    let didThrow = false;
    try {
      await runCmd('false');
    } catch (error) {
      didThrow = true;
      expect(typeof error.pid).toBe('number');
      expect(error.status).toBe(1);
      expect(error.signal).toBe(null);
    }
    expect(didThrow).toBe(true);
  });

  it(`throws errors when processes don't exist`, async () => {
    let didThrow = false;
    try {
      await runCmd('fake-app');
    } catch (error) {
      didThrow = true;
      expect(error.pid).not.toBeDefined();
      expect(error.code).toBe('ENOENT');
      expect(error.status).toBe(null);
      expect(error.signal).toBe(null);
    }
    expect(didThrow).toBe(true);
  });
});
