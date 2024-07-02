# Design Systems Team Working Agreements

**Last Updated:** Oct 14, 2021

- [Design Systems Team Working Agreements](#design-systems-team-working-agreements)
  - [Purpose](#purpose)
  - [Agreeing Parties](#agreeing-parties)
  - [Working Agreements](#working-agreements)
  - [Agreed Processes/Actions](#agreed-processesactions)
  - [References](#references)

## Purpose

It's important that you are able to count on each other as part of a high-functioning team. When a new team forms, it’s not a matter of _if_ but of _when_ a conflict will arise. We are humans with different interaction styles, strengths, and experiences - misunderstandings are inevitable. A working agreement allows you to have mutual accountability for how you want to handle conflict or tough situations.

## Agreeing Parties

Aayush Iyer, Andi Oneto, Glorilí Alejandro, Jade Pennig, Katie Porter, Kelsey Cavitt, Loreina Chew, Nora Krantz, Sarah Li, Shadi Isber, Simon Taggart, Kyle Gilbreath, Kristian Antrobus, Roxana Gomez

## Working Agreements

1. **Share openly.** Communicate in the open by writing it down and being transparent so that team members feel included and encouraged to participate. This leads to informed, shared decision making.
2. **Up-level one another with deep care**. Setting boundaries to protect our mental health is a practice we encourage. In a team where we win and lose as one, there is no room for finger pointing or judgment. We look out for each other.
3. **Growth is our goal.** Assume everything we embark on is a growth exercise, with plenty of room for taking risks and making mistakes. Be Bold.
4. **Collaborate mindfully**. As a team, we succeed when we intentionally collaborate across disciplines and lean on mutual trust and authentic curiosity.
5. **Respond thoughtfully.** New ideas are opportunities to learn more. Seriously consider them instead of just saying, “no”. Be open to letting go of particular implementations or initial reactions to better solve the problem at hand.
6. **Good Enough™ is healthy.** Our biggest priority is the quality of what we ship. To get there, we take small, healthy, imperfect steps. There’s no need to rush and work in multiple contexts and works-in-progress at once.

## Agreed Processes/Actions

- The team will spend mornings reviewing items that have been requested in #plz-design-systems. Unpin your own review request when done. Review requests follow this [format](https://twilio.slack.com/archives/G01B9PT1P1R/p1600896291009000):

```md
🔴, or 🔵, or ⚪ **[Request name]**
📝 **Description:** [Description of the review you would like, the type of feedback you are looking for]
👩🏻‍⚖️ **Review size:** [Small/Medium/Large]
📆 **Needed by:** [Date you need it by]
🕵🏻‍♂️ **Who:** [tag the folks you must get a review from]
```

- Team will review the backlog ahead of backlog refinement and sprint planning to ensure all known relevant details are documented and stories are primed for team review. The Product Owner will ensure the stories are in priority order.
- (Yes, and... No, but) Work requests outside our roadmap and BPM should be escalated to the team and feel empowered to push back.
- When a teammate is requesting a review they are effectively blocked. As a teammate it is important to understand your role in unblocking your fellow team members to complete their work.
- As a general rule, everything that has an epic in Jira should have a doc. At project kickoff work, we should write down an engineering spec. This will help us draw the owl, but not wing it.
- We will allocate some time in our retrospectives to assess if we have any Single Points of Failure: What is a potential SPoF? What should we do about it?

### Helper duty

- Every week we rotate a new helper who's duty is to triage incoming support requests on [Github Issues](https://github.com/twilio-labs/paste/issues) and [Github Discussions](https://github.com/twilio-labs/paste/discussions).
- The helper should strive to uphold our 3 business day response SLA. This means we will respond with at least an acknowledgement within 3 business days of the last thread opening or message received in the thread.
- The helper may choose to answer immediately or share the question for additional feedback with the rest of the team.

#### Support discussion template

Not sure which severity to pick? See our [severity classification](https://github.com/twilio-labs/paste/blob/main/internal-docs/engineering/runbooks/firehydrant.md#severity-classification).

```md
:github-5055: **[Thread title, hyperlinked]**
📝 **Description:** [Provide a summary of the problem/question]
💭 **Thoughts:** [Provide your initial take on the solution. Providing a well thought out opinion before team responses will lead to learning moments and our team knowledge being strengthened.]
📆 **Needed by:** [Date you need it by, for the SLA. This is the date the question was asked + 3 business days]
🕵🏻‍♂️ **Who:** [Tag the folks that may have input on the problem, usually dsys-eng, dsys-pd, or dsys]
🌡️ **Severity:** [How serious we think this issue is, either: :dsys_sev3: Sev3, :dsys_sev2: Sev2, :dsys_sev1: Sev1]
```

**SEVERITY**

This new field in our template will help us calibrate how much focus to provide to issues and strengthen our team knowledge around how we classify issues.

- :dsys_sev3: Sev3 - one customer affected or workaround possible
- :dsys_sev2: Sev2 - group of customers affected (such as a product team) or paste is degraded but usable
- :dsys_sev1: Sev1 - Anything more severe than Sev1 and Sev2

## References

1. [Definitions of Ready](./../process/definition-of-ready.md) and [Done](./../process/definition-of-done.md)
2. [DSYS Distributed Work Code of Conduct](./distributed-work-code-of-conduct.md)
3. Consider some ideas from [this article](https://highgrowthengineering.substack.com/p/taming-slack-) (for our team) Aayush posted about slack:
   1. Turn off notifications 🔕
      1. First, Slack should not be used as a time-sensitive method of communication. Second, if other people want your synchronous attention, you are not beholden to give it to them.
   2. Edit posts to provide ‘live’ updates
