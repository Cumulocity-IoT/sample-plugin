import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderModule, IconDirective, ListDisplaySwitchModule } from '@c8y/ngx-components';
import { CODEX_HOOK_LINKS } from '../sample-plugin.model';

interface HookCards {
  name: string;
  description: string;
  url: string;
}

@Component({
  selector: 'c8y-app-sample-view',
  templateUrl: './sample-view.component.html',
  standalone: true,
  imports: [CommonModule, HeaderModule, IconDirective, ListDisplaySwitchModule]
})
export class SampleViewComponent {
  readonly CODEX_HOOK_LINKS = CODEX_HOOK_LINKS;
  cards: HookCards[] = [];
  listClass = '';

  constructor() {
    this.cards = this.getHookCards();
  }

  private getHookCards(): HookCards[] {
    return [
      {
        name: 'hookActionBar',
        description:
          'The action bar offers a user-friendly interface to efficiently navigate and manage records. ',
        url: 'https://styleguide.cumulocity.com/apps/codex/#/develop/hooks/action-bar/overview'
      },
      {
        name: 'hookAction',
        description:
          'This hook adds a global action to the page header, which is displayed or enabled under certain conditions via `c8y-action-outlet`.',
        url: 'https://styleguide.cumulocity.com/apps/codex/#/develop/hooks/action/overview'
      },
      {
        name: 'hookBreadcrumb',
        description: 'This hook shows the navigation breadcrumbs in the header bar.',
        url: 'https://styleguide.cumulocity.com/apps/codex/#/develop/hooks/breadcrumbs/overview'
      },
      {
        name: 'hookComponent',
        description: 'This hook adds dynamic components, for example, widgets, to the UI.',
        url: 'https://styleguide.cumulocity.com/apps/codex/#/develop/hooks/dynamic-component/overview'
      },
      {
        name: 'hookDrawer',
        description: 'This hook adds a component to left or right drawer.',
        url: 'https://styleguide.cumulocity.com/apps/codex/#/develop/hooks/drawer/overview'
      },
      {
        name: 'hookNavigator',
        description: 'This hook allows for the registration and display of navigator nodes.',
        url: 'https://styleguide.cumulocity.com/apps/codex/#/develop/hooks/navigator-route/overview'
      },
      {
        name: 'hookRoute',
        description: 'A hook used to add new routes.',
        url: 'https://styleguide.cumulocity.com/apps/codex/#/develop/hooks/navigator-route/overview'
      },
      {
        name: 'hookService',
        description: 'This hook adds services that can be shared between plugins and host app.',
        url: 'https://styleguide.cumulocity.com/apps/codex/#/develop/hooks/service/overview'
      },
      {
        name: 'hookStepper',
        description: 'This hook adds a step into an existing stepper.',
        url: 'https://styleguide.cumulocity.com/apps/codex/#/develop/hooks/stepper/overview'
      },
      {
        name: 'hookTab',
        description: 'This hook allows you to show tabs on certain conditions.',
        url: 'https://styleguide.cumulocity.com/apps/codex/#/develop/hooks/tabs/overview'
      },
      {
        name: 'hookUserMenu',
        description: 'Add user menu to the right drawer.',
        url: 'https://styleguide.cumulocity.com/apps/codex/#/develop/hooks/user-menu/overview'
      },
      {
        name: 'hookVersion',
        description: 'Add versions to the right drawer.',
        url: 'https://styleguide.cumulocity.com/apps/codex/#/develop/hooks/versions/overview'
      },
      {
        name: 'hookWidget',
        description: 'This hook adds widgets to the UI.',
        url: 'https://styleguide.cumulocity.com/apps/codex/#/develop/hooks/dynamic-widget-component/overview'
      },
      {
        name: 'hookWizard',
        description: 'This hook adds an entry into an existing wizard.',
        url: 'https://styleguide.cumulocity.com/apps/codex/#/develop/hooks/wizard/overview'
      }
      // TODO: Uncomment when the codex entry is available
      // {
      //   name: 'hookWidgetConfig',
      //   description:
      //     'This hook adds sections to the widget configuration view, like: "Time context".',
      //   url: 'https://styleguide.cumulocity.com/apps/codex/#/develop/hooks/widget-config/overview'
      // }
    ];
  }
}
