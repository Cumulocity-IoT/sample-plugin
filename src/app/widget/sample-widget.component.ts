import { Component, computed, input } from '@angular/core';
import { SamplePluginConfig } from '../sample-plugin.model';

@Component({
  selector: 'c8y-sample-plugin',
  template: `
    <div class="p-16">
      <h1>Sample-plugin</h1>
      <p class="text">{{ displayText() }}</p>
      <small>My context is: {{ deviceName() }}</small>
    </div>
  `,
  styleUrls: ['./sample-widget.component.css'],
  standalone: true
})
export class SamplePluginComponent {
  readonly config = input<SamplePluginConfig>();

  readonly displayText = computed(() => this.config()?.text || 'No text');
  readonly deviceName = computed(() => this.config()?.device?.['name'] || 'No context');
}
