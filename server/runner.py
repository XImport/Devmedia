from distutils.log import debug
from flask import Flask,jsonify
from flask_mail import Mail,Message


app = Flask(__name__)
app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'devmediagency@gmail.com'
app.config['MAIL_PASSWORD'] = 'Devmedia99$'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
mail = Mail(app)
@app.route("/")
def home():
    return jsonify({"data" : "hello world"})

@app.route("/contact")
def contact():
  msg = Message('Hello from the other side!', sender ='devmediagency@gmail.com', recipients = ['supp0rt.devmedia@yandex.com'])
  msg.body = "Hey Paul, sending you this email from my Flask app, lmk if it works"
  mail.send(msg)
  return "Message sent!"

if __name__ == "__main__":
    app.run(debug=True)