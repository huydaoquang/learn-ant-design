import React, { useState } from "react";
import { Button, Input, Table } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import "./App.css";

const App = () => {
	const [dataSource, setDataSource] = useState([
		{
			name: "John",
			age: "32",
			address: "New York",
		},
		{
			name: "Jim",
			age: "33",
			address: "Sydney",
		},
		{
			name: "David",
			age: "40",
			address: "Japan",
		},
		{
			name: "James",
			age: "32",
			address: "New York",
		},
		{
			name: "Sam",
			age: "40",
			address: "Sydney",
		},
	]);

	const columns = [
		{
			title: "Name",
			dataIndex: "name",
			filterDropdown: ({
				setSelectedKeys,
				selectedKeys,
				confirm,
				clearFilters,
			}) => {
				return (
					<>
						<Input
							autoFocus
							placeholder="Type text here"
							value={selectedKeys[0]}
							onChange={(e) => {
								setSelectedKeys(e.target.value ? [e.target.value] : []);
								confirm({ closeDropDown: false });
							}}
							onPressEnter={() => {
								confirm();
							}}
							onBlur={() => {
								confirm();
							}}
						></Input>
						<Button
							onClick={() => {
								confirm();
							}}
							type="primary"
						>
							Search
						</Button>
						<Button
							onClick={() => {
								clearFilters();
							}}
							type="primary"
							danger
						>
							Reset
						</Button>
					</>
				);
			},
			filterIcon: () => {
				return <SearchOutlined />;
			},
			onFilter: (value, record) => {
				console.log(value, record);
				return record.name.toLowerCase().includes(value.toLowerCase());
			},
		},
		{
			title: "Age",
			dataIndex: "age",
			filterDropdown: ({
				setSelectedKeys,
				selectedKeys,
				confirm,
				clearFilters,
			}) => {
				return (
					<>
						<Input
							autoFocus
							placeholder="Type text here"
							value={selectedKeys[0]}
							onChange={(e) => {
								setSelectedKeys(e.target.value ? [e.target.value] : []);
								confirm({ closeDropDown: false });
							}}
							onPressEnter={() => {
								confirm();
							}}
							onBlur={() => {
								confirm();
							}}
						></Input>
						<Button
							onClick={() => {
								confirm();
							}}
							type="primary"
						>
							Search
						</Button>
						<Button
							onClick={() => {
								clearFilters();
							}}
							type="primary"
							danger
						>
							Reset
						</Button>
					</>
				);
			},
			filterIcon: () => {
				return <SearchOutlined />;
			},
			onFilter: (value, record) => {
				console.log(value, record);
				return record.age === value;
			},
		},
		{
			title: "Address",
			dataIndex: "address",
			filterDropdown: ({
				setSelectedKeys,
				selectedKeys,
				confirm,
				clearFilters,
			}) => {
				return (
					<>
						<Input
							autoFocus
							placeholder="Type text here"
							value={selectedKeys[0]}
							onChange={(e) => {
								setSelectedKeys(e.target.value ? [e.target.value] : []);
								confirm({ closeDropDown: false });
							}}
							onPressEnter={() => {
								confirm();
							}}
							onBlur={() => {
								confirm();
							}}
						></Input>
						<Button
							onClick={() => {
								confirm();
							}}
							type="primary"
						>
							Search
						</Button>
						<Button
							onClick={() => {
								clearFilters();
							}}
							type="primary"
							danger
						>
							Reset
						</Button>
					</>
				);
			},
			filterIcon: () => {
				return <SearchOutlined />;
			},
			onFilter: (value, record) => {
				console.log(value, record);
				return record.address.toLowerCase().includes(value.toLowerCase());
			},
		},
	];

	const handleAddUser = () => {
		const user = {
			name: "Sam",
			age: "40",
			address: "Sydney",
		};

		setDataSource((prev) => {
			return [...prev, user];
		});
	};
	return (
		<div className="App">
			<Button onClick={handleAddUser}>Add</Button>
			<Table columns={columns} dataSource={dataSource}></Table>
		</div>
	);
};

export default App;
