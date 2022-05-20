# Adding Customization to Components

For components being exported:

1. Add `element` to its Props and Types using Box (Pick&lt;BoxProps, ‘element’>)
2. Refactor component to use Box and/or Text
3. Add `element = ‘DEFAULT_NAME’` in the props of the component
4. Have `element={element}` in the props for Box and/or Text when used
5. Add tests for the html attribute and for customized styling, for default element name and custom element name
6. Add stories for customization using default element name and custom element name
7. Create changeset of **minor** bump to the component and core
