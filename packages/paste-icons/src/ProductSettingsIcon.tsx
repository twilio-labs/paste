/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ProductSettingsIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductSettingsIcon: React.FC<ProductSettingsIconProps> = ({as, display, size, color, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[ProductSettingsIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} color={color}>
      <UID>
        {titleId => (
          <svg
            role="img"
            aria-hidden={decorative}
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            aria-labelledby={titleId}
          >
            {title ? <title id={titleId}>{title}</title> : null}
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M11.925 3.001a1.91 1.91 0 011.808 1.25l.341.928a.844.844 0 00.44.482.833.833 0 00.732-.006l.897-.431a1.91 1.91 0 012.565 2.525l-.417.898a.853.853 0 00.495 1.163l.931.323a1.91 1.91 0 01.03 3.602l-.932.34a.856.856 0 00-.474 1.176l.433.89a1.913 1.913 0 01-2.525 2.57l-.896-.417a.859.859 0 00-1.167.499l-.323.932a1.912 1.912 0 01-3.592.036l-.342-.934a.847.847 0 00-.441-.48.88.88 0 00-.733.006l-.894.432a1.898 1.898 0 01-1.548.05 1.91 1.91 0 01-1.018-2.567l.419-.9a.853.853 0 00-.498-1.167l-.93-.323a1.88 1.88 0 01-1.095-.969 1.914 1.914 0 011.06-2.632l.93-.34a.857.857 0 00.475-1.176l-.432-.894a1.913 1.913 0 012.52-2.568l.899.417a.853.853 0 001.166-.494l.328-.94a1.912 1.912 0 011.788-1.28zm.298 1.107a.853.853 0 00-1.087.524l-.326.934a1.903 1.903 0 01-2.614 1.11L7.3 6.26a.852.852 0 00-1.123 1.146l.431.893a1.912 1.912 0 01-1.064 2.632l-.93.34a.854.854 0 00.017 1.607l.935.323a2.043 2.043 0 01.177.072 1.908 1.908 0 01.93 2.54l-.418.898a.852.852 0 001.147 1.121l.892-.431a1.91 1.91 0 012.629 1.063l.34.93a.824.824 0 00.514.502.851.851 0 001.088-.52l.323-.933a1.907 1.907 0 012.611-1.11v.001l.896.417a.854.854 0 001.127-1.147l-.433-.89a1.916 1.916 0 011.063-2.633l.932-.34a.854.854 0 00-.014-1.608l-.933-.323a1.91 1.91 0 01-1.105-2.608l.417-.899a.85.85 0 00-.007-.732.834.834 0 00-.488-.434.847.847 0 00-.65.04l-.896.43a1.907 1.907 0 01-2.628-1.064l-.34-.926a.827.827 0 00-.517-.509zm-3.657 6.51a3.704 3.704 0 014.822-2.05 3.708 3.708 0 012.045 4.824 3.704 3.704 0 01-4.822 2.049 3.704 3.704 0 01-2.045-4.824zm4.425-1.068a2.646 2.646 0 00-3.444 1.464 2.646 2.646 0 001.46 3.445A2.646 2.646 0 0012.99 9.55z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

ProductSettingsIcon.displayName = 'ProductSettingsIcon';
export {ProductSettingsIcon};
