import { Button, Col, Input, Row, Typography } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Choice = () => {
  const navigate = useNavigate();
  const [name, setName] = useState(localStorage.getItem("name"));
  const typeChoice = (choice) => {
    navigate(choice);
  };

  return (
    <Row gutter={[24, 12]} style={{ marginTop: "20px" }}>
      {name ? (
        <Col>
          <Typography.Text>Welcome {name}</Typography.Text>
        </Col>
      ) : (
        <Col
          span={8}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography.Text>Enter Your Name to Start Chatting</Typography.Text>
          <Input
            onBlur={(e) => {
              localStorage.setItem("name", e.target.value);
              setName(e.target.value);
            }}
          />
        </Col>
      )}
      <Col span={24}>Choice Room Type</Col>
      <Col span={24}>
        <Button
          onClick={() => typeChoice("public")}
          style={{ marginRight: "20px" }}
          disabled={!name}
        >
          Public Chat
        </Button>
        <Button onClick={() => typeChoice("rooms")} disabled={!name}>
          Private Chat
        </Button>
      </Col>
    </Row>
  );
};

export default Choice;
