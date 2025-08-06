import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderModule, IconDirective, ListDisplaySwitchModule } from '@c8y/ngx-components';
import { CODEX_HOOK_LINKS } from '../sample-plugin.model';

interface HookCard {
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
export class SampleViewComponent implements OnInit {
  readonly CODEX_HOOK_LINKS = CODEX_HOOK_LINKS;
  readonly BASE_URL =
    'https://styleguide.cumulocity.com/apps/codex/#/development-guides/extending-the-platform/hooks/';
  readonly OVERVIEW_SUFFIX = '/overview';
  cards: HookCard[] = [];
  listClass = '';

  ngOnInit(): void {
    this.initializeHookCards();
  }

  private initializeHookCards(): void {
    this.cards = this.getSortedHookCards();
  }

  private getSortedHookCards(): HookCard[] {
    return this.getHookCardsData().sort((a, b) => a.name.localeCompare(b.name));
  }

  private getHookCardsData(): HookCard[] {
    return [
      {
        name: 'hookAction',
        description:
          'This hook adds a global action to the page header, which is displayed or enabled under certain conditions via `c8y-action-outlet`.',
        url: `${this.BASE_URL}action-hook${this.OVERVIEW_SUFFIX}`
      },
      {
        name: 'hookActionBar',
        description:
          'The action bar offers a user-friendly interface to efficiently navigate and manage records. ',
        url: `${this.BASE_URL}action-bar-hook${this.OVERVIEW_SUFFIX}`
      },
      {
        name: 'hookBreadcrumb',
        description: 'This hook shows the navigation breadcrumbs in the header bar.',
        url: `${this.BASE_URL}breadcrumbs-hook${this.OVERVIEW_SUFFIX}`
      },
      {
        name: 'hookComponent',
        description: 'This hook adds dynamic components, for example, widgets, to the UI.',
        url: `${this.BASE_URL}component-hook${this.OVERVIEW_SUFFIX}`
      },
      {
        name: 'hookDocs',
        description:
          'The hook allows you to add links to documentation, help & support, and predefined links in the quick links widget.',
        url: `${this.BASE_URL}docs-hook${this.OVERVIEW_SUFFIX}`
      },
      {
        name: 'hookDrawer',
        description: 'This hook adds a component to left or right drawer.',
        url: `${this.BASE_URL}drawer-hook${this.OVERVIEW_SUFFIX}`
      },
      {
        name: 'hookNavigator',
        description: 'This hook allows for the registration and display of navigator nodes.',
        url: `${this.BASE_URL}navigator-route-hooks${this.OVERVIEW_SUFFIX}`
      },
      {
        name: 'hookPreview',
        description: 'This hook adds preview features which can be toggled for public preview.',
        url: `${this.BASE_URL}preview-features-hook${this.OVERVIEW_SUFFIX}`
      },
      {
        name: 'hookRoute',
        description: 'A hook used to add new routes.',
        url: `${this.BASE_URL}navigator-route-hooks${this.OVERVIEW_SUFFIX}`
      },
      {
        name: 'hookService',
        description: 'This hook adds services that can be shared between plugins and host app.',
        url: `${this.BASE_URL}service-hook${this.OVERVIEW_SUFFIX}`
      },
      {
        name: 'hookStepper',
        description: 'This hook adds a step into an existing stepper.',
        url: `${this.BASE_URL}stepper-hook${this.OVERVIEW_SUFFIX}`
      },
      {
        name: 'hookTab',
        description: 'This hook allows you to show tabs on certain conditions.',
        url: `${this.BASE_URL}tabs-hook${this.OVERVIEW_SUFFIX}`
      },
      {
        name: 'hookUserMenu',
        description: 'Add user menu to the right drawer.',
        url: `${this.BASE_URL}user-menu-hook${this.OVERVIEW_SUFFIX}`
      },
      {
        name: 'hookVersion',
        description: 'Add versions to the right drawer.',
        url: `${this.BASE_URL}versions-hook${this.OVERVIEW_SUFFIX}`
      },
      {
        name: 'hookWidget',
        description: 'This hook adds widgets to the UI.',
        url: `${this.BASE_URL}widget-hook${this.OVERVIEW_SUFFIX}`
      },
      {
        name: 'hookWidgetConfig',
        description:
          'This hook adds sections to the widget configuration view, like: "Time context".',
        url: `${this.BASE_URL}widget-config-hook${this.OVERVIEW_SUFFIX}`
      },
      {
        name: 'hookWizard',
        description: 'This hook adds an entry into an existing wizard.',
        url: `${this.BASE_URL}wizard-hook${this.OVERVIEW_SUFFIX}`
      }
    ];
  }
}
