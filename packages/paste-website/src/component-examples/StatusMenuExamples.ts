export const ProcessObject = {
  Success: {
    variant: 'ProcessSuccess',
    children: 'Complete',
  },
  Neutral: {
    variant: 'ProcessNeutral',
    children: 'In review',
  },
  Warning: {
    variant: 'ProcessWarning',
    children: 'Needs attention',
  },
  Error: {
    variant: 'ProcessError',
    children: 'Rejected',
  },
  InProgress: {
    variant: 'ProcessInProgress',
    children: 'In-progress',
  },
  Disabled: {
    variant: 'ProcessDisabled',
    children: 'Paused',
  },
  Draft: {
    variant: 'ProcessDraft',
    children: 'Draft',
  },
} as const;
export const processStatusMenuExample = `
const ProcessStatusMenu = () => {
  const [process, setProcess] = React.useState(ProcessObject.Success);
  const menu = useStatusMenuState();
  const onClick = (status) => {
    setProcess(ProcessObject[status]);
    menu.hide();
  };
  return (
    <>
      <StatusMenuBadge {...menu} i18nButtonLabel="Change account" variant={process.variant}>
        {process.children}
      </StatusMenuBadge>
      <StatusMenu {...menu} aria-label="Preferences">
        <StatusMenuItemRadio
          {...menu}
          name="process"
          value="success"
          checked={process.children === ProcessObject.Success.children}
          onClick={() => onClick('Success')}
          variant="default"
        >
          <StatusMenuItemChild variant="ProcessSuccess">{ProcessObject.Success.children}</StatusMenuItemChild>
        </StatusMenuItemRadio>
        <StatusMenuItemRadio
          {...menu}
          name="process"
          value="neutral"
          checked={process.children === ProcessObject.Neutral.children}
          onClick={() => onClick('Neutral')}
          variant="default"
        >
          <StatusMenuItemChild variant="ProcessNeutral">{ProcessObject.Neutral.children}</StatusMenuItemChild>
        </StatusMenuItemRadio>
        <StatusMenuItemRadio
          {...menu}
          name="process"
          value="warning"
          checked={process.children === ProcessObject.Warning.children}
          onClick={() => onClick('Warning')}
          variant="default"
        >
          <StatusMenuItemChild variant="ProcessWarning">{ProcessObject.Warning.children}</StatusMenuItemChild>
        </StatusMenuItemRadio>
        <StatusMenuItemRadio
          {...menu}
          name="process"
          value="error"
          checked={process.children === ProcessObject.Error.children}
          onClick={() => onClick('Error')}
          variant="default"
        >
          <StatusMenuItemChild variant="ProcessError">{ProcessObject.Error.children}</StatusMenuItemChild>
        </StatusMenuItemRadio>
        <StatusMenuItemRadio
          {...menu}
          name="process"
          value="InProgress"
          checked={process.children === ProcessObject.InProgress.children}
          onClick={() => onClick('InProgress')}
          variant="default"
        >
          <StatusMenuItemChild variant="ProcessInProgress">{ProcessObject.InProgress.children}</StatusMenuItemChild>
        </StatusMenuItemRadio>
        <StatusMenuItemRadio
          {...menu}
          name="process"
          value="disabled"
          checked={process.children === ProcessObject.Disabled.children}
          onClick={() => onClick('Disabled')}
          variant="default"
        >
          <StatusMenuItemChild variant="ProcessDisabled">{ProcessObject.Disabled.children}</StatusMenuItemChild>
        </StatusMenuItemRadio>
        <StatusMenuItemRadio
          {...menu}
          name="process"
          value="draft"
          checked={process.children === ProcessObject.Draft.children}
          onClick={() => onClick('Draft')}
          variant="default"
        >
          <StatusMenuItemChild variant="ProcessDraft">{ProcessObject.Draft.children}</StatusMenuItemChild>
        </StatusMenuItemRadio>
      </StatusMenu>
    </>
  );
};

render(
  <ProcessStatusMenu />
)
`.trim();

export const ConnectivityObject = {
  Available: {
    variant: 'ConnectivityAvailable',
    children: 'Available',
  },
  Busy: {
    variant: 'ConnectivityBusy',
    children: 'Busy',
  },
  Unavailable: {
    variant: 'ConnectivityUnavailable',
    children: 'Unavailable',
  },
  Neutral: {
    variant: 'ConnectivityNeutral',
    children: 'Neutral',
  },
  Offline: {
    variant: 'ConnectivityOffline',
    children: 'Offline',
  },
};
export const availabilityStatusMenuExample = `
const ConnectivityStatusMenu = () => {
  const [availability, setConnectivity] = React.useState(ConnectivityObject.Available);
  const menu = useStatusMenuState();
  const onClick = (status) => {
    setConnectivity(ConnectivityObject[status]);
    menu.hide();
  };
  return (
    <>
      <StatusMenuBadge {...menu} i18nButtonLabel="Change account" variant={availability.variant}>
        {availability.children}
      </StatusMenuBadge>
      <StatusMenu {...menu} aria-label="Preferences">
        <StatusMenuItemRadio
          name="availability"
          checked={availability.children === 'Available'}
          value="available"
          {...menu}
          onClick={() => onClick('Available')}
          variant="default"
        >
          <StatusMenuItemChild variant="ConnectivityAvailable">Available</StatusMenuItemChild>
        </StatusMenuItemRadio>
        <StatusMenuItemRadio
          name="availability"
          checked={availability.children === 'Busy'}
          value="busy"
          {...menu}
          onClick={() => onClick('Busy')}
          variant="default"
        >
          <StatusMenuItemChild variant="ConnectivityBusy">Busy</StatusMenuItemChild>
        </StatusMenuItemRadio>
        <StatusMenuItemRadio
          name="availability"
          checked={availability.children === 'Unavailable'}
          value="unavailable"
          {...menu}
          onClick={() => onClick('Unavailable')}
          variant="default"
        >
          <StatusMenuItemChild variant="ConnectivityUnavailable">Unavailable</StatusMenuItemChild>
        </StatusMenuItemRadio>
        <StatusMenuItemRadio
          name="availability"
          checked={availability.children === 'Neutral'}
          value="neutral"
          {...menu}
          onClick={() => onClick('Neutral')}
          variant="default"
        >
          <StatusMenuItemChild variant="ConnectivityNeutral">Neutral</StatusMenuItemChild>
        </StatusMenuItemRadio>
        <StatusMenuItemRadio
          name="availability"
          checked={availability.children === 'Offline'}
          value="offline"
          {...menu}
          onClick={() => onClick('Offline')}
          variant="default"
        >
          <StatusMenuItemChild variant="ConnectivityOffline">Offline</StatusMenuItemChild>
        </StatusMenuItemRadio>
      </Menu>
    </>
  );
};

render(
  <ConnectivityStatusMenu />
)
`.trim();
