import { AsyncPipe } from '@angular/common';
import {
  Component,
  DestroyRef,
  inject,
  Input,
  OnInit,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  ControlContainer,
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { AlertService, DynamicComponent, FormGroupComponent } from '@c8y/ngx-components';
import { WidgetConfigService } from '@c8y/ngx-components/context-dashboard';
import { BehaviorSubject } from 'rxjs';
import { SamplePluginConfig } from '../sample-plugin.model';
import { SamplePluginComponent } from './sample-widget.component';

@Component({
  selector: 'c8y-sample-plugin-config',
  template: `
    <div class="form-group">
      <c8y-form-group>
        <label>Text</label>
        <textarea style="width: 100%" [formControl]="formGroup.controls.text"></textarea>
      </c8y-form-group>
    </div>

    <ng-template #sampleWidgetPreview>
      <c8y-sample-plugin [config]="config$ | async"></c8y-sample-plugin>
    </ng-template>
  `,
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
  standalone: true,
  imports: [FormGroupComponent, ReactiveFormsModule, SamplePluginComponent, AsyncPipe]
})
export class SamplePluginConfigComponent implements DynamicComponent, OnInit {
  @Input() config: SamplePluginConfig = {};

  formGroup: FormGroup<{ text: FormControl<string | null> }>;
  config$ = new BehaviorSubject<SamplePluginConfig>({});

  private readonly alert = inject(AlertService);
  private readonly widgetConfigService = inject(WidgetConfigService);
  private readonly formBuilder = inject(FormBuilder);
  private readonly form = inject(NgForm);
  private readonly destroyRef = inject(DestroyRef);

  @ViewChild('sampleWidgetPreview')
  set preview(template: TemplateRef<any>) {
    this.widgetConfigService.setPreview(template ?? null);
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      text: [this.config?.text || '', Validators.required]
    });

    this.form.form.addControl('widgetConfig', this.formGroup);
    this.config$.next(this.config);

    this.formGroup.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(value => {
      this.config$.next({ ...this.config, ...value });
    });

    this.widgetConfigService.addOnBeforeSave(config => {
      if (this.formGroup.invalid) {
        this.alert.warning('Please enter a valid text.');
        return false;
      }
      Object.assign(config, this.formGroup.value);
      return true;
    });
  }
}
