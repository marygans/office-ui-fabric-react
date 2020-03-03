import * as React from 'react';
import { TeamsProcessedSvgIconSpec } from '../types';

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" className={classes.svg} viewBox="8 8 16 16">
      <path d="M20.5 20.379c0 .26-.074.581-.219.96-.084.21-.164.384-.242.524s-.17.258-.273.352c-.235.203-.555.305-.961.305-.194 0-.347-.021-.461-.063a13.356 13.356 0 0 1-4.5-2.266c-.662-.51-1.26-1.08-1.793-1.71a10.956 10.956 0 0 1-1.364-2.024A10.372 10.372 0 0 1 9.5 11.582c0-.395.027-.723.082-.98s.15-.465.285-.622c.14-.16.334-.28.582-.355.247-.075.569-.113.965-.113.427 0 .763.054 1.008.164.265.12.515.344.75.672.234.323.432.703.594 1.14.166.449.25.867.25 1.258 0 .25-.037.48-.11.688a2.32 2.32 0 0 1-.32.601c-.115.156-.237.3-.367.43-.131.13-.331.318-.602.562l2.5 3.32.461-.21c.307-.14.627-.247.961-.32.15-.037.315-.055.492-.055.448 0 .906.117 1.375.351.36.188.744.464 1.156.828.11.094.221.196.336.305.114.11.213.217.297.32.203.266.305.538.305.813zm2-10.399c0 .136-.05.253-.148.352l-2.54 2.54c-.1.098-.216.148-.351.148a.479.479 0 0 1-.352-.149l-1.46-1.46a.477.477 0 0 1-.149-.352c0-.136.049-.253.148-.352a.48.48 0 0 1 .352-.148c.135 0 .252.05.352.148l1.109 1.102 2.187-2.18A.478.478 0 0 1 22 9.48c.135 0 .252.05.352.149.097.099.148.216.148.351z" />
    </svg>
  ),
  styles: {}
} as TeamsProcessedSvgIconSpec;
