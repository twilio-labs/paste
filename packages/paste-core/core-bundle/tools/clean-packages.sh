#!/bin/bash
# Removes all the built package folders and their package.json files.
#
# 1- Print the .gitignore file
# 2- Remove all comments from the print
# 3- Delete all empty lines
# 4- Add "rm -rf ." to the start of the line
# 5- Execute every line
cat .gitignore | sed '/^#.*/ d' | sed '/^\s*$/ d' | sed 's/^/rm -rf ./' | bash


