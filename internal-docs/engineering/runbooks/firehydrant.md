# Firehydrant

## Checking who's on call

Send `/fh on-call` in a Slack channel and a bot will respond with a message. Search for `dsys` in the dropdown to find our team. The bot will then respond with who is on-call for our team. Your message and the bot replies are publicly visible, so
you may want to trigger this workflow in a team channel, with the Slackbot, or in a self-DM.

## How do we classify incidents on our team?

In Firehydrant select: `Twilio-Platform - Other`. Make sure to accurately select severity.

## Severity classification

⚪ Sev3 - one customer affected or workaround possible
🔵 Sev2 - group of customers affected (such as a product team) or paste is degraded but usable
🔴 Sev1 - Anything more severe than Sev2 and Sev3
