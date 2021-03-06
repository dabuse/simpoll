'use strict';

angular.module('dapoll.pages', [
  'dapoll.pages.controllers',
  'dapoll.pages.directives',
  'dapoll.pages.services',
  'geolocation',
  'ngResource',
  'ui.router.compat'
]);

angular.module('dapoll.pages')
  .config(function ($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'pages/templates/home.tpl.html',
        controller: 'HomeCtrl',
        data: {
          bodyId: 'home'
        }
      })

      .state('polls', {
        url: '/polls',
        templateUrl: 'pages/templates/list.tpl.html',
        controller: 'PollsCtrl',
        data: {
          bodyId: 'polls'
        }
      })

      .state('poll', {
        url: '/polls/:id',
        templateUrl: 'pages/templates/poll.tpl.html',
        controller: 'PollVotingCtrl',
        data: {
          bodyId: 'poll'
        }
      })

      .state('results', {
        url: '/polls/:id/results',
        templateUrl: 'pages/templates/results.tpl.html',
        controller: 'PollResultsCtrl',
        data: {
          bodyId: 'poll',
          // bodyClasses: ['results']
        }
      })

      // .state('poll.page', {
      //   url: '/:page',
      //   templateUrl: 'pages/templates/poll.tpl.html',
      //   controller: 'PollVotingCtrl',
      //   data: {
      //     bodyId: 'poll'
      //   }
      // })           

      .state('admin', {
        abstract: true,
        url: '/admin',
        template: '<ui-view />'
      })

      .state('admin.polls', {
        url: '/polls',
        templateUrl: 'pages/templates/list.tpl.html',
        controller: 'PollsCtrl',
        data: {
          bodyId: 'polls'
        }
      })

      .state('admin.create', {
        url: '/polls/create',
        templateUrl: 'pages/templates/create.tpl.html',
        controller: 'PollCreateCtrl',
        data: {
          bodyId: 'create'
        }
      })

      .state('admin.poll', {
        url: '/polls/:id',
        templateUrl: 'pages/templates/edit.tpl.html',
        controller: 'PollCtrl',
        data: {
          bodyId: 'edit'
        }
      });
  });

angular.module('dapoll.pages.controllers', []);
angular.module('dapoll.pages.directives', []);
angular.module('dapoll.pages.services', []);