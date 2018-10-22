'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      console.log(this.state)
      return `You liked ${this.props.commentID}`;
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      `Like!`
    );
  }
}

const domContainers = document.querySelectorAll('.like_button_container');
domContainers.forEach(container => {
  const commentID = parseInt(container.dataset.commentid, 10);
  ReactDOM.render(e(LikeButton, { commentID: commentID }), container);
})
