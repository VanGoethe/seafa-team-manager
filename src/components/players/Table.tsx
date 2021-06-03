import React from "react";
import { Table, Tag, Space } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useStoreActions } from "hooks";

interface Props {
  players: any;
  loading: boolean;
}

export const TableComponent = ({ players, loading }: Props) => {
  const { deletePlayer } = useStoreActions((action) => action.players);

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstname",
      key: "firstname",
      render: (text: any) => <a>{text}</a>,
    },
    {
      title: "last Name",
      dataIndex: "lastname",
      key: "lastname",
      render: (text: any) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      render: (text: any) => (
        <Tag color={text === "male" ? "geekblue" : "pink"}>{text}</Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text: any, record: any) => (
        <Space size="middle">
          <DeleteOutlined
            onClick={() => deletePlayer(record._id)}
            style={{ color: "red" }}
          />
        </Space>
      ),
    },
  ];

  const data = players;
  return <Table loading={loading} columns={columns} dataSource={data} />;
};
