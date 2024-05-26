import { Button, Form, Input } from "antd";
import { useAddMessageMutation, useGetPublicMessageQuery } from "../store/api";

const Layout = () => {
  const { data, isLoading, isError } = useGetPublicMessageQuery();
  const [addMessage] = useAddMessageMutation();
  console.log({ data });
  const sendMessage = (values) => {
    console.log({ values });
    addMessage(values);
  };
  return (
    <div>
      <Form onFinish={sendMessage}>
        <Form.Item name="message">
          <Input placeholder="Basic usage" />
        </Form.Item>
        <Button htmlType="submit">Send Message</Button>
      </Form>
    </div>
  );
};

export default Layout;
