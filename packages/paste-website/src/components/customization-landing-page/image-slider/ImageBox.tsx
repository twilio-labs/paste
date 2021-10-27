import * as React from 'react';
import Img from 'gatsby-image';
import type {FluidObject} from 'gatsby-image';

interface ImageBoxProps {
  clipPath?: string;
  fluid: FluidObject;
  label: string;
}

// 608 x 460

const styleProps = {
  pointerEvents: 'none',
  position: 'absolute',
  width: '100%',
  height: '100%',
  maxWidth: '640px',
};

const imageStyleProps = {
  objectFit: 'scale-down',
  objectPosition: 'center center',
};

export const ImageBox: React.FC<ImageBoxProps> = ({fluid, label, clipPath}) => (
  <Img fluid={fluid} aria-label={label} alt={label} style={styleProps} imgStyle={{...imageStyleProps, clipPath}} />
);

ImageBox.displayName = 'ImageBox';
