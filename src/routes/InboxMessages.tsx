import React, { useState } from 'react';

import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Button,
  Card,
  Image,
} from 'semantic-ui-react';

import CommentRow from '../components/CommentRow'
import ApprovalCard from '../components/ApprovalCard'

export const InboxMessages = () => {

  const [approve, setApprove] = useState<number>(0);//0 pending, 1 approved, 2 rejected


  return (
    <>
      <ApprovalCard>
        <CommentRow author='Author' time={new Date().toLocaleDateString()} comment='comment' avatar='acatar' />
      </ApprovalCard>
    </>
  )
}