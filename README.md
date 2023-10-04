## Introduction

React-charting controls are built using fluent v8 components and do not work out of box with fluent v9 design system.
This is a POC for enabling fluentui/react-charting library to work with fluent v9 system.

## How to use react-charting controls in v9
Create a chart wrapper like src/components/ChartWrapper.
This demo wrapper knows how to read v9 theme and create a v8 theme out of it so that the chart components can render correctly.
The P0 functionality of donut chart/ vertical bar chart and line chart is working as expected for v9.
More testing and validation to happen in the current quarter.

## Known issues
There are some known styling issues that we have discovered using this POC.
1. P1 - The bar labels are grey in dark mode and white color in light mode. As a workaround, set hideLabels prop = true until the issue is fixed.
2. P2 - The gap between 2 segments in donut chart is in white color for dark mode. Whereas it should be in background color in dark mode.
3. P2 - The border color of lines is white in dark mode and dark in light mode. Whereas it should be background color in both modes.
4. P2 - The background shade of black for charts is not same as background shade in dark mode in some places. Both the shades should match to provide seamless experience.

## Running this demo

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
