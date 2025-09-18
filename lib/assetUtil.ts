import { flattenValues, type AssetParamValueItem } from '@uniformdev/canvas';
import type { UniformAsset } from "./uniformTypes";

/**
 * Get a uniform asset from an array of asset param value items
 * @param asset - The array of asset param value items
 * @returns The uniform asset
 */
export function getUniformAsset(asset: AssetParamValueItem[]): UniformAsset | null {
  return flattenValues(asset, {toSingle: true}) as UniformAsset | null;
}