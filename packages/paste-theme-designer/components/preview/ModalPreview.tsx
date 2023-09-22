import { Button } from '@twilio-paste/core/button';
import { Label } from '@twilio-paste/core/label';
import { Modal, ModalBody, ModalFooter, ModalFooterActions, ModalHeader, ModalHeading } from '@twilio-paste/core/modal';
import { Paragraph } from '@twilio-paste/core/paragraph';
import { Option, Select } from '@twilio-paste/core/select';
import { useUID } from '@twilio-paste/core/uid-library';
import * as React from 'react';

const ModalPreview = (): JSX.Element => {
  const [value, setValue] = React.useState('');
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = (): void => setIsOpen(true);
  const handleClose = (): void => setIsOpen(false);
  const modalHeadingId = useUID();
  const selectId = useUID();

  return (
    <>
      <Button variant="primary" onClick={handleOpen}>
        Open modal
      </Button>
      <Modal ariaLabelledby={modalHeadingId} isOpen={isOpen} onDismiss={handleClose} size="default">
        <ModalHeader>
          <ModalHeading as="h3" id={modalHeadingId}>
            Choose an author
          </ModalHeading>
        </ModalHeader>
        <ModalBody>
          <Paragraph>
            “If there’s a book that you want to read, but it hasn’t been written yet, then you must write it.” — Toni
            Morrison
          </Paragraph>

          <Label htmlFor={selectId}>Choose an author</Label>
          <Select
            id={selectId}
            value={value}
            onChange={(event) => {
              setValue(event.target.value);
            }}
          >
            <Option value="baldwin">James Baldwin</Option>
            <Option value="brown">adrienne maree brown</Option>
            <Option value="butler">Octavia Butler</Option>
            <Option value="coates">Ta-Nehisi Coates</Option>
            <Option value="lorde">Audre Lorde</Option>
            <Option value="nnedi">Nnedi Okorafor</Option>
          </Select>
        </ModalBody>
        <ModalFooter>
          <ModalFooterActions>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Done
            </Button>
          </ModalFooterActions>
        </ModalFooter>
      </Modal>
    </>
  );
};

export { ModalPreview };
