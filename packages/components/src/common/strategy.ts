import { webStorage } from '@zero-dim/hooks'
import { Component, Ref } from 'vue'

import { ComponentType } from '@/common'

/**
 * 组件渲染策略
 * @param config 组件配置
 */
export function componentStrategy(config: Record<ComponentType, Record<string, any>>) {
  const themeComp: ComponentType = webStorage.getStorageFromKey('themeComp')
  return config[themeComp || ComponentType.ElementPlus].component as Component
}

/**
 * modelValue 解析
 * @param value
 * @param onUpdate
 * @param config
 */
export function getModelValue(value: Ref<any>, onUpdate: any, config: Record<ComponentType, Record<string, any>>) {
  const themeComp: ComponentType = webStorage.getStorageFromKey('themeComp')
  return {
    [config[themeComp || ComponentType.ElementPlus]?.modelValue ?? 'modelValue']: value,
    [`onUpdate:${config[themeComp || ComponentType.ElementPlus]?.modelValue ?? 'modelValue'}`]: onUpdate,
  }
}

/**
 * attrs 映射
 * @param attrs 组件 attrs 值
 * @param config 组件配置
 */
export function getBindMapping(attrs: Record<string, any>, config: Record<ComponentType, Record<string, any>>) {
  const themeComp: ComponentType = webStorage.getStorageFromKey('themeComp')
  const bindMapping = config[themeComp || ComponentType.ElementPlus].bindMapping || {}
  for (const bindMappingKey in bindMapping) {
    attrs[bindMapping[bindMappingKey]] = attrs[bindMappingKey]
    delete attrs[bindMappingKey]
  }
  return attrs
}
