<!-- 建模 -->
<!-- <template>
  <div id="app">
    <div>
      <Switch @change="handleChangeTheme">
        <template #checked> 黑色 </template>
        <template #unchecked> 明亮 </template>
      </Switch>
    </div>
    <div>
      <AnYiBpmnDesignerCamunda
        @change="handleChange"
        ref="diagramDesigner"
        @save="handleSave"
        @deployment="handleDeployment"
        :comps="comps"
        :theme="theme"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import { Switch } from '@arco-design/web-vue';
  import { Category } from './components/Category';
  import { CAMUNDA_MODEL } from './process';
  import { Role } from './components/Role';
  import { User } from './components/User';
  import { Time } from './components/Time';
  import { UserSingle } from './components/UserSingle';
  import { Expression } from './components/Expression';
  import type { BpmnDiagramInfo } from 'anyi-process-ee-arcovue/dist/types/types/designercommon.d';
  const theme = ref('light');
  const diagramDesigner = ref();
  const comps = {
    category: Category,
    followUpDate: Time,
    dueDate: Time,
    conditionExpression: Expression,
    candidateStarterGroups: Role,
    candidateStarterUsers: User,
    assignee: UserSingle,
    anYiCopyToUsers: User,
    collection: User,
    candidateGroups: Role,
    candidateUsers: User,
  };
  async function handleChangeTheme(value: boolean) {
    if (value) {
      theme.value = 'dark';
      document.body.setAttribute('arco-theme', 'dark');
    } else {
      theme.value = 'light';
      document.body.removeAttribute('arco-theme');
    }
  }
  function handleChange(diagram: BpmnDiagramInfo) {
    console.log('--模型发生了变更----', diagram);
  }
  function handleSave(diagram: BpmnDiagramInfo) {
    console.log('---点击了保存按钮---', diagram);
  }
  function handleDeployment(diagram: BpmnDiagramInfo) {
    console.log('---点击了部署按钮---', diagram);
  }
  onMounted(() => {
    // 新建模型
    // diagramDesigner.value.createNewDiagram();
    // 打开历史默写
    diagramDesigner.value.openBase64Diagram(CAMUNDA_MODEL);
  });
</script> -->
<!-- 预览流程实例 -->
<!-- <template>
   <div id="app">
  <div>
    <Switch @change="handleChangeTheme">
      <template #checked> 黑色 </template>
      <template #unchecked> 明亮 </template>
    </Switch>
  </div>
  <div>
    <AnYiBpmnPreviewInstance
      :theme="theme"
      :createHtml="getHtml"
      ref="diagramInstanceDomRef"
      tagId="Activity_1s3ocxk:e63351bb-faaa-11ec-9f3a-0242ac1f090f"
    />
  </div>
   </div>
</template>
<script lang="ts" setup>
  import type {
    CreateHtmlFuncArgs,
    BpmnInstanceInfo,
  } from 'anyi-process-ee-arcovue/dist/types/types/instance.d';
  import { Switch } from '@arco-design/web-vue';
  import instancesdata from './instancesdata.json';
  import { ref, onMounted, nextTick } from 'vue';
  const theme = ref('light');
  const diagramInstanceDomRef = ref();
  async function handleChangeTheme(value: boolean) {
    if (value) {
      theme.value = 'dark';
      document.body.setAttribute('arco-theme', 'dark');
    } else {
      theme.value = 'light';
      document.body.removeAttribute('arco-theme');
    }
  }
  function getHtml(info: CreateHtmlFuncArgs) {
    console.log('-----info-------', info);
    return '<scan>Nihao</scan>';
  }
  onMounted(() => {
    nextTick(() => {
      diagramInstanceDomRef.value.viewInstance(instancesdata.data as unknown as BpmnInstanceInfo);
    });
  });
</script> -->

<!-- 预览流程模型 -->

<!-- <template>
  <div id="app">
    <AnYiBpmnPreview ref="diagramDomRef" buttonPosition="top" />
  </div>
</template>
<script lang="ts" setup>
  import { base64BpmnData } from './process';
  import { ref, onMounted } from 'vue';
  const diagramDomRef = ref();
  onMounted(() => {
    diagramDomRef.value.viewBase64Bpmn(base64BpmnData);
  });
</script> -->

<!-- 模型比较 -->
<!-- <template>
  <div id="app">
    <AnYiBpmnDiffer ref="diagramDomRef" />
  </div>
</template>
<script lang="ts" setup>
  import { base64BpmnData, bpmn2 } from './process';
  import { ref, onMounted, nextTick } from 'vue';
  const diagramDomRef = ref();
  onMounted(() => {
    nextTick(() => {
      diagramDomRef.value.openDiagram(base64BpmnData, 'history');
      diagramDomRef.value.openDiagram(bpmn2, 'current');
    });
  });
</script> -->

<!-- zeebe建模 -->
<template>
  <div id="app">
    <div>
      <Switch @change="handleChangeTheme">
        <template #checked> 黑色 </template>
        <template #unchecked> 明亮 </template>
      </Switch>
    </div>
    <div>
      <AnYiBpmnDesignerZeebe
        @change="handleChange"
        ref="diagramDesigner"
        :comps="comps"
        :theme="theme"
        @save="handleSave"
        @deployment="handleDeployment"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import type { BpmnDiagramInfo } from 'anyi-process-ee-arcovue/dist/types/types/designercommon.d';
  import { Switch } from '@arco-design/web-vue';
  import { Category } from './components/Category';
  import { ZEEBE_MODEL } from './process';
  import { Role } from './components/Role';
  import { User } from './components/User';
  import { Time } from './components/Time';
  import { UserSingle } from './components/UserSingle';
  import { Expression } from './components/Expression';
  const diagramDesigner = ref();
  const theme = ref('light');
  const comps = {
    category: Category,
    followUpDate: Time,
    dueDate: Time,
    conditionExpression: Expression,
    candidateStarterGroups: Role,
    candidateStarterUsers: User,
    assignee: UserSingle,
    anYiCopyToUsers: User,
    collection: User,
    candidateGroups: Role,
    candidateUsers: User,
  };
  async function handleChangeTheme(value: boolean) {
    if (value) {
      theme.value = 'dark';
      document.body.setAttribute('arco-theme', 'dark');
    } else {
      theme.value = 'light';
      document.body.removeAttribute('arco-theme');
    }
  }
  function handleChange(diagram: BpmnDiagramInfo) {
    console.log('--模型发生了变更----', diagram);
  }
  function handleSave(diagram: BpmnDiagramInfo) {
    console.log('---点击了保存按钮---', diagram);
  }
  function handleDeployment(diagram: BpmnDiagramInfo) {
    console.log('---点击了部署按钮---', diagram);
  }
  onMounted(() => {
    // 新建模型
    // diagramDesigner.value.createNewDiagram();
    // 加载历史base64模型
    diagramDesigner.value.openBase64Diagram(ZEEBE_MODEL);
  });
</script>
