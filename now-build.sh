#!/bin/sh

yarn --frozen-lockfile
yarn build
yarn build:website
