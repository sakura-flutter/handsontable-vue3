# Table

## 基础用法

```tsx
import { defineComponent } from 'vue';
import { HTable } from '@sakura-flutter/handsontable-vue3';
import { registerAllModules } from 'handsontable/registry';

import 'handsontable/styles/handsontable.css';
import 'handsontable/styles/ht-theme-main.css';

registerAllModules();

export default defineComponent({
  setup() {
    return () => (
      <div class="ht-theme-main-dark-auto">
        <HTable
          data={[
            ['Car1', 'A 160', '01/14/2021', 6999.95],
            ['Car2', 'C4 Coupe', '12/01/2022', 8330],
            ['Car3', 'A4 Avant', '11/19/2023', 33900],
            ['Car4', 'Astra', '02/02/2021', 7000],
            ['Car5', '320i Coupe', '07/24/2022', 30500],
          ]}
          colHeaders={['Car', 'Model', 'Registration date', 'Price']}
          rowHeaders
          manualColumnResize
          columns={[
            {
              type: 'text',
            },
            {
              // 2nd cell is simple text, no special options here
            },
            {
              type: 'date',
              dateFormat: 'MM/DD/YYYY',
              correctFormat: true,
              defaultDate: '01/01/2020',
              // datePicker additional options
              // (see https://github.com/dbushell/Pikaday#configuration)
              datePickerConfig: {
                // First day of the week (0: Sunday, 1: Monday, etc)
                firstDay: 0,
                showWeekNumber: true,
                disableDayFn(date) {
                  // Disable Sunday and Saturday
                  return date.getDay() === 0 || date.getDay() === 6;
                },
              },
            },
            {
              type: 'numeric',
              numericFormat: {
                pattern: '$ 0,0.00',
              },
            },
          ]}
          stretchH="all"
          licenseKey="non-commercial-and-evaluation"
        />
      </div>
    );
  },
});
```

## 使用 Vue 组件

```tsx
import { defineComponent, onMounted, onUpdated, onUnmounted } from 'vue';
import { HTable, HColumn } from '@sakura-flutter/handsontable-vue3';
import { registerAllModules } from 'handsontable/registry';
import Handsontable from 'handsontable';

import 'handsontable/styles/handsontable.css';
import 'handsontable/styles/ht-theme-main.css';

registerAllModules();

const CellComponent = defineComponent({
  props: ['value', 'log'],
  setup(props) {
    if (props.log) {
      onMounted(() => {
        console.log('onMounted', props.value);
      });
      onUpdated(() => {
        console.log('onUpdated', props.value);
      });
      onUnmounted(() => {
        console.log('onUnmounted', props.value);
      });
    }

    return () => (
      <div style="color:black; background:lavender;">{props.value}</div>
    );
  },
});

export default defineComponent({
  setup() {
    const renderer = (instance, TD, row, col, prop, value, cellProperties) => {
      // console.log(instance, TD, row, col, prop, value, cellProperties);

      return <CellComponent value={value} log={col === 0} />;
    };

    return () => (
      <div class="ht-theme-main-dark-auto">
        <HTable
          data={Handsontable.helper.createSpreadsheetData(200, 5)}
          rowHeaders
          colHeaders
          manualColumnResize
          stretchH="all"
          height={300}
          licenseKey="non-commercial-and-evaluation"
        >
          <HColumn renderer={renderer} />
          <HColumn renderer={renderer} />
          <HColumn
            renderer={(instance, TD, row, col, prop, value) =>
              `${row}-${col}: ${value}`
            }
          />
          <HColumn />
          <HColumn />
        </HTable>
      </div>
    );
  },
});
```

## 更新数据

```tsx
import { defineComponent, shallowRef, watch } from 'vue';
import { HTable, HColumn } from '@sakura-flutter/handsontable-vue3';
import { registerAllModules } from 'handsontable/registry';
import Handsontable from 'handsontable';
import { random } from 'lodash-es';

import 'handsontable/styles/handsontable.css';
import 'handsontable/styles/ht-theme-main.css';

registerAllModules();

function randomData() {
  return Handsontable.helper.createSpreadsheetData(
    random(10, 100), // rows
    random(20, 100), // cols
  );
}

export default defineComponent({
  setup() {
    const tableRef = shallowRef();
    const data = shallowRef(randomData());

    watch(data, (val) => {
      tableRef.value.hotInstance.updateData(val);
    });

    return () => (
      <>
        <button
          onClick={() => {
            data.value = randomData();
          }}
        >
          update data
        </button>

        <div class="ht-theme-main-dark-auto">
          <HTable
            ref={tableRef}
            data={data.value}
            rowHeaders
            colHeaders
            height={300}
            licenseKey="non-commercial-and-evaluation"
          />
        </div>
      </>
    );
  },
});
```

## Column API

### Props

<!-- <API id="HTable" type="props"></API> -->

| 属性     | 说明                                     | 类型                                                                                                                       | 默认值 |
| -------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------ |
| renderer | Declare a custom renderer as a component | ((...args: Parameters\<typeof Handsontable.renderers.BaseRenderer\>) => VNodeChild) \| Handsontable.RendererType \| string | -      |

其它属性继承 [HotTable](https://handsontable.com/docs/javascript-data-grid/vue3-basic-example/)，用法完全一致
