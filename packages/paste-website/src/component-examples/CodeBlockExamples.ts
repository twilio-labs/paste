export const singleLine = `
  const SingleLineExample = () => {
    return (
      <CodeBlock
        variant="single-line"
        language='shell'
        code={\`$ curl -G https://api.twilio.com/2010-04-01/Accounts -u '[YOUR ACCOUNT SID]:[YOUR AUTH TOKEN]'\`}
      />
    )
  }

  render (
    <SingleLineExample />
  )
`.trim();

export const multiLine = `
const MultiLineExample = () => {
  return (
    <CodeBlockWrapper>
      <CodeBlockHeader>PHP</CodeBlockHeader>
      <CodeBlock
        language="php"
        maxLines={10}
        externalLink="https://github.com/TwilioDevEd/api-snippets/blob/master/quickstart/php/sms/send_sms/send_sms.5.x.php"
        code={\`<?php
require __DIR__ . '/vendor/autoload.php';
use TwilioRestClient;

// Your Account SID and Auth Token from twilio.com/console
$account_sid = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXX';
$auth_token = 'your_auth_token';
// In production, these should be environment variables. E.g.:
// $auth_token = $_ENV["TWILIO_AUTH_TOKEN"]

// A Twilio number you own with SMS capabilities
$twilio_number = "+15017122661";

$client = new Client($account_sid, $auth_token);
$client->messages->create(
    // Where to send a text message (your cell phone?)
    '+15558675310',
    array(
        'from' => $twilio_number,
        'body' => 'I sent this message in under 10 minutes!'
    )
);\`}
      />
    </CodeBlockWrapper>
  );
};

render(
  <MultiLineExample />
)
`.trim();

export const tab = `
const TabExample = () => {
  return (
    <CodeBlockWrapper>
      <CodeBlockHeader>Sending SMS using the Programmable SMS API</CodeBlockHeader>
      <CodeBlockTabList>
        <CodeBlockTab>Node.js</CodeBlockTab>
        <CodeBlockTab>C#</CodeBlockTab>
      </CodeBlockTabList>
      <CodeBlockTabPanel>
        <CodeBlock
          language="javascript"
          maxLines={10}
          code={\`// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
      body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
      from: '+15017122661',
      to: '+15558675310'
    })
  .then(message => console.log(message.sid));\`}
        />
      </CodeBlockTabPanel>
      <CodeBlockTabPanel>
        <CodeBlock
          language="csharp"
          maxLines={10}
          code={\`// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Rest.Api.V2010.Account;

class Program
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        // and set the environment variables. See http://twil.io/secure
        string accountSid = Environment.GetEnvironmentVariable("TWILIO_ACCOUNT_SID");
        string authToken = Environment.GetEnvironmentVariable("TWILIO_AUTH_TOKEN");

        TwilioClient.Init(accountSid, authToken);

        var message = MessageResource.Create(
            body: "This is the ship that made the Kessel Run in fourteen parsecs?",
            from: new Twilio.Types.PhoneNumber("+15017122661"),
            to: new Twilio.Types.PhoneNumber("+15558675310")
        );

        Console.WriteLine(message.Sid);
    }
}\`}
        />
      </CodeBlockTabPanel>
    </CodeBlockWrapper>
  );
};

render(
  <TabExample />
)`.trim();

export const formattedCopyText = `
  const SingleLineExample = () => {
    return (
      <CodeBlock
        variant="single-line"
        language='shell'
        code={\`$ curl -G https://api.twilio.com/2010-04-01/Accounts -u '[YOUR ACCOUNT SID]:[YOUR AUTH TOKEN]'\`}
        copyTextFormatter={(code) => {
          const formattedCode = code.replace('[YOUR ACCOUNT SID]', 'XXXXXXX').replace('[YOUR AUTH TOKEN]', '1234567890');
          return formattedCode;
        }}
      />
    )
  }

  render (
    <SingleLineExample />
  )
`.trim();
