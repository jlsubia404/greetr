// this ';' is for ending previous lines os js that could come from another js files
;(function(global, $){
    
    var Greetr = function(firstName, lastName, language){
        
        return new Greetr.init(firstName, lastName, language);
    }
    
    var supportedLngs = ['en', 'es'];
    
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };
    
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };
    
    var logMessages = {
        en: 'Logged in',
        es: 'Inicio Sesion'
    };
    
    Greetr.prototype = {
        fullName: function(){
            return this.firstName + ' ' + this.lastName;
        },
        
        validate: function() {
             if(supportedLngs.indexOf(this.language) === -1){
                throw 'Invalid language';   
             }
        },
        
        greeting: function(){
            return greetings[this.language] + ' ' + this.firstName + '!';
        },
        
        formalGreeting: function(){
            return formalGreetings[this.language] + ', ' + this.fullName();
        },
        
        greet: function(formal){
            
            var msg;
            
            // if undefined or null it will be coerced to 'false'
            if(formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }
            
            
            if(console){
                console.log(msg);
            }
            //'this' referes to the calling object at execution time
            // makes the methos chainable
            return this;
        },
        
        log: function(){
            if(console){
                console.log(logMessages[this.language] + ': ' + this.fullName())
            }
            
            return this;
        },
        
        setLang: function(lang){
            this.language = lang;
            this.validate();
            
            return this;
        },
        
        HTMLGreeting: function(selector, formal){
            if(!$){
                throw 'jQUery not loaded';
            }
            
            if(!selector){
                throw 'Missing jQuery selector';
            }
            var msg;
            if(formal){
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }
            
            $(selector).html(msg);
            
            return this;
        }
        
        
    };
    
    // the actual object is created here, allowig us to 'new' an object without calliing new
    Greetr.init = function (firstName, lastName, language) {
        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
        
        self.validate();
    }
    
    // trick borrowed from jQuery so we don't have to use the 'new' keyword
    Greetr.init.prototype = Greetr.prototype;
    
    // attach our Greetr to the global object, and provide a shorthand '$G'
    if(global) {
       global.Greetr = global.G$ = Greetr;
        
    }
}(window, jQuery));
