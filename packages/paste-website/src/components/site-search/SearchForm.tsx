import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { Form, FormControl, FormSection } from "@twilio-paste/form";
import { ClearIcon } from "@twilio-paste/icons/esm/ClearIcon";
import { SearchIcon } from "@twilio-paste/icons/esm/SearchIcon";
import { Input } from "@twilio-paste/input";
import { useUID } from "@twilio-paste/uid-library";
import * as React from "react";

export interface SearchFormProps {
  onSubmit: () => void;
  onClear: () => void;
  hasResults: boolean;
  ariaLabelledBy: string;
  inputValue: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputRef: React.RefObject<HTMLInputElement>;
}

const SearchForm: React.FC<React.PropsWithChildren<SearchFormProps>> = ({
  ariaLabelledBy,
  onClear,
  onSubmit,
  hasResults,
  inputValue,
  onChange,
  inputRef,
}) => {
  const inputID = useUID();
  return (
    <Box
      backgroundColor="colorBackgroundBody"
      position="sticky"
      top="0"
      paddingTop="space20"
      paddingBottom="space100"
      zIndex="zIndex10"
    >
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <FormSection>
          <FormControl>
            <Input
              insertBefore={<SearchIcon decorative={true} />}
              insertAfter={
                hasResults && (
                  <Button variant="secondary_icon" size="reset" onClick={onClear}>
                    <ClearIcon decorative={false} title="Clear search results" />
                  </Button>
                )
              }
              aria-labelledby={ariaLabelledBy}
              type="text"
              id={inputID}
              name="search-input"
              placeholder={'Try "button" or "what is a design token?"'}
              value={inputValue}
              onChange={onChange}
              data-cy="paste-docsearch-input"
              ref={inputRef}
              autoComplete="off"
            />
          </FormControl>
        </FormSection>
      </Form>
    </Box>
  );
};

SearchForm.displayName = "SearchForm";

export { SearchForm };
