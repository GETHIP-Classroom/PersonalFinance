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