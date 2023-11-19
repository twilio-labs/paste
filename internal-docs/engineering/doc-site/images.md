# Images

Use Next's [next/image](https://nextjs.org/docs/api-reference/next/image) component to render statically imported images:

```tsx
import Image from 'next/image';
import AwaitingData from '../../assets/images/patterns/empty-awaiting-data.png';

export const AwaitingDataImage: React.FC = () => {
  return <Image src={AwaitingData} alt="" width={150} placeholder="blur" />;
};
```

Next does not apply styles/wrappers to images, so to ensure non-gif images are centered and styled correctly in MDX pages import and use the custom `ResponsiveImage` component which wraps `next/image`:

```tsx
import {ResponsiveImage} from '../../components/ResponsiveImage';
import AwaitingData from '../../assets/images/patterns/empty-awaiting-data.png';

<ResponsiveImage src={AwaitingData} />;
```
