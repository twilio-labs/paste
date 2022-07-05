# Paste Design Library Standards

These guidelines are specific to our workflow in Figma.

---

- [Paste Design Library Standards](#paste-design-library-standards)
  - [Code of conduct](#code-of-conduct)
  - [Library standards](#library-standards)
    - [Naming conventions](#naming-conventions)
    - [Page organization](#page-organization)
    - [Component organization](#component-organization)
    - [Component composition](#component-composition)
    - [Pattern organization](#pattern-organization)
    - [Pattern composition](#pattern-composition)

## Code of conduct

- Give at least 24 hours to provide feedback, since we’re a distributed team.
- Don’t give feedback on work that’s 🚧 in progress.
- _But_, don’t silo your work. Be ready to, at least, acknowledge comments and ideas when there’s visible work.
- If a feedback thread grows long, proactively set up a meeting to address disagreements or hash out points of confusion.
- Keep feedback relevant to what stage the work is in.
- See more detail on our review process in our [Release and Testing Guidelines](./designer-workflow.md).

## Library standards

### Naming conventions

<table>
  <tr>
   <td><strong>Type</strong>
   </td>
   <td><strong>Naming convention</strong>
   </td>
   <td><strong>Rationale</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Libraries</strong>
<p>
Such as the component library or the theme library.
   </td>
   <td>Title Case
<p>
e.g. “Paste Components”
   </td>
   <td>Because it is the formal title of the library.
   </td>
  </tr>
  <tr>
   <td><strong>Components</strong>
<p>
Includes the name of the component itself and the name of the page in the library.
   </td>
   <td>Title Case
<p>
e.g. “Radio Group”
   </td>
   <td>Because it is the formal title of the component and to align with the casing used on the docs site.
   </td>
  </tr>
  <tr>
   <td><strong>Non-editable layers</strong>
<p>
Layers that shouldn’t be edited when the component is used in design work, like foundational styles.
   </td>
   <td>Sentence case
<p>
e.g. “Bottom border”
   </td>
   <td>To avoid confusion between regular layers and components in the Layers panel.
   </td>
  </tr>
  <tr>
   <td><strong>Editable layers</strong>
<p>
Layers that are intended to be edited when the component is used in design work, like text in a toast message.
   </td>
   <td>Sentence case w/ pencil
<p>
e.g. “✏️ Heading text”
<p>
<em>When an editable layer is nested within one or more groups/frames for layout purposes, include a “↓” at the end of the group/frame name to help designers find the editable layer (e.g. “Content ↓”). PDs should be able to follow arrows from the top layer level down to the editable layer.</em>
   </td>
   <td>To align with non-editable layers while also adding clarity around which layers are editable.
   </td>
  </tr>
  <tr>
   <td><strong>Configurable layers</strong>
<p>
For more complex components, we will need to nest components that have configurable props, such as a Checkbox component within the Checkbox Group component, which has a Selected prop.
   </td>
   <td>Sentence case w/ gear
<p>
e.g. “⚙️ Checkbox”
<p>
<em>When a configurable layer is nested within one or more groups/frames for layout purposes, include a “↓” at the end of the group/frame name to help designers find the configurable layer (e.g. “Content ↓”). PDs should be able to follow arrows from the top layer level down to the configurable layer.</em>
   </td>
   <td>To align with other layers while also adding clarity around which layers are configurable.
   </td>
  </tr>
  <tr>
   <td><strong>Component prop names and values</strong>
<p>
Such as primary and secondary buttons or interaction states on Tabs.
   </td>
   <td>Sentence case
<p>
e.g. “Variant=Destructive secondary”
<p>
<em>Prop names should match equivalent props in the API when applicable, but we should shorten prop names when their full names truncate in the Design panel.</em>
   </td>
   <td>To align with the casing used in the rest of the Design panel in Figma.
   </td>
  </tr>
  <tr>
   <td><strong>Component prop values <em>that are tokens</em></strong>
<p>
Such as sizing tokens to specify the size of an Avatar.
   </td>
   <td>Kebab case + hard value in parentheses
<p>
E.g. “size-110 (64px)”
   </td>
   <td>To align with the tokens page on the docs site and to make it clear when a value is a token.
   </td>
  </tr>
  <tr>
   <td><strong>Text and layer styles</strong>
<p>
Such as text colors and background colors represented by tokens in Paste.
   </td>
   <td>Kebab case
<p>
E.g. “color-text-weak”
   </td>
   <td>Same as above.
   </td>
  </tr>
</table>

### Page organization

[TBD](https://issues.corp.twilio.com/browse/DSYS-2575)

- Put a “🧰” emoji at the start of the page name if it contains resources specific to that library (e.g. cover sheet, local assets)

### Component organization

- Provide a description for every Component in the “Description” field about how and when it should be used. Provide descriptions for certain component variants/props when needed (e.g. it would be helpful on the Primary variant of Button to explain that there should only be one per page).
- Provide a docs link for every component in the “Documentation” field _(and probably somewhere on the Component page, like Polaris and Primer do, because that built-in docs link is pretty hidden)._
- Try to have just one Component for a given component in Paste whenever possible (e.g. do not make separate components for a Primary Button and a Secondary Button; instead, make one Button component with Primary and Secondary variants).
- For any components or variants that have design that isn’t available on the coded component yet, append the page name and component name with “(dev)”, and add a note to the description that the changes aren’t yet reflected in Paste.

### Component composition

- Components should use text styles and layer styles from the [Paste Default Theme library](https://www.figma.com/file/OZKRQFOkOAl413m5JVIYE6/Paste-Default-Theme) that correspond to the implementation in code.
  - If the style doesn’t exist, take the new token proposal to the design systems team. Create the next text or layer style if the team agrees.
- All spacing in components should be possible with the Paste spacing tokens. In general, space layers on a base 4px scale. Use 2px when necessary for small spaces.
- Components should be clean and usable by product designers. They should:
  - Have no redundant groups or frames that don’t serve a purpose.
  - Have locked layers for anything that we don’t let Paste consumers control, and vice versa.
  - Be pinned to the top left (in most cases) and have auto-layout rules set to mimic the behavior in production.
  - Have auto-layout rules set so that text overrides will automatically resize the symbol (unless the component is meant to be fixed in height or width).
  - Whenever possible, do not force PDs to hide/unhide layers in the layers panel. Instead, expose the variations as props on the component (e.g. Button has an Icon prop to have a prefix or suffix icon, rather than PDs needing to hide/show the icons themselves).
  - For components that can have custom content inside of them (e.g. Card, Disclosure), have a variant that shows the spacing (using the Spacing component from the [Asset Documentation library](https://www.figma.com/file/GfY11A2VW638eFK48nDtdE/Asset-Documentation-Library)) to help designers align content correctly.
    - If the spacing is modifiable (e.g. Card), leave the Spacing component unlocked and add a Description that the spacing is adjustable.
  - For any icon layers used in a component, apply the “utilities (figma-specific)/transparent” background color to make it easier to click on that layer.
    - For icon layers, make sure the icon glyph layer name is `icon`. This allows for the icon to retain the same color if the icon is swapped.
- Component props should be 1:1 with the component API as much as possible.
  - Default, error, and disabled states (at least) should be available in Figma.
  - Hover states should include the appropriate cursor to make mocking up prototypes easier for PDs.
  - All variants available in the component API should be available in Figma. There may be some exceptions, such as the “reset” variant on buttons.
- Component properties
  - Use component properties to handle different variants, instance swaps, and text layers.
  - If there's a nested component, consider using an instance swap property so consumers can swap to another instance at the parent level. For example, if there's an icon, enable the instance swap on that layer.
  - If there's text in a component, consider using a text property so consumers can update the text of that instance or multiple selected instances at the parent level. Note that the text property only works if it's an actual text layer and not in another instance. If it's in another instance (e.g., the text in an Anchor), consumers will have to navigate to the Anchor layer to see the text property in the side panel.
  - Avoid using boolean properties for now as we want the default variant of a component to be its most basic state, and if a boolean is set to no, that layer is hidden from the component set view and can make it difficult for us to internal debug.
- TODO: In what order do we list properties for variants?
- TODO: How do we decide which props to expose at the top level of a component vs. nesting? Maybe a max number of top-level variants? Maybe think about it in terms of [the obvious, the easy, and the possible](https://signalvnoise.com/posts/3047-the-obvious-the-easy-and-the-possible)?

### Pattern organization

TODO - will share lots of the above standards, so might not need its own section

### Pattern composition

TODO - will share lots of the above standards, so might not need its own section
