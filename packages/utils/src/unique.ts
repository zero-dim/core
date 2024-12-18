import { v4 as uuidv4 } from 'uuid'

/**
 * 生成通用唯一识别码(UUID)
 *
 * @remarks
 * - 基于 uuid 库的 v4 方法
 * - 生成符合 RFC 4122 标准的 UUID
 * - 生成的 UUID 为 36 个字符的字符串
 * - 格式为 8-4-4-4-12 的字符组合
 * - 用于需要唯一标识的场景，如：
 *   - 数据库记录ID
 *   - 文件名
 *   - 临时标识符
 *   - 会话ID
 *
 * @returns 返回一个 UUID 字符串，例如: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
 *
 * @example
 * ```typescript
 * // 示例1: 基础使用
 * const id = uniqueId();
 * console.log(id); // 输出: '123e4567-e89b-12d3-a456-426614174000'
 *
 * // 示例2: 生成多个唯一ID
 * const ids = Array(3).fill(0).map(() => uniqueId());
 * // 输出类似:
 * // [
 * //   '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
 * //   '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
 * //   'fd0ea7c4-6dce-4f87-b804-398b3be9b6c5'
 * // ]
 *
 * // 示例3: 在对象中使用
 * const users = [
 *   { id: uniqueId(), name: 'Alice' },
 *   { id: uniqueId(), name: 'Bob' }
 * ];
 *
 * // 示例4: 作为文件名使用
 * const filename = `${uniqueId()}.jpg`;
 * // 输出类似: '550e8400-e29b-41d4-a716-446655440000.jpg'
 *
 * // 示例5: 作为数据库记录ID
 * const record = {
 *   id: uniqueId(),
 *   createdAt: new Date(),
 *   data: 'some data'
 * };
 * ```
 */
export function uniqueId() {
  return uuidv4()
}
