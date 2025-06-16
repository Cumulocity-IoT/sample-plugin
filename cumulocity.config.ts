import type { ConfigurationOptions } from '@c8y/devkit';
import { author, description, license, name, version } from './package.json';

export default {
  runTime: {
    author,
    description,
    version,
    name,
    contentSecurityPolicy:
      "base-uri 'none'; default-src 'self' 'unsafe-inline' http: https: ws: wss:; connect-src 'self' http: https: ws: wss:;  script-src 'self' *.bugherd.com *.twitter.com *.twimg.com *.aptrinsic.com 'unsafe-inline' 'unsafe-eval' data:; style-src * 'unsafe-inline' blob:; img-src * data: blob:; font-src * data:; frame-src *; worker-src 'self' blob:;",
    dynamicOptionsUrl: true,
    remotes: {
      [name]: ['samplePluginWidgetProviders']
    },
    package: 'plugin',
    isPackage: true,
    noAppSwitcher: true,
    license,
    exports: [
      {
        name: 'Example sample plugin widget',
        module: 'samplePluginWidgetProviders',
        path: './src/app/index.ts',
        readmePath: './src/app/README.md',
        description: 'Adds a custom widget to the shell application'
      },
      {
        name: 'Example sample plugin view',
        module: 'samplePluginViewProviders',
        path: './src/app/index.ts',
        readmePath: './src/app/README.md',
        description: 'Adds a custom navigator node to the shell application'
      }
    ]
  },
  buildTime: {
    federation: [
      '@angular/animations',
      '@angular/cdk',
      '@angular/common',
      '@angular/compiler',
      '@angular/core',
      '@angular/forms',
      '@angular/platform-browser',
      '@angular/platform-browser-dynamic',
      '@angular/router',
      '@angular/upgrade',
      '@c8y/client',
      '@c8y/ngx-components',
      'ngx-bootstrap',
      '@ngx-translate/core',
      '@ngx-formly/core'
    ]
  }
} as const satisfies ConfigurationOptions;
