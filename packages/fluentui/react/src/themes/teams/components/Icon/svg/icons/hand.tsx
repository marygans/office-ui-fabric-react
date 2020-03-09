import * as React from 'react';
import cx from 'classnames';
import { TeamsSvgIconSpec } from '../types';
import { teamsIconClassNames } from '../teamsIconClassNames';

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <path
        className={cx(teamsIconClassNames.outline, classes.outlinePart)}
        d="M22.34 24h-7.482l-.12-.326a1.753 1.753 0 0 1 1.058-2.25l3.13-1.132a1.77 1.77 0 0 1 2.227.956zm-1.904-2.46a1.098 1.098 0 0 0-1.386-.597l-3.063 1.115c-.54.196-.832.77-.687 1.312h5.92zm1.893-7.53l-.19.542-1.475 2.962c-.541 1.197-1.167 1.988-1.892 2.363a3.053 3.053 0 0 1-.75.393l-.696.254a244.1 244.1 0 0 1-1.286.466c-.165.06-.324.105-.48.136-.752.15-1.47-.002-2.145-.429-.519-.329-.882-.808-1.107-1.423l-.357-.975-.037-.1a1071.707 1071.707 0 0 1-.523-1.436l-.023-.063c-.103-.29-.17-.476-.292-.804-.17-.305-.597-1.075-1.28-2.312a1.075 1.075 0 0 1 1.4-1.491l-.328-.676a1.163 1.163 0 1 1 2.09-1.02l.169.346-.375-1.03a1.163 1.163 0 1 1 2.185-.796l.526 1.445-.229-.918a1.163 1.163 0 0 1 2.257-.565c.665 2.594 1.026 4 1.082 4.212.042.16.176.561.4 1.194l.882-1.136a1.34 1.34 0 0 1 2.474.861zm-9.6 1.517l-.187-.141-1.41-2.543a.454.454 0 1 0-.794.44c.7 1.266 1.13 2.042 1.291 2.33l.012.021.009.023a57.254 57.254 0 0 1 .325.898l.128.355.394 1.075.037.1.357.976c.18.492.459.86.857 1.112.543.345 1.1.462 1.691.344.123-.024.253-.062.392-.111a244.037 244.037 0 0 0 1.98-.72c.229-.083.433-.19.614-.324l.02-.015.024-.012c.588-.296 1.137-.987 1.632-2.082l.005-.01 1.497-3.007.008-.012a.727.727 0 0 0 .06-.12l.001-.005.002-.004a.719.719 0 0 0-1.293-.615l-.01.018-1.602 2.061-.19-.532c-.346-.965-.546-1.552-.605-1.778-.057-.215-.418-1.618-1.084-4.218a.542.542 0 1 0-1.052.262l1.104 4.43-.016.276a.434.434 0 0 1-.257.252.422.422 0 0 1-.542-.252l-1.772-4.87a.542.542 0 0 0-1.02.37l1.77 4.86a.402.402 0 0 1-.241.516.412.412 0 0 1-.312-.012l-.291-.382-1.86-3.812a.542.542 0 1 0-.974.476l1.86 3.814v.002a.415.415 0 0 1-.231.572.447.447 0 0 1-.324-.007z"
      />
      <path
        className={cx(teamsIconClassNames.filled, classes.filledPart)}
        d="M22.315 23.973H14.9l-.119-.326a1.75 1.75 0 0 1 1.048-2.242l3.102-1.129a1.75 1.75 0 0 1 2.208.953zm-3.743-4.318c-.21.155-.447.28-.712.376-.68.247-1.358.497-2.038.74a3.162 3.162 0 0 1-.449.128c-.712.142-1.368-.014-1.973-.397-.492-.313-.812-.762-1.01-1.304l-.81-2.213c-.157-.43-.206-.585-.467-1.288-.166-.297-.61-1.096-1.33-2.398a.786.786 0 1 1 1.377-.763l1.417 2.557v.002a.14.14 0 0 0 .171.064.108.108 0 0 0 .065-.139c-.001-.003-.002-.007-.005-.01v-.002l-1.914-3.924a.877.877 0 1 1 1.577-.769l1.995 4.09.012.024c.024.048.08.07.13.053a.095.095 0 0 0 .057-.122l-1.82-4.999a.877.877 0 1 1 1.65-.6l1.823 5.01c.022.06.088.09.147.069a.128.128 0 0 0 .081-.151l-.01-.038h.004l-1.13-4.534a.877.877 0 0 1 1.702-.424c.684 2.67 1.056 4.115 1.114 4.335.058.22.262.82.614 1.803l1.278-1.644a1.059 1.059 0 0 1 1.905.905h.001l-.005.01a1.068 1.068 0 0 1-.088.178l-1.533 3.08c-.537 1.187-1.145 1.952-1.827 2.295z"
      />
    </svg>
  ),
  styles: {}
} as TeamsSvgIconSpec;
