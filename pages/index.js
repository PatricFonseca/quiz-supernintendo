import styled from "styled-components";
import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import db from "../db.json";
import QuizBackground from "../components/QuizBackground";
import QuizLogo from "../components/QuizLogo";
import Widget from "../components/Widget";
import Footer from "../components/Footer";
import GitHubCorner from "../components/GitHubCorner";
import Input from "../components/Input";
import Button from "../components/Button";
import QuizContainer from "../components/QuizContainer";

// const QuizContainer = styled.div`
// 	width: 100%;
// 	max-width: 350px;
// 	padding-top: 45px;
// 	margin: auto 10%;
// 	@media screen and (max-width: 500px) {
// 		margin: auto;
// 		padding: 15px;
// 	}
// `;

export default function Home() {
	const router = useRouter();
	const [name, setName] = React.useState("");

	return (
		<QuizBackground backgroundImage={db.bg}>
			<Head>
				<title>{db.title}</title>
			</Head>
			<QuizContainer>
				<QuizLogo />
				<Widget>
					<Widget.Header>
						<h1>{db.title}</h1>
					</Widget.Header>
					<Widget.Content>
						<form
							onSubmit={function (infosDoEvento) {
								infosDoEvento.preventDefault();
								router.push(`/quiz?name=${name}`);
							}}
						>
							<Input
								name="nomeDoUsuario"
								onChange={(infosDoEvento) =>
									setName(infosDoEvento.target.value)
								}
								placeholder="Diz ai seu nome"
								value={name}
							/>
							<Button type="submit" disabled={!name}>
								{`Jogar ${name}`}
							</Button>
						</form>
					</Widget.Content>
				</Widget>

				<Widget>
					<Widget.Content>
						<h1>Quizes da Galera</h1>

						<p>lorem ipsum dolor sit amet...</p>
					</Widget.Content>
				</Widget>

				<Footer />
			</QuizContainer>
			<GitHubCorner projectUrl="https://github.com/omariosouto" />
		</QuizBackground>
	);
}
