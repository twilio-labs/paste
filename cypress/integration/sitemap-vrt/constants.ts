export const SITEMAP = [
  '/customization/',
  '/',
  '/blog/',
  '/blog/2020-11-26-growing-pains-and-how-we-scaled-our-design-system-support/',
  '/blog/2021-04-29-insights-and-metrics-that-inform-the-paste-design-system/',
  '/blog/2021-07-26-pastes-path-to-a-transparent-package-categorization-system/',
  '/blog/2022-04-06-paste-newsletter/',
  '/blog/2022-06-28-paste-newsletter/',
  '/blog/2022-07-26-paste-newsletter/',
  '/blog/2022-09-23-paste-newsletter/',
  '/blog/2022-10-31-paste-newsletter/',
  '/blog/2022-12-06-announcing-the-conversations-ui-kit/',
  '/blog/2022-12-09-paste-newsletter/',
  '/blog/2023-01-27-paste-newsletter/',
  '/blog/2023-04-13-paste-newsletter/',
  '/blog/2023-06-12-paste-newsletter/',
  '/components/account-switcher/',
  '/components/aspect-ratio/',
  '/components/anchor/',
  '/components/alert-dialog/',
  '/components/avatar/',
  '/components/breadcrumb/',
  '/components/badge/',
  '/components/callout/',
  '/components/code-block/',
  '/components/card/',
  '/components/chat-composer/',
  '/components/chat-log/',
  '/components/checkbox/',
  '/components/data-grid/',
  '/components/detail-text',
  '/components/description-list/',
  '/components/display-heading/',
  '/components/display-pill-group/',
  '/components/disclosure/',
  '/components/editable-code-block/',
  '/components/button/',
  '/components/button-group/',
  '/components/flex/',
  '/components/file-picker/',
  '/components/file-uploader/',
  '/components/form/',
  '/components/combobox/',
  '/components/date-picker/',
  '/components/grid/',
  '/components/heading/',
  '/components/form-pill-group/',
  '/components/alert/',
  '/components/help-text/',
  '/components/icons/',
  '/components/icons/usage-guidelines/',
  '/components/',
  '/components/in-page-navigation',
  '/components/inline-code/',
  '/components/input/',
  '/components/label/',
  '/components/list/',
  '/components/minimizable-dialog/',
  '/components/media-object/',
  '/components/pagination/',
  '/components/modal/',
  '/components/menu/',
  '/components/paragraph/',
  '/components/popover/',
  '/components/product-switcher/',
  '/components/progress-steps/',
  '/components/radio-group/',
  '/components/radio-button-group/',
  '/components/screen-reader-only/',
  '/components/select/',
  '/components/separator/',
  '/components/sidebar/',
  '/components/sidebar-navigation/',
  '/components/stack/',
  '/components/status-badge/',
  '/components/status-menu/',
  '/components/spinner/',
  '/components/skeleton-loader/',
  '/components/switch/',
  '/components/tabs/',
  '/components/toast/',
  '/components/time-picker/',
  '/components/truncate/',
  '/components/tooltip/',
  '/components/topbar',
  '/components/user-dialog/',
  '/components/textarea/',
  '/components/table/',
  '/core/',
  '/core/changelog/',
  '/core/libraries/',
  '/core/libraries/code-editor/',
  '/core/libraries/codemods/',
  '/core/libraries/data-visualization/',
  '/core/libraries/uid-library/',
  '/core/libraries/vs-code-plugin/',
  '/core/upgrade-guide/',
  '/customization/composing-custom-components-with-design-tokens/',
  '/customization/creating-a-custom-theme/',
  '/customization/customization-provider/',
  '/customization/customizing-component-elements/',
  '/foundations/colors/',
  '/foundations/content/content-checklist/',
  '/foundations/content/voice-and-tone/',
  '/foundations/content/word-list/',
  '/foundations/illustrations/',
  '/foundations/data-visualization/',
  '/foundations/spacing-and-layout/',
  '/foundations/typography/',
  '/inclusive-design/',
  '/foundations/content/product-style-guide/',
  '/introduction/about-paste/',
  '/introduction/contributing/components/',
  '/foundations/content/',
  '/introduction/contributing/icons/',
  '/introduction/contributing/patterns/',
  '/introduction/for-designers/design-guidelines/',
  '/introduction/for-engineers/manual-installation/',
  '/introduction/for-engineers/quickstart/',
  '/patterns/button-vs-anchor/',
  '/introduction/working-with-us/',
  '/patterns/confirmation/',
  '/patterns/delete/',
  '/patterns/data-export/',
  '/patterns/filter-group/',
  '/patterns/',
  '/patterns/empty-state/',
  '/patterns/error-state/',
  '/patterns/navigation/',
  '/patterns/notifications-and-feedback/',
  '/patterns/object-details/',
  '/patterns/privacy/',
  '/patterns/status/',
  '/primitives/combobox-primitive/',
  '/patterns/create/',
  '/primitives/',
  '/primitives/menu-primitive/',
  '/primitives/disclosure-primitive/',
  '/primitives/modal-dialog-primitive/',
  '/primitives/non-modal-dialog-primitive/',
  '/primitives/tabs-primitive/',
  '/primitives/text/',
  '/primitives/tooltip-primitive/',
  '/primitives/listbox-primitive/',
  '/roadmap/',
  '/theme/',
  '/theme/changing-theme/',
  '/theme/dark-theme/',
  '/tokens/design-tokens-package/',
  '/tokens/',
  '/primitives/box/',
];

const SITEMAP_CHUNKS: string[][] = [];
const CHUNK_SIZE = 25;

for (var i = 0, len = SITEMAP.length; i < len; i += CHUNK_SIZE) {
  SITEMAP_CHUNKS.push(SITEMAP.slice(i, i + CHUNK_SIZE));
}

export {SITEMAP_CHUNKS};
