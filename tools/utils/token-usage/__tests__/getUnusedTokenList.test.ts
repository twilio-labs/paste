const {getUnusedTokenList} = require('../getUnusedTokenList');

describe('getUnusedTokenList', () => {
  const tokenPackageMap = {
    colorBackgroundPrimaryLightest: ['@twilio-paste/pagination'],
    colorBackgroundUser: [],
    colorBackgroundPrimaryStronger: ['@twilio-paste/base-radio-checkbox', '@twilio-paste/button'],
    colorBackgroundDestructiveStronger: [],
    colorBackgroundPrimaryWeaker: ['@twilio-paste/button'],
  };
  it('gets all unused tokens', () => {
    expect(getUnusedTokenList(tokenPackageMap)).toEqual(['colorBackgroundUser', 'colorBackgroundDestructiveStronger']);
  });
});
