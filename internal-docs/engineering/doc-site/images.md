# Images

Use Next's [next/image](https://nextjs.org/docs/api-reference/next/image) component to render statically imported images:

```tsx
import Image from 'next/image';
import AwaitingData from './../assets/images/patterns/empty-awaiting-data.png';

export const AwaitingDataImage: React.FC = () => {
  return <Image src={AwaitingData} alt="" width={150} placeholder="blur" />;
};
```
