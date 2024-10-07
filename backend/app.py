from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS, cross_origin
from models import Product

app = Flask(__name__)
cors = CORS(app)

#mysql://username:password@host:port/database_name
app.config['SQLALCHEMY_DATABASE_URI']='mysql://romulo:teste@localhost:3306/products'
db = SQLAlchemy(app)

@app.route('/newProduct', methods=["POST"])
def new_product():
    data = request.get_json()
    
    new_item = Product(
        name=data['name'],
        prod_type=data['type'],
        description=data['description'],
        inclusion=data['inclusion']
    )
    db.session.add(new_item)
    db.session.commit()

    return jsonify({
        "message": "item adicionado!"
    }), 201

if __name__ == '__main__':
    app.run(debug=True)