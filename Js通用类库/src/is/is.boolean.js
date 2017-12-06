import baseGetTag from '@rrc/utils/lib/base.get.tag'
import { isObjectLike } from './is.object.like'

/**
 * Checks if `value` is classified as a boolean primitive or object.
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
 * @example
 *
 * isBoolean(false)
 * // => true
 *
 * isBoolean(null)
 * // => false
 */
export function isBoolean(value) {
  return value === true || value === false ||
    (isObjectLike(value) && baseGetTag(value) === '[object Boolean]')
}
