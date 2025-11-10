import {
  DynamicWidgetDefinition,
  hookNavigator,
  hookRoute,
  hookWidget,
  NavigatorNode,
  NavigatorNodeData
} from '@c8y/ngx-components';
import {
  exportConfigWithDevice,
  importConfigWithDevice
} from '@c8y/ngx-components/widgets/import-export-config';
import { gettext } from '@c8y/ngx-components/gettext';
import { assetPaths } from '../assets/assets';
import { CODEX_HOOK_LINKS } from './sample-plugin.model';
import { SamplePluginConfigComponent } from './widget/sample-widget-config.component';
import { SamplePluginComponent } from './widget/sample-widget.component';

export const samplePluginWidgetDefinition = {
  id: 'angular.widget.plugin',
  label: gettext('Module Federation widget'),
  description: gettext('Sample added via Module Federation'),
  component: SamplePluginComponent,
  configComponent: SamplePluginConfigComponent,
  previewImage: assetPaths.previewImage,
  data: {
    schema: () =>
      import('c8y-schema-loader?interfaceName=SamplePluginConfig!./sample-plugin.model'),
    export: exportConfigWithDevice,
    import: importConfigWithDevice,
    settings: {
      noNewWidgets: false
    }
  }
} satisfies DynamicWidgetDefinition;

export const samplePluginWidgetProviders = [hookWidget(samplePluginWidgetDefinition)];

export const samplePluginViewProviders = [
  hookRoute({
    path: 'codex-hook-links',
    loadComponent: () => import('./view/sample-view.component').then(m => m.SampleViewComponent)
  }),
  hookNavigator(
    new NavigatorNode({
      priority: -1,
      path: 'codex-hook-links',
      icon: 'navigation',
      label: CODEX_HOOK_LINKS
    } as NavigatorNodeData)
  )
];
