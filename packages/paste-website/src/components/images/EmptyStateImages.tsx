import * as React from 'react';
import {StaticImage} from 'gatsby-plugin-image';
import {css} from '@twilio-paste/styling-library';
import {useTheme} from '@twilio-paste/theme';

export const AwaitingDataImage: React.FC = () => {
  const theme = useTheme();
  return (
    <StaticImage
      src="../../assets/images/patterns/empty-awaiting-data.png"
      alt=""
      width={150}
      placeholder="blurred"
      layout="fixed"
      css={css({
        margin: 'space20',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
      })(theme)}
    />
  );
};
export const ChangeRegionImage: React.FC = () => {
  const theme = useTheme();
  return (
    <StaticImage
      src="../../assets/images/patterns/empty-change-regional-data-location.png"
      alt=""
      width={150}
      placeholder="blurred"
      layout="fixed"
      css={css({
        margin: 'space20',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
      })(theme)}
    />
  );
};
export const CreateObjectImage: React.FC = () => {
  const theme = useTheme();
  return (
    <StaticImage
      src="../../assets/images/patterns/empty-create-an-object.png"
      alt=""
      width={150}
      placeholder="blurred"
      layout="fixed"
      css={css({
        margin: 'space20',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
      })(theme)}
    />
  );
};
export const GenericDependencyImage: React.FC = () => {
  const theme = useTheme();
  return (
    <StaticImage
      src="../../assets/images/patterns/empty-generic-dependency-state.png"
      alt=""
      width={150}
      placeholder="blurred"
      layout="fixed"
      css={css({
        margin: 'space20',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
      })(theme)}
    />
  );
};
export const NoPermissionsImage: React.FC = () => {
  const theme = useTheme();
  return (
    <StaticImage
      src="../../assets/images/patterns/empty-no-permissions-to-view.png"
      alt=""
      width={150}
      placeholder="blurred"
      layout="fixed"
      css={css({
        margin: 'space20',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
      })(theme)}
    />
  );
};
export const NoResultImage: React.FC = () => {
  const theme = useTheme();
  return (
    <StaticImage
      src="../../assets/images/patterns/empty-no-results-found.png"
      alt=""
      width={150}
      placeholder="blurred"
      layout="fixed"
      css={css({
        margin: 'space20',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
      })(theme)}
    />
  );
};
