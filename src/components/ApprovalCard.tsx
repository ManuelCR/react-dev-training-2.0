import React, { useState , ReactNode} from 'react';

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

interface ApprovalCardProps{
    children: ReactNode;//children es una palabra reservada de react para tomar lo que está dentro del componente,
    //content: ReactNode;  //Aquí se manda como prop,algo así <ApprovalCard content= {<CommentRow author='Author' time={new Date().toLocaleDateString()} comment='comment' avatar='acatar' />}></ApprovalCard>
}

export const ApprovalCard = (props:ApprovalCardProps) => {

  const [approve, setApprove] = useState<number>(0);//0 pending, 1 approved, 2 rejected


  if(approve === 0){
    return (
        <>
          <Card>
          <CardContent>
              {props.children}
            </CardContent>
            <CardContent extra>
              <div className='ui two buttons'>
                <Button basic color='green' onClick={() => setApprove(1)}>
                  Approve
                </Button>
                <Button basic color='red' onClick={() => setApprove(2)}>
                  Decline
                </Button>
              </div>
            </CardContent>
          </Card>
        </>
      )
  }else if (approve === 1){

    return (
        <>
          <Card>
            <CardContent>
            {props.children}
            </CardContent>
          </Card>
        </>
      )

  }else{
    return (<></>)
  }
  
}

export default ApprovalCard