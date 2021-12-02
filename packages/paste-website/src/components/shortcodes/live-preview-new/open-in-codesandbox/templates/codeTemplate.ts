export const codeTemplate = (codeString: string, codeImports: string): string => `import * as React from "react";
import { render } from "react-dom";
import { Theme } from "@twilio-paste/core/theme";
import { Box } from "@twilio-paste/core/box";
${codeImports}

const Example = () => (
  ${codeString.trim().replaceAll(/\n/g, '\n  ')}
)

const App = () => (
  <Theme.Provider theme="default">
    <Box margin="space60">
      <Example />
    </Box>
  </Theme.Provider>
);

export default App;`;
