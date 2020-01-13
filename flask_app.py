<html>
    <head>
        <title>My Flask Site</title>
    </head>
    <body>
        <h1>Welcome to this website!</h1>
        <div><a href="{{ host }}about">About</a></div>
        <p>{% if msg %} {{ msg }} {% endif %}</p>
    </body>
</html>
