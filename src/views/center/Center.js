import { Space, Table, Tag } from 'antd';


const Center = () => {
  let columns = [

    {
      title: '名字',
      dataIndex: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '年龄',
      dataIndex: 'age',
    },
    {
      title: '地址',
      dataIndex: 'address',
    },

    {
      title: '操作',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={()=>{
            console.log(record);
          }}>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  const data = [

    {
      id: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      id: '21',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
  ];
  return (<div>
    <Table columns={columns} dataSource={data} rowKey={(record) => `${record.id}`} />;

  </div>)
}
export default Center;