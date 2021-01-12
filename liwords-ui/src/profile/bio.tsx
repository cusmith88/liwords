import React, { useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import { useMountedState } from '../utils/mounted';
import { useParams } from 'react-router-dom';
import { useLoginStateStoreContext } from '../store/store';
import axios from 'axios';
import { toAPIUrl } from '../api/api';
import { notification, Card, Modal, Form, Input, Alert } from 'antd';
import { MarkdownTips } from './markdown_tips';
import './bio.scss';

type BioProps = {
  bio: string;
};

export const BioCard = React.memo((props: BioProps) => {
  const { useState } = useMountedState();
  const { loginState } = useLoginStateStoreContext();
  const { username: viewer } = loginState;
  const { username } = useParams();
  const { TextArea } = Input;
  const [err, setErr] = useState('');

  const [editModalVisible, setEditModalVisible] = useState(false);
  const [candidateBio, setCandidateBio] = useState("");

  const actions = (viewer === username) 
    ? [(
        <div
          className="edit-bio"
          onClick={() => {
            setCandidateBio(props.bio);
            setEditModalVisible(true);
          }}
        >
          Edit
        </div>
      )] 
    : []
  
  const onChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCandidateBio(e.target.value);
  }, []);

  return (
    <Card title="Bio" actions={actions}>
      <ReactMarkdown>{props.bio}</ReactMarkdown>
      <Modal
        className="bio-edit-modal"
        title="Edit bio"
        visible={editModalVisible}
        onCancel={() => {
          setEditModalVisible(false);
        }}
        onOk={() => {
          axios
            .post(
              toAPIUrl('user_service.ProfileService', 'UpdateProfile'),
              {
                about: candidateBio
              },
              {
                withCredentials: true,
              }
            )
            .then(() => {
              notification.info({
                message: 'Success',
                description: 'Your bio was updated.',
              });
              setEditModalVisible(false);              
            })
            .catch((e) => {
              if (e.response) {
                // From Twirp
                console.log(e);
                setErr(e.response.data.msg);
              } else {
                setErr('unknown error, see console');
                console.log(e);
              }
            });
        }}
      >
        <Form>
          <TextArea 
            rows={4} 
            value={candidateBio}
            onChange={onChange}
          />
        </Form>
        {err !== '' ? <Alert message={err} type="error" /> : null}

      <div className="preview">
        <div>How your bio will look to others:</div>
        <Card className="preview-card">
        <ReactMarkdown>{candidateBio}</ReactMarkdown>
        </Card>
      </div>
      <MarkdownTips/> 
      </Modal>
    </Card>
  );
});

