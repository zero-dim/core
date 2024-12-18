<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@zero-dim/component-adapter](./component-adapter.md) &gt; [componentFactory](./component-adapter.componentfactory.md)

## componentFactory() function

组件构造函数

**Signature:**

```typescript
export declare function componentFactory(CompName: string, defaultProps?: {}): import("vue").DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, any[], any, import("vue").PublicProps, Readonly<{}> & Readonly<{
    [x: `on${Capitalize<any>}`]: ((...args: any[]) => any) | undefined;
}>, {} | {
    [x: string]: any;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

CompName


</td><td>

string


</td><td>

组件名称


</td></tr>
<tr><td>

defaultProps


</td><td>

{}


</td><td>

_(Optional)_ 组件默认 props


</td></tr>
</tbody></table>
**Returns:**

import("vue").DefineComponent&lt;{}, () =&gt; import("vue").VNode&lt;import("vue").RendererNode, import("vue").RendererElement, { \[key: string\]: any; }&gt;, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, any\[\], any, import("vue").PublicProps, Readonly&lt;{}&gt; &amp; Readonly&lt;{ \[x: \`on${Capitalize&lt;any&gt;}\`\]: ((...args: any\[\]) =&gt; any) \| undefined; }&gt;, {} \| { \[x: string\]: any; }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any&gt;

