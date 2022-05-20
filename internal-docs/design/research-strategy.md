# Design Systems Research Strategy

- [Design Systems Research Strategy](#design-systems-research-strategy)
  - [Background](#background)
  - [Priority 1: High Risk Components](#priority-1-high-risk-components)
    - [How to Assess “High Risk” Components](#how-to-assess-high-risk-components)
  - [Priority 2: Internal Implementers](#priority-2-internal-implementers)
  - [Priority 3: External Twilio Customers/End-Users](#priority-3-external-twilio-customersend-users)

## Background

The Design Systems is a centralized team responsible for creating componentry that allows designers and developers to create and realize Twilio products in an efficient, consistent, accessible, and user-centric manner.

Designers and developers pick up the work from the Design Systems team to develop Twilio products for customers. In that way, the recipients of the team’s work are (in sequence) internal and external. Due to the multiplicity of audiences (and the added complexity that, though the Design Systems team creates the components, they don’t create the applications in which they live), this document details how the team will approach research to validate their work.

## Priority 1: High Risk Components

Components whose design is highly questionable or controversial amongst the design team have an increased likelihood to create usability issues. For that reason, high risk components will be user-tested to identify and resolve issues, and reduce risk. It should be noted that the Design Systems team expects very few components to be high risk and doesn’t expect to user-test many components, but will user-test when really needed.

### How to Assess “High Risk” Components

A committee of UI-UX experts will rate each proposed component design created by the DSys Team. The committee includes senior staff representatives from product design and engineering across various product domains.

The committee will rate components using the following questions & scales:

<table>
  <tr>
   <th colspan="7" >
    Committee Responses
   </th>
   <th>Total of people with a rating in a * cells
   </th>
  </tr>
  <tr>
   <td colspan="8" >
    1. How likely is the component to create usability issues for end-users?
   </td>
  </tr>
  <tr>
   <td>Extremely Unlikely
   </td>
   <td>Unlikely
   </td>
   <td>Somewhat Unlikely
   </td>
   <td>Equally Likely as Unlikely
   </td>
   <td>Somewhat Likely
   </td>
   <td>Likely
   </td>
   <td>Extremely Likely *
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td colspan="8" >
     2. How likely is it that an end-user could use this component the first time they experience it in a Twilio product?
   </td>
  </tr>
  <tr>
   <td>Extremely Unlikely *
   </td>
   <td>Unlikely
   </td>
   <td>Somewhat Unlikely
   </td>
   <td>Equally Likely as Unlikely
   </td>
   <td>Somewhat Likely
   </td>
   <td>Likely
   </td>
   <td>Extremely Likely
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td colspan="8" >
    3. How likely is this component to negatively impact task performance?
    (e.g., errors, time on task)
   </td>
  </tr>
  <tr>
   <td>Extremely Unlikely
   </td>
   <td>Unlikely
   </td>
   <td>Somewhat Unlikely
   </td>
   <td>Equally Likely as Unlikely
   </td>
   <td>Somewhat Likely
   </td>
   <td>Likely
   </td>
   <td>Extremely Likely *
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td colspan="8" >
    4. How likely is it that the end-user will require explanation, learning, or training to use this component?
   </td>
  </tr>
  <tr>
   <td>Extremely Unlikely
   </td>
   <td>Unlikely
   </td>
   <td>Somewhat Unlikely
   </td>
   <td>Equally Likely as Unlikely
   </td>
   <td>Somewhat Likely
   </td>
   <td>Likely
   </td>
   <td>Extremely Likely *
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td colspan="8" >
    5. How likely is it that the end-user would feel <strong>dissatisfied</strong> with this component?
   </td>
  </tr>
  <tr>
   <td>Extremely Unlikely
   </td>
   <td>Unlikely
   </td>
   <td>Somewhat Unlikely
   </td>
   <td>Equally Likely as Unlikely
   </td>
   <td>Somewhat Likely
   </td>
   <td>Likely
   </td>
   <td>Extremely Likely *
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td colspan="7" ><p style="text-align: right">
<strong>TOTAL</strong></p>

   </td>
   <td>
   </td>
  </tr>
</table>

“High-Risk” components are defined as components that score top-box/low-box on any of the questions listed above by ≥ 2 people when the committee is over 6, or by ≥ 1 person on ≥ 2 questions if the committee is 6 or less.

Note: Once a component is identified as high-risk, the DSys Team will coordinate with the UX Research Team to help determine an appropriate user group and methodology for testing. Any P0 and P1 issues will be resolved before publishing the component.

## Priority 2: Internal Implementers

It’s critical to the end-user customer experience, that internal designers and developers understand how the components work and implement them correctly. If they implement them in a way that breaks standards, usability issues will almost certainly be created. For this reason, research will be conducted with internal implementers to test comprehension and implementation quality of the components created by the Design Systems team.

## Priority 3: External Twilio Customers/End-Users

Ultimately, components will get shipped to Twilio end-users/customers in Twilio products. For that reason, some user-testing with that group is critical. It’s lower priority currently for 3 reasons:

1. It’s best done within the context of products/applications and the design system needs more maturity to do that easily
2. It’s a large LOE and it’s probably most efficient for this to be included in user-testing done by the product teams
3. High-risk components will be tested to mitigate risk, therefore broad end-user testing isn’t as needed.
