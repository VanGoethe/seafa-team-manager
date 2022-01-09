import React, { useState, useEffect } from "react";
import { Table, Tag, Space } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useStoreActions } from "hooks";
import moment from "moment";

interface Props {
  profiles: any;
  loading: boolean;
}

export const TableComponent = ({ profiles, loading }: Props) => {
  const { deleteProfile } = useStoreActions((action) => action.profiles);

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstname",
      key: "firstname",
      render: (text: any) => <a>{text ? text : '-'}</a>,
    },
    {
      title: "Last Name",
      dataIndex: "lastname",
      key: "lastname",
      render: (text: any) => <a>{text ? text : "-"}</a>,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      render: (text: any) => <a>{text ? text : "-"}</a>,
    },
    {
      title: "Position",
      dataIndex: "position",
      key: "position",
      render: (text: number) => <span>{text ? text : "-"}</span>
    },
    {
      title: "Foot",
      dataIndex: "foot",
      key: "foot",
      render: (text: any) => (
        <Tag color={text === "both" ? "limegreen" : "grey"}>{text}</Tag>
      ),
    },
    // {
    //   title: "No of contract",
    //   dataIndex: "number_of_contract",
    //   key: "number_of_contract",
    // },
    {
      title: "Joined at",
      dataIndex: "joined_at",
      key: "joined_at",
      render: (text: Date) => <span>{text ? moment(text).format("YYYY-MM-DD") : "-"}</span>,
    },
    // {
    //   title: "Last Contract at",
    //   dataIndex: "last_contract_signed_at",
    //   key: "last_contract_signed_at",
    //   render: (text: any) => <span>{moment(text).format("YYYY-MM-DD")}</span>,
    // },
    // {
    //   title: "Contract expires at",
    //   dataIndex: "contract_expiries_at",
    //   key: "contract_expiries_at",
    //   render: (text: any) => <span>{moment(text).format("YYYY-MM-DD")}</span>,
    // },
    {
      title: "Phone Number",
      dataIndex: 'contact',
      key: 'contact',
      render: (text: number) => <span>{text ? text : "-"}</span>
    },
    {
      title: 'Category',
      dataIndex: "category",
      key: "category",
      render: (text: any) => (
        <span>{text ? text === "pepiniere" ? "Pépinière" : text : "-"}</span>
      )
    },
    {
      title: "activity",
      dataIndex: "isActive",
      key: "isActive",
      render: (text: any) => (
        <Tag color={text && text === true ? "limegreen" : "#795548"}>
          {text && text === true ? "employed" : "unemployed"}
        </Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text: any, record: any) => (
        <Space size="middle">
          <DeleteOutlined
            onClick={() => deleteProfile(record._id)}
            style={{ color: "red" }}
          />
        </Space>
      ),
    },
  ];

  const [data, setDatas] = useState([]);

  useEffect(() => {
    if (profiles && profiles.length > 0) {
      const newArray: any = [];
      profiles.map((pr: any) => {
        const data = {
          ...pr,
          firstname: pr.player.firstname,
          lastname: pr.player.lastname,
        };
        newArray.push(data);
      });
      setDatas(newArray);
    }
  }, [profiles]);

  return <Table loading={loading} columns={columns} dataSource={data} />;
};
