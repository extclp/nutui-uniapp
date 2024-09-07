import type { ExtractPropTypes } from 'vue'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT, UPDATE_VISIBLE_EVENT } from '../_constants'
import { commonProps, isBoolean, makeArrayProp, makeNumericProp, makeStringProp, truthProp } from '../_utils'
import { popupProps } from '../popup/popup'
import type { CascaderOption, CascaderValue } from './types'

export const cascaderProps = {
  ...popupProps,
  ...commonProps,
  /**
   * @description 选中值，双向绑定
   */
  modelValue: Array,
  /**
   * @description 显示选择层
   */
  visible: Boolean,
  /**
   * @description 级联数据
   */
  options: makeArrayProp<any>([]),
  /**
   * @description 是否开启动态加载
   */
  lazy: Boolean,
  /**
   * @description 动态加载回调，开启动态加载时生效
   */
  lazyLoad: Function,
  /**
   * @description 自定义 `options` 结构中 `value` 的字段
   */
  valueKey: makeStringProp('value'),
  /**
   * @description 自定义 `options` 结构中 `text` 的字段
   */
  textKey: makeStringProp('text'),
  /**
   * @description 自定义 `options` 结构中 `children` 的字段
   */
  childrenKey: makeStringProp('children'),
  /**
   * @description 当 `options` 为可转换为树形结构的扁平结构时，配置转换规则
   */
  convertConfig: Object,
  /**
   * @description 标题
   */
  title: String,
  /**
   * @description 取消按钮位置，继承 `Popup` 组件
   */
  closeIconPosition: makeStringProp<'top-right' | 'bottom-right' | 'bottom-left' | 'top-left'>('top-right'),
  /**
   * @description 是否显示关闭按钮，继承 `Popup` 组件
   */
  closeable: Boolean,
  /**
   * @description 是否需要弹层展示（设置为 `false` 后，`title` 失效）
   */
  poppable: truthProp,
  /**
   * @description 标签间隙
   */
  titleGutter: makeNumericProp(0),
  /**
   * @description 标签栏字体尺寸大小 可选值: 'large', 'normal', 'small'
   */
  titleSize: makeStringProp<'large' | 'normal' | 'small'>('normal'),
  /**
   * @description 是否省略过长的标题文字
   */
  titleEllipsis: truthProp,
  /**
   * @description 选中底部展示样式 可选值: 'line', 'smile'
   */
  titleType: makeStringProp<'line' | 'card' | 'smile'>('line'),
}

export type CascaderProps = ExtractPropTypes<typeof cascaderProps>

export const cascaderEmits = {
  [UPDATE_MODEL_EVENT]: (val: CascaderValue) => Array.isArray(val),
  [CHANGE_EVENT]: (val: CascaderValue, val2: CascaderOption[]) => Array.isArray(val) && Array.isArray(val2),
  [UPDATE_VISIBLE_EVENT]: (val: boolean) => isBoolean(val),
  pathChange: (val: CascaderOption[]) => Array.isArray(val),
}

export type CascaderEmits = typeof cascaderEmits
