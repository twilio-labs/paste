# Gotchas

The purpose of this document is to keep a list of niche issues that have arisen over the lifetime of the product that we do not want to re-introduce. This can be related to our coded or third party libraries.

## Emotion Library

* If you pass a prop of the component into `styled.div` be sure to wrap it in useMemo as this librabry causes unnecessary re-renders otherwise.