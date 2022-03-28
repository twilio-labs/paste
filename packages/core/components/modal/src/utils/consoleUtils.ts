/*
 * HACK NOTICE:
 * This is an eggregious hack but currently the best way for us
 * to maintain accessibility in our modal and keep it functional
 * in Twilio's Console application.
 *
 * For more info, see: https://github.com/reach/reach-ui/issues/610
 *
 * FIXME: when the Console app redesigns navigation
 */

// 80px because the issue is the `calc(100vh - 80px)`
const MARGIN_AMOUNT_BASED_ON_CALC_OFFSET = '80px';

export function addConsoleHeightPatch(): void {
  if (document == null) {
    return;
  }

  const CONTENT_WRAPPER = document.querySelector('#content') as HTMLElement;
  const SIDEBAR_WRAPPER = document.querySelector('#sidebar-wrapper') as HTMLElement;

  if (CONTENT_WRAPPER != null) {
    CONTENT_WRAPPER.style.marginTop = MARGIN_AMOUNT_BASED_ON_CALC_OFFSET;
  }
  if (SIDEBAR_WRAPPER != null) {
    SIDEBAR_WRAPPER.style.marginTop = MARGIN_AMOUNT_BASED_ON_CALC_OFFSET;
  }
}

export function removeConsoleHeightPatch(): void {
  if (document == null) {
    return;
  }

  const CONTENT_WRAPPER = document.querySelector('#content') as HTMLElement;
  const SIDEBAR_WRAPPER = document.querySelector('#sidebar-wrapper') as HTMLElement;

  if (CONTENT_WRAPPER != null) {
    CONTENT_WRAPPER.style.removeProperty('margin-top');
  }
  if (SIDEBAR_WRAPPER != null) {
    SIDEBAR_WRAPPER.style.removeProperty('margin-top');
  }
}
