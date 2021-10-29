Package.describe({
  name: 'tmeasday:check-npm-versions',
  version: '0.3.3',
  summary: 'Check that required npm packages are installed at the app level',
  git: 'https://github.com/tmeasday/check-npm-versions.git',
  documentation: 'README.md',
});

Npm.depends({ semver: '6.3.0' });

Package.onUse(function(api) {
  api.versionsFrom('2.5');
  api.use('ecmascript');
  api.mainModule('check-npm-versions.js');
});
