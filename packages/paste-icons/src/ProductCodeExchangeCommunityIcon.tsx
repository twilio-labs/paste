/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface ProductCodeExchangeCommunityIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductCodeExchangeCommunityIcon: React.FC<ProductCodeExchangeCommunityIconProps> = ({
  as,
  display,
  size,
  color,
  title,
  decorative,
}) => {
  const titleId = `ProductCodeExchangeCommunityIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[ProductCodeExchangeCommunityIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} color={color}>
      <svg role="img" aria-hidden={decorative} width="100%" height="100%" viewBox="0 0 20 20" aria-labelledby={titleId}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M3.455 9.14c.76 0 1.385.585 1.449 1.33l.005.125v1.306a1.384 1.384 0 011.598.455l.84 1.256c.338.507.536 1.093.576 1.699l.007.228v2.013a.448.448 0 01-.888.08l-.007-.08V15.54c0-.446-.115-.883-.333-1.268l-.1-.162-.777-1.165a.492.492 0 00-.601-.203l-.085.042-.01.006a.5.5 0 00-.21.522l.027.075.907 1.51a.448.448 0 01-.72.526l-.047-.065-.925-1.542a1.382 1.382 0 01-.144-.666l-.003-.036v-2.518a.56.56 0 00-1.113-.082l-.006.082v3.472c0 .52.157 1.025.443 1.445l.113.153 1.352 1.598a.448.448 0 01-.626.635l-.057-.057-1.36-1.607a3.47 3.47 0 01-.753-1.953L2 14.067v-3.472c0-.803.652-1.454 1.455-1.454zm13.09 0c.761 0 1.386.585 1.45 1.33l.005.125v3.472a3.47 3.47 0 01-.637 2.002l-.13.174-1.353 1.598a.448.448 0 01-.73-.511l.047-.067 1.344-1.588c.324-.406.518-.9.557-1.414l.007-.194v-3.472a.56.56 0 00-1.113-.082l-.006.082v2.518l-.005.062c.002.181-.032.366-.103.546l-.055.124-.908 1.51a.448.448 0 01-.802-.388l.035-.072.89-1.48a.492.492 0 00-.112-.586l-.074-.057a.493.493 0 00-.632.11l-.055.077-.767 1.15c-.247.37-.393.797-.426 1.24l-.007.19v2.013a.448.448 0 01-.888.08l-.007-.08V15.54c0-.61.16-1.208.463-1.733l.12-.194.756-1.131a1.389 1.389 0 011.682-.585v-1.3c0-.804.651-1.455 1.454-1.455zM10.39 2.85a3.027 3.027 0 014.153-.05l.127.125c.146.152.276.317.395.508l.1.174a2.86 2.86 0 01-.555 3.366l-3.574 3.622a1.455 1.455 0 01-2.06.013L5.269 6.845a2.87 2.87 0 01-.515-3.063l.086-.181a3.026 3.026 0 014.773-.75l.388.377zm3.636.697a2.131 2.131 0 00-3.013-.055l-.701.681a.448.448 0 01-.624 0l-.698-.679a2.15 2.15 0 00-.477-.347l-.137-.067c-1.012-.452-2.217-.051-2.737.921l-.068.146c-.318.749-.141 1.62.457 2.195l3.571 3.623.086.071c.22.15.52.126.713-.07l3.583-3.63a1.964 1.964 0 00.399-2.3l-.082-.141a2.122 2.122 0 00-.272-.348z"
        />
      </svg>
    </IconWrapper>
  );
};

ProductCodeExchangeCommunityIcon.displayName = 'ProductCodeExchangeCommunityIcon';
export {ProductCodeExchangeCommunityIcon};
