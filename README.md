# banner-utm-show

This code appears to be a JavaScript implementation that involves handling cookies, working with URL parameters, and performing various DOM manipulations.

Let's go through the code step by step:

The code starts by declaring a constant variable utmCookie and assigns it the value returned by the readCookie function when passed the parameter 'utm_banner'. This function reads the value of the cookie with the specified name.

The value of utmCookie is logged to the console along with the string 'COOKIE'.

The code defines a function called getUrlParameter that takes a parameter sParam. This function is used to extract a specific URL parameter value from the current window's location. It splits the query string, which is everything after the ? in the URL, into individual key-value pairs and searches for the parameter specified by sParam. If found, it decodes the parameter value and returns it. Otherwise, it returns true.

The code calls the getUrlParameter function with the parameter 'utm_campaign' and assigns the returned value to the constant variable campaign.

The value of campaign is logged to the console.

The code defines a function called regex_escape that takes a string parameter str. This function replaces certain special characters with their escaped counterparts using regular expressions. It escapes characters such as ., \, +, *, ?, [, ], ^, $, (, ), {, }, =, !, <, >, |, :, and -. The modified string is then returned.

If an element with the class 'utm-announcement-bar' exists in the DOM, the code executes the following block:

It checks if utmCookie has a truthy value.
If so, it shows the element with the attribute data-ids matching the value of utmCookie.
If not, it iterates over each element with the class 'utm-announcement-bar'.
For each element, it retrieves the data-ids attribute value and assigns it to the variable utms.
It sets the variable text to the value of campaign.
It creates a regular expression pattern using the regex_escape function to escape the characters in utms and split them by comma.
It tests if the pattern matches the text and stores the result in the result variable.
The pattern, result, and the escaped campaign value are logged to the console.
If the result is true, the element is shown, and a cookie named 'utm_banner' is created with the value of utms and an expiration of 7 days.
If the result is false, the string 'no match' is logged to the console.
The code checks the result of the testUTMs function, and if it returns true, it shows the element with the attribute 'data-default'.

The code defines a function called testUTMs that returns a Boolean value. Inside the function, it iterates over each element with the class 'utm-announcement-bar'.

For each element, it retrieves the data-ids attribute value and assigns it to the variable utms.
It sets the variable text to the value of campaign.
It creates a regular expression pattern using the regex_escape function to escape the characters in utms and split them by comma.
It tests if the pattern matches
