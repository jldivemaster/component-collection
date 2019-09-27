import React from 'react';
import ApprovalCard from './ApprovalCard';
import CommentDetail from './CommentDetail';
import faker from 'faker';

export default class CommentCard extends React.Component {

  render(){
    return(
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail name="Sam" time="Today at 6:00pm" image={faker.image.avatar()} comment="Neat" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail name="Bill" time="Today at 2:50pm" image={faker.image.avatar()} comment="Cool" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail name="Sally" time="Yesterday at 2:10pm" image={faker.image.avatar()} comment="Balls" />
      </ApprovalCard>
    </div>
  )}
}
