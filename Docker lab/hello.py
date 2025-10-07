from flask import Flask

# إنشاء تطبيق Flask
app = Flask(__name__)

# المسار الرئيسي (Home Page)
@app.route('/')
def hello_world():
    return 'Flask Hello World!'

# مسار إضافي /aboshaymaa
@app.route('/aboshaymaa')
def test():
    return 'A7la mesa on you from Abushaymaa ;)'

# تشغيل السيرفر
if __name__ == '__main__':
    app.run(
        debug=False,        # إيقاف وضع التصحيح (Debug Mode)
        host='0.0.0.0',     # استقبال من أي IP داخل وخارج الكونتينر
        port=5000           # رقم المنفذ اللي بيفتح عليه السيرفر
    )
