import { filter, identity, map, noop, pick, omit } from 'lodash/fp';

const method1 = identity || noop;
const method2 = noop ? map : filter;

noop;

(something ? pick : omit)(() => {}, obj);
