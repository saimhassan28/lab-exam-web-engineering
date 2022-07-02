const Footer = () => {
	const link = "#";
	const target = "_blank";

	return (
		<div className="container">
			Copyright © <small>{new Date().getFullYear()}</small> Saim. Hassan{" "}
			<a href={link} target={target}>
				SaimTech
			</a>
		</div>
	);
};

export default Footer;
