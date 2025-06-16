import { Component, inject, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { AlertService, CommonModule, DynamicComponent, FormsModule } from '@c8y/ngx-components';
import { WidgetConfigService } from '@c8y/ngx-components/context-dashboard';
import { SamplePluginConfig } from '../sample-plugin.model';
import { SamplePluginComponent } from './sample-widget.component';

@Component({
  selector: 'c8y-sample-plugin-config',
  template: `
    <div class="form-group">
      <c8y-form-group>
        <label>Text</label>
        <textarea
          style="width:100%"
          name="text"
          [(ngModel)]="config.text"
          [required]="true"
        ></textarea>
      </c8y-form-group>
    </div>

    <ng-template #sampleWidgetPreview>
      <c8y-sample-plugin [config]="config"></c8y-sample-plugin>
    </ng-template>
  `,
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
  standalone: true,
  imports: [CommonModule, FormsModule, SamplePluginComponent]
})
export class SamplePluginConfigComponent implements DynamicComponent, OnInit {
  @Input() config: SamplePluginConfig = {};

  private readonly alert = inject(AlertService);
  private readonly widgetConfigService = inject(WidgetConfigService);

  @ViewChild('sampleWidgetPreview')
  set previewMapSet(template: TemplateRef<any>) {
    if (template) {
      this.widgetConfigService.setPreview(template);
      return;
    }
    this.widgetConfigService.setPreview(null);
  }

  ngOnInit(): void {
    this.widgetConfigService.addOnBeforeSave(config => {
      this.alert.success('Widget added successfully', JSON.stringify(config, null, 2));
      return true;
    });
  }
}
