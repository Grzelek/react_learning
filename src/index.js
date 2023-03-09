const Title = () => <h1>The Title</h1>

class PostTitle extends React.Component{
    constructor(props){
        super(props)
        
    }
    render(){
        return <h2>{this.props.value}</h2>
    }
}


class Post extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            setShowContent:false
        }
    }
    showMoreContent(){ 
        //setShowContent(true)
        this.setState({showContent: true});
    }
    showLessContent = () => {
        //setShowContent(false)
        this.setState({showContent: false});
    }
    render(){
        return (
            <div>
                <PostTitle value={this.props.title}/>
                {
                    this.state.showContent ? (
                        <div>
                            <p>{this.props.content}</p>
                            <button onClick={this.showLessContent.bind(this)}>Show less</button>
                        </div>
                    ) : (
                        <div>
                            <p>{this.props.shortContent}</p>
                            <button onClick={() => this.showMoreContent()}>Read more</button>
                        </div>)
                }
                <hr />
            </div>
        )
    }
}

const Blog = function () {
    const posts = [
        {
            id: 1,
            title: "blog post 1",
            shortContent: "paragraph..",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque ligula, sollicitudin quis leo sed, imperdiet tempus nibh. Curabitur sed leo quis ante pretium viverra.",
        },
        {
            id: 2,
            title: "blog post 2",
            shortContent: "shrot content 2",
            content: "lorem ipsum",
        }
    ]

    const postsList = posts.map(el => (
        <Post
            key={el.id}
            {...el}
        />
    ))
    return (
        <div>
            <Title />
            <p>this is blog posts list</p>
            {postsList}
        </div>
    )
}

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

ReactDOM.createRoot(document.getElementById('root')).render(<Blog />)