FlowRouter.route( '/login', {
    name: 'login',
    action: function() {
      
      BlazeLayout.render('login');
      console.log("testRoute")
    }
  });