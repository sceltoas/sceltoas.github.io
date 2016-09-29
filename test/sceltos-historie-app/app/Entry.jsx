import * as React from 'react';

export default class Entry extends React.Component {

	render() {
		let style = {
			image: {
				width: "100%",
				height: "100%",
				maxWidth: 500,
				maxHeight: 500
			},
			center: {
				textAlign: "center"
			},
			left: {
				padding: "1em",
			},
			right: {
				padding: "1em",
			}
		};

		let tmp = this.props.item.text.split(/(\@\w+)|(\#\w+)|(http[s]?\:\/\/[^\s]+)/ig).map((x, key) => {
			if (x && x.startsWith("#")) {
				return (<span key={key} className="green-color">{x}</span>);
			}
			if (x && x.startsWith("@")) {
				return (<span key={key} className="green-color">{x}</span>);
			}
			if (x && x.startsWith("http")) {
				return (<a key={key} href={x} className="sc-link">{x}</a>);
			}
			return x;
		});

		let content = (
			<div className="container">
				<div className="center">
					<img src={this.props.item.imageUrl} style={style.image}/>
				</div>
				<div className="center">
					<h5 className="">{tmp}</h5>
				</div>
				<div className="center">
					<p><img src="../../images/icons/Scelto–icon-twitter-footer.svg" width="40px"/>{this.props.item.medium}</p>
				</div>
			</div>);

		return (
			<div className="container row">
				{this.props.left ?
					<div className={["col", "s12", "m5","valign"].join(" ")} style={style.left}>{content}</div> : ''}
				<div className={["col", "s12", "m2","valign", this.props.right ? "offset-m5" : ""].join(" ")}>
					<h5 style={style.center}
					    className="circle center-line">{this.props.item.postedUtcTimestamp ? new Date(this.props.item.postedUtcTimestamp).getFullYear() : 'Lately'}</h5>
				</div>
				{this.props.right ?
					<div className={["col", "s12", "m5","valign"].join(" ")} style={style.right}>{content}</div> : ''}
			</div>
		);
	}
}

Entry.propTypes = {
	item: React.PropTypes.object.isRequired,
	left: React.PropTypes.bool,
	right: React.PropTypes.bool
};
