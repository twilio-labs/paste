#!/bin/bash

# Find all type-docs.json files that have been modified and not committed
MODIFIED_FILES=$(git status --porcelain | grep "^ M.*type-docs.json$" | awk '{print $2}')

# If there are any modified files, exit with a non-zero status code
if [ -n "$MODIFIED_FILES" ]; then
  echo "Error: The following type-docs.json files have been modified but not committed, run 'yarn build:typedocs' to update:"
  echo "$MODIFIED_FILES"
  exit 1
fi






