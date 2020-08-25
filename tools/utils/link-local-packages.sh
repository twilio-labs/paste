#!/bin/bash

cd packages/paste-core/core-bundle
yarn link

cd ../../paste-design-tokens
yarn link

cd ../paste-icons
yarn link

cd ../paste-libraries/animation
yarn link

cd ../dropdown
yarn link

cd ../reakit
yarn link

cd ../../paste-style-props
yarn link

cd ../paste-theme
yarn link

cd ../paste-types
yarn link

cd ../../node_modules/react
yarn link

cd ../react-dom
yarn link

echo "copy paste the commands into your local apps directory via the cli:"
echo "yarn link @twilio-paste/core"
echo "yarn link @twilio-paste/design-tokens"
echo "yarn link @twilio-paste/icons"
echo "yarn link @twilio-paste/animation-library"
echo "yarn link @twilio-paste/dropdown-library"
echo "yarn link @twilio-paste/reakit-library"
echo "yarn link @twilio-paste/theme"
echo "yarn link @twilio-paste/types"
echo "yarn link react"
echo "yarn link react-dom"
