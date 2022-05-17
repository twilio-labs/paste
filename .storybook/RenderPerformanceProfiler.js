import React from 'react';
import isChromatic from 'chromatic/isChromatic';
import {version} from '../packages/paste-core/core-bundle/package.json';

// ==== constants ====
const metricsEndpoint = 'https://paste-data.netlify.app/.netlify/functions/create-component-perf-metric';
const metricsPostBaseConfig = {method: 'POST', keepalive: true, mode: 'cors'};

// ==== Utils ====

// THIS ONLY RUNS IN CHROMATIC
const makePostToPerfMetricsEndpoint = ({commitSha, version, data}) =>
  fetch(metricsEndpoint, {
    ...metricsPostBaseConfig,
    // mix in the current git commit SHA, along with core bundle version number to profiler data. SHA is set via github actions when run in a PR
    body: JSON.stringify({...data, commitSha, coreVersionNumber: version}),
  });

const printDebugLogs = ({commitSha, version, data}, verbose = true) => {
  console.info('[Profiler] running in debug mode.');
  if (verbose) {
    console.group(`Profiling: ${data.componentName} \n`);
    console.info('onRender invokes callback: trackRenderPerformance');

    console.group('Request config:');
    console.table({...metricsPostBaseConfig});
    console.groupEnd();

    console.group('Request body:');
    console.table({...data, commitSha, coreVersionNumber: version});
    console.groupEnd();

    console.groupEnd();
  }
};

const trackRenderPerformance = (data) => {
  const commitSha = process.env.STORYBOOK_GITHUB_SHA ? process.env.STORYBOOK_GITHUB_SHA : 'localdev';

  // prevent running the profiler function from localdev.
  const trackPerformanceCallback =
    typeof process.env.STORYBOOK_PROFILER === 'string' ? printDebugLogs : makePostToPerfMetricsEndpoint;

  return trackPerformanceCallback({commitSha, version, data}, process.env.STORYBOOK_PROFILER === 'debug');
};

const formatForComponent = (componentName) => `<${componentName} />`;

const getChildName = ({type}) => {
  const {displayName, name} = type?.render || type;

  return formatForComponent(displayName || name || 'Anonymous');
};

const getFormattedChildNames = (children) =>
  Array.isArray(children) ? children.map(getChildName) : getChildName(children);
const sentincify = (strings) => {
  if (strings.length === 2) {
    return strings.join(' & ');
  }

  if (strings.length === 1) {
    return strings.join('');
  }

  const lastIdx = strings.length - 1;

  return strings.reduce((accum, curr, idx) => {
    if (idx === lastIdx) {
      return (accum += `& ${curr}`);
    }
    return (accum += `${curr}, `);
  }, '');
};

// === Components
export const StoryWrapper = ({id, kind, view, children}) => {
  const shouldRenderProfiler = isChromatic() || typeof process.env.STORYBOOK_PROFILER === 'string';

  StoryWrapper.displayName = shouldRenderProfiler ? 'PasteStorybook.ReactProfiler' : 'PasteStorybook.IdentityComponent';

  if (shouldRenderProfiler) {
    return (
      <React.Profiler
        id={id}
        // https://reactjs.org/docs/profiler.html#onrender-callback
        onRender={(_, phase, actualDuration, baseDuration) => {
          const componentName = sentincify(getFormattedChildNames(children));

          trackRenderPerformance({
            id,
            kind,
            view,
            phase,
            actualDuration,
            baseDuration,
            componentName,
          });
        }}
      >
        {children}
      </React.Profiler>
    );
  }

  return <>{children}</>;
};
