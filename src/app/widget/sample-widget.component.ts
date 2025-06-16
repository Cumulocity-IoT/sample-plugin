import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@c8y/ngx-components';
import { SamplePluginConfig } from '../sample-plugin.model';

@Component({
  selector: 'c8y-sample-plugin',
  template: `
    <div class="p-16">
      <h1>Sample-plugin</h1>
      <p class="text">{{ config?.text || 'No text' }}</p>
      <small>My context is: {{ config?.device?.name || 'No context' }}</small>
    </div>
  `,
  styleUrls: ['./sample-widget.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class SamplePluginComponent {
  @Input() config: SamplePluginConfig;
}
