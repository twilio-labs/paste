const {getUnusedTokenList} = require('../getUnusedTokenList');

const tokenPackageMap = {
  colorBackgroundPrimaryLightest: ['@twilio-paste/pagination'],
  colorBackgroundUser: [],
  colorBackgroundPrimaryStronger: ['@twilio-paste/base-radio-checkbox', '@twilio-paste/button'],
  colorBackgroundDestructiveStronger: [],
  colorBackgroundPrimaryWeaker: ['@twilio-paste/button'],
};
describe('getUnusedTokenList', () => {
  it('gets all unused tokens', () => {
    expect(getUnusedTokenList(tokenPackageMap)).toEqual(['colorBackgroundUser', 'colorBackgroundDestructiveStronger']);
  });
});
