import {css} from '@twilio-paste/styling-library';

export const docSearchStyles = css({
  '.algolia-autocomplete': {
    width: '100%',
  },
  '.algolia-autocomplete .ds-dropdown-menu .ds-suggestion': {
    marginY: 'space30',
    marginX: '0',
  },
  '.algolia-autocomplete .ds-dropdown-menu .ds-suggestions a': {
    textDecoration: 'none',
  },
  '.algolia-autocomplete .ds-dropdown-menu .ds-suggestions a:hover, .algolia-autocomplete .ds-dropdown-menu .ds-suggestions a:focus': {
    textDecoration: 'none',
  },
  '.algolia-autocomplete .ds-dropdown-menu .ds-suggestions a:hover .algolia-docsearch-suggestion--title, .algolia-autocomplete .ds-dropdown-menu .ds-suggestions a:focus .algolia-docsearch-suggestion--title': {
    textDecoration: 'underline',
  },
  '.algolia-autocomplete .algolia-docsearch-suggestion.algolia-docsearch-suggestion__main .algolia-docsearch-suggestion--category-header': {
    display: 'none',
  },
  '.algolia-autocomplete .algolia-docsearch-suggestion--category-header': {
    display: 'none',
  },
  '.algolia-autocomplete .algolia-docsearch-suggestion--title': {
    color: 'colorText',
    fontWeight: 'fontWeightSemibold',
  },
  '.algolia-autocomplete .algolia-docsearch-suggestion--highlight': {
    background: 'transparent',
    color: 'inherit',
    padding: '0',
  },
  '.algolia-autocomplete .algolia-docsearch-suggestion--content .algolia-docsearch-suggestion--highlight': {
    background: 'colorBackgroundPrimaryLightest',
    boxShadow: 'none',
    color: 'colorTextLink',
  },
  '.algolia-autocomplete .algolia-docsearch-suggestion--content .algolia-docsearch-suggestion--text .algolia-docsearch-suggestion--highlight': {
    background: 'colorBackgroundPrimaryLightest',
    boxShadow: 'none',
    color: 'colorTextLink',
    fontWeight: 'fontWeightSemibold',
  },
  '.algolia-autocomplete .algolia-docsearch-suggestion:hover': {
    color: 'colorTextLinkStronger',
  },
  '.algolia-autocomplete .ds-dropdown-menu .ds-suggestion.ds-cursor .algolia-docsearch-suggestion:not(.suggestion-layout-simple) .algolia-docsearch-suggestion--content': {
    backgroundColor: 'colorBackground',
  },
  '.algolia-autocomplete .ds-dropdown-menu .ds-suggestion.ds-cursor .algolia-docsearch-suggestion:not(.suggestion-layout-simple) .algolia-docsearch-suggestion--content .algolia-docsearch-suggestion--title': {
    textDecoration: 'underline',
  },
  '.algolia-autocomplete .algolia-docsearch-suggestion--wrapper': {
    alignItems: 'stretch',
    display: 'flex',
    float: 'none',
  },
  '.algolia-autocomplete .algolia-docsearch-suggestion--subcategory-column': {
    color: 'colorTextWeak',
    float: 'none',
    paddingTop: 'space30',
    paddingBottom: 'space20',
    paddingX: 'space30',
  },
  '.algolia-autocomplete .algolia-docsearch-suggestion--content': {
    float: 'none',
    paddingTop: 'space30',
    paddingBottom: 'space20',
    paddingX: 'space30',
    width: '100%',
  },
  '.algolia-autocomplete .algolia-docsearch-suggestion--text': {
    marginBottom: 'space20',
  },
  '.algolia-autocomplete .algolia-docsearch-footer': {
    color: 'colorTextWeak',
    fontSize: 'fontSize10',
    lineHeight: 'lineHeight10',
    textAlign: 'right',
  },
  '.algolia-autocomplete .algolia-docsearch-footer--logo': {
    background: 'transparent',
    color: 'colorTextLink',
    display: 'inline',
    overflow: 'visible',
    textIndent: '0',
  },
  '.algolia-autocomplete .algolia-docsearch-footer--logo:hover': {
    textDecoration: 'none',
  },
  '.algolia-autocomplete .ds-dropdown-menu:before': {
    backgroundColor: 'colorBackgroundBody',
    borderTopColor: 'colorBorderWeak',
    borderRightColor: 'colorBorderWeak',
  },
  '.algolia-autocomplete .ds-dropdown-menu [class^=ds-dataset-]': {
    backgroundColor: 'colorBackgroundBody',
    borderColor: 'colorBorderWeak',
    padding: 'space30',
    paddingTop: '0',
  },
  '.algolia-autocomplete .algolia-docsearch-suggestion': {
    backgroundColor: 'colorBackgroundBody',
    color: 'colorText',
  },
  '.algolia-autocomplete .algolia-docsearch-suggestion--content:before': {
    backgroundColor: 'colorBackgroundStrong',
  },
  '@media only screen and (max-width: 768px)': {
    '.algolia-autocomplete': {
      width: '100% !important',
    },
    '.algolia-autocomplete .ds-dropdown-menu, .algolia-autocomplete.algolia-autocomplete-right .ds-dropdown-menu': {
      position: 'fixed !important',
      top: '120px !important',
      left: '20px !important',
      right: '20px !important',
      width: 'calc(100vw - 40px) !important',
      maxWidth: '550px !important',
      minWidth: '280px !important',
      maxHeight: '300px',
      overflow: 'auto',
    },
    '.algolia-autocomplete.algolia-autocomplete-right .ds-dropdown-menu .algolia-docsearch-suggestion--content': {
      paddingLeft: '4px',
    },
    '.algolia-autocomplete .algolia-docsearch-suggestion .algolia-docsearch-suggestion--subcategory-column': {
      display: 'inline-block',
      width: '35%',
      float: 'none',
      paddingTop: 'space30',
      paddingBottom: 'space20',
      paddingX: 'space30',
      color: 'colorTextWeak',
      fontSize: '0.9em',
      fontWeight: 'inherit',
      textAlign: 'right',
      opacity: 'inherit',
      wordBreak: 'break-word',
    },
    '.algolia-autocomplete .algolia-docsearch-suggestion .algolia-docsearch-suggestion--subcategory-column:after': {
      content: '""',
      position: 'absolute',
      display: 'block',
      top: '0',
      height: '100%',
      width: '1px',
      backgroundColor: 'colorBackgroundStrong',
      right: '0',
    },
    '.algolia-autocomplete .ds-dropdown-menu .algolia-docsearch-suggestion--content': {
      float: 'none',
      paddingTop: 'space30',
      paddingBottom: 'space20',
      paddingX: 'space30',
      width: '100%',
    },
  },
});
