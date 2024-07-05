## New Icon Request
You're in helper duty and there is a new icon request on GitHub:
* Read the request and review the needed icon(s).
* Make sure the requested icon is suitable to be part of Paste library:
  * The requester is a Twilio employee.
    * If the requester is external, determine whether the icon is generic enough to be used by other teams at Twilio. If it's not generic, you can point them to the [SVG-to-React library](https://paste.twilio.design/core/libraries), which allows them to create a React component with their SVG.
  * It is not a 3rd party branded icon.
    * Explain that we don't add 3rd party logos because most brands have strict usage guidelines around color and clearspace for their logos that we want to make sure teams thoughtfully apply and manage those assets for their own use cases. And some also have distribution restrictions.
  * It doesn’t already exist or is too similar to an existing one
    * If it exists, you can suggest using the current one or ask to explain why a different one is needed.
    * If it's too similar, you can propose other options using [Streamline](https://www.streamlinehq.com/icons/legacy-streamline-regular) and share it in the Github discussion.
  * It conveys the concept in a clear way
    * If it doesn't convey the concept, you can propose other options using Streamline and share it in the Github discussion.
  * It is a general concept that can easily be used by other teams
    * If it's not clear to you, directly ask the requester if the icon will be used by other teams.
* If the icon is...
    * **Not suitable**, ask the requester to add it to their local libraries (confirm with Paste Design team if necessary)
    * **Suitable**, ask the requester to file a dependency using this [Airtable link](https://airtable.com/appwvsQKyJHfnG5Sa/shrvMvL3BG6Zm0f9l)
* Once the dependency is submitted, mark the GitHub ticket as 'Fix/change in progress'.

**Keep in mind that icons are batched together in the last sprint of each release. [Check release dates](https://paste.twilio.design/roadmap)**

* Create a Jira ticket with the next release date 'Figma: Icons for YYYY.MM.DD release' for the design ticket.
* Include the list of icons names to be included in the release along with their links to the GitHub discussion.
* Clone the Jira ticket and name it 'Add icons for 2024.05.14 release' for the engineering ticket.

## Update Icon Requests
You're in helper duty and there are open/unanswered icon request discussions:
* Check if the requested icons have been released and are ready to use:
  * You can check the [CHANGELOG in the repository](https://github.com/twilio-labs/paste/blob/main/packages/paste-icons/CHANGELOG.md)
  * You can check the [last icon package deploy on NPM](https://www.npmjs.com/package/@twilio-paste/icons?activeTab=versions)
* Update the requester with the status only if the icons are released and ready to use, and provide the link to the PR and Figma.

## Design New Icon Request
You’re assigned an icon design ticket:
* Review the list of icons in the ticket and their discussions.
* Follow the Paste Docs instructions to [add a new icon to Figma](https://paste.twilio.design/introduction/contributing/icons#setting-up-an-icon-in-figma).
* When ready, send your branch for review to #plz-design-systems.
* When approved, Follow the Paste Docs instructions to [export each icon individually](https://paste.twilio.design/introduction/contributing/icons#exporting-the-icon).
* Attach the SVGs to the engineer's Jira ticket.

