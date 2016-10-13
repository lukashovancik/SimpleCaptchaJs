
    var SimpleCaptcha = function(textCaptchaSelector,inputCaptchaSelector,buttonGenerateSelector,formSelector){
       
        var _captcha;
        var _alertMessage;
    
        var buttonGenerateElement;
        var inputCaptchaElement;
        var textCaptchaElement;
        var formElement;
        
        
        var init = function ()
        {
            _alertMessage      =    false;
            textCaptchaElement =    $(textCaptchaSelector);
            inputCaptchaElement =   $(inputCaptchaSelector);
            buttonGenerateElement = $(buttonGenerateSelector);
            formElement           = $(formSelector);
    
            if (textCaptchaElement && buttonGenerateElement && formElement && inputCaptchaElement) {
                
                textCaptchaElement.text( generateCaptcha );
                buttonGenerateElement.click( onClickGenarate );
                formElement.submit( onSubmitForm );
            }
        };
        
        //custom...
        var generateCaptcha = function()
        {
            var alpha = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
            var i;
            for (i=0;i<6;i++){
                var a = alpha[Math.floor(Math.random() * alpha.length)];
                var b = alpha[Math.floor(Math.random() * alpha.length)];
                var c = alpha[Math.floor(Math.random() * alpha.length)];
                var d = alpha[Math.floor(Math.random() * alpha.length)];
                var e = alpha[Math.floor(Math.random() * alpha.length)];
                var f = alpha[Math.floor(Math.random() * alpha.length)];
                var g = alpha[Math.floor(Math.random() * alpha.length)];
            }
            _captcha = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' '+ f + ' ' + g;
            
            return _captcha;
        };
    
        var validCaptcha = function (textCaptcha,inputCaptcha)
        {
            var string1 = removeSpaces(textCaptcha);
            var string2 = removeSpaces(inputCaptcha);
            if (string1 == string2){
                return true;
            }
            else{
                return false;
            }
        };
    
        var removeSpaces = function(string){
            return string.split(' ').join('');
        }
        
        //...custom
    
        //event...
        var onCreate = function ()
        {
             $(document).ready( onDocumentReady );
        }

        var onDocumentReady = function()
        {
            init();
        };
        
        var onClickGenarate = function ()
        {
            _captcha = generateCaptcha();
            textCaptchaElement.text(_captcha);
        }
        
        var onSubmitForm = function ()
        {
            var captchaInput;
            var checkValid;
            
            captchaInput = inputCaptchaElement.val();
            
            checkValid   = validCaptcha(_captcha,captchaInput);
            
            if(!checkValid){
                _captcha = generateCaptcha();
                textCaptchaElement.text(_captcha);
                if(!_alertMessage){
                    inputCaptchaElement.before("<p class='alert alert-danger'> Byl zadaný špatný kód</p>");
                }
                
                _alertMessage = true;
                
                return false;
            }
            
            return true;
            
        }
    
        onCreate();
    
        //...event
    };