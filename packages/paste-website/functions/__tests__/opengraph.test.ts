import {handler} from '../opengraph';

const FBResponse = {
  body: 'iVBORw0KGgoAAAANSUhEUgAAAyAAAAGkCAYAAADJzkGPAAAAAXNSR0IArs4c6QAAEhJJREFUeJzt3VuMXWXdx/HfdF4EKlMpSrEcBGYQEptwSooFmlEyF5ZEwImKSbEl0lIJiSFFkEBCCXIKN6ARhZo0klrBAOVkkYQLofagghKgFAo9gEwBOdnCxoI9rfei6Q6F0tP79l+qn0/Si3n2Xs96Ovtmf2etZ++OpmmaAAAAFBi0qxcAAAD89xAgAABAGQECAACUESAAAEAZAQIAAJQRIAAAQBkBAgAAlBEgAABAGQECAACU+UQGyPr16/OHP/whc+bMaY8NDAxk+vTpWb9+/WaPefvtt3PrrbfmrbfeqlomAACwnbYaIL/73e8yevTodHR0ZMiQIbn88ss/NgL+P7z//vsZN25c+vr68tBDD7XHf/vb3+bss8/OK6+88pFj5s+fn97e3nzve9/La6+9ttPWBgAA/N9sNUBOO+203HjjjUmSiRMn5qqrrsqgQTvvwslee+2VGTNmfGT8ggsuyKJFi3LwwQd/5LGTTjop11xzzU5bU6X33nsvU6ZM2dXLAACAneJ/tuVJXV1dSZJhw4bt1MVs1NHR0T7nRp/61Kdy1FFHfewxe++9985e1k7XNE0uuuiitFqtXb0UAADYKXboUsZzzz2XyZMnp6enJ08//XT6+vpywAEHZPr06UmSX/7yl+nt7U1vb2+uv/76JMnixYtz5pln5hvf+EZef/31LFy4MJMmTcopp5ySo446KlOnTv3Y87388su54oorMmTIkLz77rvt8RkzZuSEE05IX19ffvazn33s8YsXL86FF16Ynp6ezJo1K4ccckiuvfbaJMmzzz6bMWPGpKenJyNGjNjktq8VK1Zk0qRJGTFiRA444ICcddZZmTBhQpYsWZKzzjorvb29eeSRR5JsuDrU29ubn/zkJ+3jP27udevW5YorrsjXv/71HHPMMRkxYkSSpL+/P7/4xS9y7733pre3N/Pmzduu1wUAAD7pdihAli9fnj//+c9ZtmxZpkyZkvPOOy/d3d05++yzs3r16kyaNCk9PT2ZM2dOxo8fnyT54he/mE9/+tP5wQ9+kGHDhuXMM8/MPvvsk4cffjj9/f0577zzsnLlys2eb2BgIE8++WRarVaapkmyYU/ID3/4w9x111156KGHsnbt2o9d70svvZRHH300y5Yty+23356RI0fm3//+d1asWJEvf/nLueGGG7J48eL09PTkW9/6VtauXZs1a9Zk9OjRGT58eB577LHMnz8/t912W95///0cccQRueyyyzJnzpy88cYbSZKpU6fmiSeeyNKlS5Nki3M//PDDefbZZzNr1qw8+OCDGRgYSJLcfffdGTlyZM4444w88sgjOfnkk3fk5QEAgE+sHQqQvr6+fPWrX01XV1duu+22fPvb386kSZOSJP/4xz+SJJMnT06SPPDAA0mSVatWZdGiRenr60uSDB06NF/5yleSJMcee2yStN/Mf9ioUaMyZsyY9s9r167NxRdfnAsuuCBf+MIX0tnZmXPOOWeL6z3llFOSJD/96U9z991358orr8y0adMyfPjwLFy4MDNnzszw4cPTarUyd+7c/OpXv8qbb76ZKVOmZPDgwenp6cnxxx/fnnPo0KGbnKOzszPDhw9v/7yluf/6179m9uzZeeqpp3LggQfm0ksvTZIMGjQonZ2d6ejo2Kn7bAAAYFfZ4Xe5e+yxR5INm8aT5KCDDkqyITSS5Oijj86oUaNy8803J0nuv//+jBs3rn383Llzc8QRR2TixIm57rrrkiRr1qzZ6vmSZOnSpVm+fHmOPPLI9ti+++67xfV2dnamq6srn/vc59pjCxcuzGc+85kMHjw4gwcPzumnn55Zs2bl0EMPzZw5c3Lcccels7Oz/fzt2Weypbm/9rWv5fXXX88xxxyTCy+8MN///ve3eV4AANidbdMm9M3p6OjY5OfN/cX+/PPPz/jx4/Pkk09mxowZ7T0iSfLrX/86l112We6///6sWLGifWVkW8738ssvJ9nwkb07ut5kw21SixYtypgxYzYJjfXr1+eFF17Iq6++us3zb8/chx9+eObNm5dzzz03N954Yx544IH86U9/yn777bfD5wMAgN3BTr3P55vf/Ga6urpy6aWXZr/99mu/wV6+fHnGjx+fG264Iccdd1z7+Rv3d2zNgQcemCT5y1/+8pHHtuc7Srq7u9NqtfLYY4+1x2bPnp0777wzBx10UJYtW5YXX3xxs8duvCLz4b0n69at2+rcd911V0aMGJHHH388l1xySZ5//vnce++97edt6+8BAAB2N9sUIBv3ZrzzzjvtsZUrV27ycbEb34i/99577bHBgwdn4sSJefDBBzNhwoT2+MZ5/va3v+WFF17ILbfckiRZsGBBHn300SRJq9Vq3871wXk3bgI/+uijc9NNN2X+/PlZvXp1Zs+enST5+9//vtkrI6tXr06r1dokGL7zne8kSc4444xMnz49t956ay6//PL09/fn1FNPTZJMmDAhc+fOzcyZMzf5VKrPfvazSZI//vGPWbVqVW655ZY8//zzWb58eVqt1hbnfuaZZzJ16tTsueeeufrqq9u/q2TDRx4/9dRTWbp06SbfBA8AAP8Rmq245557muOPP75J0nR1dTU//vGPm/vuu68ZNmxYk6SZPHlyM2/evObkk09ukjSnnXZaMzAw0D5+wYIFTXd3d7Nu3bpN5u3v72+SNMOGDWumTZvWJGlGjRrV/POf/2wuvvji9mN33HFHM2/evOZLX/pSk6QZN25cs3LlymbBggXNwQcf3F7Xqaee2iRp+vv7myVLlmxyrpkzZ7bX+93vfrd5880324/9/Oc/b5K0//3+979vmqZp1qxZ04wbN649/qMf/agZNWpUM3bs2Paxl1xySfvxm2++uTnyyCOb7u7uZtq0aVuc+8orr2ySNGPHjm3OOeecZuzYsc3atWubpmmam266qUnSjBw5smm1Wlt7eQAAYLfS0TQ7/36fgYGBHHLIIR8Zf+uttzJ06NAMGjQoK1eu3OpG8g9bt25dlixZks9//vMZNGhQWq1W+/as7bFq1aq8+OKLOfzwwz+y0XxgYCB77bVX9t9//4wePTqHHnpofvOb37Qff+mllzJkyJDsu+++WbJkSbq7uzfZD7O5uf/1r39lzz33bB/7wY3xyYYrREOGDNnu/wcAAHzSlQTIf4oTTzwxhx12WG6//fZdvRQAANgt7fCnYP23eeWVV7Js2bKsWrUqb7zxRvbff/9dvSQAANjtuAKyjWbMmJHVq1cn2fAlhP39/bt4RQAAsPsRIAAAQJmd+j0gAAAAHyRAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAoI0AAAIAyAgQAACgjQAAAgDICBAAAKCNAAACAMgIEAAAo878eM9rRFZsWkgAAAABJRU5ErkJggg==',
  headers: {'Content-Type': 'image/png'},
  isBase64Encoded: true,
  statusCode: 200,
};

const FakeEvent = {
  rawUrl: 'https://paste.twilio.design',
  rawQuery: '',
  path: '/foo/bar',
  httpMethod: 'GET',
  headers: {},
  multiValueHeaders: {},
  queryStringParameters: {isDev: 'true'},
  multiValueQueryStringParameters: null,
  body: null,
  isBase64Encoded: false,
};

const FakeContext = {
  callbackWaitsForEmptyEventLoop: false,
  functionName: 'opengraph',
  functionVersion: '0.0.0',
  invokedFunctionArn: '',
  memoryLimitInMB: '128',
  awsRequestId: '',
  logGroupName: '',
  logStreamName: '',
  identity: {},
  clientContext: {},
  getRemainingTimeInMillis: () => 1000,
  done: () => {},
  fail: () => {},
  succeed: () => {},
};
const FakeCallback = () => {};

test('Fails on invalid path', async () => {
  expect(await handler(FakeEvent, FakeContext, FakeCallback)).toStrictEqual(FBResponse);
});
