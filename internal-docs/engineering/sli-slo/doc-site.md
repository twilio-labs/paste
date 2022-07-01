# Service Overview

The Paste doc site is a static website that serves Paste guidelines, roadmap and component documentation.

[Dashboard](https://app.datadoghq.com/dashboard/p79-36e-cxi/paste-monitoring-dashboard?from_ts=1656022950408&to_ts=1656026550408&live=true)

## Critical User Journeys

1. The static website that serves guidelines and documentation for components, enables product designers and engineers internally and externally, to understand how to use Paste to build Twilio products and build on the Twilio Platform with.
2. The static site serves a search functionality to enable users to find documentation quicker.
3. The static site houses a list of design tokens which codifies the Twilio Design language, and provides a search / filter functionality.
4. The static site houses the Paste roadmap to inform consumers of what is coming next.

## Golden Signals Metrics

### Traffic

All user sessions are tracked captured in DataDog RUM.

## Service Dependencies

| Type     | Name    | SLA     | Notes                                                               |
| -------- | ------- | ------- | ------------------------------------------------------------------- |
| External | Netlify | 99.999% | If Netlify breaches SLA the whole site will go down, with no backup |

## SLIs and SLOs

| Category     | SLI                                                      | SLO     | Notes                                                  |
| ------------ | -------------------------------------------------------- | ------- | ------------------------------------------------------ |
| Availability | Proportion of successful requests to the Paste Docs site | 99.99%  | [Monitor](https://app.datadoghq.com/monitors/74640746) |
| Availability | Proportion of successful searches                        | 99.99%  | [Monitor](https://app.datadoghq.com/monitors/74642104) |
| Availability | Proportion of successful roadmap views                   | 99.99%  | Monitor                                                |
| Performance  | Page load time under industry standard                   | < 3s    | [Monitor](https://app.datadoghq.com/monitors/74354008) |
| Performance  | Web vital - Avg Largest Contentful Paint                 | < 4s    | [Monitor](https://app.datadoghq.com/monitors/74352039) |
| Performance  | Web vital - Tokens list Largest Contentful Paint         | < 4s    | [Monitor](https://app.datadoghq.com/monitors/74354388) |
| Performance  | Web vital - Avg First Input Delay                        | < 300ms | [Monitor](https://app.datadoghq.com/monitors/74353421) |

## Rationale

Pure Front End SLOs are uncommon. We prioritize availability based on people's success of "building" with Paste, and web performance to exemplify good performance best practices.

## Error Budget

Error budgets only exist for the availability monitors.
