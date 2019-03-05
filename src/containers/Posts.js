import React, {Component} from 'react';
import BackBtn from '../components/BackBtn';
import Card from '../components/Card';
import Scroll from '../components/Scroll';
import PostList from '../components/PostList';
//TODO: add comments that expanding from posts, add buttons Prev(robot) & Next(robot) around Back button.

class Posts extends Component{
    constructor(props) {
        super(props);
        this.state = {
            postsCache: [],
            // commentsCache: [],
            extendCommentsPosts: [],
            currentRobotObj: undefined
        }
    }

    componentDidMount(){

        Promise.all([
            this.getPosts(),
            // this.getComments(),
            this.getInfo(Number(this.props.currentRobot)+1)
        ]).then(fetchArr => this.setState({
            postsCache: fetchArr[0],
            // commentsCache: fetchArr[1],
            currentRobotObj: this.makeRobotObj(fetchArr[1], this.props.currentRobot)
            })
        );

    }

    getPosts(){
        return fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());
    }

    // getComments(){
    //     return fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json());
    // }

    getInfo(robotId){
        return fetch(`https://swapi.co/api/people/${robotId}`).then(res => res.json());
    }

    makeRobotObj(swapiObject, id){

        let filteredObject = {
            height: swapiObject.height,
            mass: swapiObject.mass,
            hair_color: swapiObject.hair_color,
            skin_color: swapiObject.skin_color,
            eye_color: swapiObject.eye_color,
            birth_year: swapiObject.birth_year,
            gender: swapiObject.gender
        };

        return {
            id: id,
            name: swapiObject.name,
            description: filteredObject
        };
    }

    render() {
        const {currentRobotObj, postsCache} = this.state;

        if (!currentRobotObj) return <h1 className='tc'>Loading</h1>;

        const userAdtapedId = (currentRobotObj.id+1)%10;
        const currPosts = postsCache.filter(elem=>{
            return (elem.userId === userAdtapedId);
        });

        return(
            <div>
                <BackBtn onClick={this.props.backOnClick}/>
                <div>
                    <div className='fl w-20 pa2'>
                        <Card
                            key={currentRobotObj.id}
                            id={currentRobotObj.id}
                            name={currentRobotObj.name}
                            description={currentRobotObj.description}
                            cardClick={this.props.backOnClick}
                            helperText='Click here to return!'
                        />
                    </div>

                    <div className='fl w-80 pa2'>
                        <Scroll>
                            <PostList posts={currPosts}/>
                        </Scroll>
                    </div>
                </div>
            </div>
        );
    }
}

export default Posts;