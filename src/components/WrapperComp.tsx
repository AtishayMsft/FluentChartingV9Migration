import {  myCustomTheme, myVariant } from './theme';
import {createV8Theme, white} from "@fluentui/react-migration-v8-v9";
import { VerticalBarChartBasicExample } from './VerticalBarChartBasicExample';
import {ThemeProvider} from '@fluentui/react'
import { DonutChartDynamicExample } from './DonutChartDynamicExample';
import { ThemeContext_unstable as V9ThemeContext } from "@fluentui/react-shared-contexts";
import React from 'react';
import { Theme,webDarkTheme,webLightTheme } from '@fluentui/react-components';
import { LineChartBasicExample } from './LineChartBasicExample';


export function WrapperComp() {
    
    let parentV9Theme  = React.useContext(V9ThemeContext) as Theme;
    let v9Theme:Theme=parentV9Theme?parentV9Theme:webLightTheme;
    const myV8Theme=createV8Theme(myVariant,v9Theme,!(v9Theme.colorNeutralBackground1===white));
    return (
    <ThemeProvider theme={myV8Theme}>
    <VerticalBarChartBasicExample/>
    <DonutChartDynamicExample/>
    <LineChartBasicExample/>
    </ThemeProvider>
    );
  }
  