import * as React from 'react';
import Image from 'next/future/image';
import {css} from '@twilio-paste/styling-library';
import {useTheme} from '@twilio-paste/theme';

import EmptyAwaiting from '../../assets/images/patterns/empty-awaiting-data.png';
import EmptyRegional from '../../assets/images/patterns/empty-change-regional-data-location.png';
import EmptyObject from '../../assets/images/patterns/empty-create-an-object.png';
import EmptyDependency from '../../assets/images/patterns/empty-generic-dependency-state.png';
import EmptyPermission from '../../assets/images/patterns/empty-no-permissions-to-view.png';
import EmptyNoResults from '../../assets/images/patterns/empty-no-results-found.png';

export const AwaitingDataImage: React.FC = () => {
  const theme = useTheme();
  return (
    <Image
      src={EmptyAwaiting}
      alt=""
      width={150}
      height={150}
      placeholder="blur"
      css={css({
        margin: 'space20',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
      })(theme)}
    />
  );
};
export const ChangeRegionImage = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Image
      src={EmptyRegional}
      alt=""
      width={150}
      height={150}
      placeholder="blur"
      css={css({
        margin: 'space20',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
      })(theme)}
    />
  );
};
export const CreateObjectImage = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Image
      src={EmptyObject}
      alt=""
      width={150}
      height={150}
      placeholder="blur"
      css={css({
        margin: 'space20',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
      })(theme)}
    />
  );
};
export const GenericDependencyImage = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Image
      src={EmptyDependency}
      alt=""
      width={150}
      height={150}
      placeholder="blur"
      css={css({
        margin: 'space20',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
      })(theme)}
    />
  );
};
export const NoPermissionsImage = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Image
      src={EmptyPermission}
      alt=""
      width={150}
      height={150}
      placeholder="blur"
      css={css({
        margin: 'space20',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
      })(theme)}
    />
  );
};
export const NoResultImage = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Image
      src={EmptyNoResults}
      alt=""
      width={150}
      height={150}
      placeholder="blur"
      css={css({
        margin: 'space20',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
      })(theme)}
    />
  );
};
