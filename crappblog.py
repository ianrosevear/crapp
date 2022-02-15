from flask import Flask, render_template, url_for

app = Flask(__name__)


posts = [
    {
        'author': 'Ian Rosevear',
        'title': 'Blog Post 1',
        'content': 'First post content',
        'date_posted': 'April 20, 2018'
    },
    {
        'author': 'Jack Rosevear',
        'title': 'Blog Post 2',
        'content': 'First post content',
        'date_posted': 'April 21, 2018'
    }
]


@app.route("/")
@app.route("/home")
def home():
    return render_template('home.html', posts=posts)


@app.route("/about")
def about():
    return render_template('about.html', title='About')


@app.route("/javatest")
def javatest():
    return render_template('javatest.html')



if __name__ == '__main__':
    app.run(debug=True)