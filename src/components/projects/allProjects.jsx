import React, { useEffect, useState } from "react";

import Project from "./project";

import "./styles/allProjects.css";
import { ref, child, get } from "firebase/database";
import { database } from "../../fibaseConfig";

const AllProjects = () => {
	const [project, setProject] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			const dbRef = ref(database);
			try {
				const snapshot = await get(child(dbRef, `projects`));
				if (snapshot.exists()) {
					setProject(snapshot.val());
				} else {
					console.log("No data available");
				}
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);
	return (
		<div className="all-projects-container">
			{project?.length > 0 ? (
				project.map((project, index) => (
					<div className="all-projects-project" key={index}>
						<Project
							logo={project.logo}
							title={project.title}
							description={project.description}
							linkText={project.linkText}
							link={project.link}
							key={index}
						/>
					</div>
				))
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
};

export default AllProjects;
