import { createRequire } from 'node:module';

const loadCommonJsModule = createRequire(import.meta.url);
const picomatch = loadCommonJsModule('picomatch');

export default picomatch;
