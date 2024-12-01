from flask import Flask, request, render_template, redirect, url_for, session, jsonify
app = Flask(__name__)


# Rota para a página inicial
@app.route('/')
def index():
    return render_template('index.html')



if __name__ == '__main__':
    app.run(debug=True)