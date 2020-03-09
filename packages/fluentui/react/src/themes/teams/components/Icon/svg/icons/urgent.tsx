import * as React from 'react';
import cx from 'classnames';
import { teamsIconClassNames } from '../teamsIconClassNames';
import { TeamsSvgIconSpec } from '../types';

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" className={classes.svg} viewBox="8 8 16 16">
      <g>
        <path
          className={cx(teamsIconClassNames.outline, classes.outlinePart)}
          d="M13.805 22.794l2.942-.589a1.5 1.5 0 0 1-2.942.59zm-4.609-.097l11.768-2.355a.995.995 0 0 0 .636-.427c.147-.223.2-.49.147-.75a.996.996 0 0 0-1.176-.785.98.98 0 0 1-.752-.149.99.99 0 0 1-.425-.634l-.786-3.923a4.974 4.974 0 0 0-2.12-3.17 4.963 4.963 0 0 0-3.764-.752 5.006 5.006 0 0 0-3.921 5.885l.785 3.922a1.002 1.002 0 0 1-.783 1.177.991.991 0 0 0-.637.425 1.003 1.003 0 0 0 1.028 1.536zm6.734-11.362a3.976 3.976 0 0 1 1.698 2.535l.785 3.922c.105.523.406.976.852 1.272.443.295.98.4 1.502.296v.001L9.002 21.717a2.003 2.003 0 0 0 1.567-2.354l-.785-3.923a4.005 4.005 0 0 1 3.927-4.786c.785 0 1.552.233 2.22.68zm5.424 3.352a7.534 7.534 0 0 0-1.45-4.482.498.498 0 1 0-.807.59 6.547 6.547 0 0 1 1.257 3.893.5.5 0 1 0 1 0zm2.646 0c0-2.39-.811-4.64-2.348-6.505a.5.5 0 1 0-.771.636C22.268 10.502 23 12.53 23 14.688a.5.5 0 1 0 1 0z"
        />
        <path
          className={cx(teamsIconClassNames.filled, classes.filledPart)}
          d="M13.805 22.794l2.942-.589a1.5 1.5 0 0 1-2.942.59zm-4.609-.097l11.768-2.355a.995.995 0 0 0 .636-.427c.147-.223.2-.49.147-.75a.996.996 0 0 0-1.176-.785.98.98 0 0 1-.752-.149.99.99 0 0 1-.425-.634l-.786-3.923a4.974 4.974 0 0 0-2.12-3.17 4.963 4.963 0 0 0-3.764-.752 5.006 5.006 0 0 0-3.921 5.885l.785 3.922a1.002 1.002 0 0 1-.783 1.177.991.991 0 0 0-.637.425 1.003 1.003 0 0 0 1.028 1.536zm12.158-8.01a7.534 7.534 0 0 0-1.45-4.482.498.498 0 1 0-.807.59 6.547 6.547 0 0 1 1.257 3.893.5.5 0 1 0 1 0zm2.646 0c0-2.39-.811-4.64-2.348-6.505a.5.5 0 1 0-.771.636A9.133 9.133 0 0 1 23 14.688a.5.5 0 1 0 1 0z"
        />
      </g>
    </svg>
  ),
  styles: {}
} as TeamsSvgIconSpec;
