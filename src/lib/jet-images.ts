import { jetBatch0 } from "./jetBatch0";
import { jetBatch1 } from "./jetBatch1";
import { jetBatch2 } from "./jetBatch2";
import { jetBatch3 } from "./jetBatch3";

export const jetImages = {
  ...jetBatch0,
  ...jetBatch1,
  ...jetBatch2,
  ...jetBatch3,
} as const;

export type JetImageName = keyof typeof jetImages;
