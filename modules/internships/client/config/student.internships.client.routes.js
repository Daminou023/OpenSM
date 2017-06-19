(function () {
  'use strict';

  angular
    .module('internships.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider

    .state('student.manage.internships', {
      abstract: true,
      url: '/internships',
      template: '<ui-view/>'
    })

    .state('student.manage.internships.list', {
      url: '',
      templateUrl: 'modules/internships/client/views/list-internships-student.client.view.html',
      controller: 'InternshipsStudentListController',
      controllerAs: 'vm',
      data: {
        pageTitle: 'My Internships'
      },
      resolve: {
        internshipResolve: newInternship
      }
    })

    .state('student.manage.internships.view', {
      url: '/:internshipId',
      templateUrl: 'modules/internships/client/views/view-internship-student.client.view.html',
      controller: 'InternshipsStudentViewController',
      controllerAs: 'vm',
      resolve: {
        internshipResolve: getInternship
      },
      data: {
        pageTitle: 'View internship details'
      }
    })

    .state('student.manage.internships.edit', {
      url: '/:internshipId/edit',
      template: '<ui-view/>'
    })

    .state('student.manage.internships.edit.enterprise', {
      url: '/enterprise',
      templateUrl: 'modules/internships/client/views/form-internship-student-enterprise.client.html',
      controller: 'InternshipsStudentEnterpriseController',
      controllerAs: 'vm',
      resolve: {
        internshipResolve: getInternship
      },
      data: {
        pageTitle: 'Enterprise'
      }
    })

    .state('student.manage.internships.edit.proposition', {
      url: '/proposition',
      templateUrl: 'modules/internships/client/views/form-internship-student-proposition.client.html',
      controller: 'InternshipsStudentPropositionController',
      controllerAs: 'vm',
      resolve: {
        internshipResolve: getInternship
      },
      data: {
        pageTitle: 'Proposition'
      }
    })

    .state('student.manage.internships.edit.journal', {
      url: '/journal',
      templateUrl: 'modules/internships/client/views/form-internship-student-journalEntry.client.html',
      controller: 'InternshipsStudentJournalController',
      controllerAs: 'vm',
      resolve: {
        internshipResolve: getInternship
      },
      data: {
        pageTitle: 'Journal'
      }
    })

    .state('student.manage.internships.edit.firstVisit', {
      url: '/fistVisit',
      templateUrl: 'modules/internships/client/views/form-internship-student-firstVisit.client.html',
      controller: 'InternshipsStudentFirstVisitController',
      controllerAs: 'vm',
      resolve: {
        internshipResolve: getInternship
      },
      data: {
        pageTitle: 'FirstVisit'
      }
    })

    .state('student.manage.internships.edit.oralPresentation', {
      url: '/oralPresentation',
      templateUrl: 'modules/internships/client/views/form-internship-student-oralPresentation.client.html',
      controller: 'InternshipsStudentOralPresentationController',
      controllerAs: 'vm',
      resolve: {
        internshipResolve: getInternship
      },
      data: {
        pageTitle: 'FirstVisit'
      }
    })

    .state('student.manage.internships.edit.intermediateEvaluation', {
      url: '/intermediateEvaluation',
      templateUrl: 'modules/internships/client/views/form-internship-student-intermediateEvaluation.client.html',
      controller: 'InternshipsStudentIntermediateEvaluationController',
      controllerAs: 'vm',
      resolve: {
        internshipResolve: getInternship
      },
      data: {
        pageTitle: 'FirstVisit'
      }
    })

    .state('student.manage.internships.edit.activitiesNote', {
      url: '/activitiesNote',
      templateUrl: 'modules/internships/client/views/form-internship-student-activitiesNote.client.html',
      controller: 'InternshipsStudentActivitiesNoteController',
      controllerAs: 'vm',
      resolve: {
        internshipResolve: getInternship
      },
      data: {
        pageTitle: 'ActivitiesNote'
      }
    })

    .state('student.manage.internships.edit.supervisor', {
      url: '/supervisor',
      templateUrl: 'modules/internships/client/views/form-internship-student-supervisor.client.html',
      controller: 'InternshipsStudentSupervisorController',
      controllerAs: 'vm',
      resolve: {
        internshipResolve: getInternship
      },
      data: {
        pageTitle: 'Supervisor'
      }
    })

    ;
  }

  getInternship.$inject = ['$stateParams', 'InternshipsService'];

  function getInternship($stateParams, InternshipsService) {
    return InternshipsService.get({
      internshipId: $stateParams.internshipId // $stateParams = "prends dans l'url"
    }).$promise;
  }

  newInternship.$inject = ['InternshipsService'];

  function newInternship(InternshipsService) {
    return new InternshipsService();
  }

}());
