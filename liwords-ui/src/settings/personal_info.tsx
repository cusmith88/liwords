import React, { useCallback, useEffect } from 'react';
import { Button, Col, Form, Input, Row, Select, notification } from 'antd';
import { PlayerAvatar } from '../shared/player_avatar';
import { PlayerMetadata } from '../gameroom/game_info';
import { useMountedState } from '../utils/mounted';
import { AvatarEditModal } from './avatar_edit_modal';
import { AvatarRemoveModal } from './avatar_remove_modal';
import axios, { AxiosError } from 'axios';
import { toAPIUrl } from '../api/api';
import { countryArray } from './country_map';

type PersonalInfo = {
  email: string;
  firstName: string;
  lastName: string;
  countryCode: string;
};

type Props = {
  player: Partial<PlayerMetadata> | undefined;
  personalInfo: PersonalInfo;
  updatedAvatar: (avatarUrl: string) => void;
  startClosingAccount: () => void;
};

const errorCatcher = (e: AxiosError) => {
  if (e.response) {
    notification.warning({
      message: 'Fetch Error',
      description: e.response.data.msg,
      duration: 4,
    });
  }
};

export const PersonalInfo = React.memo((props: Props) => {
  const { useState } = useMountedState();

  const [updateAvatarModalVisible, setUpdateAvatarModalVisible] = useState(
    false
  );
  const [removeAvatarModalVisible, setRemoveAvatarModalVisible] = useState(
    false
  );
  const [avatarErr, setAvatarErr] = useState('');

  const avatarErrorCatcher = (e: AxiosError) => {
    if (e.response) {
      // From Twirp
      console.log(e);
      setAvatarErr(e.response.data.msg);
    } else {
      setAvatarErr('unknown error, see console');
      console.log(e);
    }
  };

  const cancelUpdateAvatarModal = useCallback(() => {
    setUpdateAvatarModalVisible(false);
  }, []);

  const cancelRemoveAvatarModal = useCallback(() => {
    setRemoveAvatarModalVisible(false);
  }, []);

  const removeAvatar = useCallback(() => {
    axios
      .post(
        toAPIUrl('user_service.ProfileService', 'RemoveAvatar'),
        {},
        {
          withCredentials: true,
        }
      )
      .then((resp) => {
        notification.info({
          message: 'Success',
          description: 'Your avatar was removed.',
        });
        setRemoveAvatarModalVisible(false);
        props.updatedAvatar('');
      })
      .catch(avatarErrorCatcher);
  }, [props]);

  const updateAvatar = useCallback(
    (avatarFile: File) => {
      let reader = new FileReader();
      reader.onload = () => {
        axios
          .post(
            toAPIUrl('user_service.ProfileService', 'UpdateAvatar'),
            {
              jpg_data: btoa(String(reader.result)),
            },
            {
              withCredentials: true,
            }
          )
          .then((resp) => {
            notification.info({
              message: 'Success',
              description: 'Your avatar was updated.',
            });
            setUpdateAvatarModalVisible(false);
            props.updatedAvatar(resp.data.avatar_url);
          })
          .catch(avatarErrorCatcher);
      };
      reader.readAsBinaryString(avatarFile);
    },
    [props]
  );

  const updateFields = (values: { [key: string]: string }) => {
    axios
      .post(
        toAPIUrl('user_service.ProfileService', 'UpdatePersonalInfo'),
        values,
        {
          withCredentials: true,
        }
      )
      .then(() => {
        notification.info({
          message: 'Success',
          description: 'Your personal info was changed.',
        });
      })
      .catch(errorCatcher);
  };

  const countrySelector = (
    <Select size="large" bordered={false}>
      {countryArray.map((country) => {
        return (
          <Select.Option key={country.code} value={country.code.toLowerCase()}>
            {country.emoji} {country.name}
          </Select.Option>
        );
      })}
    </Select>
  );

  const [form] = Form.useForm();

  useEffect(() => form.resetFields(), [props.personalInfo, form]);

  const layout = {
    labelCol: {
      span: 24,
    },
    wrapperCol: {
      span: 24,
    },
  };

  return (
    <Form
      form={form}
      {...layout}
      className="personal-info"
      onFinish={updateFields}
      initialValues={props.personalInfo}
    >
      <h3>Personal info</h3>
      <div className="section-header">Profile picture</div>
      {props.player?.avatar_url !== '' ? (
        <div className="avatar-section">
          <PlayerAvatar player={props.player} />
          <Button
            className="change-avatar"
            onClick={() => setUpdateAvatarModalVisible(true)}
          >
            Change
          </Button>
          <Button
            className="remove-avatar"
            onClick={() => setRemoveAvatarModalVisible(true)}
          >
            Remove
          </Button>
        </div>
      ) : (
        <div className="no-avatar-section">
          {' '}
          <Button
            className="change-avatar"
            onClick={() => setUpdateAvatarModalVisible(true)}
          >
            Add a Profile photo
          </Button>
        </div>
      )}
      <AvatarEditModal
        visible={updateAvatarModalVisible}
        error={avatarErr}
        onOk={updateAvatar}
        onCancel={cancelUpdateAvatarModal}
      />
      <AvatarRemoveModal
        visible={removeAvatarModalVisible}
        error={avatarErr}
        onOk={removeAvatar}
        onCancel={cancelRemoveAvatarModal}
      />
      <div className="section-header">Player bio</div>
      <div>(the big bio box)</div>
      <div className="section-header">Account details</div>
      <Row>
        <Col span={11}>
          <Form.Item name="email" label="Email">
            <Input size="large" />
          </Form.Item>
        </Col>
        <Col span={1} />
        <Col span={11}>
          <Form.Item name="firstName" label="First name">
            <Input size="large" />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={11}>
          <Form.Item name="lastName" label="Last name">
            <Input size="large" />
          </Form.Item>
        </Col>
        <Col span={1} />
        <Col span={11}>
          <Form.Item name="countryCode" label="Country">
            {countrySelector}
          </Form.Item>
        </Col>
      </Row>
      <Row align="middle">
        <Col
          span={8}
          className="close-account-button"
          onClick={() => {
            props.startClosingAccount();
          }}
        >
          Close my account
        </Col>
        <Col span={16}>
          <Form.Item>
            <Button className="save-button" type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
});
