# Ticketing conventions

- [Ticketing conventions](#ticketing-conventions)
  - [Ticket summary conventions](#ticket-summary-conventions)
  - [Ticket Details](#ticket-details)
  - [Pointing](#pointing)
  - [Spikes](#spikes)
    - [What is a spike?](#what-is-a-spike)
    - [What's the output of a spike?](#whats-the-output-of-a-spike)

## Ticket summary conventions

- Try to start each Summary with a verb; Create, Fix, Document
- Spikes should have their summaries prefixed with "SPIKE:"
- Blocked tickets should have their summaries prefixed with "[BLOCKED]"

## Ticket Details

Ticket details typically come in two parts; User story /problem / expected outcome, coupled with acceptance criteria.

The first part is the user story or problem we have observed and the expected outcome if the ticket were to be completed.

The second part is the acceptance criteria that we will use to measure, at a minimum, the checks that must be met to call this work finished, along with meeting [the definition of done](./definition-of-done.md).

- Acceptance criteria are not exhaustive.
- Acceptance criteria do not concern implementation

A ticket tells you the expected outcome and gives you the criteria to use when determining whether you met the expected outcome. It should **NOT** tell you _how to do_ the work.

## Pointing

We use the fibonacci sequence to estimate our tickets, starting with 1 and finishing at 13. An estimate is not a reflection of time, but a relative unit of effort when compared to other tickets in the backlog. The most simplistic example, if ticket A is double the effort of ticket B, and ticket B is pointed at a 1, then ticket A must at least be a 2.

Estimates are just that, estimates. We try our best to create well-defined problem statements and expected outcomes with acceptance criteria, but there will always be unexpected unknowns.

Estimates = team velocity. We're trying to incrementally improve our efficiency at delivering work. We do this by breaking work into small pieces, that are completed at regular intervals, based on what our team can physically achieve in that time period. This creates a team rhythm and consistent sense of progress and team accomplishment.

## Spikes

### What is a spike?

A spike might need to be created when a particular piece of work cannot be estimated because the solution or approach is not immediately clear. The purpose of a spike to to unblock work so that it can be broken down and estimated accurately and a clear path to completion is created.

A spike is not preliminary work to a task. A spike is only necessarily if you do not hold the information on how to proceed or estimate your work.

### What's the output of a spike?

The output of a spike is clarity on how to proceed with a particular work item. It might be a simple "do" "don't do" decision.

The artifacts produced by a spike might include:

- Prototypes
- Specifications
- Tickets
- Estimates
