-- Techniques Used
    1. For handliing large query data, i have used pagination technique, github allows by default 30 results, so each query results 30 items, and a next button to load next page result, and the result is concatnated to give combined result.
    2. For API limit, i have used debouncing so that api gets called only when there is a difference of 500ms in keystrokes.
    3. For caching i have saved the results and titles in an array, so if any repeated reuqest of same title, we can fetch result from that.