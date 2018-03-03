FlowRouter.route( '/login', {
    name: 'login',
    action: function() {
      
      BlazeLayout.render('login');
      console.log("testRoute")
    }
  });

  FlowRouter.route( '/', {
    name: 'main',
    action: function() {
      
      BlazeLayout.render('main');
      console.log("testRoute")
    }
  });

  FlowRouter.route( '/signUp', {
    name: 'signUp',
    action: function() {
      
      BlazeLayout.render('signUp');
      console.log("testRoute")
    }
  });

  FlowRouter.route('/budgetTemplate', {
    name: 'budgetTemplate',
    action: function() {

      BlazeLayout.render('budgetTemplate');
      console.log("testRoute")
    }
  });
  
  FlowRouter.route('/infoWF', {
    name: 'infoWF',
    action: function() {

      BlazeLayout.render('infoWF');
      console.log("testRoute")
    }
  });

  FlowRouter.route('/checkWriting', {
    name: 'checkWriting',
    action: function() {

      BlazeLayout.render('checkWriting');
      console.log("testRoute")
    }
  });

  FlowRouter.route('/savingsAdvice', {
    name: 'savingsAdvice',
    action: function() {

      BlazeLayout.render('savingsAdvice');
      console.log("testRoute")
    }
  });

  FlowRouter.route('/savingsCalculator', {
    name: 'savingsCalc',
    action: function() {

      BlazeLayout.render('savingsCalc');
      console.log("testRoute")
    }
  });