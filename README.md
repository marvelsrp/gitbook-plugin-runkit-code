# gitbook-plugin-runkit-code
Embed runkit in GitBook
This GitBook plugins makes it easy to embed runkit notebook in a GitBook.

How to use it?

Configure the plugin in your book.json:

{
    "plugins": ["runkit"]
}
Include a notebook using the runkit block:

Here is notebook:

{% runkit %}
// GeoJSON!
var google = "https://storage.googleapis.com/maps-devrel/google.json"
JSON.parse(await require("request-promise")(google))
{% endrunkit %}


And here is a read-only notebook:

{% runkit %}
// GeoJSON!
var google = "https://storage.googleapis.com/maps-devrel/google.json"
JSON.parse(await require("request-promise")(google))
{% endrunkit %}