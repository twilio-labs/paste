import isChromatic from 'chromatic';
/// <reference types="vite/client" />
import React from 'react';
import { version } from '../packages/paste-core/core-bundle/package.json';

const trackRenderPerformance = (data) => {
  const commitSha = import.meta.env.STORYBOOK_GITHUB_SHA ? import.meta.env.STORYBOOK_GITHUB_SHA : 'localdev';

  fetch('https://paste-data.netlify.app/.netlify/functions/create-component-perf-metric', {
    method: 'POST',
    keepalive: true,
    mode: 'cors',
    // mix in the current git commit SHA, along with core bundle version number to profiler data. SHA is set via github actions when run in a PR
    body: JSON.stringify({ ...data, commitSha, coreVersionNumber: version }),
  });
};

const IdentityComponent = ({ children }) => <>{children}</>;

const Profiler = ({ id, kind, view, children }) => {
  return (
    <React.Profiler
      id={id}
      // https://reactjs.org/docs/profiler.html#onrender-callback
      onRender={(_, phase, actualDuration, baseDuration) => {
        trackRenderPerformance({
          id,
          kind,
          view,
          phase,
          actualDuration,
          baseDuration,
        });
      }}
    >
      {children}
    </React.Profiler>
  );
};

// THIS ONLY RUNS IN CHROMATIC
export const RenderPerformanceProfiler = isChromatic() ? Profiler : IdentityComponent;
