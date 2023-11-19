const { addons } = require("@storybook/addons");
const isChromatic = require("chromatic/isChromatic").default;
const { STORY_ERRORED, STORY_MISSING, STORY_RENDERED } = require("@storybook/core-events");
const ReactGA = require("react-ga");

addons.register("paste-google-analytics", (api) => {
  if (!isChromatic()) {
    ReactGA.initialize("G-1DZ9RS3QNT");

    api.on(STORY_RENDERED, () => {
      const { path } = api.getUrlState();
      ReactGA.pageview(path);
    });
    api.on(STORY_ERRORED, ({ description }) => {
      ReactGA.exception({
        description,
        fatal: true,
      });
    });
    api.on(STORY_MISSING, (id) => {
      ReactGA.exception({
        description: `attempted to render ${id}, but it is missing`,
        fatal: false,
      });
    });
  }
});
