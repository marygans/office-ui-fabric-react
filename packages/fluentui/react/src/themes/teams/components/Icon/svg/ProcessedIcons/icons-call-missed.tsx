import * as React from 'react';
import cx from 'classnames';
import { TeamsProcessedSvgIconSpec } from '../types';
import { teamsIconClassNames } from '../teamsIconClassNames';

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" className={classes.svg} viewBox="8 8 16 16">
      <g>
        <path
          className={cx(teamsIconClassNames.outline, classes.outlinePart)}
          d="M18.906 10.273c.942.208 1.781.479 2.516.812.849.391 1.518.831 2.008 1.32.188.188.328.367.422.539s.141.373.141.602c0 .297-.035.589-.105.875-.07.287-.176.542-.316.766a1.76 1.76 0 0 1-.59.598 1.565 1.565 0 0 1-.826.215c-.35 0-.711-.039-1.086-.117s-.725-.192-1.047-.344a2.966 2.966 0 0 1-.902-.648 1.938 1.938 0 0 1-.48-.922 2.158 2.158 0 0 1-.047-.328c-.026-.302-.1-.521-.219-.656-.068-.078-.172-.117-.312-.117h-3.141c-.224 0-.375.133-.453.398-.037.115-.06.232-.07.352-.011.13-.026.237-.047.32-.146.683-.604 1.214-1.375 1.594-.318.156-.664.273-1.039.352s-.746.116-1.11.116c-.599 0-1.068-.271-1.406-.812a2.617 2.617 0 0 1-.32-.77 3.541 3.541 0 0 1-.109-.871c0-.229.047-.43.141-.602s.234-.352.422-.539c.495-.495 1.167-.935 2.016-1.32.724-.333 1.56-.604 2.508-.812A11.66 11.66 0 0 1 16.492 10c.744 0 1.549.091 2.414.273zm-4.594.977c-.896.193-1.672.44-2.328.742-.792.359-1.396.758-1.812 1.195-.058.062-.102.121-.133.176s-.047.116-.047.184c0 .354.055.662.164.922.151.354.375.531.672.531.208 0 .471-.034.789-.102.458-.083.82-.192 1.086-.328.385-.198.609-.477.672-.836l.125-.688c.062-.344.227-.627.492-.852.26-.219.57-.328.93-.328h3.141c.354 0 .658.108.914.324.255.216.424.501.508.855.031.156.052.273.062.352.021.167.055.32.102.461s.125.269.234.383c.234.25.549.425.945.523.333.094.643.162.93.203.119.023.252.033.398.033.297 0 .521-.18.672-.539.109-.26.164-.565.164-.914 0-.067-.016-.129-.047-.184s-.076-.113-.133-.176c-.417-.438-1.019-.836-1.805-1.195a11.916 11.916 0 0 0-2.328-.742 10.26 10.26 0 0 0-2.187-.25c-.698 0-1.425.083-2.18.25zm3.524 4.023a3.553 3.553 0 0 1 1.883 1.883c.182.428.273.875.273 1.344s-.092.917-.273 1.344a3.548 3.548 0 0 1-1.883 1.883c-.428.182-.875.273-1.344.273s-.917-.091-1.344-.273a3.537 3.537 0 0 1-1.883-1.883c-.183-.427-.273-.875-.273-1.344s.091-.916.273-1.344a3.537 3.537 0 0 1 1.883-1.883c.427-.182.875-.273 1.344-.273s.916.091 1.344.273zm-2.305.922a2.568 2.568 0 0 0-1.344 1.344 2.41 2.41 0 0 0-.195.961c0 .334.065.651.195.953.13.303.312.57.547.805s.502.417.805.547c.302.131.619.195.953.195.338 0 .658-.064.961-.195a2.56 2.56 0 0 0 1.344-1.344c.13-.302.195-.622.195-.961 0-.338-.065-.66-.195-.965a2.562 2.562 0 0 0-.539-.801 2.534 2.534 0 0 0-.801-.539 2.437 2.437 0 0 0-.965-.195c-.339 0-.659.065-.961.195zm1.313.453c.099.1.148.217.148.352v1.297c.078.078.169.159.273.242.275.24.479.453.609.641a.582.582 0 0 1 .117.32c0 .136-.05.253-.148.352a.48.48 0 0 1-.352.148.48.48 0 0 1-.352-.148l-1-1a.476.476 0 0 1-.148-.352V17c0-.135.049-.252.148-.352a.48.48 0 0 1 .352-.148c.136 0 .253.05.353.148z"
        />
        <path
          className={cx(teamsIconClassNames.filled, classes.filledPart)}
          d="M18.922 10.273c.885.198 1.711.469 2.477.812.833.375 1.51.815 2.031 1.32.188.177.328.353.422.527.094.175.141.379.141.613 0 .297-.035.59-.105.879s-.176.546-.316.77a1.78 1.78 0 0 1-.59.59 1.557 1.557 0 0 1-.826.216c-.35 0-.711-.039-1.086-.117s-.725-.192-1.047-.344a3.01 3.01 0 0 1-.906-.648 1.866 1.866 0 0 1-.477-.922 2.158 2.158 0 0 1-.047-.328c-.026-.302-.1-.521-.219-.656-.068-.078-.172-.117-.312-.117h-3.141c-.224 0-.375.133-.453.398-.037.115-.06.232-.07.352a2.082 2.082 0 0 1-.531 1.258c-.24.266-.537.484-.891.656-.318.156-.664.273-1.039.352s-.745.116-1.109.116c-.599 0-1.068-.268-1.406-.805a2.617 2.617 0 0 1-.32-.77 3.575 3.575 0 0 1-.109-.879c0-.234.047-.438.141-.613.094-.174.234-.35.422-.527a6.54 6.54 0 0 1 1.426-1.016c.56-.302 1.168-.56 1.824-.773.62-.203 1.247-.356 1.883-.461A11.156 11.156 0 0 1 16.492 10c.755 0 1.565.091 2.43.273zm-1.086 5a3.553 3.553 0 0 1 1.883 1.883c.182.428.273.875.273 1.344s-.092.917-.273 1.344a3.548 3.548 0 0 1-1.883 1.883c-.428.182-.875.273-1.344.273s-.917-.091-1.344-.273a3.537 3.537 0 0 1-1.883-1.883c-.183-.427-.273-.875-.273-1.344s.091-.916.273-1.344a3.537 3.537 0 0 1 1.883-1.883c.427-.182.875-.273 1.344-.273s.916.091 1.344.273zm-1.695 1.375a.48.48 0 0 0-.148.352v1.5a.48.48 0 0 0 .148.352l1 1c.099.1.216.148.352.148a.483.483 0 0 0 .352-.148.48.48 0 0 0 .148-.352c0-.172-.133-.391-.398-.656a6.088 6.088 0 0 0-.328-.305 3.28 3.28 0 0 1-.273-.242V17a.487.487 0 0 0-.148-.352.483.483 0 0 0-.352-.148.481.481 0 0 0-.353.148z"
        />
      </g>
    </svg>
  ),
  styles: {},
  exportedAs: 'phone-clock'
} as TeamsProcessedSvgIconSpec;
