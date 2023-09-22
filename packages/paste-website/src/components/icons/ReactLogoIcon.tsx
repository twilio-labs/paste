import { IconWrapper } from '@twilio-paste/icons/esm/helpers/IconWrapper';
import type { IconWrapperProps } from '@twilio-paste/icons/esm/helpers/IconWrapper';
import { useUID } from '@twilio-paste/uid-library';
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';

export interface ReactLogoIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ReactLogoIcon: React.FC<React.PropsWithChildren<ReactLogoIconProps>> = ({
  as,
  display,
  element = 'ICON',
  size,
  color,
  title,
  decorative,
}) => {
  const titleId = `A11yIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[A11yIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} element={element} size={size} color={color}>
      <svg role="img" aria-hidden={decorative} width="100%" height="100%" viewBox="0 0 36 36" aria-labelledby={titleId}>
        {title ? <title id={titleId}>{title}</title> : null}
        <g clipRule="evenodd" fill="currentColor" fillRule="evenodd">
          <path d="m17.1666 19.0888c1.4348.8255 3.2696.3356 4.098-1.0942.8285-1.4297.3368-3.2579-1.098-4.0834-1.4349-.8255-3.2697-.3356-4.0981 1.0942-.8285 1.4297-.3368 3.2579 1.0981 4.0834zm2.5392-1.9909c-.3314.5719-1.0653.7678-1.6392.4376-.574-.3302-.7706-1.0615-.4393-1.6334.3314-.5719 1.0653-.7678 1.6393-.4376.5739.3302.7706 1.0615.4392 1.6334z" />
          <path d="m11.1666 29.444c1.1992.6899 2.5401.6633 3.7337.3232 1.1865-.338 2.3784-1.0206 3.5082-1.8923.0859-.0663.172-.134.258-.2032.0861.0692.1721.1369.2581.2032 1.1297.8717 2.3216 1.5543 3.5081 1.8923 1.1936.3401 2.5345.3667 3.7338-.3232 1.1993-.69 1.8466-1.8604 2.1479-3.0604.2994-1.1929.3021-2.5627.1094-3.9734-.0147-.1074-.0306-.2155-.0476-.3243.1031-.0398.205-.0801.3057-.1211 1.3224-.5391 2.5117-1.2263 3.3987-2.0812.8923-.8599 1.5859-2.0037 1.5859-3.3836s-.6936-2.5237-1.5859-3.3836c-.887-.8549-2.0763-1.5421-3.3987-2.0812-.1007-.041-.2025-.0813-.3057-.121.0171-.1089.033-.217.0476-.3244.1927-1.41069.1901-2.78054-.1094-3.97341-.3013-1.2-.9486-2.37042-2.1478-3.06035-1.1993-.68993-2.5402-.6633-3.7338-.32327-1.1865.33801-2.3784 1.02065-3.5082 1.8923-.0859.06633-.172.13408-.2581.20325-.0861-.06917-.1721-.13693-.2581-.20326-1.1297-.87165-2.3216-1.55428-3.5081-1.89229-1.1936-.34003-2.5345-.36667-3.7338.32327-1.19928.68993-1.84658 1.86035-2.14785 3.06035-.29947 1.19287-.30212 2.56272-.10942 3.97341.01467.1074.03054.2155.0476.3243-.10314.0398-.20505.0801-.30568.1211-1.32245.5391-2.5117 1.2263-3.39872 2.0812-.89233.8599-1.58593 2.0037-1.58593 3.3836s.6936 2.5237 1.58593 3.3836c.88702.8549 2.07627 1.5421 3.39872 2.0812.10064.041.20256.0814.30573.1211-.01707.1088-.03294.2169-.0476.3243-.1927 1.4107-.19005 2.7805.10942 3.9734.30127 1.2.94857 2.3704 2.1479 3.0604zm.9-1.5533c1.2902.7423 3.1959.1416 5.2346-1.4299-.9033-.8766-1.7973-1.8946-2.6528-3.0261-1.4112-.1725-2.7429-.4349-3.9565-.7761-.3464 2.545.0844 4.4898 1.3747 5.2321zm13.1999 0c-1.2903.7423-3.196.1416-5.2347-1.4299.9034-.8766 1.7973-1.8946 2.6529-3.0261 1.4111-.1725 2.7428-.4349 3.9564-.7761.3465 2.5449-.0843 4.4898-1.3746 5.2321zm6.6-11.3907c0 1.4846-1.4749 2.8287-3.8601 3.8022-.3102-1.2178-.748-2.4981-1.3036-3.8021.5556-1.3041.9934-2.5845 1.3036-3.8023 2.3852.9735 3.8601 2.3176 3.8601 3.8022zm-5.5679 4.3907c-.1709-.693-.3889-1.415-.6529-2.1566-.2349.4513-.4829.9029-.7438 1.353-.2608.4502-.5292.8901-.8041 1.3185.7766-.1431 1.5131-.3159 2.2008-.5149zm-2.9555-1.7003c.5222-.9013.9872-1.8028 1.3932-2.6903-.406-.8877-.871-1.7892-1.3933-2.6905-.5222-.9012-1.0732-1.7533-1.6416-2.5474-.9744-.0935-1.9905-.1429-3.0349-.1429s-2.0604.0494-3.0348.1429c-.5685.7941-1.1195 1.6462-1.6417 2.5474-.5222.9013-.9873 1.8028-1.3933 2.6904.406.8876.8711 1.7891 1.3933 2.6904.5222.9012 1.0732 1.7533 1.6416 2.5474.9744.0935 1.9905.1429 3.0349.1429s2.0605-.0494 3.0349-.1429c.5685-.7941 1.1195-1.6462 1.6417-2.5474zm2.9556-7.081c-.171.693-.389 1.415-.6529 2.1566-.235-.4514-.4831-.9029-.7439-1.3531-.2609-.4502-.5293-.8901-.8041-1.3185.7765.1431 1.5131.3159 2.2009.515zm.3425-1.7679c-1.2136-.3413-2.5454-.60368-3.9566-.77623-.8555-1.13146-1.7494-2.14945-2.6528-3.02606 2.0387-1.57148 3.9445-2.17219 5.2348-1.4299 1.2902.74229 1.721 2.68715 1.3746 5.23219zm-6.4267-.98108c-.5127-.59858-1.0311-1.14774-1.548-1.64171-.5168.49397-1.0353 1.04313-1.5479 1.6417.5097-.02297 1.0262-.03468 1.5479-.03468s1.0382.01171 1.548.03469zm-8.148-4.25111c1.2903-.74229 3.196-.14158 5.2347 1.4299-.9033.87661-1.7972 1.8946-2.6528 3.02605-1.4112.17255-2.7429.43494-3.9565.77614-.3465-2.54494.0843-4.4898 1.3746-5.23209zm-6.6 11.39069c0-1.4846 1.47495-2.8287 3.86011-3.8022.31022 1.2178.74799 2.4982 1.30369 3.8023-.5556 1.304-.99343 2.5843-1.30365 3.8022-2.38518-.9736-3.86015-2.3177-3.86015-3.8023zm5.5679-4.3907c.1709.693.389 1.4151.6529 2.1567.2349-.4514.483-.9029.7439-1.3531.2608-.4502.5292-.8901.8041-1.3185-.7766.1431-1.5131.3159-2.2009.5149zm0 8.7814c.1709-.693.389-1.415.6529-2.1566.2349.4513.483.9029.7438 1.353.2609.4502.5293.8901.8042 1.3185-.7766-.1431-1.5131-.3159-2.2009-.5149zm6.0841 2.7489c.5127.5986 1.0312 1.1477 1.548 1.6417.5169-.494 1.0354-1.0431 1.548-1.6417-.5098.023-1.0263.0347-1.548.0347s-1.0382-.0117-1.548-.0347z" />
        </g>
      </svg>
    </IconWrapper>
  );
};

ReactLogoIcon.displayName = 'A11yIcon';
export { ReactLogoIcon };
