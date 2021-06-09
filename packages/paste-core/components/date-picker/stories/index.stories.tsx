import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Label} from '@twilio-paste/label';
import {HelpText} from '@twilio-paste/help-text';
import {useUID} from '@twilio-paste/uid-library';
import {Combobox} from '@twilio-paste/combobox';
import {DatePicker, formatReturnDate} from '../src';

export const DefaultDatePicker: React.FC = (props) => {
  const uidDP = useUID();
  const uidHT = useUID();
  return (
    <>
      <Label htmlFor={uidDP}>When would you like your payment to be processed?</Label>
      <DatePicker id={uidDP} aria-describedby={uidHT} {...props} />
      <HelpText id={uidHT}>Select a date above.</HelpText>
    </>
  );
};

export const InverseDatePicker: React.FC = (props) => {
  const uidDP = useUID();
  const uidHT = useUID();
  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <Label htmlFor={uidDP} variant="inverse">
        When would you like your payment to be processed?
      </Label>
      <DatePicker variant="inverse" aria-describedby={uidHT} id={uidDP} {...props} />
      <HelpText variant="inverse" id={uidHT}>
        Select a date above.
      </HelpText>
    </Box>
  );
};

export const RequiredDatePicker: React.FC = (props) => {
  const uidDP = useUID();
  const uidHT = useUID();
  return (
    <>
      <Label htmlFor={uidDP} required>
        Display messaging logs from:
      </Label>
      <DatePicker required id={uidDP} aria-describedby={uidHT} {...props} />
      <HelpText id={uidHT}>Select a date to view messaging logs.</HelpText>
    </>
  );
};

export const InverseRequiredDatePicker: React.FC = (props) => {
  const uidDP = useUID();
  const uidHT = useUID();
  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <Label htmlFor={uidDP} variant="inverse" required>
        Display messaging logs from:
      </Label>
      <DatePicker variant="inverse" aria-describedby={uidHT} id={uidDP} required {...props} />
      <HelpText variant="inverse" id={uidHT}>
        Select a date to view messaging logs.
      </HelpText>
    </Box>
  );
};

export const ErrorDatePicker: React.FC = (props) => {
  const uidDP = useUID();
  const uidHT = useUID();
  return (
    <>
      <Label htmlFor={uidDP}>Start date:</Label>
      <DatePicker id={uidDP} aria-describedby={uidHT} hasError {...props} />
      <HelpText id={uidHT}>Select a valid date to start your trial.</HelpText>
    </>
  );
};

export const InverseErrorDatePicker: React.FC = (props) => {
  const uidDP = useUID();
  const uidHT = useUID();
  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <Label htmlFor={uidDP} variant="inverse">
        Start date:
      </Label>
      <DatePicker variant="inverse" aria-describedby={uidHT} hasError id={uidDP} {...props} />
      <HelpText variant="inverse" id={uidHT}>
        Select a valid date to start your trial.
      </HelpText>
    </Box>
  );
};

export const DisabledDatePicker: React.FC = (props) => {
  const uidDP = useUID();
  const uidHT = useUID();
  return (
    <>
      <Label htmlFor={uidDP} disabled>
        Email release date:
      </Label>
      <DatePicker id={uidDP} aria-describedby={uidHT} disabled {...props} />
      <HelpText id={uidHT}>Your email will be sent on the above date.</HelpText>
    </>
  );
};

export const InverseDisabledDatePicker: React.FC = (props) => {
  const uidDP = useUID();
  const uidHT = useUID();
  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <Label htmlFor={uidDP} variant="inverse" disabled>
        Email release date:
      </Label>
      <DatePicker variant="inverse" aria-describedby={uidHT} disabled id={uidDP} {...props} />
      <HelpText variant="inverse" id={uidHT}>
        Your email will be sent on the above date.
      </HelpText>
    </Box>
  );
};

export const ReadonlyDatePicker: React.FC = (props) => {
  const uidDP = useUID();
  const uidHT = useUID();
  return (
    <>
      <Label htmlFor={uidDP}>View account insights from the following date:</Label>
      <DatePicker id={uidDP} aria-describedby={uidHT} readOnly {...props} />
      <HelpText id={uidHT}>Account insights will be displayed from the above date.</HelpText>
    </>
  );
};

export const InverseReadonlyDatePicker: React.FC = (props) => {
  const uidDP = useUID();
  const uidHT = useUID();
  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <Label htmlFor={uidDP} variant="inverse">
        View account insights from the following date:
      </Label>
      <DatePicker variant="inverse" aria-describedby={uidHT} readOnly id={uidDP} {...props} />
      <HelpText variant="inverse" id={uidHT}>
        Account insights will be displayed from the above date.
      </HelpText>
    </Box>
  );
};

export const DefaultValueDatePicker: React.FC = (props) => {
  const uidDP = useUID();
  const uidHT = useUID();
  return (
    <>
      <Label htmlFor={uidDP}>When should we reach out to you for an update?</Label>
      <DatePicker id={uidDP} aria-describedby={uidHT} defaultValue="2020-03-18" {...props} />
      <HelpText id={uidHT}>Change the date above if necessary.</HelpText>
    </>
  );
};

export const OnChangeDatePicker: React.FC = (props) => {
  const [value, setValue] = React.useState('');
  const [dateFormat, setDateFormat] = React.useState('MM dd yy');
  const uidDP = useUID();
  const uidHT = useUID();
  const dateFormatOptions = ['MM dd yyyy', 'MMMM do yyyy', 'EEEEEE MMM do yy', 'MM/dd/yyyy'];
  const handleChange = (val: string, format: string): string => {
    setValue(formatReturnDate(val, format));
    return value;
  };
  return (
    <>
      <Label htmlFor={uidDP}>I want my Twilio account to go live on:</Label>
      <DatePicker
        id={uidDP}
        aria-describedby={uidHT}
        onChange={(evt) => handleChange(evt.target.value, dateFormat)}
        {...props}
      />
      <HelpText id={uidHT}>Select a date above.</HelpText>
      <Box marginTop="space60">
        <Combobox
          items={dateFormatOptions}
          labelText="Return date format:"
          onInputValueChange={({inputValue}) => {
            if (inputValue !== undefined) setDateFormat(inputValue);
          }}
        />
        <br /> <b>Return value:</b> {value}
      </Box>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Date Picker',
  component: DatePicker,
};
