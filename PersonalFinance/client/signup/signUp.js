import { Accounts } from 'meteor/accounts-base'

Template.signUp.events ({
    'submit #signUp-form': function(event) {
        event.preventDefault();
        
        console.log("test function");

        console.log(event.target.fullname.value);
        Accounts.createUser({
            username: event.target.fullname.value,
            email: event.target.email.value,
            password: event.target.password.value

        }, function(){
            FlowRouter.go('/')
        });

    }
});