import type { Schema } from '@zero-dim/core'
import { uniqueId } from '@zero-dim/utils'

import { PAGE_COMP } from '@/global'

/**
 * 删除类型为AlDragBox，AlVueDragAble的盒子，且不改变数据结构
 * @param nodes
 */
export function removeAlDragBoxAndPromoteChildren(nodes: Array<any>): Array<any> {
  return nodes?.flatMap((node: any) => {
    // 检查是否需要删除 AlDragBox 或 AlVueDragAble 且 id 不为 'page' 的节点
    if (
      node.type === 'AlDragBox'
      || (node.type === 'AlVueDragAble')
    ) {
      // 递归处理需要删除节点的子节点，并将它们提升
      return removeAlDragBoxAndPromoteChildren(node.children as Array<any>)
    }
    else if (node.children && node.children.length > 0) {
      // 如果节点有子节点，递归处理子节点
      node.children = removeAlDragBoxAndPromoteChildren(node.children as Array<any>)
    }
    // 返回当前节点
    return node
  })
}

export function findParentNode(tree: any, targetId: any, parent = null) {
  // 如果当前节点的id匹配目标id,则返回父节点
  if (tree.id === targetId) {
    return parent
  }

  // 如果当前节点有children属性且是一个数组
  if (Array.isArray(tree.children)) {
    // 遍历children
    for (const child of tree.children) {
      // 递归调用findParentNode,将当前节点作为父节点传递
      const result: any = findParentNode(child, targetId, tree)
      // 如果找到了结果,立即返回
      if (result) {
        return result
      }
    }
  }

  // 如果没有找到匹配的节点,返回null
  return null
}

/**
 * 创建AlDragBox
 * @param schema
 * @param props
 */
export function createDragBoxTemplate(schema?: Schema, props?: Record<string, any>) {
  return {
    type: 'AlDragBox',
    id: `__${uniqueId()}`,
    props,
    children: schema
      ? [
          schema,
        ]
      : [],
  }
}

/**
 * 创建AlDragBox
 * @param schema
 * @param props
 */
export function createPageTemplate(schema?: Schema, props?: Record<string, any>) {
  return {
    type: 'div',
    id: PAGE_COMP,
    label: '页面',
    icon: 'iconoir:page',
    props: {
      class: 'w-full h-full',
    },
    children: [
      {
        type: 'AlVueDragAble',
        id: `__${uniqueId()}`,
        icon: 'iconoir:page',
        props,
        children: schema
          ? [
              schema,
            ]
          : [],
      },
    ],
  }
}
