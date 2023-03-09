var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Title = function Title() {
    return React.createElement(
        "h1",
        null,
        "The Title"
    );
};

var PostTitle = function (_React$Component) {
    _inherits(PostTitle, _React$Component);

    function PostTitle(props) {
        _classCallCheck(this, PostTitle);

        return _possibleConstructorReturn(this, (PostTitle.__proto__ || Object.getPrototypeOf(PostTitle)).call(this, props));
    }

    _createClass(PostTitle, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "h2",
                null,
                this.props.value
            );
        }
    }]);

    return PostTitle;
}(React.Component);

var Post = function (_React$Component2) {
    _inherits(Post, _React$Component2);

    function Post(props) {
        _classCallCheck(this, Post);

        var _this2 = _possibleConstructorReturn(this, (Post.__proto__ || Object.getPrototypeOf(Post)).call(this, props));

        _this2.showLessContent = function () {
            //setShowContent(false)
            _this2.setState({ showContent: false });
        };

        _this2.state = {
            setShowContent: false
        };
        return _this2;
    }

    _createClass(Post, [{
        key: "showMoreContent",
        value: function showMoreContent() {
            //setShowContent(true)
            this.setState({ showContent: true });
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            return React.createElement(
                "div",
                null,
                React.createElement(PostTitle, { value: this.props.title }),
                this.state.showContent ? React.createElement(
                    React.Fragment,
                    null,
                    React.createElement(
                        "p",
                        null,
                        this.props.content
                    ),
                    React.createElement(
                        "button",
                        { onClick: this.showLessContent.bind(this) },
                        "Show less"
                    )
                ) : React.createElement(
                    React.Fragment,
                    null,
                    React.createElement(
                        "p",
                        null,
                        this.props.shortContent
                    ),
                    React.createElement(
                        "button",
                        { onClick: function onClick() {
                                return _this3.showMoreContent();
                            } },
                        "Read more"
                    )
                ),
                React.createElement("hr", null)
            );
        }
    }]);

    return Post;
}(React.Component);

var Blog = function Blog() {
    var posts = [{
        id: 1,
        title: "blog post 1",
        shortContent: "paragraph..",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque ligula, sollicitudin quis leo sed, imperdiet tempus nibh. Curabitur sed leo quis ante pretium viverra."
    }, {
        id: 2,
        title: "blog post 2",
        shortContent: "shrot content 2",
        content: "lorem ipsum"
    }];

    var postsList = posts.map(function (el) {
        return React.createElement(Post, Object.assign({
            key: el.id
        }, el));
    });
    return React.createElement(
        "div",
        null,
        React.createElement(Title, null),
        React.createElement(
            "p",
            null,
            "this is blog posts list"
        ),
        postsList
    );
};

/*  
old v17  
ReactDOM.render(
    <Blog />,
    document.getElementById('root')
);   
new v18
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Blog />);
*/

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(Blog, null));