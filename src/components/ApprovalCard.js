import React from 'react'
// import CommentDetail from './CommentDetail'

const ApprovalCard = (props) => {

// ===== Style comment cards using Semantic UI stylings (installed)
  return(
    <div className="ui card">
      <div className="content">{props.children}</div>
        <div className="extra content">
          <div className="ui buttons">
            <div className="ui basic green button">Accept</div>
            <div className="ui basic red button">Reject</div>
          </div>
        </div>
    </div>
  )
}

export default ApprovalCard;
