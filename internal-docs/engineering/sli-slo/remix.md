# Service Overview

The Paste Remix is a NextJS Application that acts as a design tool for Paste theming.

[Dashboard](https://app.datadoghq.com/dashboard/p79-36e-cxi/paste-monitoring-dashboard?from_ts=1656022950408&to_ts=1656026550408&live=true)

## Critical User Journeys

1. Remix allows customers to create new themes based on modifing design tokens.
2. Remix allows customers to export custom themes.
3. Remix allows customers to import custom themes to be modified.

## Golden Signals Metrics

### Traffic

All user sessions are tracked captured in DataDog RUM.

## Service Dependencies

| Type     | Name    | SLA     | Notes                                                               |
| -------- | ------- | ------- | ------------------------------------------------------------------- |
| External | Netlify | 99.999% | If Netlify breaches SLA the whole site will go down, with no backup |

## SLIs and SLOs

| Category     | SLI                                                 | SLO     | Notes                                                  |
| ------------ | --------------------------------------------------- | ------- | ------------------------------------------------------ |
| Availability | Proportion of successful requests to the Remix site | 99.99%  | [Monitor](https://app.datadoghq.com/monitors/74628022) |
| Availability | Proportion of successful theme changes              | 99.99%  | Monitor                                                |
| Availability | Proportion of successful exports                    | 99.99%  | Monitor                                                |
| Performance  | Page load time under industry standard              | < 3s    | Monitor                                                |
| Performance  | Web vital - Avg Largest Contentful Paint            | < 4s    | Monitor                                                |
| Performance  | Web vital - Avg First Input Delay                   | < 300ms | Monitor                                                |

## Rationale

Pure Front End SLOs are uncommon. We prioritize availability based on people's success of "building" with Paste, and web performance to exemplify good performance best practices.

## Error Budget

Error budgets only exist for the availability monitors.
