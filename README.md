# gitbook-plugin-runkit-code
## Embed runkit in GitBook
This GitBook plugins makes it easy to embed runkit notebook in a GitBook.

## How to use it? ##

Configure the plugin in your book.json:

    {
        "plugins": ["runkit"]
    }
    
Include a notebook using the runkit block:

Here is notebook:

    {% runkit %}
    var a = 1;
    var b = 2;
    var c = a + b;
    {% endrunkit %}