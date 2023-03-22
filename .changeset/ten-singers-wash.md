---
'@twilio-paste/alert': major
'@twilio-paste/alert-dialog': major
'@twilio-paste/anchor': major
'@twilio-paste/avatar': major
'@twilio-paste/badge': major
'@twilio-paste/base-radio-checkbox': major
'@twilio-paste/breadcrumb': major
'@twilio-paste/button': major
'@twilio-paste/button-group': major
'@twilio-paste/callout': major
'@twilio-paste/card': major
'@twilio-paste/chat-composer': major
'@twilio-paste/chat-log': major
'@twilio-paste/checkbox': major
'@twilio-paste/code-block': major
'@twilio-paste/combobox': major
'@twilio-paste/data-grid': major
'@twilio-paste/date-picker': major
'@twilio-paste/description-list': major
'@twilio-paste/detail-text': major
'@twilio-paste/disclosure': major
'@twilio-paste/display-heading': major
'@twilio-paste/display-pill-group': major
'@twilio-paste/file-picker': major
'@twilio-paste/file-uploader': major
'@twilio-paste/form': major
'@twilio-paste/form-pill-group': major
'@twilio-paste/heading': major
'@twilio-paste/help-text': major
'@twilio-paste/in-page-navigation': major
'@twilio-paste/inline-code': major
'@twilio-paste/inline-control-group': major
'@twilio-paste/input': major
'@twilio-paste/input-box': major
'@twilio-paste/label': major
'@twilio-paste/list': major
'@twilio-paste/menu': major
'@twilio-paste/minimizable-dialog': major
'@twilio-paste/modal': major
'@twilio-paste/pagination': major
'@twilio-paste/paragraph': major
'@twilio-paste/popover': major
'@twilio-paste/radio-button-group': major
'@twilio-paste/radio-group': major
'@twilio-paste/screen-reader-only': major
'@twilio-paste/select': major
'@twilio-paste/separator': major
'@twilio-paste/side-modal': major
'@twilio-paste/skeleton-loader': major
'@twilio-paste/spinner': major
'@twilio-paste/switch': major
'@twilio-paste/table': major
'@twilio-paste/tabs': major
'@twilio-paste/textarea': major
'@twilio-paste/time-picker': major
'@twilio-paste/toast': major
'@twilio-paste/tooltip': major
'@twilio-paste/truncate': major
'@twilio-paste/core': major
'@twilio-paste/aspect-ratio': major
'@twilio-paste/flex': major
'@twilio-paste/grid': major
'@twilio-paste/media-object': major
'@twilio-paste/stack': major
'@twilio-paste/box': major
'@twilio-paste/sibling-box': major
'@twilio-paste/text': major
'@twilio-paste/customization': major
'@twilio-paste/icons': major
'@twilio-paste/data-visualization-library': major
'@twilio-paste/style-props': major
'@twilio-paste/theme': major
'@twilio-paste/types': major
'@twilio-paste/utils': major
---

### Breaking change

We have moved `@types/react` and `@types/react-dom` to peer dependencies of the library. This should allow for greater control and backwards compatibility with older versions of React as Paste is no longer bundling the type libraries.

Your application likely has both of these as dependencies anyway, but it is now up to you to manage that version number.

**Action needed**

Ensure `@types/react` and `@types/react-dom` are installed as dependencies of your application.
