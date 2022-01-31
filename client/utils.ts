export const ZERO = 0;

export const getNormalizedRequiredVersion = (
  required?: string | null,
): string | undefined => {
  if (required === null || required === undefined) {
    return undefined;
  }

  const normalized = /\d.+/u.exec(required);

  return normalized ? normalized[ZERO] : undefined;
};
