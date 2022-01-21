from server import app, mail
from flask import jsonify, request
from flask_mail import Message
from flask_cors import cross_origin

@app.route("/")
def home():
    return jsonify({"data": "hello world"})


# supp0rt.devmedia@yandex.com
@app.route("/contact", methods=["POST"])
@cross_origin()
def contact():
    try:
        full_name = request.json["FullName"]
        email = request.json["email"]
        message = request.json["message"]
        msg = Message(
            f"Email from {full_name} At :  {email}",
            sender=app.config["MAIL_USERNAME"],
            recipients=["supp0rt.devmedia@yandex.com"],
        )
        msg.body = message
        mail.send(msg)
        return jsonify({"status": 200})
    except:
        return jsonify({"status": f"{404} error in data parser"})
