# My Userscripts Collection

A collection of useful userscripts to enhance web browsing, development, and data manipulation.

## Installation

1.  **Install a Userscript Manager:** First, you need a userscript manager for your browser. Here are some popular options:
    *   [Tampermonkey](https://www.tampermonkey.net/) (for Chrome, Firefox, Edge, Safari, Opera)
    *   [Greasemonkey](https://www.greasespot.net/) (for Firefox)
    *   [Violentmonkey](https://violentmonkey.github.io/) (for Chrome, Firefox, Edge, Opera)

2.  **Install a Script:** Once your manager is installed, simply click the "Install" link for any of the scripts listed below. Your userscript manager should open a new tab and prompt you to confirm the installation.

---

## Available Scripts

### 1. Web Console Utilities **[[Install]](https://github.com/FDrach/userscripts/raw/master/WebConsoleUtilities.user.js)**

This script injects some helper functions into the browser's developer console.

#### Available Functions

*   `Base64.encode(string)` & `Base64.decode(encodedString)`
    *   **Description:** Encodes or decodes a Base64 string.
    *   **Example:**
        ```javascript
        Base64.encode('Hello World!');
        //> "SGVsbG8gV29ybGQh"

        Base64.decode('SGVsbG8gV29ybGQh');
        //> "Hello World!"
        ```

*   `Base16.encode(string)` & `Base16.decode(hexString)`
    *   **Description:** Encodes or decodes a hexadecimal string.
    *   **Example:**
        ```javascript
        Base16.encode('Hello World!');
        //> "48656c6c6f20576f726c6421" 

        Base16.decode('48656c6c6f20576f726c6421');
        //> "Hello World!"
        ```

*   `range(start, stop, step)`
    *   **Description:** Generates a sequence of numbers, similar to Python's `range()` function.
    *   **Example:**
        ```javascript
        range(5);
        //> [0, 1, 2, 3, 4]

        range(2, 8);
        //> [2, 3, 4, 5, 6, 7]

        range(0, 10, 2);
        //> [0, 2, 4, 6, 8]

        range(5, -5, -1);
        //> [ 5, 4, 3, 2, 1, 0, -1, -2, -3, -4 ]
        ```

*   `getUrls(filter, returnAs)`
    *   **Description:** Finds all `<a>` tags that match the `filter` and either prints them to the console (default) or returns them as a newline-separated string or an array.
    *   **Example:**
        ```javascript
        // Print all URLs
        getUrls();

        // Print all URLs that contain "github"
        getUrls('github');

        // Get all URLs that contain "google" as an array:
        const linkArray = getUrls('google', Array);
        ```

*   `dedup(array)`
    *   **Description:** Removes duplicate values from an array and returns a new array.
    *   **Example:**
        ```javascript
        const myNumbers = [1, 5, 2, 8, 5, 1, 9, 2];
        dedup(myNumbers);
        //> [1, 5, 2, 8, 9]
        ```
*   `sorted(array)`
    *   **Description:** Returns a new, numerically sorted version of an array.
    *   **Example:**
        ```javascript
        const unsorted = [3, 1, 4, 1, 5, 9, 2, 6];
        sorted(unsorted);
        //> [1, 1, 2, 3, 4, 5, 6, 9]
        ```
---

## License

This project is licensed under the **[GNU General Public License v2.0](LICENSE)**.
