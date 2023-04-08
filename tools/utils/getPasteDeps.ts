const IGNORED_PASTE_DEPENDENCIES = new Set(['@twilio-paste/paste-reakit-fork', '@twilio-paste-core']);

export const isPasteDependency = (packageName: string): boolean =>
  packageName.includes('@twilio-paste/') && !IGNORED_PASTE_DEPENDENCIES.has(packageName);

export const getPasteDependencyList = (dependencyObject: Record<string, string>): string[] =>
  Object.keys(dependencyObject).filter(isPasteDependency);
