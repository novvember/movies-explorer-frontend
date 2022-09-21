import classNames from 'classnames';
import './Message.css';

function Message({text, isError = false}) {
  return (
    <div className="message section">
      <p
        className={classNames('message__text', {
          message__text_type_error: isError,
        })}
      >
        {text}
      </p>
    </div>
  );
}

export default Message;
