### Table of Contents

| No. | Questions                                                                                                                                                         |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |

| 351 | [What is a thunk function](#what-is-a-thunk-function)                                                                                                             |
| 352 | [What are asynchronous thunks](#what-are-asynchronous-thunks)                                                                                                     |
| 353 | [What is the output of below function calls](#what-is-the-output-of-below-function-calls)                                                                         |
| 354 | [How to remove all line breaks from a string](#how-to-remove-all-line-breaks-from-a-string)                                                                       |
| 355 | [What is the difference between reflow and repaint](#what-is-the-difference-between-reflow-and-repaint)                                                           |
| 356 | [What happens with negating an array](#what-happens-with-negating-an-array)                                                                                       |
| 357 | [What happens if we add two arrays](#what-happens-if-we-add-two-arrays)                                                                                           |
| 358 | [What is the output of prepend additive operator on falsy values](#what-is-the-output-of-prepend-additive-operator-on-falsy-values)                               |
| 359 | [How do you create self string using special characters](#how-do-you-create-self-string-using-special-characters)                                                 |
| 360 | [How do you remove falsy values from an array](#how-do-you-remove-falsy-values-from-an-array)                                                                     |
| 361 | [How do you get unique values of an array](#how-do-you-get-unique-values-of-an-array)                                                                             |
| 362 | [What is destructuring aliases](#what-is-destructuring-aliases)                                                                                                   |
| 363 | [How do you map the array values without using map method](#how-do-you-map-the-array-values-without-using-map-method)                                             |
| 364 | [How do you empty an array](#how-do-you-empty-an-array)                                                                                                           |
| 365 | [How do you rounding numbers to certain decimals](#how-do-you-rounding-numbers-to-certain-decimals)                                                               |
| 366 | [What is the easiest way to convert an array to an object](#what-is-the-easiest-way-to-convert-an-array-to-an-object)                                             |
| 367 | [How do you create an array with some data](#how-do-you-create-an-array-with-some-data)                                                                           |
| 368 | [What are the placeholders from console object](#what-are-the-placeholders-from-console-object)                                                                   |
| 369 | [Is it possible to add CSS to console messages](#is-it-possible-to-add-css-to-console-messages)                                                                   |
| 370 | [What is the purpose of dir method of console object](#what-is-the-purpose-of-dir-method-of-console-object)                                                       |
| 371 | [Is it possible to debug HTML elements in console](#is-it-possible-to-debug-html-elements-in-console)                                                             |
| 372 | [How do you display data in a tabular format using console object](#how-do-you-display-data-in-a-tabular-format-using-console-object)                             |
| 373 | [How do you verify that an argument is a Number or not](#how-do-you-verify-that-an-argument-is-a-number-or-not)                                                   |
| 374 | [How do you create copy to clipboard button](#how-do-you-create-copy-to-clipboard-button)                                                                         |
| 375 | [What is the shortcut to get timestamp](#what-is-the-shortcut-to-get-timestamp)                                                                                   |
| 376 | [How do you flattening multi dimensional arrays](#how-do-you-flattening-multi-dimensional-arrays)                                                                 |
| 377 | [What is the easiest multi condition checking](#what-is-the-easiest-multi-condition-checking)                                                                     |
| 378 | [How do you capture browser back button](#how-do-you-capture-browser-back-button)                                                                                 |
| 379 | [How do you disable right click in the web page](#how-do-you-disable-right-click-in-the-web-page)                                                                 |
| 380 | [What are wrapper objects](#what-are-wrapper-objects)                                                                                                             |
| 381 | [What is AJAX](#what-is-ajax)                                                                                                                                     |
| 382 | [What are the different ways to deal with Asynchronous Code](#what-are-the-different-ways-to-deal-with-asynchronous-code)                                         |
| 383 | [How to cancel a fetch request](#how-to-cancel-a-fetch-request)                                                                                                   |
| 384 | [What is web speech API](#what-is-web-speech-api)                                                                                                                 |
| 385 | [What is minimum timeout throttling](#what-is-minimum-timeout-throttling)                                                                                         |
| 386 | [How do you implement zero timeout in modern browsers](#how-do-you-implement-zero-timeout-in-modern-browsers)                                                     |
| 387 | [What are tasks in event loop](#what-are-tasks-in-event-loop)                                                                                                     |
| 388 | [What is microtask](#what-is-microtask)                                                                                                                       |
| 389 | [What are different event loops](#what-are-different-event-loops)                                                                                                 |
| 390 | [What is the purpose of queueMicrotask](#what-is-the-purpose-of-queuemicrotask)                                                                                   |
| 391 | [How do you use javascript libraries in typescript file](#how-do-you-use-javascript-libraries-in-typescript-file)                                                 |
| 392 | [What are the differences between promises and observables](#what-are-the-differences-between-promises-and-observables)                                           |
| 393 | [What is heap](#what-is-heap)                                                                                                                                     |
| 394 | [What is an event table](#what-is-an-event-table)                                                                                                                 |
| 395 | [What is a microTask queue](#what-is-a-microtask-queue)                                                                                                           |
| 396 | [What is the difference between shim and polyfill](#what-is-the-difference-between-shim-and-polyfill)                                                             |
| 397 | [How do you detect primitive or non primitive value type](#how-do-you-detect-primitive-or-non-primitive-value-type)                                               |
| 398 | [What is babel](#what-is-babel)                                                                                                                                   |
| 399 | [Is Node.js completely single threaded](#is-nodejs-completely-single-threaded)                                                                                   |
| 400 | [What are the common use cases of observables](#what-are-the-common-use-cases-of-observables)                                                                     |

351. ### What is a thunk function

     A thunk is just a function which delays the evaluation of the value. It doesn’t take any arguments but gives the value whenever you invoke the thunk. i.e, It is used not to execute now but it will be sometime in the future. Let's take a synchronous example,

     ```javascript
     const add = (x, y) => x + y;

     const thunk = () => add(2, 3);

     thunk(); // 5
     ```

     **[⬆ Back to Top](#table-of-contents)**

352. ### What are asynchronous thunks

     The asynchronous thunks are useful to make network requests. Let's see an example of network requests,

     ```javascript
     function fetchData(fn) {
       fetch("https://jsonplaceholder.typicode.com/todos/1")
         .then((response) => response.json())
         .then((json) => fn(json));
     }

     const asyncThunk = function () {
       return fetchData(function getData(data) {
         console.log(data);
       });
     };

     asyncThunk();
     ```

     The `getData` function won't be called immediately but it will be invoked only when the data is available from API endpoint. The setTimeout function is also used to make our code asynchronous. The best real time example is redux state management library which uses the asynchronous thunks to delay the actions to dispatch.

     **[⬆ Back to Top](#table-of-contents)**

353. ### What is the output of below function calls

     **Code snippet:**

     ```javascript
     const circle = {
       radius: 20,
       diameter() {
         return this.radius * 2;
       },
       perimeter: () => 2 * Math.PI * this.radius,
     };
     ```
     
     ```javascript
     console.log(circle.diameter());
     console.log(circle.perimeter());
     ```

     **Output:**

     The output is 40 and NaN. Remember that diameter is a regular function, whereas the value of perimeter is an arrow function. The `this` keyword of a regular function(i.e, diameter) refers to the surrounding scope which is a class(i.e, Shape object). Whereas this keyword of perimeter function refers to the surrounding scope which is a window object. Since there is no radius property on window objects it returns an undefined value and the multiple of number value returns NaN value.

     **[⬆ Back to Top](#table-of-contents)**

354. ### How to remove all line breaks from a string

     The easiest approach is using regular expressions to detect and replace newlines in the string. In this case, we use replace function along with string to replace with, which in our case is an empty string.

     ```javascript
     function remove_linebreaks( var message ) {
         return message.replace( /[\r\n]+/gm, "" );
     }
     ```

     In the above expression, g and m are for global and multiline flags.

     **[⬆ Back to Top](#table-of-contents)**

355. ### What is the difference between reflow and repaint

     A _repaint_ occurs when changes are made which affect the visibility of an element, but not its layout. Examples of this include outline, visibility, or background color. A _reflow_ involves changes that affect the layout of a portion of the page (or the whole page). Resizing the browser window, changing the font, content changing (such as user typing text), using JavaScript methods involving computed styles, adding or removing elements from the DOM, and changing an element's classes are a few of the things that can trigger reflow. Reflow of an element causes the subsequent reflow of all child and ancestor elements as well as any elements following it in the DOM.

     **[⬆ Back to Top](#table-of-contents)**

356. ### What happens with negating an array

     Negating an array with `!` character will coerce the array into a boolean. Since Arrays are considered to be truthy So negating it will return `false`.

     ```javascript
     console.log(![]); // false
     ```

     **[⬆ Back to Top](#table-of-contents)**

357. ### What happens if we add two arrays

     If you add two arrays together, it will convert them both to strings and concatenate them. For example, the result of adding arrays would be as below,

     ```javascript
     console.log(["a"] + ["b"]); // "ab"
     console.log([] + []); // ""
     console.log(![] + []); // "false", because ![] returns false.
     ```

     **[⬆ Back to Top](#table-of-contents)**

358. ### What is the output of prepend additive operator on falsy values

     If you prepend the additive(+) operator on falsy values(null, undefined, NaN, false, ""), the falsy value converts to a number value zero. Let's display them on browser console as below,

     ```javascript
     console.log(+null); // 0
     console.log(+undefined); // NaN
     console.log(+false); // 0
     console.log(+NaN); // NaN
     console.log(+""); // 0
     ```

     **[⬆ Back to Top](#table-of-contents)**

359. ### How do you create self string using special characters

     The self string can be formed with the combination of `[]()!+` characters. You need to remember the below conventions to achieve this pattern.

     1. Since Arrays are truthful values, negating the arrays will produce false: ![] === false
     2. As per JavaScript coercion rules, the addition of arrays together will toString them: [] + [] === ""
     3. Prepend an array with + operator will convert an array to false, the negation will make it true and finally converting the result will produce value '1': +(!(+[])) === 1

     By applying the above rules, we can derive below conditions

     ```javascript
     (![] + [] === "false" + !+[]) === 1;
     ```

     Now the character pattern would be created as below,

     ```javascript
           s               e               l               f
      ^^^^^^^^^^^^^   ^^^^^^^^^^^^^   ^^^^^^^^^^^^^   ^^^^^^^^^^^^^

      (![] + [])[3] + (![] + [])[4] + (![] + [])[2] + (![] + [])[0]
      ^^^^^^^^^^^^^   ^^^^^^^^^^^^^   ^^^^^^^^^^^^^   ^^^^^^^^^^^^^
     (![] + [])[+!+[]+!+[]+!+[]] +
     (![] + [])[+!+[]+!+[]+!+[]+!+[]] +
     (![] + [])[+!+[]+!+[]] +
     (![] + [])[+[]]
     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
     (![]+[])[+!+[]+!+[]+!+[]]+(![]+[])[+!+[]+!+[]+!+[]+!+[]]+(![]+[])[+!+[]+!+[]]+(![]+[])[+[]]
     ```

     **[⬆ Back to Top](#table-of-contents)**

360. ### How do you remove falsy values from an array

     You can apply the filter method on the array by passing Boolean as a parameter. This way it removes all falsy values(0, undefined, null, false and "") from the array.

     ```javascript
     const myArray = [false, null, 1, 5, undefined];
     myArray.filter(Boolean); // [1, 5] // is same as myArray.filter(x => x);
     ```

     **[⬆ Back to Top](#table-of-contents)**

361. ### How do you get unique values of an array

     You can get unique values of an array with the combination of `Set` and rest expression/spread(...) syntax.

     ```javascript
     console.log([...new Set([1, 2, 4, 4, 3])]); // [1, 2, 4, 3]
     ```

     **[⬆ Back to Top](#table-of-contents)**

362. ### What is destructuring aliases

     Sometimes you would like to have a destructured variable with a different name than the property name. In that case, you'll use a `: newName` to specify a name for the variable. This process is called destructuring aliases.

     ```javascript
     const obj = { x: 1 };
     // Grabs obj.x as as { otherName }
     const { x: otherName } = obj;
     ```

     **[⬆ Back to Top](#table-of-contents)**

363. ### How do you map the array values without using map method

     You can map the array values without using the `map` method by just using the `from` method of Array. Let's map city names from Countries array,

     ```javascript
     const countries = [
       { name: "India", capital: "Delhi" },
       { name: "US", capital: "Washington" },
       { name: "Russia", capital: "Moscow" },
       { name: "Singapore", capital: "Singapore" },
       { name: "China", capital: "Beijing" },
       { name: "France", capital: "Paris" },
     ];

     const cityNames = Array.from(countries, ({ capital }) => capital);
     console.log(cityNames); // ['Delhi, 'Washington', 'Moscow', 'Singapore', 'Beijing', 'Paris']
     ```

     **[⬆ Back to Top](#table-of-contents)**

364. ### How do you empty an array

     You can empty an array quickly by setting the array length to zero.

     ```javascript
     let cities = ["Singapore", "Delhi", "London"];
     cities.length = 0; // cities becomes []
     ```

     **[⬆ Back to Top](#table-of-contents)**

365. ### How do you rounding numbers to certain decimals

     You can round numbers to a certain number of decimals using `toFixed` method from native javascript.

     ```javascript
     let pie = 3.141592653;
     pie = pie.toFixed(3); // 3.142
     ```

     **[⬆ Back to Top](#table-of-contents)**

366. ### What is the easiest way to convert an array to an object

     You can convert an array to an object with the same data using spread(...) operator.

     ```javascript
     var fruits = ["banana", "apple", "orange", "watermelon"];
     var fruitsObject = { ...fruits };
     console.log(fruitsObject); // {0: "banana", 1: "apple", 2: "orange", 3: "watermelon"}
     ```

     **[⬆ Back to Top](#table-of-contents)**

367. ### How do you create an array with some data

     You can create an array with some data or an array with the same values using `fill` method.

     ```javascript
     var newArray = new Array(5).fill("0");
     console.log(newArray); // ["0", "0", "0", "0", "0"]
     ```

     **[⬆ Back to Top](#table-of-contents)**

368. ### What are the placeholders from console object

     Below are the list of placeholders available from console object,

     1. %o — It takes an object,
     2. %s — It takes a string,
     3. %d — It is used for a decimal or integer
        These placeholders can be represented in the console.log as below

     ```javascript
     const user = { name: "John", id: 1, city: "Delhi" };
     console.log(
       "Hello %s, your details %o are available in the object form",
       "John",
       user
     ); // Hello John, your details {name: "John", id: 1, city: "Delhi"} are available in object
     ```

     **[⬆ Back to Top](#table-of-contents)**

369. ### Is it possible to add CSS to console messages

     Yes, you can apply CSS styles to console messages similar to html text on the web page.

     ```javascript
     console.log(
       "%c The text has blue color, with large font and red background",
       "color: blue; font-size: x-large; background: red"
     );
     ```

     The text will be displayed as below,
     ![Screenshot](images/console-css.png)

     **Note:** All CSS styles can be applied to console messages.

     **[⬆ Back to Top](#table-of-contents)**

370. ### What is the purpose of dir method of console object

     The `console.dir()` is used to display an interactive list of the properties of the specified JavaScript object as JSON.

     ```javascript
     const user = { name: "John", id: 1, city: "Delhi" };
     console.dir(user);
     ```

     The user object displayed in JSON representation
     ![Screenshot](images/console-dir.png)

     **[⬆ Back to Top](#table-of-contents)**

371. ### Is it possible to debug HTML elements in console

     Yes, it is possible to get and debug HTML elements in the console just like inspecting elements.

     ```javascript
     const element = document.getElementsByTagName("body")[0];
     console.log(element);
     ```

     It prints the HTML element in the console,

     ![Screenshot](images/console-html.png)

     **[⬆ Back to Top](#table-of-contents)**

372. ### How do you display data in a tabular format using console object

     The `console.table()` is used to display data in the console in a tabular format to visualize complex arrays or objects.

     ```js
     const users = [
       { name: "John", id: 1, city: "Delhi" },
       { name: "Max", id: 2, city: "London" },
       { name: "Rod", id: 3, city: "Paris" },
     ];
     console.table(users);
     ```

     The data visualized in a table format,

     ![Screenshot](images/console-table.png)
     **Not:** Remember that `console.table()` is not supported in IE.

     **[⬆ Back to Top](#table-of-contents)**

373. ### How do you verify that an argument is a Number or not

     The combination of IsNaN and isFinite methods are used to confirm whether an argument is a number or not.

     ```javascript
     function isNumber(n) {
       return !isNaN(parseFloat(n)) && isFinite(n);
     }
     ```

     **[⬆ Back to Top](#table-of-contents)**

374. ### How do you create copy to clipboard button

     You need to select the content(using .select() method) of the input element and execute the copy command with execCommand (i.e, execCommand('copy')). You can also execute other system commands like cut and paste.

     ```javascript
     document.querySelector("#copy-button").onclick = function () {
       // Select the content
       document.querySelector("#copy-input").select();
       // Copy to the clipboard
       document.execCommand("copy");
     };
     ```

     **[⬆ Back to Top](#table-of-contents)**

375. ### What is the shortcut to get timestamp

     You can use `new Date().getTime()` to get the current timestamp. There is an alternative shortcut to get the value.

     ```javascript
     console.log(+new Date());
     console.log(Date.now());
     ```

     **[⬆ Back to Top](#table-of-contents)**

376. ### How do you flattening multi dimensional arrays

     Flattening bi-dimensional arrays is trivial with Spread operator.

     ```javascript
     const biDimensionalArr = [11, [22, 33], [44, 55], [66, 77], 88, 99];
     const flattenArr = [].concat(...biDimensionalArr); // [11, 22, 33, 44, 55, 66, 77, 88, 99]
     ```

     But you can make it work with multi-dimensional arrays by recursive calls,

     ```javascript
     function flattenMultiArray(arr) {
       const flattened = [].concat(...arr);
       return flattened.some((item) => Array.isArray(item))
         ? flattenMultiArray(flattened)
         : flattened;
     }
     const multiDimensionalArr = [11, [22, 33], [44, [55, 66, [77, [88]], 99]]];
     const flatArr = flattenMultiArray(multiDimensionalArr); // [11, 22, 33, 44, 55, 66, 77, 88, 99]
     ```
     
     Also you can use the `flat` method of Array.
     
     ```javascript
     const arr = [1, [2,3], 4, 5, [6,7]];
     const fllattenArr = arr.flat(); // [1, 2, 3, 4, 5, 6, 7]
     
     // And for multiDemensional arrays
     const multiDimensionalArr = [11, [22, 33], [44, [55, 66, [77, [88]], 99]]];
     const oneStepFlat = multiDimensionalArr.flat(1); // [11, 22, 33, 44, [55, 66, [77, [88]], 99]]
     const towStep = multiDimensionalArr.flat(2); // [11, 22, 33, 44, 55, 66, [77, [88]], 99]
     const fullyFlatArray = multiDimensionalArr.flat(Infinity); // [11, 22, 33, 44, 55, 66, 77, 88, 99]
     ```

     **[⬆ Back to Top](#table-of-contents)**

377. ### What is the easiest multi condition checking

     You can use `indexOf` to compare input with multiple values instead of checking each value as one condition.

     ```javascript
     // Verbose approach
     if (
       input === "first" ||
       input === 1 ||
       input === "second" ||
       input === 2
     ) {
       someFunction();
     }
     // Shortcut
     if (["first", 1, "second", 2].indexOf(input) !== -1) {
       someFunction();
     }
     ```

     **[⬆ Back to Top](#table-of-contents)**

378. ### How do you capture browser back button

     The `window.onbeforeunload` method is used to capture browser back button events. This is helpful to warn users about losing the current data.

     ```javascript
     window.onbeforeunload = function () {
       alert("You work will be lost");
     };
     ```

     **[⬆ Back to Top](#table-of-contents)**

379. ### How do you disable right click in the web page

     The right click on the page can be disabled by returning false from the `oncontextmenu` attribute on the body element.

     ```html
     <body oncontextmenu="return false;"></body>
     ```

     **[⬆ Back to Top](#table-of-contents)**

380. ### What are wrapper objects

     Primitive Values like string,number and boolean don't have properties and methods but they are temporarily converted or coerced to an object(Wrapper object) when you try to perform actions on them. For example, if you apply toUpperCase() method on a primitive string value, it does not throw an error but returns uppercase of the string.

     ```javascript
     let name = "john";

     console.log(name.toUpperCase()); // Behind the scenes treated as console.log(new String(name).toUpperCase());
     ```

     i.e, Every primitive except null and undefined have Wrapper Objects and the list of wrapper objects are String,Number,Boolean,Symbol and BigInt.

     **[⬆ Back to Top](#table-of-contents)**

381. ### What is AJAX

     AJAX stands for Asynchronous JavaScript and XML and it is a group of related technologies(HTML, CSS, JavaScript, XMLHttpRequest API etc) used to display data asynchronously. i.e. We can send data to the server and get data from the server without reloading the web page.

     **[⬆ Back to Top](#table-of-contents)**

382. ### What are the different ways to deal with Asynchronous Code

     Below are the list of different ways to deal with Asynchronous code.

     1. Callbacks
     2. Promises
     3. Async/await
     4. Third-party libraries such as async.js,bluebird etc

     **[⬆ Back to Top](#table-of-contents)**

383. ### How to cancel a fetch request

     Until a few days back, One shortcoming of native promises is no direct way to cancel a fetch request. But the new `AbortController` from js specification allows you to use a signal to abort one or multiple fetch calls.
     The basic flow of cancelling a fetch request would be as below,

     1. Create an `AbortController` instance
     2. Get the signal property of an instance and pass the signal as a fetch option for signal
     3. Call the AbortController's abort property to cancel all fetches that use that signal
        For example, let's pass the same signal to multiple fetch calls will cancel all requests with that signal,

     ```javascript
     const controller = new AbortController();
     const { signal } = controller;

     fetch("http://localhost:8000", { signal })
       .then((response) => {
         console.log(`Request 1 is complete!`);
       })
       .catch((e) => {
         if (e.name === "AbortError") {
           // We know it's been canceled!
         }
       });

     fetch("http://localhost:8000", { signal })
       .then((response) => {
         console.log(`Request 2 is complete!`);
       })
       .catch((e) => {
         if (e.name === "AbortError") {
           // We know it's been canceled!
         }
       });

     // Wait 2 seconds to abort both requests
     setTimeout(() => controller.abort(), 2000);
     ```

     **[⬆ Back to Top](#table-of-contents)**

384. ### What is web speech API

     Web speech API is used to enable modern browsers recognize and synthesize speech(i.e, voice data into web apps). This API has been introduced by W3C Community in the year 2012. It has two main parts,

     1. **SpeechRecognition (Asynchronous Speech Recognition or Speech-to-Text):** It provides the ability to recognize voice context from an audio input and respond accordingly. This is accessed by the `SpeechRecognition` interface.
        The below example shows on how to use this API to get text from speech,

     ```javascript
     window.SpeechRecognition =
       window.webkitSpeechRecognition || window.SpeechRecognition; // webkitSpeechRecognition for Chrome and SpeechRecognition for FF
     const recognition = new window.SpeechRecognition();
     recognition.onresult = (event) => {
       // SpeechRecognitionEvent type
       const speechToText = event.results[0][0].transcript;
       console.log(speechToText);
     };
     recognition.start();
     ```

     In this API, browser is going to ask you for permission to use your microphone

     1. **SpeechSynthesis (Text-to-Speech):** It provides the ability to recognize voice context from an audio input and respond. This is accessed by the `SpeechSynthesis` interface.
        For example, the below code is used to get voice/speech from text,

     ```javascript
     if ("speechSynthesis" in window) {
       var speech = new SpeechSynthesisUtterance("Hello World!");
       speech.lang = "en-US";
       window.speechSynthesis.speak(speech);
     }
     ```

     The above examples can be tested on chrome(33+) browser's developer console.
     **Note:** This API is still a working draft and only available in Chrome and Firefox browsers(ofcourse Chrome only implemented the specification)

     **[⬆ Back to Top](#table-of-contents)**

385. ### What is minimum timeout throttling

     Both browser and NodeJS javascript environments throttles with a minimum delay that is greater than 0ms. That means even though setting a delay of 0ms will not happen instantaneously.
     **Browsers:** They have a minimum delay of 4ms. This throttle occurs when successive calls are triggered due to callback nesting(certain depth) or after a certain number of successive intervals.
     Note: The older browsers have a minimum delay of 10ms.
     **Nodejs:** They have a minimum delay of 1ms. This throttle happens when the delay is larger than 2147483647 or less than 1.
     The best example to explain this timeout throttling behavior is the order of below code snippet.

     ```javascript
     function runMeFirst() {
       console.log("My script is initialized");
     }
     setTimeout(runMeFirst, 0);
     console.log("Script loaded");
     ```

     and the output would be in

     ```cmd
     Script loaded
     My script is initialized
     ```

     If you don't use `setTimeout`, the order of logs will be sequential.

     ```javascript
     function runMeFirst() {
       console.log("My script is initialized");
     }
     runMeFirst();
     console.log("Script loaded");
     ```

     and the output is,

     ```cmd
     My script is initialized
     Script loaded
     ```

     **[⬆ Back to Top](#table-of-contents)**

386. ### How do you implement zero timeout in modern browsers

     You can't use setTimeout(fn, 0) to execute the code immediately due to minimum delay of greater than 0ms. But you can use window.postMessage() to achieve this behavior.

     **[⬆ Back to Top](#table-of-contents)**

387. ### What are tasks in event loop

     A task is any javascript code/program which is scheduled to be run by the standard mechanisms such as initially starting to run a program, run an event callback, or an interval or timeout being fired. All these tasks are scheduled on a task queue.
     Below are the list of use cases to add tasks to the task queue,

     1. When a new javascript program is executed directly from console or running by the `<script>` element, the task will be added to the task queue.
     2. When an event fires, the event callback added to task queue
     3. When a setTimeout or setInterval is reached, the corresponding callback added to task queue

     **[⬆ Back to Top](#table-of-contents)**

388. ### What is microtask

     Microtask is the javascript code which needs to be executed immediately after the currently executing task/microtask is completed. They are kind of blocking in nature. i.e, The main thread will be blocked until the microtask queue is empty.
     The main sources of microtasks are Promise.resolve, Promise.reject, MutationObservers, IntersectionObservers etc

     **Note:** All of these microtasks are processed in the same turn of the event loop.
     **[⬆ Back to Top](#table-of-contents)**

389. ### What are different event loops

     In JavaScript, there are multiple event loops that can be used depending on the context of your application. The most common event loops are:

    1. The Browser Event Loop
    2. The Node.js Event Loop

    - Browser Event Loop: The Browser Event Loop is used in client-side JavaScript applications and is responsible for handling events that occur within the browser environment, such as user interactions (clicks, keypresses, etc.), HTTP requests, and other asynchronous actions.

    - The Node.js Event Loop is used in server-side JavaScript applications and is responsible for handling events that occur within the Node.js runtime environment, such as file I/O, network I/O, and other asynchronous actions.

     **[⬆ Back to Top](#table-of-contents)**

390. ### What is the purpose of queueMicrotask
    
     The `queueMicrotask` function is used to schedule a microtask, which is a function that will be executed asynchronously in the microtask queue. The purpose of `queueMicrotask` is to ensure that a function is executed after the current task has finished, but before the browser performs any rendering or handles user events.

     Example:

     ```javascript
     console.log('Start'); //1

     queueMicrotask(() => {
       console.log('Inside microtask'); // 3
     });

     console.log('End'); //2
     ```
     By using queueMicrotask, you can ensure that certain tasks or callbacks are executed at the earliest opportunity during the JavaScript event loop, making it useful for performing work that needs to be done asynchronously but with higher priority than regular `setTimeout` or `setInterval` callbacks.

     **[⬆ Back to Top](#table-of-contents)**

391. ### How do you use javascript libraries in typescript file

     It is known that not all JavaScript libraries or frameworks have TypeScript declaration files. But if you still want to use libraries or frameworks in our TypeScript files without getting compilation errors, the only solution is `declare` keyword along with a variable declaration. For example, let's imagine you have a library called `customLibrary` that doesn’t have a TypeScript declaration and have a namespace called `customLibrary` in the global namespace. You can use this library in typescript code as below,

     ```javascript
     declare var customLibrary;
     ```

     In the runtime, typescript will provide the type to the `customLibrary` variable as `any` type. The another alternative without using declare keyword is below

     ```javascript
     var customLibrary: any;
     ```

     **[⬆ Back to Top](#table-of-contents)**

392. ### What are the differences between promises and observables

     Some of the major difference in a tabular form

     | Promises                                                           | Observables                                                                              |
     | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
     | Emits only a single value at a time                                | Emits multiple values over a period of time(stream of values ranging from 0 to multiple) |
     | Eager in nature; they are going to be called immediately           | Lazy in nature; they require subscription to be invoked                                  |
     | Promise is always asynchronous even though it resolved immediately | Observable can be either synchronous or asynchronous                                     |
     | Doesn't provide any operators                                      | Provides operators such as map, forEach, filter, reduce, retry, and retryWhen etc        |
     | Cannot be canceled                                                 | Canceled by using unsubscribe() method                                                   |

     **[⬆ Back to Top](#table-of-contents)**

393. ### What is heap

     Heap(Or memory heap) is the memory location where objects are stored when we define variables. i.e, This is the place where all the memory allocations and de-allocation take place. Both heap and call-stack are two containers of JS runtime.
     Whenever runtime comes across variables and function declarations in the code it stores them in the Heap.

     ![Screenshot](images/heap.png)

     **[⬆ Back to Top](#table-of-contents)**

394. ### What is an event table

     Event Table is a data structure that stores and keeps track of all the events which will be executed asynchronously like after some time interval or after the resolution of some API requests. i.e Whenever you call a setTimeout function or invoke async operation, it is added to the Event Table.
     It doesn't not execute functions on it’s own. The main purpose of the event table is to keep track of events and send them to the Event Queue as shown in the below diagram.

     ![Screenshot](images/event-table.png)

     **[⬆ Back to Top](#table-of-contents)**

395. ### What is a microTask queue

     Microtask Queue is the new queue where all the tasks initiated by promise objects get processed before the callback queue.
     The microtasks queue are processed before the next rendering and painting jobs. But if these microtasks are running for a long time then it leads to visual degradation.

     **[⬆ Back to Top](#table-of-contents)**

396. ### What is the difference between shim and polyfill

     A shim is a library that brings a new API to an older environment, using only the means of that environment. It isn't necessarily restricted to a web application. For example, es5-shim.js is used to emulate ES5 features on older browsers (mainly pre IE9).
     Whereas polyfill is a piece of code (or plugin) that provides the technology that you, the developer, expect the browser to provide natively.
     In a simple sentence, A polyfill is a shim for a browser API.

     **[⬆ Back to Top](#table-of-contents)**

397. ### How do you detect primitive or non primitive value type

     In JavaScript, primitive types include boolean, string, number, BigInt, null, Symbol and undefined. Whereas non-primitive types include the Objects. But you can easily identify them with the below function,

     ```javascript
     var myPrimitive = 30;
     var myNonPrimitive = {};
     function isPrimitive(val) {
       return Object(val) !== val;
     }

     isPrimitive(myPrimitive);
     isPrimitive(myNonPrimitive);
     ```

     If the value is a primitive data type, the Object constructor creates a new wrapper object for the value. But If the value is a non-primitive data type (an object), the Object constructor will give the same object.

     **[⬆ Back to Top](#table-of-contents)**

398. ### What is babel

     Babel is a JavaScript transpiler to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. Some of the main features are listed below,

     1. Transform syntax
     2. Polyfill features that are missing in your target environment (using @babel/polyfill)
     3. Source code transformations (or codemods)

     **[⬆ Back to Top](#table-of-contents)**

399. ### Is Node.js completely single threaded

     Node is a single thread, but some of the functions included in the Node.js standard library(e.g, fs module functions) are not single threaded. i.e, Their logic runs outside of the Node.js single thread to improve the speed and performance of a program.

     **[⬆ Back to Top](#table-of-contents)**

400. ### What are the common use cases of observables

     Some of the most common use cases of observables are web sockets with push notifications, user input changes, repeating intervals, etc

     **[⬆ Back to Top](#table-of-contents)**