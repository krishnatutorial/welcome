// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: true}
  onRenderButton=()=>{
    const {isSubscribed}=this.state;
    if(isSubscribed===true){
      return <button>Subscribed</button>
    }
    return <button>Subscribe</button>
  }

  render() {
    
    return (
      <div>
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>
        {this.onRenderButton()}
        
      </div>
    )
  }
}
export default Welcome
