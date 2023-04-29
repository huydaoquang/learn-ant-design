import React, { useState } from "react";
import { Button, Input, Modal, Table } from "antd";
import "antd/dist/reset.css";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

import "./App.css";

const App = () => {
	const [editingStudent, setEditingStudent] = useState(null);
	const [isEditing, SetIsEditing] = useState(false);
	const [dataSource, setDataSource] = useState([
		{
			id: 1,
			name: "John",
			email: "john@gmail.com",
			address: "john Address",
		},
		{
			id: 2,
			name: "David",
			email: "david@gmail.com",
			address: "David Address",
		},
		{
			id: 3,
			name: "James",
			email: "james@gmail.com",
			address: "James Address",
		},
		{
			id: 4,
			name: "Sam",
			email: "sam@gmail.com",
			address: "Sam Address",
		},
	]);

	const columns = [
		{
			key: "1",
			title: "ID",
			dataIndex: "id",
		},
		{
			key: "2",
			title: "Name",
			dataIndex: "name",
		},
		{
			key: "3",
			title: "Email",
			dataIndex: "email",
		},
		{
			key: "4",
			title: "Address",
			dataIndex: "address",
		},
		{
			key: "5",
			title: "Action",
			render: (record) => {
				console.log(record);
				return (
					<>
						<EditOutlined
							onClick={() => {
								onEditStudent(record);
							}}
						/>
						<DeleteOutlined
							onClick={() => {
								onDeleteStudent(record);
							}}
							style={{ color: "red", marginLeft: 12 }}
						/>
					</>
				);
			},
		},
	];

	const onAddStudent = () => {
		const randomNumber = parseInt(Math.random() * 1000);

		const newStudent = {
			id: randomNumber,
			name: "John " + randomNumber,
			email: randomNumber + "@gmail.com",
			address: "Address " + randomNumber,
		};

		setDataSource((prev) => {
			return [...prev, newStudent];
		});
	};

	const onDeleteStudent = (record) => {
		Modal.confirm({
			title: "Are you sure you want to delete this student record?",
			okText: "Yes",
			onType: "danger",
			onOk: () => {
				setDataSource((prev) => {
					return prev.filter((student) => student.id !== record.id);
				});
			},
		});
	};

	const onEditStudent = (record) => {
		console.log(record);
		SetIsEditing(true);
		setEditingStudent({ ...record });
	};
	const resetEditing = () => {
		SetIsEditing(false);
		setEditingStudent(null);
	};
	return (
		<div className="App">
			<Button onClick={onAddStudent}>Add a new Student</Button>
			<Table columns={columns} dataSource={dataSource}></Table>
			<Modal
				title="Edit Student"
				visible={isEditing}
				okText="Save"
				onCancel={() => {
					resetEditing();
				}}
				onOk={() => {
					setDataSource((prev) => {
						console.log(prev);
						return prev.map((student) => {
							if (student.id === editingStudent.id) {
								return editingStudent;
							} else {
								return student;
							}
						});
					});
					resetEditing();
				}}
			>
				<Input
					value={editingStudent?.name}
					onChange={(e) => {
						setEditingStudent((prev) => {
							return { ...prev, name: e.target.value };
						});
					}}
				/>
				<Input
					value={editingStudent?.email}
					onChange={(e) => {
						setEditingStudent((prev) => {
							return { ...prev, email: e.target.value };
						});
					}}
				/>
				<Input
					value={editingStudent?.address}
					onChange={(e) => {
						setEditingStudent((prev) => {
							return { ...prev, address: e.target.value };
						});
					}}
				/>
			</Modal>
		</div>
	);
};

export default App;
