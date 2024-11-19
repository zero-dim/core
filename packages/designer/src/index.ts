import * as Atoms from '@ai-lowcode/atoms'

import * as componentAdapter from '@ai-lowcode/component-adapter'

import '@ai-lowcode/component-adapter/css'

import { schemaComponent } from '@ai-lowcode/schemas-component-adapter'

import '@ai-lowcode/schemas-component-adapter/css'

import '@ai-lowcode/styles/tailwindCss'

import { Icon } from '@iconify/vue'

import { App, Component } from 'vue'

import Designer from './index.vue'

import { AlDragBox, AlVueDragAble } from '@/components/workspace/index.ts'

export * from './enums'

export * from './types'

export * from './components'

export * from './utils'

export const AlDesigner = Designer

export function initComponents(app: App) {
  // 全局组成基础组件库
  for (const componentAdapterKey in componentAdapter) {
    app.component(componentAdapterKey, (componentAdapter as Record<string, Component>)[componentAdapterKey] as Component)
  }
  // 注册设计器组件
  app.component(AlDragBox.name as string, AlDragBox)
  app.component(AlVueDragAble.name as string, AlVueDragAble)
  app.component('icon', Icon)
  // 全局注册 atoms 组件
  for (const atomsKey in Atoms) {
    app.component((Atoms as any)[atomsKey].name as string, (Atoms as any)[atomsKey])
  }
  // 全局注册自定义组件库组件
  for (const schemaKey in schemaComponent) {
    app.component((schemaComponent as any)[schemaKey].name as string, (schemaComponent as any)[schemaKey])
  }
}
