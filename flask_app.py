from flask import Flask, render_template, request, url_for

app = Flask(__name__)
app.config['DEBUG'] = True

@app.route('/', methods=['GET'])
def main():
    hostname = request.host_url
    message = 'Thank you for visting our site!'
    return render_template('homepage.html', host=hostname, msg=message)

@app.route('/about', methods=['GET'])
def mission():
    return render_template('about.html')
@app.route('/newroute', methods=['GET'])
def newroute():
    return "Joe Momma"
@app.route('/ourmission', methods=['GET'])
def ourmission():
    return render_template('ourmission.html')

