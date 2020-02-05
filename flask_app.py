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


