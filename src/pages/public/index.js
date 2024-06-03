import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Form, Input, Row } from "antd";
import {
  useAddMessageMutation,
  useGetPublicMessageQuery,
} from "../../store/api";
import io from "socket.io-client";

const Public = () => {
  const navigate = useNavigate();
  const [socket, setSocket] = useState(null);
  const [addMessage] = useAddMessageMutation();
  const name = localStorage.getItem("name");
  const [message, setMessage] = useState([]);
  const [form] = Form.useForm();
  const { data, isLoading, isError, refetch } = useGetPublicMessageQuery();

  useEffect(() => {
    if (!name) {
      navigate("/");
    }
    refetch();
    setMessage(data.data);
    const socket = io("http://localhost:5009");
    setSocket(socket);
    socket.on("connect", () => {
      console.log("Connected to socket.io server: ", socket.id);
      socket.emit("newUser", name);
    });
    socket.on("welcome", (msg) => {
      console.log(msg);
    });
    socket.on("publicMessage", (msg) => {
      console.log({ message });
      setMessage((message) => [...message, msg]);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = (values) => {
    // addMessage(values);
    const msg = {
      name,
      message: values.message,
    };
    form.setFieldValue("message", "");
    socket.emit("publicMessage", msg);
  };
  return (
    <>
      <Form
        form={form}
        layout="vertical"
        autoComplete="off"
        onFinish={sendMessage}
      >
        <Form.Item name="message" label="Message">
          <Input placeholder="Type here..." />
        </Form.Item>
        <Button htmlType="submit">Send Message</Button>
      </Form>
      <Row style={{ marginTop: "20px" }}>
        {message.map((msg, ind) => (
          <Col
            span={24}
            key={ind}
            style={
              msg.socketId === socket.id
                ? { display: "flex", flexDirection: "row-reverse" }
                : { display: "flex", flexDirection: "row" }
            }
          >
            <div style={{ width: "50%" }}>
              {`${msg.socketId === socket.id ? "You" : msg.name} ->`}
              <div>{`${msg.message}`}</div>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Public;
