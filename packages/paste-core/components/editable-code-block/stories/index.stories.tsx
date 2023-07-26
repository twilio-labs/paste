import * as React from 'react';
import {Stack} from '@twilio-paste/stack';
import {RadioButtonGroup, RadioButton} from '@twilio-paste/radio-button-group';

import {EditableCodeBlockHeader, EditableCodeBlockWrapper, EditableCodeBlock} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Editable Code Block',
};

export const Default = (): React.ReactNode => {
  return (
    <EditableCodeBlockWrapper>
      <EditableCodeBlockHeader>Typescript Example</EditableCodeBlockHeader>
      <EditableCodeBlock
        height="45vh"
        defaultLanguage="typescript"
        defaultValue={`interface User {
  name: string;
  id: number;
}

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user: User = new UserAccount("Murphy", 1);`}
      />
    </EditableCodeBlockWrapper>
  );
};

export const CustomInlineError = (): React.ReactNode => {
  return (
    <EditableCodeBlockWrapper>
      <EditableCodeBlockHeader>Custom Inline Error Example (Try hovering it)</EditableCodeBlockHeader>
      <EditableCodeBlock
        height="45vh"
        onChange={(value) => console.log(value)}
        inlineErrorRange={{
          startLineNumber: 3,
          endLineNumber: 3,
          startColumn: 7,
          endColumn: 13,
        }}
        inlineErrorIsWholeLine={false}
        inlineErrorHoverMessage={{value: '"id" can only be a string type.'}}
        defaultLanguage="typescript"
        defaultValue={`interface User {
  name: string;
  id: number;
}

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user: User = new UserAccount("Murphy", 1);`}
      />
    </EditableCodeBlockWrapper>
  );
};

export const Minimap = (): React.ReactNode => {
  return (
    <EditableCodeBlockWrapper>
      <EditableCodeBlockHeader>Minimap Example</EditableCodeBlockHeader>
      <EditableCodeBlock
        height="45vh"
        defaultLanguage="typescript"
        showMinimap
        defaultValue={`interface User {
  name: string;
  id: number;
}

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user: User = new UserAccount("Murphy", 1);`}
      />
    </EditableCodeBlockWrapper>
  );
};

export const NoLineNumbers = (): React.ReactNode => {
  return (
    <EditableCodeBlockWrapper>
      <EditableCodeBlockHeader>No Line Numbers Example</EditableCodeBlockHeader>
      <EditableCodeBlock
        height="70vh"
        defaultLanguage="typescript"
        lineNumbers="off"
        defaultValue={`interface User {
  name: string;
  id: number;
}

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user: User = new UserAccount("Murphy", 1);`}
      />
    </EditableCodeBlockWrapper>
  );
};

export const NoCodeFolding = (): React.ReactNode => {
  return (
    <EditableCodeBlockWrapper>
      <EditableCodeBlockHeader>Typescript Example</EditableCodeBlockHeader>
      <EditableCodeBlock
        height="70vh"
        defaultLanguage="typescript"
        folding={false}
        defaultValue={`interface User {
  name: string;
  id: number;
}

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user: User = new UserAccount("Murphy", 1);`}
      />
    </EditableCodeBlockWrapper>
  );
};

export const ReadOnly = (): React.ReactNode => {
  return (
    <EditableCodeBlockWrapper>
      <EditableCodeBlockHeader>ReadOnly Example</EditableCodeBlockHeader>
      <EditableCodeBlock
        height="70vh"
        readOnly
        defaultLanguage="typescript"
        defaultValue={`interface User {
  name: string;
  id: number;
}

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user: User = new UserAccount("Murphy", 1);`}
      />
    </EditableCodeBlockWrapper>
  );
};

const Files: any = {
  JS: {
    name: 'script.js',
    language: 'javascript',
    value: `// program that checks if the number is positive, negative or zero
// input from the user
const number = parseInt(prompt("Enter a number: "));

// check if number is greater than 0
if (number > 0) {
    console.log("The number is positive");
}

// check if number is 0
else if (number == 0) {
  console.log("The number is zero");
}

// if number is less than 0
else {
      console.log("The number is negative");
}`,
  },
  CSS: {
    name: 'style.css',
    language: 'css',
    value: `.content-area {
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  padding: 16px;
  margin-bottom: 16px;
}`,
  },
  HTML: {
    name: 'index.html',
    language: 'html',
    value: `<!DOCTYPE html>
<html>
  <head></head>
  <body>
    <div class="content-area">
      <h1>My Website</h1>
      <p>Welcome to my website</p>
    </div>
  </body>
</html>`,
  },
};

export const MultiFileEditor = (): React.ReactNode => {
  const [fileKey, setFileKey] = React.useState('JS');
  return (
    <Stack orientation="vertical" spacing="space40">
      <RadioButtonGroup
        attached
        name="file-selector"
        legend="Select file"
        helpText="Show code for the selected file"
        onChange={(_fileKey) => setFileKey(_fileKey)}
      >
        {Object.keys(Files).map((key) => (
          <RadioButton key={key} value={key} defaultChecked={fileKey === key}>
            {Files[key].name}
          </RadioButton>
        ))}
      </RadioButtonGroup>

      <EditableCodeBlockWrapper>
        <EditableCodeBlockHeader>{Files[fileKey].name}</EditableCodeBlockHeader>
        <EditableCodeBlock
          height="400px"
          path={Files[fileKey].name}
          defaultLanguage={Files[fileKey].language}
          defaultValue={Files[fileKey].value}
        />
      </EditableCodeBlockWrapper>
    </Stack>
  );
};
