import * as React from 'react';
import {Stack} from '@twilio-paste/stack';
import {RadioButtonGroup, RadioButton} from '@twilio-paste/radio-button-group';
import {EditableCodeBlock} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Editable Code Block',
};

export const Default = (): React.ReactNode => {
  return (
    <EditableCodeBlock
      height="70vh"
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
  );
};

export const ReadOnly = (): React.ReactNode => {
  return (
    <EditableCodeBlock
      height="70vh"
      options={{
        readOnly: true,
      }}
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
  );
};

const Files = {
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
      <EditableCodeBlock
        height="400px"
        options={{
          minimap: {
            enabled: false,
          },
        }}
        path={Files[fileKey].name}
        defaultLanguage={Files[fileKey].language}
        defaultValue={Files[fileKey].value}
      />
    </Stack>
  );
};
