import * as React from 'react';
import { TeamsProcessedSvgIconSpec } from '../types';

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <g>
        <path d="M9 10.398l8-1.351v13.906l-8-1.352V10.398zm2.227 8.086l.796.04V15c0-.031.005-.06.016-.086a.21.21 0 0 0 .016-.078.058.058 0 0 0 .039.043c.02.008.036.022.047.043a4.335 4.335 0 0 0 .171.344l1.829 3.375 1.062.062v-5.547l-.992.063v3.523a.82.82 0 0 0 .031.227h-.016a42.727 42.727 0 0 0-.976-1.824c-.339-.597-.675-1.2-1.008-1.809l-1.016.04v5.108zM23 13.836c0 .068-.008.112-.023.133-.016.02-.061.031-.133.031H22v7.102a.544.544 0 0 1-.074.254.415.415 0 0 1-.086.101.17.17 0 0 1-.113.043H17.5V20h3v-.5h-3v-1h3V18h-3v-1h3v-.5h-3v-1h3V15h-3v-1h3v-.5h-3v-1h3V12h-3v-1.5h4.227c.103 0 .175.044.214.133.04.089.059.177.059.265v.602h.844c.072 0 .117.01.133.027.015.019.023.064.023.137v2.172zm-.203.664c.067 0 .118.033.152.098a.41.41 0 0 1 .051.183v1.938c0 .057-.018.119-.05.183-.035.066-.086.098-.153.098H22.5v-2.5h.297zm0 3c.067 0 .118.033.152.098.033.065.051.127.051.183v1.938c0 .057-.018.119-.05.183-.035.066-.086.098-.153.098H22.5v-2.5h.297z" />
      </g>
    </svg>
  ),
  styles: {},
  exportedAs: 'onenote, onenote-color'
} as TeamsProcessedSvgIconSpec;
