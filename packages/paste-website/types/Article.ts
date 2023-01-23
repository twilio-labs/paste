/**
 * Expected shape of an article's Front Matter.
 *
 * @export
 * @interface ArticleFrontMatter
 */
export interface ArticleFrontMatter {
  author: string;
  avatar: string;
  date: string;
  description: string;
  /**
   * Use this to manually create an article excerpt, when the article is an external linked source.
   *
   * @type {string}
   * @memberof ArticleFrontMatter
   */
  excerpt?: string;
  /**
   * Set an external link when the article is an external linked source.s
   *
   * @type {string}
   * @memberof ArticleFrontMatter
   */
  external_link?: string;
  machineDate: string;
  slug: string;
  status: 'published' | 'draft';
  title: string;
}
