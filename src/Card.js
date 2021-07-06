import "./Card.css"

function Card({ data }) {
	return(
		<div className="card">
			<img src={data.img} className="charming" alt={data.name} />
			<h1>{data.name}</h1>
			<p className="title">{data.status}</p>
			<p>{data.nickname}</p>
			<p>{data.category}</p>
		</div>
	)
}

export default Card;