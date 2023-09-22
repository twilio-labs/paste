import type { PaginationButtonProps } from './types';

export const handleLinkValidation = ({ as, href }: PaginationButtonProps): void => {
  const hasHref = href != null && href !== '';

  if (as !== 'a' && hasHref) {
    throw new Error(
      `[Paste: Pagination] You cannot pass href into button pagination without the 'a' tag.  Use 'as="a"'.`,
    );
  }

  if (as === 'a' && !hasHref) {
    throw new Error(`[Paste: Pagination] Missing href prop for link pagination.`);
  }
};
