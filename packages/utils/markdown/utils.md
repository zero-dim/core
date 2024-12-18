<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@zero-dim/utils](./utils.md)

## utils package

@<!-- -->zero-dim/utils - 前端通用工具函数库

## Remarks

这是一个全面的前端工具函数库，提供了丰富的工具函数集合，包括：

- 进度条控制 [nProgress](./utils.nprogress.md) - 提供页面加载进度条功能 - 树结构操作 [treeToArray()](./utils.treetoarray.md) - 树形结构与数组的相互转换 - 类型判断  - 全面的数据类型判断工具 - 唯一标识 [uniqueId()](./utils.uniqueid.md) - 生成 UUID 等唯一标识 - 对象操作  - 深拷贝、对象合并等 - 表单处理  - 表单数据的处理工具 - 函数工具  - 函数字符串转换等

主要特点： - 完全使用 TypeScript 编写，提供完整的类型定义 - 全面的单元测试覆盖 - 零依赖，仅依赖核心的工具库 - 支持 Tree Shaking - 支持 ESM 和 CommonJS 两种模块规范

安装使用:

```bash
npm install @zero-dim/utils
# 或者
yarn add @zero-dim/utils
```
基础使用:

```typescript
import { isObject, deepCopy, uniqueId } from '@zero-dim/utils'

// 类型判断
isObject({}) // true

// 对象深拷贝
const copy = deepCopy({ a: 1, b: { c: 2 } })

// 生成唯一ID
const id = uniqueId()
```

## Functions

<table><thead><tr><th>

Function


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[accessOrSetNestedValue(formData, path, value)](./utils.accessorsetnestedvalue.md)


</td><td>

访问或设置嵌套对象的值


</td></tr>
<tr><td>

[convertFunctionsToStrings(input)](./utils.convertfunctionstostrings.md)


</td><td>

递归将对象中的函数转换为字符串


</td></tr>
<tr><td>

[convertStringsToFunctions(input)](./utils.convertstringstofunctions.md)


</td><td>

递归将对象中的函数字符串转换为可执行函数


</td></tr>
<tr><td>

[convertToExecutableFunction(functionString)](./utils.converttoexecutablefunction.md)


</td><td>

将字符串转换为可执行函数


</td></tr>
<tr><td>

[deepCopy(value)](./utils.deepcopy.md)


</td><td>

创建值的深拷贝


</td></tr>
<tr><td>

[deepExtend(origin, target, mode)](./utils.deepextend.md)


</td><td>

深度扩展一个对象


</td></tr>
<tr><td>

[deepExtendArgs(origin, lst)](./utils.deepextendargs.md)


</td><td>

使用多个源对象深度扩展一个对象


</td></tr>
<tr><td>

[generateObjectFromPath(formData, path)](./utils.generateobjectfrompath.md)


</td><td>

根据点分隔的路径字符串生成嵌套对象


</td></tr>
<tr><td>

[getValueFromPath(obj, path)](./utils.getvaluefrompath.md)


</td><td>

根据路径获取对象中的值


</td></tr>
<tr><td>

[hasProperty(rule, k)](./utils.hasproperty.md)


</td><td>

判断对象是否包含指定的自有属性


</td></tr>
<tr><td>

[is(val, type)](./utils.is.md)


</td><td>

判断值是否为指定的类型


</td></tr>
<tr><td>

[isArray(val)](./utils.isarray.md)


</td><td>

判断值是否为数组类型


</td></tr>
<tr><td>

[isBoolean(val)](./utils.isboolean.md)


</td><td>

判断值是否为布尔类型


</td></tr>
<tr><td>

[isEmpty(value)](./utils.isempty.md)


</td><td>

判断值是否为空


</td></tr>
<tr><td>

[isExternal(val)](./utils.isexternal.md)


</td><td>

判断字符串是否为外部链接(http:,https:,mailto:,tel:开头)


</td></tr>
<tr><td>

[isFunction(val)](./utils.isfunction.md)


</td><td>

判断值是否为函数类型


</td></tr>
<tr><td>

[isJsonStringTryCatch(str)](./utils.isjsonstringtrycatch.md)


</td><td>

判断字符串是否为有效的JSON格式


</td></tr>
<tr><td>

[isNumber(val)](./utils.isnumber.md)


</td><td>

判断值是否为数字类型


</td></tr>
<tr><td>

[isObject(val)](./utils.isobject.md)


</td><td>

判断值是否为普通对象(非null的object类型)


</td></tr>
<tr><td>

[isString(val)](./utils.isstring.md)


</td><td>

判断值是否为字符串类型


</td></tr>
<tr><td>

[isUndefined(val)](./utils.isundefined.md)


</td><td>

判断值是否为undefined或null


</td></tr>
<tr><td>

[setNestedObjectValue(formData, keys)](./utils.setnestedobjectvalue.md)


</td><td>

根据字符串路径设置嵌套对象的值


</td></tr>
<tr><td>

[setObjectValue(target, field, value)](./utils.setobjectvalue.md)


</td><td>

给目标对象的字段设置值


</td></tr>
<tr><td>

[setValueAtPath(obj, path, value)](./utils.setvalueatpath.md)


</td><td>

根据路径设置对象中的值


</td></tr>
<tr><td>

[treeToArray(tree)](./utils.treetoarray.md)


</td><td>

将树形结构数据转换为扁平数组


</td></tr>
<tr><td>

[uniqueId()](./utils.uniqueid.md)


</td><td>

生成通用唯一识别码(UUID)


</td></tr>
</tbody></table>

## Variables

<table><thead><tr><th>

Variable


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[nProgress](./utils.nprogress.md)


</td><td>

导出配置好的进度条实例 提供以下主要方法: - start(): 开始进度 - done(): 结束进度 - set(n): 设置指定进度,n介于0-1 - inc(): 稍微增加一点进度 - remove(): 移除进度条


</td></tr>
</tbody></table>
