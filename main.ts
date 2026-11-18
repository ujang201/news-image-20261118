// News-image entry (Node 22, standard library only): the image is the
// entry.png beside this file, and this program copies it to the output
// directory the grader provides. No network and no randomness: the bytes
// written are exactly the bytes of entry.png, so two runs are identical.
//
// Local run:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
