# UX Infra On-call rotation

After being onboarded, every IC Engineer on the team will be added to our on-call rotation.

## What am I responsible for during my on-call rotation?

On-call rotation means that you will be the primary point of contact if there are any production-related issues with the products we are responsible for.

On-Call rotations are one week stints, with another week as a backup on-call Engineer. Roles cycle through the Engineering team, and with a fully staffed team of 6, will require Engineers to have one week as on-call, and one week as backup, per release period.

During your rotation, you will be responsible for responding to an incident within our SLA window, triaging and remediating the incident, and conducting a post-incident review with your team to identify and create Betterment tasks.

### Things that may trigger an incident include:

- Netlify outages:
  - The docs site may go down
  - Remix might go down
- Airtable outage (an ongoing outage could prevent site deployments or break an attempted site deployment)
- A feature team may release buggy code using Paste, and we may get pinged as part of an incident
- We may mislabel our SEMVER versioning and result in a breaking change by an implementation team
- We may experience a malicious package takeover on NPM / of our NPM packages
- We may experience a malicious contributor to our GH repo which may have negative repercussions, including Actions mishaps
- Paste data may stop working, resulting in no data being sent to our reporting service

[More detailed failure modes and disaster recovery strategies here.](https://docs.google.com/document/d/18iuTYuiwnA9YZ-7AN9lU1i-3mzcY1VcgzeAtIoiq40c/edit)

## Where can I find the schedule for on-call rotation?

Since the On-Call rotation is an Engineering-only rotation, schedules for on-call will likely not align with our team’s helper duty rotation. On-call rotation has its own schedule, and you can find it on the [PagerDuty website](https://twilio.pagerduty.com/) or on the PagerDuty mobile app.

PagerDuty will send out emails, and if configured, push notifications through the mobile app, ahead of your rotation assignments to let you know when you have an assigned role.

## What are the roles for on-call rotation?

- **On-Call:** The person who is the first contact in the case of an incident. The goal is to respond within 5 minutes.
- **On-Call backup:** The person who will be contacted during an incident if the on-call person does not acknowledge the incident within a 10 minute time window.
- **Escalation responder:** Engineering manager, who will be contacted during an incident if both the on-call Engineers fail to acknowledge the incident after an additional 10 minutes.
- **Secondary escalation responder:** Product owner, who will be contacted during an incident if the Escalation responder fails to acknowledge the incident within the next 30 minutes.

| On-Call notified | Backup notified | Escalation responder notified | Secondary escalation responder notified |
| ---------------- | --------------- | ----------------------------- | --------------------------------------- |
| 0m               | 10m (+10m)      | 20m (+10m)                    | 50m (+30m)                              |

## How do I best prepare for my rotation?

- Make sure you’ve completed the PagerDuty training on Continu.
- Check your [PagerDuty](https://twilio.pagerduty.com/) profile and ensure your contact information is up to date.
- Get the [PagerDuty app](https://apps.apple.com/us/app/pagerduty/id594039512) set up on your phone, and follow processes to ensure that PagerDuty notifications will be classified as time-sensitive to bypass your phone’s do not disturb settings.
- You can use the PagerDuty Slack integration to check who is on call at any point by typing ‘/fh help’ and hitting enter.
- Review our [TODO: incident runbooks] to have a solid understanding of common production incidents and how to triage them.

## What do I do in the case of an incident?

When an incident is raised in PagerDuty, the app will notify you, and you will need to acknowledge the issue right away.

1. Acknowledge the incident in PagerDuty
2. Check in with the Slack channel that was created for the incident - update the channel as you investigate and remediate (from the Slack channel you’ll be able to update the FireHydrant timeline)
3. Investigate the incident
4. Remediate as soon as possible

- The primary goal is remediating customer impact. Investigate the cause of the incident and what led to the incident, not what’s going on in the code. The cause of the incident should determine the quickest remediation. For example, if the cause was that we deployed something buggy, the remediation should be to roll back the deploy or ask teams to use the last known working version.

5. Update the incident Slack channel with any new information
6. Resolve the incident in PagerDuty
7. Conduct post-incident review (quickly - within 3 days) to create betterments

- Invite team
- Invite impacted stakeholders
- Invite customer support if they were involved

8. Put betterments into FireHydrant\*

- These create Jira tickets and link to them
- There’s a SLA for betterments

**Note:** During the incident, you may be asked to come up with a Status page update about the incident to share with impacted customers.

### What do I do after an incident?

After the immediate incident is resolved, you should conduct a post-incident review with the team, where you can formulate Betterments to help prevent the incident from happening again in the future.
