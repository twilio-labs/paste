import { Callout, CalloutHeading, CalloutText } from "@twilio-paste/callout";

export const FontCallout = (): JSX.Element => {
  return (
    <Callout variant="warning" marginY="space70">
      <CalloutHeading as="h2">Don&rsquo;t forget to load your custom fonts</CalloutHeading>
      <CalloutText>
        Paste only handles loading the Inter font. If you override the font family to a custom font, be sure you are
        loading the font files into the web page correctly. Depending on your application and font provider, the method
        by which you do this will be specific to you.
      </CalloutText>
    </Callout>
  );
};
