import * as React from 'react';
import { TeamsProcessedSvgIconSpec } from '../types';

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <g>
        <path d="M8.5 10.477l9-2.079v15.204l-9-2.079V10.477zm3.516 5.617l-1.547 2.898 1.297.07.867-1.898.027-.082a4.554 4.554 0 0 0 .074-.25.386.386 0 0 0 .016-.082h.016c.01.042.02.084.027.125.008.042.016.084.027.125.005.047.024.1.055.156l.906 2.024 1.461.086-1.688-3.196 1.641-3.14-1.375.078-.836 1.86c-.042.083-.073.17-.094.26a4.704 4.704 0 0 1-.07.27h-.016a1.882 1.882 0 0 0-.066-.261 4.641 4.641 0 0 0-.09-.246l-.718-1.766-1.336.07 1.422 2.899zM22.96 10c.04 0 .094.02.156.059a1.153 1.153 0 0 1 .328.312c.041.06.063.113.063.16v10.633a.188.188 0 0 1-.063.133.623.623 0 0 1-.152.11.98.98 0 0 1-.184.073.552.552 0 0 1-.148.028H18v-1.016h1.508v-1.484H18v-.516h1.508v-1.484H18v-.516h1.508v-1.484H18v-.516h1.508v-1.484H18v-.516h1.508v-1.484H18V10h4.96zm-.469 1.008H20v1.484h2.492v-1.484zm0 2H20v1.484h2.492v-1.484zm0 2H20v1.484h2.492v-1.484zm0 2H20v1.484h2.492v-1.484zm0 2H20v1.484h2.492v-1.484z" />
      </g>
    </svg>
  ),
  styles: {},
  exportedAs: 'excel, excel-color'
} as TeamsProcessedSvgIconSpec;
