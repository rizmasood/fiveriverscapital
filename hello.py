from flask import Flask,render_template



app = Flask(__name__)

@app.route('/')

def home():

	return render_template ('home.html')

@app.route('/about/')
def about():
	return render_template('about.html')

@app.route('/lend/')
def lend():
	return render_template('lend.html')

@app.route('/borrow/')
def borrow():
	return render_template('borrow.html')





if __name__ == "__main__":
	app.run(debug=True)



