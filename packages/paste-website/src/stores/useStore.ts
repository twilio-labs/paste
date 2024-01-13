import { useEffect, useState } from "react";

/**
 * useStoreWithLocalStorage is a custom hook specifically for use with NextJS and dealing with reydration and local storage.
 * https://docs.pmnd.rs/zustand/integrations/persisting-store-data#usage-in-next.js
 *
 * @template T
 * @template F
 * @param {(callback: (state: T) => unknown) => unknown} store
 * @param {(state: T) => F} callback
 * @return {*}  {(F | undefined)}
 */
const useStoreWithLocalStorage = <T, F>(
  store: (callback: (state: T) => unknown) => unknown,
  callback: (state: T) => F,
): F | undefined => {
  const result = store(callback) as F;
  const [data, setData] = useState<F>();

  useEffect(() => {
    setData(result);
  }, [result]);

  return data;
};

export default useStoreWithLocalStorage;
