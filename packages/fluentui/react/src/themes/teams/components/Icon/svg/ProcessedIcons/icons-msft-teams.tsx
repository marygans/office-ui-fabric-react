import * as React from 'react';
import { TeamsProcessedSvgIconSpec } from '../types';

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <g>
        <path d="M22.928 13.552c.164.163.358.294.57.384.446.187.947.187 1.393 0 .43-.182.772-.525.955-.955a1.801 1.801 0 0 0 0-1.392 1.805 1.805 0 0 0-.955-.955 1.801 1.801 0 0 0-1.392 0c-.43.183-.773.525-.955.955a1.801 1.801 0 0 0 0 1.392c.09.213.22.407.384.57zM22.404 15.213v5.393h.898c.309-.001.617-.03.92-.087.305-.054.6-.156.871-.304.257-.14.479-.336.65-.573.178-.263.268-.577.256-.894v-3.535h-3.595zM19.133 12.953c.238.001.475-.046.695-.14.43-.183.771-.525.954-.955a1.801 1.801 0 0 0 0-1.393 1.805 1.805 0 0 0-.956-.955 1.743 1.743 0 0 0-.696-.14 1.72 1.72 0 0 0-.691.14c-.163.07-.33.184-.439.27v2.763a1.732 1.732 0 0 0 1.133.41zM18 22.032c.15.05.306.086.465.108.175.025.351.038.527.039.273-.001.545-.03.811-.087.272-.055.532-.156.768-.3.233-.143.429-.338.574-.57.159-.27.237-.58.226-.893v-6.24H18v7.943zM6 8.022v15.73l10.976 2.022V6L6 8.022zm8.456 5.393l-2.023.09v5.9l-1.348-.08v-5.767l-2.022.082v-1.244l5.393-.329v1.348z" />
      </g>
    </svg>
  ),
  styles: {}
} as TeamsProcessedSvgIconSpec;
