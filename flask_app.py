from flask import Flask, render_template, request

app = Flask(__name__)
app.config['DEBUG'] = True

@app.route('/', methods=['GET'])
def main():
    hostname = request.host_url
    message = 'BYEEEEE'
    return render_template('mai.html', host=hostname, msg=message)

@app.route('/about', methods=['GET'])
def mission():
    return render_template('about.html')
@app.route('/newroute', methods=['GET'])
def newroute():
    return "Joe Momma"


@app.route('/calculator', methods=['GET', 'POST'])
def calculator():
    if request.method == 'POST':
        fav_num = int(request.form['number'])
        return f'The square of your favorite number is {fav_num ** 2}'

    return """
    <html>
    <body>
      <form method="post">
        <label for="name">Name</label>
        <input id="name" name="name" type="text">
        <label for="number">Favorite number</label>
        <input id="number" name="number" type="text">
        <input type="submit" value="Submit">
      </form>
    </body>
    </html>
    """