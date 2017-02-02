import React, { PropTypes as T} from 'react'

export class Container extends React.Component {
  static contextTypes = {
    router: T.object
  }
  render(){
    console.log('yaaaaa');
    let children = null;
    if(this.props.children) {
      console.log('hi');
      children = React.cloneElement(this.props.children, {
      	auth: this.props.route.auth
      })
    }

    return (
      <div>
        <h1>Ripfpl</h1>
        {children}
      </div>
    )
  }
}

export default Container;
