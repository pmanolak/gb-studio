import type { EngineFieldSchema } from "store/features/engine/engineState";
import type { EngineFieldValue } from "shared/lib/entities/entitiesTypes";
import { evaluateConditions } from "shared/lib/conditionsFilter";

export const isEngineFieldVisible = (
  field: EngineFieldSchema,
  args: Record<string, EngineFieldValue>,
  ignoreConditions?: string[]
) => {
  if (!field.conditions) {
    return true;
  }
  return evaluateConditions(
    field.conditions,
    (key) => args[key]?.value,
    ignoreConditions
  );
};
