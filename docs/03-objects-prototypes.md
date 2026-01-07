### Table of Contents

| No. | Questions                                                                                                                                                         |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 91  | [What is the difference between native, host and user objects](#what-is-the-difference-between-native-host-and-user-objects)                                     |
| 92  | [What are the tools or techniques used for debugging JavaScript code](#what-are-the-tools-or-techniques-used-for-debugging-javascript-code)                       |
| 93  | [What are the pros and cons of promises over callbacks](#what-are-the-pros-and-cons-of-promises-over-callbacks)                                                   |
| 94  | [What is the difference between an attribute and a property](#what-is-the-difference-between-an-attribute-and-a-property)                                         |
| 95  | [What is same-origin policy](#what-is-same-origin-policy)                                                                                                         |
| 96  | [What is the purpose of void 0](#what-is-the-purpose-of-void-0)                                                                                                   |
| 97  | [Is JavaScript a compiled or interpreted language](#is-javascript-a-compiled-or-interpreted-language)                                                             |
| 98  | [Is JavaScript a case-sensitive language](#is-javascript-a-case-sensitive-language)                                                                               |
| 99  | [Is there any relation between Java and JavaScript](#is-there-any-relation-between-java-and-javascript)                                                           |
| 100 | [What are events](#what-are-events)                                                                                                                               |
| 101 | [Who created javascript](#who-created-javascript)                                                                                                                 |
| 102 | [What is the use of preventDefault method](#what-is-the-use-of-preventdefault-method)                                                                             |
| 103 | [What is the use of stopPropagation method](#what-is-the-use-of-stoppropagation-method)                                                                           |
| 104 | [What are the steps involved in return false usage](#what-are-the-steps-involved-in-return-false-usage)                                                                       |
| 105 | [What is BOM](#what-is-bom)                                                                                                                                       |
| 106 | [What is the use of setTimeout](#what-is-the-use-of-settimeout)                                                                                                   |
| 107 | [What is the use of setInterval](#what-is-the-use-of-setinterval)                                                                                                 |
| 108 | [Why is JavaScript treated as Single threaded](#why-is-javascript-treated-as-single-threaded)                                                                     |
| 109 | [What is an event delegation](#what-is-an-event-delegation)                                                                                                       |
| 110 | [What is ECMAScript](#what-is-ecmascript)                                                                                                                         |
| 111 | [What is JSON](#what-is-json)                                                                                                                                     |
| 112 | [What are the syntax rules of JSON](#what-are-the-syntax-rules-of-json)                                                                                           |
| 113 | [What is the purpose JSON stringify](#what-is-the-purpose-json-stringify)                                                                                         |
| 114 | [How do you parse JSON string](#how-do-you-parse-json-string)                                                                                                     |
| 115 | [Why do you need JSON](#why-do-you-need-json)                                                                                                                     |
| 116 | [What are PWAs](#what-are-pwas)                                                                                                                                  |
| 117 | [What is the purpose of clearTimeout method](#what-is-the-purpose-of-cleartimeout-method)                                                                         |
| 118 | [What is the purpose of clearInterval method](#what-is-the-purpose-of-clearinterval-method)                                                                       |
| 119 | [How do you redirect new page in javascript](#how-do-you-redirect-new-page-in-javascript)                                                                         |
| 120 | [How do you check whether a string contains a substring](#how-do-you-check-whether-a-string-contains-a-substring)                                                 |
| 121 | [How do you validate an email in javascript](#how-do-you-validate-an-email-in-javascript)                                                                         |
| 122 | [How do you get the current url with javascript](#how-do-you-get-the-current-url-with-javascript)                                                                 |
| 123 | [What are the various url properties of location object](#what-are-the-various-url-properties-of-location-object)                                                 |
| 124 | [How do get query string values in javascript](#how-do-get-query-string-values-in-javascript)                                                                     |
| 125 | [How do you check if a key exists in an object](#how-do-you-check-if-a-key-exists-in-an-object)                                                                   |
| 126 | [How do you loop through or enumerate javascript object](#how-do-you-loop-through-or-enumerate-javascript-object)                                                 |
| 127 | [How do you test for an empty object](#how-do-you-test-for-an-empty-object)                                                                                       |
| 128 | [What is an arguments object](#what-is-an-arguments-object)                                                                                                       |
| 129 | [How do you make first letter of the string in an uppercase](#how-do-you-make-first-letter-of-the-string-in-an-uppercase)                                         |
| 130 | [What are the pros and cons of for loop](#what-are-the-pros-and-cons-of-for-loop)                                                                                 |
| 131 | [How do you display the current date in javascript](#how-do-you-display-the-current-date-in-javascript)                                                           |
| 132 | [How do you compare two date objects](#how-do-you-compare-two-date-objects)                                                                                       |
| 133 | [How do you check if a string starts with another string](#how-do-you-check-if-a-string-starts-with-another-string)                                               |
| 134 | [How do you trim a string in javascript](#how-do-you-trim-a-string-in-javascript)                                                                                 |
| 135 | [How do you add a key value pair in javascript](#how-do-you-add-a-key-value-pair-in-javascript)                                                                   |
| 136 | [Is the '!--' notation represents a special operator](#is-the----notation-represents-a-special-operator)                                                           |
| 137 | [How do you assign default values to variables](#how-do-you-assign-default-values-to-variables)                                                                   |
| 138 | [How do you define multiline strings](#how-do-you-define-multiline-strings)                                                                                       |
| 139 | [What is an app shell model](#what-is-an-app-shell-model)                                                                                                         |
| 140 | [Can we define properties for functions](#can-we-define-properties-for-functions)                                                                                 |

91. ### What is the difference between native, host and user objects

    `Native objects` are objects that are part of the JavaScript language defined by the ECMAScript specification. For example, String, Math, RegExp, Object, Function etc core objects defined in the ECMAScript spec.
    `Host objects` are objects provided by the browser or runtime environment (Node). For example, window, XmlHttpRequest, DOM nodes etc are considered as host objects.
    `User objects` are objects defined in the javascript code. For example, User objects created for profile information.

    **[⬆ Back to Top](#table-of-contents)**

92. ### What are the tools or techniques used for debugging JavaScript code

    You can use below tools or techniques for debugging javascript

    1. Chrome Devtools
    2. debugger statement
    3. Good old console.log statement

    **[⬆ Back to Top](#table-of-contents)**

93. ### What are the pros and cons of promises over callbacks

    Below are the list of pros and cons of promises over callbacks,

    **Pros:**

    1. It avoids callback hell which is unreadable
    2. Easy to write sequential asynchronous code with .then()
    3. Easy to write parallel asynchronous code with Promise.all()
    4. Solves some of the common problems of callbacks(call the callback too late, too early, many times and swallow errors/exceptions)

    **Cons:**

    1. It makes little complex code
    2. You need to load a polyfill if ES6 is not supported

    **[⬆ Back to Top](#table-of-contents)**

94. ### What is the difference between an attribute and a property

    Attributes are defined on the HTML markup whereas properties are defined on the DOM. For example, the below HTML element has 2 attributes type and value,

    ```javascript
    <input type="text" value="Name:">
    ```

    You can retrieve the attribute value as below,

    ```javascript
    const input = document.querySelector("input");
    console.log(input.getAttribute("value")); // Good morning
    console.log(input.value); // Good morning
    ```

    And after you change the value of the text field to "Good evening", it becomes like

    ```javascript
    console.log(input.getAttribute("value")); // Good evening
    console.log(input.value); // Good evening
    ```

    **[⬆ Back to Top](#table-of-contents)**

95. ### What is same-origin policy

    The same-origin policy is a policy that prevents JavaScript from making requests across domain boundaries. An origin is defined as a combination of URI scheme, hostname, and port number. If you enable this policy then it prevents a malicious script on one page from obtaining access to sensitive data on another web page using Document Object Model(DOM).

    **[⬆ Back to Top](#table-of-contents)**

96. ### What is the purpose of void 0

    Void(0) is used to prevent the page from refreshing. This will be helpful to eliminate the unwanted side-effect, because it will return the undefined primitive value. It is commonly used for HTML documents that use href="JavaScript:Void(0);" within an `<a>` element. i.e, when you click a link, the browser loads a new page or refreshes the same page. But this behavior will be prevented using this expression.
    For example, the below link notify the message without reloading the page

    ```javascript
    <a href="JavaScript:void(0);" onclick="alert('Well done!')">
      Click Me!
    </a>
    ```

    **[⬆ Back to Top](#table-of-contents)**

97. ### Is JavaScript a compiled or interpreted language

    JavaScript is an interpreted language, not a compiled language. An interpreter in the browser reads over the JavaScript code, interprets each line, and runs it. Nowadays modern browsers use a technology known as Just-In-Time (JIT) compilation, which compiles JavaScript to executable bytecode just as it is about to run.

    **[⬆ Back to Top](#table-of-contents)**

98. ### Is JavaScript a case-sensitive language

    Yes, JavaScript is a case sensitive language. The language keywords, variables, function & object names, and any other identifiers must always be typed with a consistent capitalization of letters.

    **[⬆ Back to Top](#table-of-contents)**

99. ### Is there any relation between Java and JavaScript

    No, they are entirely two different programming languages and have nothing to do with each other. But both of them are Object Oriented Programming languages and like many other languages, they follow similar syntax for basic features(if, else, for, switch, break, continue etc).

    **[⬆ Back to Top](#table-of-contents)**

100. ### What are events

     Events are "things" that happen to HTML elements. When JavaScript is used in HTML pages, JavaScript can `react` on these events. Some of the examples of HTML events are,

     1. Web page has finished loading
     2. Input field was changed
     3. Button was clicked

     Let's describe the behavior of click event for button element,

     ```javascript
     <!doctype html>
     <html>
      <head>
        <script>
          function greeting() {
            alert('Hello! Good morning');
          }
        </script>
      </head>
      <body>
        <button type="button" onclick="greeting()">Click me</button>
      </body>
     </html>
     ```

     **[⬆ Back to Top](#table-of-contents)**

101. ### Who created javascript

     JavaScript was created by Brendan Eich in 1995 during his time at Netscape Communications. Initially it was developed under the name `Mocha`, but later the language was officially called `LiveScript` when it first shipped in beta releases of Netscape.

     **[⬆ Back to Top](#table-of-contents)**

102. ### What is the use of preventDefault method

     The preventDefault() method cancels the event if it is cancelable, meaning that the default action or behaviour that belongs to the event will not occur. For example, prevent form submission when clicking on submit button and prevent opening the page URL when clicking on hyperlink are some common use cases.

     ```javascript
     document
       .getElementById("link")
       .addEventListener("click", function (event) {
         event.preventDefault();
       });
     ```

     **Note:** Remember that not all events are cancelable.

     **[⬆ Back to Top](#table-of-contents)**

103. ### What is the use of stopPropagation method

     The stopPropagation method is used to stop the event from bubbling up the event chain. For example, the below nested divs with stopPropagation method prevents default event propagation when clicking on nested div(Div1)

     ```javascript
     <p>Click DIV1 Element</p>
     <div onclick="secondFunc()">DIV 2
       <div onclick="firstFunc(event)">DIV 1</div>
     </div>

     <script>
     function firstFunc(event) {
       alert("DIV 1");
       event.stopPropagation();
     }

     function secondFunc() {
       alert("DIV 2");
     }
     </script>
     ```

     **[⬆ Back to Top](#table-of-contents)**

104. ### What are the steps involved in return false usage

     The return false statement in event handlers performs the below steps,

     1. First it stops the browser's default action or behaviour.
     2. It prevents the event from propagating the DOM
     3. Stops callback execution and returns immediately when called.

     **[⬆ Back to Top](#table-of-contents)**

105. ### What is BOM

     The Browser Object Model (BOM) allows JavaScript to "talk to" the browser. It consists of the objects navigator, history, screen, location and document which are children of the window. The Browser Object Model is not standardized and can change based on different browsers.

     ![Screenshot](images/bom.png)

     **[⬆ Back to Top](#table-of-contents)**

106. ### What is the use of setTimeout

     The setTimeout() method is used to call a function or evaluate an expression after a specified number of milliseconds. For example, let's log a message after 2 seconds using setTimeout method,

     ```javascript
     setTimeout(function () {
       console.log("Good morning");
     }, 2000);
     ```

     **[⬆ Back to Top](#table-of-contents)**

107. ### What is the use of setInterval

     The setInterval() method is used to call a function or evaluate an expression at specified intervals (in milliseconds). For example, let's log a message after 2 seconds using setInterval method,

     ```javascript
     setInterval(function () {
       console.log("Good morning");
     }, 2000);
     ```

     **[⬆ Back to Top](#table-of-contents)**

108. ### Why is JavaScript treated as Single threaded

     JavaScript is a single-threaded language. Because the language specification does not allow the programmer to write code so that the interpreter can run parts of it in parallel in multiple threads or processes. Whereas languages like java, go, C++ can make multi-threaded and multi-process programs.

     **[⬆ Back to Top](#table-of-contents)**

109. ### What is an event delegation

     Event delegation is a technique for listening to events where you delegate a parent element as the listener for all of the events that happen inside it.

     For example, if you wanted to detect field changes in inside a specific form, you can use event delegation technique,

     ```javascript
     var form = document.querySelector("#registration-form");

     // Listen for changes to fields inside the form
     form.addEventListener(
       "input",
       function (event) {
         // Log the field that was changed
         console.log(event.target);
       },
       false
     );
     ```

     **[⬆ Back to Top](#table-of-contents)**

110. ### What is ECMAScript

     ECMAScript is the scripting language that forms the basis of JavaScript. ECMAScript standardized by the ECMA International standards organization in the ECMA-262 and ECMA-402 specifications. The first edition of ECMAScript was released in 1997.

     **[⬆ Back to Top](#table-of-contents)**

111. ### What is JSON

     JSON (JavaScript Object Notation) is a lightweight format that is used for data interchanging. It is based on a subset of JavaScript language in the way objects are built in JavaScript.

     **[⬆ Back to Top](#table-of-contents)**

112. ### What are the syntax rules of JSON

     Below are the list of syntax rules of JSON

     1. The data is in name/value pairs
     2. The data is separated by commas
     3. Curly braces hold objects
     4. Square brackets hold arrays

     **[⬆ Back to Top](#table-of-contents)**

113. ### What is the purpose JSON stringify

     When sending data to a web server, the data has to be in a string format. You can achieve this by converting JSON object into a string using stringify() method.

     ```javascript
     var userJSON = { name: "John", age: 31 };
     var userString = JSON.stringify(userJSON);
     console.log(userString); //"{"name":"John","age":31}"
     ```

     **[⬆ Back to Top](#table-of-contents)**

114. ### How do you parse JSON string

     When receiving the data from a web server, the data is always in a string format. But you can convert this string value to a javascript object using parse() method.

     ```javascript
     var userString = '{"name":"John","age":31}';
     var userJSON = JSON.parse(userString);
     console.log(userJSON); // {name: "John", age: 31}
     ```

     **[⬆ Back to Top](#table-of-contents)**

115. ### Why do you need JSON

     When exchanging data between a browser and a server, the data can only be text. Since JSON is text only, it can easily be sent to and from a server, and used as a data format by any programming language.

     **[⬆ Back to Top](#table-of-contents)**

116. ### What are PWAs

     Progressive web applications (PWAs) are a type of mobile app delivered through the web, built using common web technologies including HTML, CSS and JavaScript. These PWAs are deployed to servers, accessible through URLs, and indexed by search engines.

     **[⬆ Back to Top](#table-of-contents)**

117. ### What is the purpose of clearTimeout method

     The clearTimeout() function is used in javascript to clear the timeout which has been set by setTimeout()function before that. i.e, The return value of setTimeout() function is stored in a variable and it’s passed into the clearTimeout() function to clear the timer.

     For example, the below setTimeout method is used to display the message after 3 seconds. This timeout can be cleared by the clearTimeout() method.

     ```javascript
     <script>
     var msg;
     function greeting() {
        alert('Good morning');
     }
     function start() {
       msg =setTimeout(greeting, 3000);

     }

     function stop() {
         clearTimeout(msg);
     }
     </script>
     ```

     **[⬆ Back to Top](#table-of-contents)**

118. ### What is the purpose of clearInterval method

     The clearInterval() function is used in javascript to clear the interval which has been set by setInterval() function. i.e, The return value returned by setInterval() function is stored in a variable and it’s passed into the clearInterval() function to clear the interval.

     For example, the below setInterval method is used to display the message for every 3 seconds. This interval can be cleared by the clearInterval() method.

     ```javascript
     <script>
     var msg;
     function greeting() {
        alert('Good morning');
     }
     function start() {
       msg = setInterval(greeting, 3000);

     }

     function stop() {
         clearInterval(msg);
     }
     </script>
     ```

     **[⬆ Back to Top](#table-of-contents)**

119. ### How do you redirect new page in javascript

     In vanilla javascript, you can redirect to a new page using the `location` property of window object. The syntax would be as follows,

     ```javascript
     function redirect() {
       window.location.href = "newPage.html";
     }
     ```

     **[⬆ Back to Top](#table-of-contents)**

120. ### How do you check whether a string contains a substring

     There are 3 possible ways to check whether a string contains a substring or not,

     1. **Using includes:** ES6 provided `String.prototype.includes` method to test a string contains a substring

     ```javascript
     var mainString = "hello",
       subString = "hell";
     mainString.includes(subString);
     ```

     1. **Using indexOf:** In an ES5 or older environment, you can use `String.prototype.indexOf` which returns the index of a substring. If the index value is not equal to -1 then it means the substring exists in the main string.

     ```javascript
     var mainString = "hello",
       subString = "hell";
     mainString.indexOf(subString) !== -1;
     ```

     1. **Using RegEx:** The advanced solution is using Regular expression's test method(`RegExp.test`), which allows for testing for against regular expressions

     ```javascript
     var mainString = "hello",
       regex = /hell/;
     regex.test(mainString);
     ```

     **[⬆ Back to Top](#table-of-contents)**

121. ### How do you validate an email in javascript

     You can validate an email in javascript using regular expressions. It is recommended to do validations on the server side instead of the client side. Because the javascript can be disabled on the client side.

     ```javascript
     function validateEmail(email) {
       var re =
         /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       return re.test(String(email).toLowerCase());
     }
     ```

     **[⬆ Back to Top](#table-of-contents)**

     The above regular expression accepts unicode characters.

122. ### How do you get the current url with javascript

     You can use `window.location.href` expression to get the current url path and you can use the same expression for updating the URL too. You can also use `document.URL` for read-only purposes but this solution has issues in FF.

     ```javascript
     console.log("location.href", window.location.href); // Returns full URL
     ```

     **[⬆ Back to Top](#table-of-contents)**

123. ### What are the various url properties of location object

     The below `Location` object properties can be used to access URL components of the page,

     1. href - The entire URL
     2. protocol - The protocol of the URL
     3. host - The hostname and port of the URL
     4. hostname - The hostname of the URL
     5. port - The port number in the URL
     6. pathname - The path name of the URL
     7. search - The query portion of the URL
     8. hash - The anchor portion of the URL

     **[⬆ Back to Top](#table-of-contents)**

124. ### How do get query string values in javascript

     You can use URLSearchParams to get query string values in javascript. Let's see an example to get the client code value from URL query string,

     ```javascript
     const urlParams = new URLSearchParams(window.location.search);
     const clientCode = urlParams.get("clientCode");
     ```

     **[⬆ Back to Top](#table-of-contents)**

125. ### How do you check if a key exists in an object

     You can check whether a key exists in an object or not using three approaches,

     1. **Using in operator:** You can use the in operator whether a key exists in an object or not

     ```javascript
     "key" in obj;
     ```

     and If you want to check if a key doesn't exist, remember to use parenthesis,

     ```javascript
     !("key" in obj);
     ```

     1. **Using hasOwnProperty method:** You can use `hasOwnProperty` to particularly test for properties of the object instance (and not inherited properties)

     ```javascript
     obj.hasOwnProperty("key"); // true
     ```

     1. **Using undefined comparison:** If you access a non-existing property from an object, the result is undefined. Let’s compare the properties against undefined to determine the existence of the property.

     ```javascript
     const user = {
       name: "John",
     };

     console.log(user.name !== undefined); // true
     console.log(user.nickName !== undefined); // false
     ```

     **[⬆ Back to Top](#table-of-contents)**

126. ### How do you loop through or enumerate javascript object

     You can use the `for-in` loop to loop through javascript object. You can also make sure that the key you get is an actual property of an object, and doesn't come from the prototype using `hasOwnProperty` method.

     ```javascript
     var object = {
       k1: "value1",
       k2: "value2",
       k3: "value3",
     };

     for (var key in object) {
       if (object.hasOwnProperty(key)) {
         console.log(key + " -> " + object[key]); // k1 -> value1 ...
       }
     }
     ```

     **[⬆ Back to Top](#table-of-contents)**

127. ### How do you test for an empty object

     There are different solutions based on ECMAScript versions

     1. **Using Object entries(ECMA 7+):** You can use object entries length along with constructor type.

     ```javascript
     Object.entries(obj).length === 0 && obj.constructor === Object; // Since date object length is 0, you need to check constructor check as well
     ```

     1. **Using Object keys(ECMA 5+):** You can use object keys length along with constructor type.

     ```javascript
     Object.keys(obj).length === 0 && obj.constructor === Object; // Since date object length is 0, you need to check constructor check as well
     ```

     1. **Using for-in with hasOwnProperty(Pre-ECMA 5):** You can use a for-in loop along with hasOwnProperty.

     ```javascript
     function isEmpty(obj) {
       for (var prop in obj) {
         if (obj.hasOwnProperty(prop)) {
           return false;
         }
       }

       return JSON.stringify(obj) === JSON.stringify({});
     }
     ```

     **[⬆ Back to Top](#table-of-contents)**

128. ### What is an arguments object

     The arguments object is an Array-like object accessible inside functions that contains the values of the arguments passed to that function. For example, let's see how to use arguments object inside sum function,

     ```javascript
     function sum() {
       var total = 0;
       for (var i = 0, len = arguments.length; i < len; ++i) {
         total += arguments[i];
       }
       return total;
     }

     sum(1, 2, 3); // returns 6
     ```

     **Note:** You can't apply array methods on arguments object. But you can convert into a regular array as below.

     ```javascript
     var argsArray = Array.prototype.slice.call(arguments);
     ```

     **[⬆ Back to Top](#table-of-contents)**

129. ### How do you make first letter of the string in an uppercase

     You can create a function which uses a chain of string methods such as charAt, toUpperCase and slice methods to generate a string with the first letter in uppercase.

     ```javascript
     function capitalizeFirstLetter(string) {
       return string.charAt(0).toUpperCase() + string.slice(1);
     }
     ```

     **[⬆ Back to Top](#table-of-contents)**

130. ### What are the pros and cons of for loop

     The for-loop is a commonly used iteration syntax in javascript. It has both pros and cons

     #### Pros

     1. Works on every environment
     2. You can use break and continue flow control statements

     #### Cons

     1. Too verbose
     2. Imperative
     3. You might face one-by-off errors

     **[⬆ Back to Top](#table-of-contents)**

131. ### How do you display the current date in javascript

     You can use `new Date()` to generate a new Date object containing the current date and time. For example, let's display the current date in mm/dd/yyyy

     ```javascript
     var today = new Date();
     var dd = String(today.getDate()).padStart(2, "0");
     var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
     var yyyy = today.getFullYear();

     today = mm + "/" + dd + "/" + yyyy;
     document.write(today);
     ```

     **[⬆ Back to Top](#table-of-contents)**

132. ### How do you compare two date objects

     You need to use date.getTime() method to compare date values instead of comparison operators (==, !=, ===, and !== operators)

     ```javascript
     var d1 = new Date();
     var d2 = new Date(d1);
     console.log(d1.getTime() === d2.getTime()); //True
     console.log(d1 === d2); // False
     ```

     **[⬆ Back to Top](#table-of-contents)**

133. ### How do you check if a string starts with another string

     You can use ECMAScript 6's `String.prototype.startsWith()` method to check if a string starts with another string or not. But it is not yet supported in all browsers. Let's see an example to see this usage,

     ```javascript
     "Good morning".startsWith("Good"); // true
     "Good morning".startsWith("morning"); // false
     ```

     **[⬆ Back to Top](#table-of-contents)**

134. ### How do you trim a string in javascript

     JavaScript provided a trim method on string types to trim any whitespaces present at the beginning or ending of the string.

     ```javascript
     "  Hello World   ".trim(); //Hello World
     ```

     If your browser(<IE9) doesn't support this method then you can use below polyfill.

     ```javascript
     if (!String.prototype.trim) {
       (function () {
         // Make sure we trim BOM and NBSP
         var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
         String.prototype.trim = function () {
           return this.replace(rtrim, "");
         };
       })();
     }
     ```

     **[⬆ Back to Top](#table-of-contents)**

135. ### How do you add a key value pair in javascript

     There are two possible solutions to add new properties to an object. Let's take a simple object to explain these solutions.

     ```javascript
     var object = {
       key1: value1,
       key2: value2,
     };
     ```

     1. **Using dot notation:** This solution is useful when you know the name of the property

     ```javascript
     object.key3 = "value3";
     ```

     1. **Using square bracket notation:** This solution is useful when the name of the property is dynamically determined.

     ```javascript
     obj["key3"] = "value3";
     ```

     **[⬆ Back to Top](#table-of-contents)**

136. ### Is the !-- notation represents a special operator

     No,that's not a special operator. But it is a combination of 2 standard operators one after the other,

     1. A logical not (!)
     2. A prefix decrement (--)

     At first, the value decremented by one and then tested to see if it is equal to zero or not for determining the truthy/falsy value.

     **[⬆ Back to Top](#table-of-contents)**

137. ### How do you assign default values to variables

     You can use the logical or operator `||` in an assignment expression to provide a default value. The syntax looks like as below,

     ```javascript
     var a = b || c;
     ```

     As per the above expression, variable 'a 'will get the value of 'c' only if 'b' is falsy (if is null, false, undefined, 0, empty string, or NaN), otherwise 'a' will get the value of 'b'.

     **[⬆ Back to Top](#table-of-contents)**

138. ### How do you define multiline strings

     You can define multiline string literals using the '\\' character followed by line terminator.

     ```javascript
     var str =
       "This is a \
     very lengthy \
     sentence!";
     ```

     But if you have a space after the '\\' character, the code will look exactly the same, but it will raise a SyntaxError.

     **[⬆ Back to Top](#table-of-contents)**

139. ### What is an app shell model

     An application shell (or app shell) architecture is one way to build a Progressive Web App that reliably and instantly loads on your users' screens, similar to what you see in native applications. It is useful for getting some initial HTML to the screen fast without a network.

     **[⬆ Back to Top](#table-of-contents)**

140. ### Can we define properties for functions

     Yes, We can define properties for functions because functions are also objects.

     ```javascript
     fn = function (x) {
       //Function code goes here
     };

     fn.name = "John";

     fn.profile = function (y) {
       //Profile code goes here
     };
     ```

     **[⬆ Back to Top](#table-of-contents)**