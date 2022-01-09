import React, { useState, useEffect } from "react";
import { Table, Tag, Space } from "antd";
import { CheckCircleFilled, CloseCircleOutlined } from "@ant-design/icons";
import { useStoreActions } from "hooks";
import moment from "moment";

interface Props {
  profiles: any;
  loading: boolean;
}

export const TableComponent = ({ profiles, loading }: Props) => {
  const { validateProfile } = useStoreActions((action) => action.profiles);

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstname",
      key: "firstname",
      render: (text: any) => <a>{text}</a>,
    },
    {
      title: "Last Name",
      dataIndex: "lastname",
      key: "lastname",
      render: (text: any) => <a>{text}</a>,
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
      render: (text: any) => <span>{moment(text).format("YYYY-MM-DD")}</span>,
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
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text: any) => (
        <Tag color={text === false ? "orangered" : "limegreen"}>
          {text ? "en ordre" : "en defaut"}
        </Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text: any, record: any) => (
        <Space
          size="middle"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {!record.status ? (
            <CheckCircleFilled
              onClick={() =>
                validateProfile({
                  id: record._id,
                  data: { status: true },
                } as any)
              }
              style={{ color: "limegreen", fontSize: "25px" }}
            />
          ) : (
            <CloseCircleOutlined
              onClick={() =>
                validateProfile({
                  id: record._id,
                  data: { status: "false" },
                } as any)
              }
              style={{ color: "lightgrey", fontSize: "25px" }}
            />
          )}
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
