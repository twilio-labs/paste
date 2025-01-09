import { ImageCaption } from "../components/ImageCaption";

export const ApplyingLevel1ImgCaption = (): JSX.Element => (
  <ImageCaption>
    For example: The Side Panel pushes content at Level 0 but is categorized as Level 1 because it contains a task that
    requires user focus while still relying on the background content.
  </ImageCaption>
);

export const CalloutExampleImgCaption = (): JSX.Element => (
  <ImageCaption>
    For example: a Callout is typically placed inline with the background content and relies on that context for its
    meaning. However, it uses a slight background change to subtly appear more prominent and make its information stand
    out.
  </ImageCaption>
);

export const ApplyLevel2ImgCaption = (): JSX.Element => (
  <ImageCaption>
    For example: a Top bar role is not to be on a high hierarchy but to have enough emphasis and differentiation to be
    easily identified at any point of the experience.
  </ImageCaption>
);

export const PopoverExampleImgCaption = (): JSX.Element => (
  <ImageCaption>
    For example: a Popover uses a subtle, sharp shadow to create the illusion of floating above the content. This adds
    depth without dominating the interaction.
  </ImageCaption>
);
