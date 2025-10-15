from flask import Flask
import mysql.connector

app = Flask(__name__)

@app.route('/')
def home():
    try:
        conn = mysql.connector.connect(
            host="db",  # اسم الخدمة التانية في docker-compose
            user="root",
            password="rootpassword",
            database="testdb"
        )
        return "✅ Connected to MySQL successfully!"
    except Exception as e:
        return f"❌ Connection failed: {e}"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
