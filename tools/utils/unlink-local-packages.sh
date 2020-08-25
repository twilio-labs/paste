#!/bin/bash

cd packages/paste-core/core-bundle
yarn unlink

cd ../../paste-design-tokens
yarn unlink

cd ../paste-icons
yarn unlink

cd ../paste-libraries/animation
yarn unlink

cd ../dropdown
yarnlink

cd ../reakit
yarn unlink

cd ../../paste-style-props
yarn unlink

cd ../paste-theme
yarn unlink

cd ../paste-types
yarn unlink

cd ../../node_modules/react
yarn unlink

cd ../react-dom
yarn unlink

echo "copy paste the commands into your local apps directory via the cli:"
echo "yarn unlink @twilio-paste/core"
echo "yarn unlink @twilio-paste/design-tokens"
echo "yarn unlink @twilio-paste/icons"
echo "yarn unlink @twilio-paste/animation-library"
echo "yarn unlink @twilio-paste/dropdown-library"
echo "yarn unlink @twilio-paste/reakit-library"
echo "yarn unlink @twilio-paste/theme"
echo "yarn unlink @twilio-paste/types"
echo "yarn unlink react"
echo "yarn unlink react-dom"
